import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostsTable } from "@/components/admin/PostsTable";
import { PlusCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; status?: string; search?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const status = params.status;
  const search = params.search;

  let posts: import("@/lib/types").BlogPost[] = [];
  let total = 0;
  let totalPages = 0;
  try {
    const result = await getAllPosts(page, 50, status, search);
    posts = result.posts;
    total = result.total;
    totalPages = result.totalPages;
  } catch (err) {
    console.error("Failed to load posts:", err);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-text">Posts</h1>
          <p className="text-text-secondary text-sm mt-1">
            {total} total posts
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          New Post
        </Link>
      </div>

      <PostsTable posts={posts} />

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/admin/posts?page=${p}${status ? `&status=${status}` : ""}${search ? `&search=${search}` : ""}`}
              className={`px-3 py-1.5 rounded text-sm ${
                p === page
                  ? "bg-primary text-white"
                  : "bg-white border border-gray-200 text-text-secondary hover:border-primary"
              }`}
            >
              {p}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
