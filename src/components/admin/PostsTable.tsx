"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Edit, Trash2, ExternalLink } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export function PostsTable({ posts: initialPosts }: { posts: BlogPost[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [deleting, setDeleting] = useState<number | null>(null);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    setDeleting(id);
    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
      router.refresh();
    }
    setDeleting(null);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="font-medium text-text hover:text-primary transition-colors line-clamp-1"
                  >
                    {post.title}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-text-secondary">
                    {post.categories[0]?.name || "—"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      post.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-text-secondary">
                  {post.published_at
                    ? format(new Date(post.published_at), "MMM d, yyyy")
                    : "—"}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {post.status === "published" && (
                      <a
                        href={`/blog/${post.slug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                        title="View"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      disabled={deleting === post.id}
                      className="p-1.5 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {posts.length === 0 && (
        <p className="text-center text-text-secondary py-12">
          No posts found.
        </p>
      )}
    </div>
  );
}
