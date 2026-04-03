import Link from "next/link";
import { getPostStats, getRecentPublishedPosts } from "@/lib/posts";
import { getAllCategories } from "@/lib/categories";
import type { BlogPost, Category } from "@/lib/types";
import {
  FileText,
  CheckCircle,
  Clock,
  FolderOpen,
  PlusCircle,
  ArrowRight,
} from "lucide-react";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  let stats = { total: 0, published: 0, drafts: 0 };
  let categories: Category[] = [];
  let recentPosts: BlogPost[] = [];
  try {
    stats = await getPostStats();
    categories = await getAllCategories();
    recentPosts = await getRecentPublishedPosts(5);
  } catch {
    // DB unavailable
  }

  const statCards = [
    {
      label: "Total Posts",
      value: stats.total,
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      label: "Published",
      value: stats.published,
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      label: "Drafts",
      value: stats.drafts,
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      label: "Categories",
      value: categories.length,
      icon: FolderOpen,
      color: "bg-purple-500",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-heading font-bold text-text">Dashboard</h1>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">{label}</p>
                <p className="text-3xl font-bold text-text mt-1">{value}</p>
              </div>
              <div className={`p-3 rounded-xl ${color} text-white`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-heading font-bold text-text">Recent Posts</h2>
          <Link
            href="/admin/posts"
            className="text-sm text-primary hover:text-primary-dark flex items-center gap-1"
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="divide-y divide-gray-100">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="px-6 py-4 flex items-center justify-between"
            >
              <div className="min-w-0 flex-1">
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="font-medium text-text hover:text-primary transition-colors truncate block"
                >
                  {post.title}
                </Link>
                <p className="text-text-light text-xs mt-0.5">
                  {post.published_at
                    ? format(new Date(post.published_at), "MMM d, yyyy")
                    : "Draft"}
                </p>
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  post.status === "published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {post.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
