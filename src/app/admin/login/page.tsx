import { redirect } from "next/navigation";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { LoginForm } from "@/components/admin/LoginForm";
import { auth } from "@/lib/auth";

export default async function AdminLoginPage() {
  const session = await auth();

  if (session) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={160}
              height={50}
              className="h-12 w-auto mx-auto mb-4"
            />
            <h1 className="text-2xl font-heading font-bold text-text">
              Admin Panel
            </h1>
            <p className="text-text-secondary text-sm mt-1">
              Sign in to manage your blog posts
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
