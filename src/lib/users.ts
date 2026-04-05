import { pool } from "./db";
import type { AdminUser } from "./types";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import bcrypt from "bcryptjs";

export async function getAllUsers(): Promise<AdminUser[]> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT id, username, display_name, email, role, created_at, updated_at
     FROM admin_users ORDER BY created_at ASC`
  );
  return rows as AdminUser[];
}

export async function getUserById(id: number): Promise<AdminUser | null> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT id, username, display_name, email, role, created_at, updated_at
     FROM admin_users WHERE id = ? LIMIT 1`,
    [id]
  );
  return rows.length > 0 ? (rows[0] as AdminUser) : null;
}

export async function createUser(
  username: string,
  password: string,
  displayName: string,
  email?: string,
  role: "admin" | "editor" = "editor"
): Promise<number> {
  const hash = await bcrypt.hash(password, 12);
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO admin_users (username, password_hash, display_name, email, role)
     VALUES (?, ?, ?, ?, ?)`,
    [username, hash, displayName, email || null, role]
  );
  return result.insertId;
}

export async function updateUser(
  id: number,
  data: {
    username?: string;
    display_name?: string;
    email?: string;
    role?: "admin" | "editor";
    password?: string;
  }
): Promise<void> {
  const fields: string[] = [];
  const values: (string | null)[] = [];

  if (data.username) {
    fields.push("username = ?");
    values.push(data.username);
  }
  if (data.display_name) {
    fields.push("display_name = ?");
    values.push(data.display_name);
  }
  if (data.email !== undefined) {
    fields.push("email = ?");
    values.push(data.email || null);
  }
  if (data.role) {
    fields.push("role = ?");
    values.push(data.role);
  }
  if (data.password) {
    const hash = await bcrypt.hash(data.password, 12);
    fields.push("password_hash = ?");
    values.push(hash);
  }

  if (fields.length === 0) return;

  values.push(String(id));
  await pool.execute(
    `UPDATE admin_users SET ${fields.join(", ")} WHERE id = ?`,
    values
  );
}

export async function deleteUser(id: number): Promise<void> {
  await pool.execute(`DELETE FROM admin_users WHERE id = ?`, [id]);
}

export async function getUserCount(): Promise<number> {
  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT COUNT(*) as count FROM admin_users`
  );
  return rows[0].count;
}
