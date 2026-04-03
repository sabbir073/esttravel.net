import { pool } from "./db";
import type { Category } from "./types";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import slugify from "slugify";

export async function getAllCategories(): Promise<Category[]> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT c.*, COUNT(pc.post_id) as post_count
     FROM categories c
     LEFT JOIN post_categories pc ON pc.category_id = c.id
     GROUP BY c.id
     ORDER BY c.name ASC`
  );
  return rows as Category[];
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT * FROM categories WHERE slug = ? LIMIT 1`,
    [slug]
  );
  return rows.length > 0 ? (rows[0] as Category) : null;
}

export async function createCategory(
  name: string,
  slug?: string,
  description?: string
): Promise<number> {
  const finalSlug = slug || slugify(name, { lower: true, strict: true });
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO categories (name, slug, description) VALUES (?, ?, ?)`,
    [name, finalSlug, description || null]
  );
  return result.insertId;
}

export async function updateCategory(
  id: number,
  name: string,
  slug?: string,
  description?: string
): Promise<void> {
  await pool.execute(
    `UPDATE categories SET name = ?, slug = ?, description = ? WHERE id = ?`,
    [name, slug || slugify(name, { lower: true, strict: true }), description || null, id]
  );
}

export async function deleteCategory(id: number): Promise<void> {
  await pool.execute(`DELETE FROM categories WHERE id = ?`, [id]);
}
