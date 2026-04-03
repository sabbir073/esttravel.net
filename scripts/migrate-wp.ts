import mysql from "mysql2/promise";
import { Client } from "basic-ftp";
import { Readable } from "stream";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const WP_API = "https://www.esttravel.net/wp-json/wp/v2";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ─── FTP Upload ─────────────────────────────────────────

async function uploadImageToFtp(
  imageBuffer: Buffer,
  filename: string
): Promise<string> {
  const client = new Client();
  try {
    await client.access({
      host: process.env.FTP_HOST!,
      port: parseInt(process.env.FTP_PORT || "21"),
      user: process.env.FTP_USER!,
      password: process.env.FTP_PASSWORD!,
      secure: false,
    });

    const basePath = process.env.FTP_BASE_PATH!;
    const now = new Date();
    const yearMonth = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
    const remotePath = `${basePath}${yearMonth}`;

    await client.ensureDir(remotePath);

    const ext = filename.split(".").pop()?.toLowerCase() || "jpg";
    const safeName = filename
      .replace(/\.[^.]+$/, "")
      .replace(/[^a-z0-9]/gi, "-")
      .toLowerCase()
      .slice(0, 50);
    const uniqueFilename = `${Date.now()}-${safeName}.${ext}`;
    const fullRemotePath = `${remotePath}/${uniqueFilename}`;

    const stream = Readable.from(imageBuffer);
    await client.uploadFrom(stream, fullRemotePath);

    return `${process.env.FTP_BASE_URL}${yearMonth}/${uniqueFilename}`;
  } finally {
    client.close();
  }
}

// ─── Image Download ─────────────────────────────────────

async function downloadImage(url: string): Promise<Buffer | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        signal: AbortSignal.timeout(30000),
      });
      if (!response.ok) return null;
      const contentType = response.headers.get("content-type") || "";
      if (!contentType.startsWith("image/")) return null;
      const arrayBuffer = await response.arrayBuffer();
      return Buffer.from(arrayBuffer);
    } catch {
      if (attempt < 2) await delay(1000);
    }
  }
  return null;
}

function getFilenameFromUrl(url: string): string {
  const parts = url.split("/");
  return parts[parts.length - 1].split("?")[0] || "image.jpg";
}

// ─── Rewrite content images ─────────────────────────────

async function rewriteContentImages(html: string): Promise<string> {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const matches = [...html.matchAll(imgRegex)];
  let result = html;

  for (const match of matches) {
    const originalUrl = match[1];
    if (
      !originalUrl.includes("esttravel.net") &&
      !originalUrl.includes("wp-content")
    )
      continue;

    const buffer = await downloadImage(originalUrl);
    if (!buffer) {
      console.log(`    ⚠ Could not download content image: ${originalUrl}`);
      continue;
    }

    const filename = getFilenameFromUrl(originalUrl);
    const newUrl = await uploadImageToFtp(buffer, filename);
    result = result.replaceAll(originalUrl, newUrl);
    console.log(`    ✓ Content image migrated: ${filename}`);
    await delay(100);
  }

  return result;
}

// ─── WP API Fetcher with retry ──────────────────────────

async function fetchWpPage<T>(url: string): Promise<{data: T[], totalPages: number} | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      console.log(`  Fetching: ${url}${attempt > 0 ? ` (retry ${attempt})` : ""}`);
      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json",
        },
        signal: AbortSignal.timeout(30000),
      });

      if (!response.ok) {
        console.log(`  ⚠ HTTP ${response.status}`);
        return null;
      }

      const data = (await response.json()) as T[];
      const totalPages = parseInt(response.headers.get("x-wp-totalpages") || "1");
      return { data, totalPages };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      console.log(`  ⚠ Fetch error: ${msg}`);
      if (attempt < 2) {
        console.log(`  Retrying in 3s...`);
        await delay(3000);
      }
    }
  }
  return null;
}

async function fetchAllWpPages<T>(endpoint: string, perPage = 100): Promise<T[]> {
  const all: T[] = [];
  let page = 1;

  while (true) {
    const url = `${WP_API}${endpoint}${endpoint.includes("?") ? "&" : "?"}per_page=${perPage}&page=${page}`;
    const result = await fetchWpPage<T>(url);

    if (!result || !Array.isArray(result.data) || result.data.length === 0) break;

    all.push(...result.data);
    if (page >= result.totalPages) break;

    page++;
    await delay(500);
  }

  return all;
}

// ─── Fetch featured image URL from WP media endpoint ────

async function fetchFeaturedImageUrl(mediaId: number): Promise<{url: string, alt: string} | null> {
  if (!mediaId) return null;
  const result = await fetchWpPage<{source_url: string, alt_text: string}>(`${WP_API}/media/${mediaId}`);
  // Single media endpoint returns object, not array
  try {
    const response = await fetch(`${WP_API}/media/${mediaId}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json",
      },
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) return null;
    const media = await response.json() as {source_url: string, alt_text: string};
    return { url: media.source_url, alt: media.alt_text || "" };
  } catch {
    return null;
  }
}

// ─── Main Migration ─────────────────────────────────────

async function migrate() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || "3306"),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: "utf8mb4",
  });

  console.log("Connected to MySQL.\n");

  // ── 1. Migrate Categories ──
  console.log("=== Migrating Categories ===");
  interface WpCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
  }
  const wpCategories = await fetchAllWpPages<WpCategory>("/categories");
  const categoryMap = new Map<number, number>();

  for (const cat of wpCategories) {
    const [existing] = await connection.execute<mysql.RowDataPacket[]>(
      "SELECT id FROM categories WHERE wp_id = ?",
      [cat.id]
    );

    if (existing.length > 0) {
      categoryMap.set(cat.id, existing[0].id);
      continue;
    }

    const name = cat.name
      .replace(/&amp;/g, "&")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"');

    const [result] = await connection.execute<mysql.ResultSetHeader>(
      "INSERT INTO categories (wp_id, name, slug, description) VALUES (?, ?, ?, ?)",
      [cat.id, name, cat.slug, cat.description || null]
    );
    categoryMap.set(cat.id, result.insertId);
  }
  console.log(`  ✓ ${categoryMap.size} categories migrated\n`);

  // ── 2. Migrate Tags ──
  console.log("=== Migrating Tags ===");
  interface WpTag {
    id: number;
    name: string;
    slug: string;
  }
  const wpTags = await fetchAllWpPages<WpTag>("/tags");
  const tagMap = new Map<number, number>();

  for (const tag of wpTags) {
    const [existing] = await connection.execute<mysql.RowDataPacket[]>(
      "SELECT id FROM tags WHERE wp_id = ?",
      [tag.id]
    );

    if (existing.length > 0) {
      tagMap.set(tag.id, existing[0].id);
      continue;
    }

    const name = tag.name
      .replace(/&amp;/g, "&")
      .replace(/&#8217;/g, "'");

    const [result] = await connection.execute<mysql.ResultSetHeader>(
      "INSERT INTO tags (wp_id, name, slug) VALUES (?, ?, ?)",
      [tag.id, name, tag.slug]
    );
    tagMap.set(tag.id, result.insertId);
  }
  console.log(`  ✓ ${tagMap.size} tags migrated\n`);

  // ── 3. Migrate Posts (smaller batches, no _embed) ──
  console.log("=== Migrating Posts ===");
  interface WpPost {
    id: number;
    slug: string;
    date: string;
    status: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    categories: number[];
    tags: number[];
    featured_media: number;
    yoast_head_json?: {
      title?: string;
      description?: string;
      og_image?: Array<{ url: string }>;
    };
  }

  // Fetch posts in small batches of 10 (no _embed to avoid large responses)
  const wpPosts = await fetchAllWpPages<WpPost>("/posts", 10);
  console.log(`  Found ${wpPosts.length} posts to migrate\n`);

  let imported = 0;
  let skipped = 0;
  let imagesMigrated = 0;
  let errors = 0;

  for (const post of wpPosts) {
    // Check if already imported
    const [existing] = await connection.execute<mysql.RowDataPacket[]>(
      "SELECT id FROM posts WHERE wp_id = ?",
      [post.id]
    );

    if (existing.length > 0) {
      skipped++;
      continue;
    }

    try {
      // Decode HTML entities in title
      const title = post.title.rendered
        .replace(/&amp;/g, "&")
        .replace(/&#8217;/g, "'")
        .replace(/&#8220;/g, "\u201C")
        .replace(/&#8221;/g, "\u201D")
        .replace(/&#8211;/g, "\u2013")
        .replace(/&nbsp;/g, " ");

      // Strip HTML from excerpt
      const excerpt = post.excerpt.rendered
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&#8217;/g, "'")
        .replace(/&nbsp;/g, " ")
        .replace(/\n/g, " ")
        .trim();

      // Fetch featured image separately
      let featuredImage: string | null = null;
      let featuredImageAlt: string | null = null;

      if (post.featured_media) {
        const media = await fetchFeaturedImageUrl(post.featured_media);
        if (media?.url) {
          const buffer = await downloadImage(media.url);
          if (buffer) {
            const filename = getFilenameFromUrl(media.url);
            try {
              featuredImage = await uploadImageToFtp(buffer, filename);
              featuredImageAlt = media.alt || title;
              imagesMigrated++;
              console.log(`  ✓ Featured image: ${filename}`);
            } catch (ftpErr) {
              console.log(`  ⚠ FTP upload failed for: ${filename}`);
              // Store original WP URL as fallback
              featuredImage = media.url;
              featuredImageAlt = media.alt || title;
            }
          } else {
            console.log(`  ⚠ Could not download featured image for: ${post.slug}`);
          }
        }
        await delay(200);
      }

      // Rewrite content images
      let content = post.content.rendered;
      try {
        content = await rewriteContentImages(content);
      } catch {
        console.log(`  ⚠ Content image rewrite skipped for: ${post.slug}`);
      }

      // Extract Yoast SEO
      const metaTitle = post.yoast_head_json?.title || null;
      const metaDescription = post.yoast_head_json?.description || null;
      const ogImage = post.yoast_head_json?.og_image?.[0]?.url || null;

      // Map WP status
      const status = post.status === "publish" ? "published" : "draft";

      // Insert post
      const [result] = await connection.execute<mysql.ResultSetHeader>(
        `INSERT INTO posts (wp_id, title, slug, content, excerpt, featured_image, featured_image_alt, status, meta_title, meta_description, og_image, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          post.id,
          title,
          post.slug,
          content,
          excerpt || null,
          featuredImage,
          featuredImageAlt,
          status,
          metaTitle,
          metaDescription,
          ogImage,
          new Date(post.date),
        ]
      );

      const localPostId = result.insertId;

      // Insert category junctions
      for (const wpCatId of post.categories) {
        const localCatId = categoryMap.get(wpCatId);
        if (localCatId) {
          await connection.execute(
            "INSERT IGNORE INTO post_categories (post_id, category_id) VALUES (?, ?)",
            [localPostId, localCatId]
          );
        }
      }

      // Insert tag junctions
      for (const wpTagId of post.tags) {
        const localTagId = tagMap.get(wpTagId);
        if (localTagId) {
          await connection.execute(
            "INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)",
            [localPostId, localTagId]
          );
        }
      }

      imported++;
      console.log(
        `  [${imported}] ✓ ${title.slice(0, 60)}...`
      );
    } catch (err) {
      errors++;
      console.error(`  ✗ Error importing post ${post.slug}:`, err);
    }

    await delay(500);
  }

  await connection.end();

  console.log("\n=== Migration Complete ===");
  console.log(`  Posts imported: ${imported}`);
  console.log(`  Posts skipped (already exists): ${skipped}`);
  console.log(`  Images migrated to FTP: ${imagesMigrated}`);
  console.log(`  Errors: ${errors}`);
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
