/**
 * WordPress Blog Import Script for EST Travel
 *
 * Reads the exported JSON, creates categories/tags, downloads images,
 * uploads them to FTP, and inserts posts into the MySQL database.
 *
 * Usage:
 *   npx tsx scripts/import-wp-posts.ts est-blog-export-2026-04-16-151540.json
 */

import mysql from "mysql2/promise";
import { Client } from "basic-ftp";
import { Readable } from "stream";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import slugify from "slugify";

dotenv.config({ path: ".env" });

// ─── Types ──────────────────────────────────────────────

interface WPCategory {
  name: string;
  slug: string;
  description: string | null;
  post_count: number;
}

interface WPTag {
  name: string;
  slug: string;
}

interface WPPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  status: "published" | "draft";
  author_name: string;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  categories: { name: string; slug: string }[];
  tags: { name: string; slug: string }[];
  published_at: string | null;
  created_at: string;
  updated_at: string;
  content_images: string[];
  _wp_id: number;
}

interface ExportData {
  exported_at: string;
  site_url: string;
  total_posts: number;
  categories: WPCategory[];
  tags: WPTag[];
  posts: WPPost[];
}

// ─── Config ─────────────────────────────────────────────

const FTP_CONFIG = {
  host: process.env.FTP_HOST!,
  port: parseInt(process.env.FTP_PORT || "21"),
  user: process.env.FTP_USER!,
  password: process.env.FTP_PASSWORD!,
};

const FTP_BASE_PATH = process.env.FTP_BASE_PATH!; // /public_html/uploads/blog/
const FTP_BASE_URL = process.env.FTP_BASE_URL!; // https://file.esttravel.net/uploads/blog/

const DB_CONFIG = {
  host: process.env.MYSQL_HOST!,
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  user: process.env.MYSQL_USER!,
  password: process.env.MYSQL_PASSWORD!,
  database: process.env.MYSQL_DATABASE!,
  charset: "utf8mb4" as const,
};

// ─── Globals ────────────────────────────────────────────

let db: mysql.Connection;
let ftpClient: Client;
const imageCache = new Map<string, string>(); // old URL -> new URL
let ftpReconnectCount = 0;

// Stats
const stats = {
  categoriesCreated: 0,
  tagsCreated: 0,
  postsImported: 0,
  postsSkipped: 0,
  imagesDownloaded: 0,
  imagesFailed: 0,
};

// ─── FTP Helpers ────────────────────────────────────────

async function connectFtp(): Promise<void> {
  ftpClient = new Client();
  ftpClient.ftp.verbose = false;
  await ftpClient.access({
    host: FTP_CONFIG.host,
    port: FTP_CONFIG.port,
    user: FTP_CONFIG.user,
    password: FTP_CONFIG.password,
    secure: false,
  });
  console.log("  [FTP] Connected");
}

async function ensureFtpConnected(): Promise<void> {
  try {
    await ftpClient.pwd();
  } catch {
    console.log("  [FTP] Reconnecting...");
    ftpReconnectCount++;
    await connectFtp();
  }
}

async function uploadBufferToFtp(
  buffer: Buffer,
  filename: string,
  subfolder: string
): Promise<string> {
  await ensureFtpConnected();

  const remotePath = `${FTP_BASE_PATH}imported/${subfolder}`;
  await ftpClient.ensureDir(remotePath);

  const ext = path.extname(filename).toLowerCase() || ".jpg";
  const safeName = path
    .basename(filename, ext)
    .replace(/[^a-z0-9]/gi, "-")
    .toLowerCase()
    .slice(0, 60);
  const uniqueFilename = `${Date.now()}-${safeName}${ext}`;

  const fullRemotePath = `${remotePath}/${uniqueFilename}`;
  const stream = Readable.from(buffer);
  await ftpClient.uploadFrom(stream, fullRemotePath);

  return `${FTP_BASE_URL}imported/${subfolder}/${uniqueFilename}`;
}

// ─── Image Download ─────────────────────────────────────

async function downloadImage(url: string): Promise<Buffer | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "EST-Travel-Importer/1.0",
      },
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!response.ok) {
      console.log(`    [WARN] HTTP ${response.status} for ${url}`);
      return null;
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) {
      console.log(`    [WARN] Not an image (${contentType}): ${url}`);
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`    [WARN] Download failed: ${url} - ${msg}`);
    return null;
  }
}

async function migrateImage(
  url: string,
  subfolder: string
): Promise<string | null> {
  if (!url) return null;

  // Check cache first
  if (imageCache.has(url)) {
    return imageCache.get(url)!;
  }

  const buffer = await downloadImage(url);
  if (!buffer) {
    stats.imagesFailed++;
    return null;
  }

  try {
    const filename = path.basename(new URL(url).pathname) || "image.jpg";
    const newUrl = await uploadBufferToFtp(buffer, filename, subfolder);
    imageCache.set(url, newUrl);
    stats.imagesDownloaded++;
    return newUrl;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`    [WARN] FTP upload failed for ${url} - ${msg}`);
    stats.imagesFailed++;
    return null;
  }
}

// ─── Content Image Replacement ──────────────────────────

async function replaceContentImages(
  html: string,
  contentImages: string[]
): Promise<string> {
  let result = html;

  // Collect all image URLs from the HTML (may include ones not in content_images)
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const allUrls = new Set<string>(contentImages);
  let match: RegExpExecArray | null;
  while ((match = imgRegex.exec(html)) !== null) {
    allUrls.add(match[1]);
  }

  for (const oldUrl of allUrls) {
    // Skip data URIs and already-migrated URLs
    if (oldUrl.startsWith("data:") || oldUrl.includes(FTP_BASE_URL + "imported/")) {
      continue;
    }

    const newUrl = await migrateImage(oldUrl, "content");
    if (newUrl) {
      // Replace all occurrences of this URL in the content
      result = result.split(oldUrl).join(newUrl);
    }
  }

  return result;
}

// ─── Database Helpers ───────────────────────────────────

async function createCategoriesAndGetMap(
  categories: WPCategory[]
): Promise<Map<string, number>> {
  const slugToId = new Map<string, number>();

  for (const cat of categories) {
    // Skip empty/uncategorized
    if (!cat.slug || cat.slug === "uncategorized") continue;

    // Check if exists
    const [existing] = await db.execute<mysql.RowDataPacket[]>(
      "SELECT id FROM categories WHERE slug = ?",
      [cat.slug]
    );

    if (existing.length > 0) {
      slugToId.set(cat.slug, existing[0].id);
    } else {
      const [result] = await db.execute<mysql.ResultSetHeader>(
        "INSERT INTO categories (name, slug, description) VALUES (?, ?, ?)",
        [cat.name, cat.slug, cat.description || null]
      );
      slugToId.set(cat.slug, result.insertId);
      stats.categoriesCreated++;
    }
  }

  return slugToId;
}

async function createTagsAndGetMap(
  tags: WPTag[]
): Promise<Map<string, number>> {
  const slugToId = new Map<string, number>();

  for (const tag of tags) {
    if (!tag.slug) continue;

    const [existing] = await db.execute<mysql.RowDataPacket[]>(
      "SELECT id FROM tags WHERE slug = ?",
      [tag.slug]
    );

    if (existing.length > 0) {
      slugToId.set(tag.slug, existing[0].id);
    } else {
      const [result] = await db.execute<mysql.ResultSetHeader>(
        "INSERT INTO tags (name, slug) VALUES (?, ?)",
        [tag.name, tag.slug]
      );
      slugToId.set(tag.slug, result.insertId);
      stats.tagsCreated++;
    }
  }

  return slugToId;
}

function generateSlug(title: string, wpId: number): string {
  if (!title || !title.trim()) {
    return `post-${wpId}`;
  }
  return slugify(title, { lower: true, strict: true }) || `post-${wpId}`;
}

async function ensureUniqueSlug(slug: string): Promise<string> {
  let candidate = slug;
  let suffix = 1;

  while (true) {
    const [rows] = await db.execute<mysql.RowDataPacket[]>(
      "SELECT id FROM posts WHERE slug = ?",
      [candidate]
    );
    if (rows.length === 0) return candidate;
    candidate = `${slug}-${suffix}`;
    suffix++;
  }
}

// ─── Main Import ────────────────────────────────────────

async function importPost(
  post: WPPost,
  categoryMap: Map<string, number>,
  tagMap: Map<string, number>,
  index: number,
  total: number
): Promise<void> {
  const label = `[${index + 1}/${total}]`;

  // Generate slug if empty
  let slug = post.slug || generateSlug(post.title, post._wp_id);
  slug = await ensureUniqueSlug(slug);

  // Skip posts with no title and no content
  if (!post.title && !post.content) {
    console.log(`${label} SKIP (no title/content) WP#${post._wp_id}`);
    stats.postsSkipped++;
    return;
  }

  console.log(`${label} Importing: "${post.title.substring(0, 60)}..." (WP#${post._wp_id})`);

  // 1. Migrate featured image
  let featuredImage = post.featured_image;
  if (featuredImage) {
    console.log(`  Migrating featured image...`);
    const newUrl = await migrateImage(featuredImage, "featured");
    if (newUrl) {
      featuredImage = newUrl;
    }
    // If migration fails, keep original URL as fallback
  }

  // 2. Migrate OG image
  let ogImage = post.og_image;
  if (ogImage && ogImage !== post.featured_image) {
    console.log(`  Migrating OG image...`);
    const newUrl = await migrateImage(ogImage, "og");
    if (newUrl) {
      ogImage = newUrl;
    }
  } else if (ogImage && ogImage === post.featured_image && featuredImage) {
    // OG image is same as featured, reuse the migrated URL
    ogImage = featuredImage;
  }

  // 3. Migrate content images and replace URLs
  let content = post.content;
  if (post.content_images.length > 0 || content.includes("<img")) {
    console.log(`  Migrating content images...`);
    content = await replaceContentImages(content, post.content_images);
  }

  // 4. Resolve category IDs
  const categoryIds: number[] = [];
  for (const cat of post.categories) {
    if (cat.slug === "uncategorized") continue;
    const id = categoryMap.get(cat.slug);
    if (id) categoryIds.push(id);
  }

  // 5. Resolve tag IDs
  const tagIds: number[] = [];
  for (const tag of post.tags) {
    const id = tagMap.get(tag.slug);
    if (id) tagIds.push(id);
  }

  // 6. Insert post
  const [result] = await db.execute<mysql.ResultSetHeader>(
    `INSERT INTO posts
       (title, slug, content, excerpt, featured_image, featured_image_alt,
        status, meta_title, meta_description, og_image, author_name,
        published_at, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      post.title || "(Untitled)",
      slug,
      content,
      post.excerpt || null,
      featuredImage || null,
      post.featured_image_alt || null,
      post.status,
      post.meta_title || null,
      post.meta_description || null,
      ogImage || null,
      post.author_name || "EST Travel",
      post.published_at || null,
      post.created_at || new Date().toISOString(),
      post.updated_at || new Date().toISOString(),
    ]
  );

  const postId = result.insertId;

  // 7. Link categories
  for (const catId of categoryIds) {
    await db.execute(
      "INSERT IGNORE INTO post_categories (post_id, category_id) VALUES (?, ?)",
      [postId, catId]
    );
  }

  // 8. Link tags
  for (const tagId of tagIds) {
    await db.execute(
      "INSERT IGNORE INTO post_tags (post_id, tag_id) VALUES (?, ?)",
      [postId, tagId]
    );
  }

  stats.postsImported++;
  console.log(
    `  ✓ Imported as ID ${postId} | slug: ${slug} | cats: ${categoryIds.length} | tags: ${tagIds.length}`
  );
}

// ─── Entry Point ────────────────────────────────────────

async function main() {
  const jsonPath = process.argv[2];
  if (!jsonPath) {
    console.error("Usage: npx tsx scripts/import-wp-posts.ts <export.json>");
    process.exit(1);
  }

  const fullPath = path.resolve(jsonPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    process.exit(1);
  }

  console.log(`\n========================================`);
  console.log(`  EST Travel - WordPress Blog Importer`);
  console.log(`========================================\n`);

  // Load JSON
  console.log(`Loading export file: ${fullPath}`);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const data: ExportData = JSON.parse(raw);
  console.log(`  Posts: ${data.total_posts}`);
  console.log(`  Categories: ${data.categories.length}`);
  console.log(`  Tags: ${data.tags.length}\n`);

  // Connect to DB
  console.log("Connecting to database...");
  db = await mysql.createConnection(DB_CONFIG);
  console.log("  ✓ Connected\n");

  // Connect to FTP
  console.log("Connecting to FTP...");
  await connectFtp();
  console.log("");

  try {
    // Step 1: Categories
    console.log("─── Creating Categories ───");
    const categoryMap = await createCategoriesAndGetMap(data.categories);
    console.log(
      `  ✓ ${stats.categoriesCreated} new, ${categoryMap.size} total mapped\n`
    );

    // Step 2: Tags
    console.log("─── Creating Tags ───");
    const tagMap = await createTagsAndGetMap(data.tags);
    console.log(
      `  ✓ ${stats.tagsCreated} new, ${tagMap.size} total mapped\n`
    );

    // Step 3: Import posts
    console.log("─── Importing Posts ───\n");
    const total = data.posts.length;
    for (let i = 0; i < total; i++) {
      await importPost(data.posts[i], categoryMap, tagMap, i, total);
      console.log("");
    }

    // Summary
    console.log(`\n========================================`);
    console.log(`  Import Complete!`);
    console.log(`========================================`);
    console.log(`  Posts imported:     ${stats.postsImported}`);
    console.log(`  Posts skipped:      ${stats.postsSkipped}`);
    console.log(`  Categories created: ${stats.categoriesCreated}`);
    console.log(`  Tags created:       ${stats.tagsCreated}`);
    console.log(`  Images downloaded:  ${stats.imagesDownloaded}`);
    console.log(`  Images failed:      ${stats.imagesFailed}`);
    console.log(`  FTP reconnects:     ${ftpReconnectCount}`);
    console.log(`  Image cache size:   ${imageCache.size}`);
    console.log(`========================================\n`);
  } finally {
    ftpClient.close();
    await db.end();
  }
}

main().catch((err) => {
  console.error("\n[FATAL]", err);
  process.exit(1);
});
