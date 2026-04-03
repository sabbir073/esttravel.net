import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Edge-compatible auth config — NO bcryptjs, NO mysql2
// Only env-based auth works in middleware (Edge runtime)
// Full DB auth is handled in auth.ts (Node.js runtime)

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
      // Authorize is overridden in auth.ts for full functionality
      // This is just a placeholder so the provider config is valid
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
      const isAdminRoute = pathname.startsWith("/admin");
      const isLoginPage =
        pathname === "/admin/login" || pathname === "/admin/login/";
      const isAdminApi = pathname.startsWith("/api/admin");

      if (isLoginPage) {
        if (isLoggedIn) return Response.redirect(new URL("/admin", request.url));
        return true;
      }

      if (isAdminRoute || isAdminApi) {
        return isLoggedIn;
      }

      return true;
    },
  },
};
