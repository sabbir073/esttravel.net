import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { BlogContent } from "@/components/blog/BlogContent";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { Calendar, Tag, ChevronRight, Home, User } from "lucide-react";
import { format } from "date-fns";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    return { title: "Post Not Found" };
  }
  if (!post) return { title: "Post Not Found" };

  const title = post.meta_title || post.title;
  const description =
    post.meta_description ||
    post.excerpt ||
    post.content.replace(/<[^>]+>/g, "").slice(0, 160);
  const image = post.og_image || post.featured_image || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.published_at?.toISOString(),
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    return notFound();
  }
  if (!post) return notFound();

  let related: import("@/lib/types").BlogPost[] = [];
  try {
    const categoryIds = post.categories.map((c) => c.id);
    related = await getRelatedPosts(post.id, categoryIds, 3);
  } catch {
    // DB unavailable
  }

  const dateStr = post.published_at
    ? format(new Date(post.published_at), "MMMM d, yyyy")
    : "";
  const postUrl = `${siteConfig.url}/blog/${post.slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description:
      post.meta_description ||
      post.excerpt ||
      post.content.replace(/<[^>]+>/g, "").slice(0, 160),
    image: post.featured_image || siteConfig.ogImage,
    datePublished: post.published_at?.toISOString(),
    dateModified: post.updated_at.toISOString(),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    url: postUrl,
    mainEntityOfPage: postUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero image */}
      {post.featured_image && (
        <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src={post.featured_image}
            alt={post.featured_image_alt || post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-dark/40" />
        </section>
      )}

      {/* Article */}
      <article className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-light mb-8">
            <Link
              href="/"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/blog/"
              className="hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary line-clamp-1">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.categories.map((cat) => (
              <span
                key={cat.id}
                className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1"
              >
                <Tag className="w-3 h-3" />
                {cat.name}
              </span>
            ))}
            {dateStr && (
              <span className="text-text-light text-sm flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {dateStr}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-tight mb-8">
            {post.title}
          </h1>

          {/* Content */}
          <BlogContent html={post.content} />

          {/* Footer meta */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">
                    {post.author_name}
                  </p>
                  <p className="text-text-light text-xs">
                    {siteConfig.name}
                  </p>
                </div>
              </div>

              {/* Share */}
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-text-secondary">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-text-secondary text-xs px-3 py-1 rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts posts={related} />
    </>
  );
}
