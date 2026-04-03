import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { getPublishedPosts } from "@/lib/posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";

export const metadata: Metadata = {
  title: "Travel Blog - Nigeria & Africa Travel News, Flights & Visa Tips",
  description:
    "Explore the latest news about cheap flights to Nigeria, travel tickets, Nigerian visa tips, safari adventures & vacation in Africa. Expert guides from EST International Travel.",
  keywords: [
    "nigeria travel blog",
    "cheap flights to nigeria tips",
    "nigerian visa guide",
    "africa travel news",
    "flights to lagos tips",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/`,
  },
  openGraph: {
    title: "EST Travel Blog - Nigeria & Africa Travel, Flights & Visa News",
    description:
      "Explore the latest news about cheap flights to Nigeria, travel tickets, visa tips & vacation in Africa.",
    url: `${siteConfig.url}/blog/`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "EST Travel Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EST Travel Blog - Nigeria & Africa Travel News",
    description:
      "Latest news about cheap flights to Nigeria, travel tickets, visa tips & African vacations.",
    images: [siteConfig.ogImage],
  },
};

export const dynamic = "force-dynamic";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1"));
  const categorySlug = params.category;

  const { posts, totalPages } = await getPublishedPosts(
    page,
    12,
    categorySlug
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EST Travel Blog",
    description:
      "Explore the latest news about travel tickets, flights, safari and vacation in Africa.",
    url: `${siteConfig.url}/blog/`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${siteConfig.url}/blog/`,
        },
      ],
    },
  };

  const featuredPost = page === 1 && posts.length > 0 ? posts[0] : null;
  const gridPosts = page === 1 ? posts.slice(1) : posts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        title="Travel Tips & Latest News"
        subtitle="Explore the latest travel insights, visa updates, and expert tips for your next African adventure"
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Featured post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <BlogCard post={featuredPost} featured />
          </div>
        </section>
      )}

      {/* Blog grid */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-text mb-10">
            {page === 1 ? "All Articles" : `Articles — Page ${page}`}
          </h2>

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-center py-12">
              No articles found.
            </p>
          )}

          <BlogPagination
            currentPage={page}
            totalPages={totalPages}
            categorySlug={categorySlug}
          />
        </div>
      </section>
    </>
  );
}
