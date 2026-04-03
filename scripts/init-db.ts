import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function initDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || "3306"),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: "utf8mb4",
  });

  console.log("Connected to MySQL. Creating tables...");

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      wp_id INT UNSIGNED NULL,
      title VARCHAR(500) NOT NULL,
      slug VARCHAR(500) NOT NULL UNIQUE,
      content LONGTEXT NOT NULL,
      excerpt TEXT NULL,
      featured_image VARCHAR(1000) NULL,
      featured_image_alt VARCHAR(500) NULL,
      status ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
      meta_title VARCHAR(500) NULL,
      meta_description TEXT NULL,
      og_image VARCHAR(1000) NULL,
      canonical_url VARCHAR(500) NULL,
      author_name VARCHAR(200) DEFAULT 'EST Travel',
      published_at DATETIME NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_slug (slug),
      INDEX idx_status_published (status, published_at),
      INDEX idx_wp_id (wp_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
  console.log("  ✓ posts table created");

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS categories (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      wp_id INT UNSIGNED NULL,
      name VARCHAR(200) NOT NULL,
      slug VARCHAR(200) NOT NULL UNIQUE,
      description TEXT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_slug (slug)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
  console.log("  ✓ categories table created");

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS tags (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      wp_id INT UNSIGNED NULL,
      name VARCHAR(200) NOT NULL,
      slug VARCHAR(200) NOT NULL UNIQUE,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_slug (slug)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
  console.log("  ✓ tags table created");

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS post_categories (
      post_id INT UNSIGNED NOT NULL,
      category_id INT UNSIGNED NOT NULL,
      PRIMARY KEY (post_id, category_id),
      FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
  console.log("  ✓ post_categories table created");

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS post_tags (
      post_id INT UNSIGNED NOT NULL,
      tag_id INT UNSIGNED NOT NULL,
      PRIMARY KEY (post_id, tag_id),
      FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
      FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
  console.log("  ✓ post_tags table created");

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      display_name VARCHAR(200) NOT NULL,
      email VARCHAR(255) NULL,
      role ENUM('admin', 'editor') NOT NULL DEFAULT 'editor',
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
  console.log("  ✓ admin_users table created");

  await connection.end();
  console.log("\nAll tables created successfully!");
}

initDatabase().catch((err) => {
  console.error("Database init failed:", err);
  process.exit(1);
});
