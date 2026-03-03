import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/data/siteConfig";
import { Plane, ArrowRight, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cheap Flights to Nigeria & Africa from USA | Discounted Airline Tickets",
  description:
    "Book cheap flights to Nigeria and Africa from USA. EST Travel offers the cheapest flight tickets to Lagos, Abuja, Port Harcourt, Kano & 14+ African destinations. Unbeatable fares from Houston.",
  keywords: [
    "cheap flights to nigeria from usa",
    "book flights to nigeria",
    "cheap flights to africa",
    "flights to lagos nigeria",
    "flights to abuja nigeria",
    "cheap flight tickets to nigeria",
    "usa to nigeria flight ticket price",
    "cheapest flights to africa",
    "discounted airline tickets to africa",
  ],
  alternates: {
    canonical: `${siteConfig.url}/cheap-flights-to-africa/`,
  },
  openGraph: {
    title: "Cheap Flights to Nigeria & Africa | Discounted Airline Tickets",
    description:
      "Book cheap flights to Nigeria and Africa from USA. Cheapest flight tickets to Lagos, Abuja & all African destinations.",
    url: `${siteConfig.url}/cheap-flights-to-africa/`,
    images: [{ url: "/images/services/safari-package.jpg", width: 1200, height: 630, alt: "Cheap Flights to Nigeria and Africa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Flights to Nigeria & Africa from USA",
    description:
      "Book cheap flights to Nigeria and Africa. Cheapest flight tickets to Lagos, Abuja, Port Harcourt & 14+ destinations.",
    images: ["/images/services/safari-package.jpg"],
  },
};

// Nigeria first, then other regions
const regions = [
  { name: "Nigeria", key: "nigeria" as const },
  { name: "West Africa", key: "west-africa" as const },
  { name: "East Africa", key: "east-africa" as const },
  { name: "Southern Africa", key: "southern-africa" as const },
  { name: "Central Africa", key: "central-africa" as const },
  { name: "Northeast Africa", key: "northeast-africa" as const },
];

export default function CheapFlightsToAfricaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cheap Flights to Africa",
    description:
      "Travel to Africa without breaking your budget with EST International Travel.",
    url: `${siteConfig.url}/cheap-flights-to-africa/`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cheap Flights to Africa",
          item: `${siteConfig.url}/cheap-flights-to-africa/`,
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
        title="Cheap Flights to Nigeria & Africa"
        subtitle="Book cheap flights to Nigeria from USA — Lagos, Abuja, Port Harcourt, Kano & 14+ African destinations at unbeatable fares."
        breadcrumbs={[{ label: "Cheap Flights to Nigeria & Africa" }]}
        backgroundImage="/images/services/safari-package.jpg"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-text mb-6">
              Cheapest Flights to Nigeria &amp; Africa from USA
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Looking for cheap flights to Nigeria from USA? Buying a plane
              ticket is one of the most important purchases for your trip.
              Traveling during peak seasons can increase flight prices by 30% or
              more. At EST International Travel, we are experts in securing the
              cheapest flights to Nigeria — Lagos, Abuja, Port Harcourt, Kano
              — and all African destinations. With decades of experience and
              deep airline relationships, we save our clients hundreds of
              dollars on every flight ticket to Nigeria and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* All destinations by region */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-text mb-12 text-center">
            Cheap Flights to Nigeria &amp; All African Destinations
          </h2>

          {regions.map((region) => {
            const regionDests = region.key === "nigeria"
              ? destinations.filter((d) => d.country === "Nigeria")
              : region.key === "west-africa"
                ? destinations.filter((d) => d.region === "west-africa" && d.country !== "Nigeria")
                : destinations.filter((d) => d.region === region.key);
            if (regionDests.length === 0) return null;
            return (
              <div key={region.key} className="mb-12 last:mb-0">
                <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {region.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {regionDests.map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/${dest.slug}/`}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100"
                    >
                      <Image
                        src={dest.image}
                        alt={`Cheap flights to ${dest.city}, ${dest.country}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center gap-1.5 text-primary text-xs font-medium mb-1">
                          <Plane className="w-3 h-3" />
                          {dest.country}
                        </div>
                        <h4 className="text-lg font-heading font-bold text-white">
                          {dest.city}
                        </h4>
                        <p className="text-gray-300 text-xs mt-1">
                          {dest.tagline}
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          View Flights <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Book Cheap Flights to Nigeria?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contact us today for the cheapest flights to Nigeria and Africa.
            Our expert agents are ready to help you book the best discounted
            fares.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-xl font-semibold hover:bg-cream transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/booking/"
              className="flex items-center gap-2 bg-dark text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-dark-lighter transition-colors"
            >
              Book Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
