import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
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
      async authorize() {
        return null;
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
    async authorized({ auth, request }) {
      const pathname = request.nextUrl.pathname;
      const isLoggedIn = !!auth?.user;

      // Always allow auth API routes
      if (pathname.startsWith("/api/auth")) {
        return true;
      }

      // Login page: allow unauthenticated, redirect authenticated to dashboard
      if (pathname.startsWith("/admin/login")) {
        if (isLoggedIn) {
          return Response.redirect(new URL("/admin", request.nextUrl.origin));
        }
        return true;
      }

      // Admin API routes: require auth, return 401 if not
      if (pathname.startsWith("/api/admin")) {
        if (!isLoggedIn) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }
        return true;
      }

      // Admin pages: require auth (NextAuth will redirect to signIn page)
      if (pathname.startsWith("/admin")) {
        return isLoggedIn;
      }

      return true;
    },
  },
};
