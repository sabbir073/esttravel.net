import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { pool } from "./db";
import type { RowDataPacket } from "mysql2";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username as string;
        const password = credentials?.password as string;

        if (!username || !password) return null;

        // Check env-based admin first
        if (
          process.env.ADMIN_USERNAME &&
          process.env.ADMIN_PASSWORD &&
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "env-admin",
            name: "Admin",
            email: "admin@esttravel.net",
          };
        }

        // Check database
        try {
          const [rows] = await pool.execute<RowDataPacket[]>(
            "SELECT * FROM admin_users WHERE username = ? LIMIT 1",
            [username]
          );

          if (rows.length === 0) return null;

          const user = rows[0];
          const passwordMatch = await bcrypt.compare(
            password,
            user.password_hash
          );

          if (!passwordMatch) return null;

          return {
            id: String(user.id),
            name: user.display_name,
            email: user.email,
          };
        } catch {
          // If DB is not available, only env auth works
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
