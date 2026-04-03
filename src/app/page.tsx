import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { DestinationsGrid } from "@/components/home/DestinationsGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { siteConfig } from "@/data/siteConfig";
import { getRecentPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title:
    "Book Cheap Flights to Nigeria 🇳🇬 and Africa | EST Travel Houston",
  description:
    "Book cheap flights to Nigeria from USA. Cheapest flight tickets to Lagos, Abuja & all Africa. EST Travel is Houston's #1 Nigerian travel agency — visa processing, safari packages & more. Call " +
    siteConfig.phoneDisplay,
  keywords: [
    "book flights to nigeria",
    "cheap flights to nigeria from usa",
    "usa to nigeria flight ticket price",
    "flight tickets to nigeria",
    "cheap flight tickets to nigeria",
    "cheapest ticket to nigeria",
    "nigeria ticket",
    "cheap nigeria flights",
    "flights to lagos nigeria",
    "flights to lagos",
    "cheap tickets to lagos nigeria",
    "cheapest flight to lagos nigeria",
    "flights to abuja nigeria",
    "cheap flights to abuja",
    "cheap flights to africa",
    "airline ticket to nigeria",
    "nigeria ticket booking",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Book Cheap Flights to Nigeria 🇳🇬 and Africa | EST Travel",
    description:
      "Book cheap flights to Nigeria from USA. Cheapest tickets to Lagos, Abuja & all of Africa. Houston's #1 Nigerian travel agency.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Book Cheap Flights to Nigeria and Africa - EST International Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Cheap Flights to Nigeria 🇳🇬 and Africa | EST Travel",
    description:
      "Book cheap flights to Nigeria from USA. Cheapest tickets to Lagos, Abuja & all of Africa. Houston's #1 Nigerian travel agency.",
    images: [siteConfig.ogImage],
  },
};

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const recentPosts = await getRecentPublishedPosts(3);
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Book Cheap Flights to Nigeria and Africa | EST Travel Houston",
    description:
      "Book cheap flights to Nigeria from USA. Cheapest flight tickets to Lagos, Abuja & all Africa. EST Travel is Houston's #1 Nigerian travel agency.",
    url: siteConfig.url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
    about: {
      "@type": "Thing",
      name: "Cheap flights to Nigeria and Africa",
    },
    significantLink: [
      `${siteConfig.url}/cheap-flights-lagos-nigeria/`,
      `${siteConfig.url}/cheap-flights-to-abuja/`,
      `${siteConfig.url}/nigerian-visa/`,
      `${siteConfig.url}/cheap-flights-to-africa/`,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <HeroSection />
      <DestinationsGrid />
      <AboutSection />
      <ServicesShowcase />
      <WhyChooseUs />
      <TestimonialsSection />
      <BlogPreview posts={recentPosts} />
      <CTABanner />
    </>
  );
}
