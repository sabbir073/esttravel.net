import { pool } from "./db";
import type {
  BlogPost,
  BlogPostFull,
  Category,
  Tag,
  CreatePostInput,
  UpdatePostInput,
} from "./types";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

// ─── Helpers ────────────────────────────────────────────

function mapPostRow(row: RowDataPacket): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    featured_image: row.featured_image,
    featured_image_alt: row.featured_image_alt,
    status: row.status,
    author_name: row.author_name,
    published_at: row.published_at ? new Date(row.published_at) : null,
    created_at: new Date(row.created_at),
    updated_at: new Date(row.updated_at),
    categories: [],
  };
}

async function getPostCategories(postId: number): Promise<Category[]> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT c.id, c.name, c.slug, c.description
     FROM categories c
     JOIN post_categories pc ON pc.category_id = c.id
     WHERE pc.post_id = ?`,
    [postId]
  );
  return rows as Category[];
}

async function getPostTags(postId: number): Promise<Tag[]> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT t.id, t.name, t.slug
     FROM tags t
     JOIN post_tags pt ON pt.tag_id = t.id
     WHERE pt.post_id = ?`,
    [postId]
  );
  return rows as Tag[];
}

const ALLOWED_JUNCTIONS: Record<string, string> = {
  post_categories: "category_id",
  post_tags: "tag_id",
};

async function syncJunction(
  table: string,
  postId: number,
  ids: number[],
  fkColumn: string
) {
  if (!ALLOWED_JUNCTIONS[table] || ALLOWED_JUNCTIONS[table] !== fkColumn) {
    throw new Error(`Invalid junction: ${table}.${fkColumn}`);
  }
  await pool.execute(`DELETE FROM ${table} WHERE post_id = ?`, [postId]);
  for (const id of ids) {
    await pool.execute(
      `INSERT IGNORE INTO ${table} (post_id, ${fkColumn}) VALUES (?, ?)`,
      [postId, id]
    );
  }
}

// ─── Public Queries ─────────────────────────────────────

export async function getPublishedPosts(
  page: number = 1,
  limit: number = 12,
  categorySlug?: string
): Promise<{ posts: BlogPost[]; totalPages: number; total: number }> {
  const offset = (page - 1) * limit;

  let countQuery = `SELECT COUNT(DISTINCT p.id) as total FROM posts p`;
  let dataQuery = `SELECT DISTINCT p.* FROM posts p`;
  const params: (string | number)[] = [];

  if (categorySlug) {
    const join = ` JOIN post_categories pc ON pc.post_id = p.id JOIN categories c ON c.id = pc.category_id`;
    countQuery += join + ` WHERE p.status = 'published' AND c.slug = ?`;
    dataQuery += join + ` WHERE p.status = 'published' AND c.slug = ?`;
    params.push(categorySlug);
  } else {
    countQuery += ` WHERE p.status = 'published'`;
    dataQuery += ` WHERE p.status = 'published'`;
  }

  dataQuery += ` ORDER BY p.published_at DESC LIMIT ? OFFSET ?`;

  const [countRows] = await pool.execute<RowDataPacket[]>(countQuery, params);
  const total = countRows[0].total;

  const [rows] = await pool.execute<RowDataPacket[]>(dataQuery, [
    ...params,
    limit,
    offset,
  ]);

  const posts: BlogPost[] = rows.map(mapPostRow);

  if (posts.length > 0) {
    const postIds = posts.map((p) => p.id);
    const placeholders = postIds.map(() => "?").join(",");
    const [catRows] = await pool.execute<RowDataPacket[]>(
      `SELECT pc.post_id, c.id, c.name, c.slug, c.description
       FROM categories c
       JOIN post_categories pc ON pc.category_id = c.id
       WHERE pc.post_id IN (${placeholders})`,
      postIds
    );
    const catMap = new Map<number, Category[]>();
    for (const row of catRows) {
      const cats = catMap.get(row.post_id) || [];
      cats.push({ id: row.id, name: row.name, slug: row.slug, description: row.description });
      catMap.set(row.post_id, cats);
    }
    for (const post of posts) {
      post.categories = catMap.get(post.id) || [];
    }
  }

  return { posts, totalPages: Math.ceil(total / limit), total };
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostFull | null> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT * FROM posts WHERE slug = ? AND status = 'published' LIMIT 1`,
    [slug]
  );

  if (rows.length === 0) return null;

  const row = rows[0];
  const categories = await getPostCategories(row.id);
  const tags = await getPostTags(row.id);

  return {
    ...mapPostRow(row),
    content: row.content,
    meta_title: row.meta_title,
    meta_description: row.meta_description,
    og_image: row.og_image,
    canonical_url: row.canonical_url,
    categories,
    tags,
  };
}

export async function getRecentPublishedPosts(
  limit: number = 3
): Promise<BlogPost[]> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT * FROM posts WHERE status = 'published' ORDER BY published_at DESC LIMIT ?`,
    [limit]
  );

  const posts: BlogPost[] = rows.map(mapPostRow);

  if (posts.length > 0) {
    const postIds = posts.map((p) => p.id);
    const placeholders = postIds.map(() => "?").join(",");
    const [catRows] = await pool.execute<RowDataPacket[]>(
      `SELECT pc.post_id, c.id, c.name, c.slug, c.description
       FROM categories c
       JOIN post_categories pc ON pc.category_id = c.id
       WHERE pc.post_id IN (${placeholders})`,
      postIds
    );
    const catMap = new Map<number, Category[]>();
    for (const row of catRows) {
      const cats = catMap.get(row.post_id) || [];
      cats.push({ id: row.id, name: row.name, slug: row.slug, description: row.description });
      catMap.set(row.post_id, cats);
    }
    for (const post of posts) {
      post.categories = catMap.get(post.id) || [];
    }
  }

  return posts;
}

export async function getRelatedPosts(
  postId: number,
  categoryIds: number[],
  limit: number = 3
): Promise<BlogPost[]> {
  if (categoryIds.length === 0) {
    return getRecentPublishedPosts(limit);
  }

  const placeholders = categoryIds.map(() => "?").join(",");
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT DISTINCT p.* FROM posts p
     JOIN post_categories pc ON pc.post_id = p.id
     WHERE p.status = 'published'
       AND p.id != ?
       AND pc.category_id IN (${placeholders})
     ORDER BY p.published_at DESC
     LIMIT ?`,
    [postId, ...categoryIds, limit]
  );

  if (rows.length < limit) {
    const existingIds = [postId, ...rows.map((r) => r.id)];
    const extraPlaceholders = existingIds.map(() => "?").join(",");
    const [extraRows] = await pool.execute<RowDataPacket[]>(
      `SELECT * FROM posts WHERE status = 'published' AND id NOT IN (${extraPlaceholders}) ORDER BY published_at DESC LIMIT ?`,
      [...existingIds, limit - rows.length]
    );
    rows.push(...extraRows);
  }

  const posts: BlogPost[] = rows.map(mapPostRow);

  if (posts.length > 0) {
    const postIds = posts.map((p) => p.id);
    const ph = postIds.map(() => "?").join(",");
    const [catRows] = await pool.execute<RowDataPacket[]>(
      `SELECT pc.post_id, c.id, c.name, c.slug, c.description
       FROM categories c
       JOIN post_categories pc ON pc.category_id = c.id
       WHERE pc.post_id IN (${ph})`,
      postIds
    );
    const catMap = new Map<number, Category[]>();
    for (const row of catRows) {
      const cats = catMap.get(row.post_id) || [];
      cats.push({ id: row.id, name: row.name, slug: row.slug, description: row.description });
      catMap.set(row.post_id, cats);
    }
    for (const post of posts) {
      post.categories = catMap.get(post.id) || [];
    }
  }

  return posts;
}

export async function getAllPublishedSlugs(): Promise<
  { slug: string; updated_at: Date }[]
> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT slug, updated_at FROM posts WHERE status = 'published' ORDER BY published_at DESC`
  );
  return rows.map((r) => ({
    slug: r.slug,
    updated_at: new Date(r.updated_at),
  }));
}

// ─── Admin Queries ──────────────────────────────────────

export async function getAllPosts(
  page: number = 1,
  limit: number = 20,
  status?: string,
  search?: string
): Promise<{ posts: BlogPost[]; total: number; totalPages: number }> {
  const offset = (page - 1) * limit;
  let where = "WHERE 1=1";
  const params: (string | number)[] = [];

  if (status && status !== "all") {
    where += " AND p.status = ?";
    params.push(status);
  }
  if (search) {
    where += " AND p.title LIKE ?";
    params.push(`%${search}%`);
  }

  const [countRows] = await pool.execute<RowDataPacket[]>(
    `SELECT COUNT(*) as total FROM posts p ${where}`,
    params
  );
  const total = countRows[0].total;

  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT p.* FROM posts p ${where} ORDER BY p.created_at DESC LIMIT ? OFFSET ?`,
    [...params, limit, offset]
  );

  const posts: BlogPost[] = rows.map(mapPostRow);

  // Batch-load categories for all posts in one query instead of N+1
  if (posts.length > 0) {
    const postIds = posts.map((p) => p.id);
    const placeholders = postIds.map(() => "?").join(",");
    const [catRows] = await pool.execute<RowDataPacket[]>(
      `SELECT pc.post_id, c.id, c.name, c.slug, c.description
       FROM categories c
       JOIN post_categories pc ON pc.category_id = c.id
       WHERE pc.post_id IN (${placeholders})`,
      postIds
    );
    const catMap = new Map<number, Category[]>();
    for (const row of catRows) {
      const cats = catMap.get(row.post_id) || [];
      cats.push({ id: row.id, name: row.name, slug: row.slug, description: row.description });
      catMap.set(row.post_id, cats);
    }
    for (const post of posts) {
      post.categories = catMap.get(post.id) || [];
    }
  }

  return { posts, total, totalPages: Math.ceil(total / limit) };
}

export async function getPostById(id: number): Promise<BlogPostFull | null> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT * FROM posts WHERE id = ? LIMIT 1`,
    [id]
  );

  if (rows.length === 0) return null;

  const row = rows[0];
  const categories = await getPostCategories(row.id);
  const tags = await getPostTags(row.id);

  return {
    ...mapPostRow(row),
    content: row.content,
    meta_title: row.meta_title,
    meta_description: row.meta_description,
    og_image: row.og_image,
    canonical_url: row.canonical_url,
    categories,
    tags,
  };
}

export async function createPost(data: CreatePostInput): Promise<number> {
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO posts (title, slug, content, excerpt, featured_image, featured_image_alt, status, meta_title, meta_description, og_image, author_name, published_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'EST Travel', ?)`,
    [
      data.title,
      data.slug,
      data.content,
      data.excerpt || null,
      data.featured_image || null,
      data.featured_image_alt || null,
      data.status,
      data.meta_title || null,
      data.meta_description || null,
      data.og_image || null,
      data.published_at || (data.status === "published" ? new Date() : null),
    ]
  );

  const postId = result.insertId;
  await syncJunction("post_categories", postId, data.category_ids, "category_id");
  await syncJunction("post_tags", postId, data.tag_ids, "tag_id");

  return postId;
}

export async function updatePost(
  id: number,
  data: UpdatePostInput
): Promise<void> {
  const fields: string[] = [];
  const values: (string | number | Date | null)[] = [];

  if (data.title !== undefined) { fields.push("title = ?"); values.push(data.title); }
  if (data.slug !== undefined) { fields.push("slug = ?"); values.push(data.slug); }
  if (data.content !== undefined) { fields.push("content = ?"); values.push(data.content); }
  if (data.excerpt !== undefined) { fields.push("excerpt = ?"); values.push(data.excerpt || null); }
  if (data.featured_image !== undefined) { fields.push("featured_image = ?"); values.push(data.featured_image || null); }
  if (data.featured_image_alt !== undefined) { fields.push("featured_image_alt = ?"); values.push(data.featured_image_alt || null); }
  if (data.status !== undefined) { fields.push("status = ?"); values.push(data.status); }
  if (data.meta_title !== undefined) { fields.push("meta_title = ?"); values.push(data.meta_title || null); }
  if (data.meta_description !== undefined) { fields.push("meta_description = ?"); values.push(data.meta_description || null); }
  if (data.og_image !== undefined) { fields.push("og_image = ?"); values.push(data.og_image || null); }
  if (data.published_at !== undefined) { fields.push("published_at = ?"); values.push(data.published_at || null); }

  if (fields.length > 0) {
    values.push(id);
    await pool.execute(
      `UPDATE posts SET ${fields.join(", ")} WHERE id = ?`,
      values
    );
  }

  if (data.category_ids !== undefined) {
    await syncJunction("post_categories", id, data.category_ids, "category_id");
  }
  if (data.tag_ids !== undefined) {
    await syncJunction("post_tags", id, data.tag_ids, "tag_id");
  }
}

export async function deletePost(id: number): Promise<void> {
  await pool.execute(`DELETE FROM posts WHERE id = ?`, [id]);
}

export async function getPostStats(): Promise<{
  total: number;
  published: number;
  drafts: number;
}> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT
       COUNT(*) as total,
       SUM(CASE WHEN status = 'published' THEN 1 ELSE 0 END) as published,
       SUM(CASE WHEN status = 'draft' THEN 1 ELSE 0 END) as drafts
     FROM posts`
  );
  return {
    total: rows[0].total || 0,
    published: rows[0].published || 0,
    drafts: rows[0].drafts || 0,
  };
}
