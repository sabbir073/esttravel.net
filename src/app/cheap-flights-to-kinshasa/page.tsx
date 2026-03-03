import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationPageContent } from "@/components/destinations/DestinationPageContent";
import { getDestinationBySlug } from "@/data/destinations";
import { siteConfig } from "@/data/siteConfig";

const dest = getDestinationBySlug("cheap-flights-to-kinshasa");

export const metadata: Metadata = dest
  ? {
      title: dest.metaTitle,
      description: dest.metaDescription,
      keywords: dest.keywords || [],
      alternates: {
        canonical: `${siteConfig.url}/${dest.slug}/`,
      },
      openGraph: {
        title: dest.metaTitle,
        description: dest.metaDescription,
        url: `${siteConfig.url}/${dest.slug}/`,
        images: [
          {
            url: dest.image,
            width: 1200,
            height: 630,
            alt: `Cheap flights to ${dest.city}, ${dest.country}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: dest.metaTitle,
        description: dest.metaDescription,
        images: [dest.image],
      },
    }
  : {};

export default function Page() {
  if (!dest) return notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: dest.metaTitle,
    description: dest.metaDescription,
    url: `${siteConfig.url}/${dest.slug}/`,
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
          name: "Destinations",
          item: `${siteConfig.url}/cheap-flights-to-africa/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `Cheap Flights to ${dest.city}`,
          item: `${siteConfig.url}/${dest.slug}/`,
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
      <DestinationPageContent dest={dest} />
    </>
  );
}
