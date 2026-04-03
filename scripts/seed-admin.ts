import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function seedAdmin() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    console.error("ADMIN_USERNAME and ADMIN_PASSWORD must be set in .env.local");
    process.exit(1);
  }

  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || "3306"),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: "utf8mb4",
  });

  // Check if admin already exists
  const [existing] = await connection.execute<mysql.RowDataPacket[]>(
    "SELECT id FROM admin_users WHERE username = ?",
    [username]
  );

  if (existing.length > 0) {
    console.log(`Admin user "${username}" already exists. Updating password...`);
    const hash = await bcrypt.hash(password, 12);
    await connection.execute(
      "UPDATE admin_users SET password_hash = ? WHERE username = ?",
      [hash, username]
    );
    console.log("✓ Password updated.");
  } else {
    const hash = await bcrypt.hash(password, 12);
    await connection.execute(
      "INSERT INTO admin_users (username, password_hash, display_name, role) VALUES (?, ?, ?, 'admin')",
      [username, hash, "Admin"]
    );
    console.log(`✓ Admin user "${username}" created successfully.`);
  }

  await connection.end();
}

seedAdmin().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
