import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import type { BlogPost } from "@/lib/types";

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const dateStr = post.published_at
    ? format(new Date(post.published_at), "MMMM yyyy")
    : "";
  const category = post.categories[0]?.name || "Blog";

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}/`}
        className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
          {post.featured_image ? (
            <Image
              src={post.featured_image}
              alt={post.featured_image_alt || post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
            {dateStr && (
              <span className="text-text-light text-sm flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {dateStr}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-text-secondary mt-3 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center gap-2 mt-6 text-primary font-semibold">
            Read Full Article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {post.featured_image ? (
          <Image
            src={post.featured_image}
            alt={post.featured_image_alt || post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-text-light text-xs mb-3">
          <Calendar className="w-3.5 h-3.5" />
          {dateStr}
        </div>
        <h3 className="font-heading font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-text-secondary text-sm mt-2 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm">
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
