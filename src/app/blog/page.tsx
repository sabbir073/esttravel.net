import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { Calendar, ArrowRight, Tag } from "lucide-react";

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
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "EST Travel Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EST Travel Blog - Nigeria & Africa Travel News",
    description:
      "Latest news about cheap flights to Nigeria, travel tickets, visa tips & African vacations.",
    images: [siteConfig.ogImage],
  },
};

const blogPosts = [
  {
    title:
      "EST Int'l Travel Agency: Houston's No. 1 Full-Service Travel Partner—and Your Trusted Source for Nigerian Visa Processing",
    slug: "est-intl-travel-agency-houstons-no-1-full-service-travel-partner-and-your-trusted-source-for-nigerian-visa-processing",
    image: "/images/blog/blog-1.jpg",
    category: "Nigerian Visa Travel Agency",
    date: "December 2025",
    excerpt:
      "Discover why EST International Travel is Houston's top choice for full-service travel and Nigerian visa processing. Our decades of experience and dedicated team ensure a seamless journey from booking to boarding.",
  },
  {
    title:
      "Why Getting Help from EST Int'l Travel Can Make Your Nigerian Visa Process Stress-Free",
    slug: "why-getting-help-from-est-intl-travel-can-make-your-nigerian-visa-process-stress-free",
    image: "/images/blog/blog-2.png",
    category: "Visa Services",
    date: "December 2025",
    excerpt:
      "Navigating the Nigerian visa application can be overwhelming. Learn how EST International Travel's expert visa processing team simplifies every step, saving you time and eliminating stress.",
  },
  {
    title:
      "Finding Your Gateway to Africa: Navigating Travel with Houston's Full-Service Agencies",
    slug: "finding-your-gateway-to-africa-navigating-travel-with-houstons-full-service-agencies",
    image: "/images/blog/blog-3.jpg",
    categories: ["Reputable Travel Agency", "Travel Agencies"],
    category: "Travel Agency",
    date: "January 2024",
    excerpt:
      "Houston is home to some of the best African travel agencies in the US. Explore how full-service agencies like EST International Travel connect you with affordable flights, visa processing, and curated travel packages.",
  },
  {
    title:
      "Navigating the World of Travel Agencies: Finding Reputable Options for Your Next Trip",
    slug: "navigating-the-world-of-travel-agencies-finding-reputable-options-for-your-next-trip",
    image: "/images/blog/blog-4.png",
    category: "Travel Agency",
    date: "February 2024",
    excerpt:
      "Not all travel agencies are created equal. Learn what to look for in a reputable travel agency and why EST International Travel stands out as a trusted partner for African travel.",
  },
  {
    title:
      "Travel Insurance and More: Navigating the World with EST International Travel",
    slug: "travel-insurance-and-more-navigating-the-world-with-est-international-travel",
    image: "/images/blog/blog-4.png",
    category: "Travel Insurance",
    date: "February 2024",
    excerpt:
      "Travel insurance is more than just a safety net — it's peace of mind. Discover how EST International Travel partners with TravelSafe Insurance to keep you protected on every journey.",
  },
  {
    title:
      "Solo Traveling to Nigeria: How to Find the Best Cheap Flight Fares",
    slug: "solo-traveling-to-nigeria-how-to-find-the-best-cheap-flight-fares",
    image: "/images/destinations/kano.jpg",
    category: "Travel Agency",
    date: "July 2021",
    excerpt:
      "Planning a solo trip to Nigeria? Discover insider tips for finding the cheapest flight fares, the best time to book, and how EST International Travel can help you save hundreds on your journey.",
  },
];

export default function BlogPage() {
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link
            href={`/${blogPosts[0].slug}/`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {blogPosts[0].category}
                </span>
                <span className="text-text-light text-sm flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {blogPosts[0].date}
                </span>
              </div>
              <h2 className="text-2xl font-heading font-bold text-text group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-text-secondary mt-3 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-2 mt-6 text-primary font-semibold">
                Read Full Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-text mb-10">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}/`}
                className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-text-light text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h3 className="font-heading font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
