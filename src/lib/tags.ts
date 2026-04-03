import { pool } from "./db";
import type { Tag } from "./types";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import slugify from "slugify";

export async function getAllTags(): Promise<Tag[]> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT * FROM tags ORDER BY name ASC`
  );
  return rows as Tag[];
}

export async function createTag(name: string, slug?: string): Promise<number> {
  const finalSlug = slug || slugify(name, { lower: true, strict: true });
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO tags (name, slug) VALUES (?, ?)`,
    [name, finalSlug]
  );
  return result.insertId;
}

export async function updateTag(
  id: number,
  name: string,
  slug?: string
): Promise<void> {
  await pool.execute(`UPDATE tags SET name = ?, slug = ? WHERE id = ?`, [
    name,
    slug || slugify(name, { lower: true, strict: true }),
    id,
  ]);
}

export async function deleteTag(id: number): Promise<void> {
  await pool.execute(`DELETE FROM tags WHERE id = ?`, [id]);
}
