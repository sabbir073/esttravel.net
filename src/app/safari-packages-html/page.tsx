import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import {
  Camera,
  Utensils,
  Hotel,
  Users,
  Map,
  Bus,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "African Safari Packages - Best Safari Adventure Packages from Houston",
  description:
    "Your safari adventure starts with EST Int'l Travel. Explore Kenya's Maasai Mara, South Africa, Zimbabwe, and Tanzania with all-inclusive safari packages including guides, meals, and accommodation.",
  keywords: [
    "african safari packages",
    "safari packages from houston",
    "kenya safari tours",
    "south africa safari",
    "est travel safari",
  ],
  alternates: {
    canonical: `${siteConfig.url}/safari-packages-html/`,
  },
  openGraph: {
    title: "African Safari Packages | EST International Travel Houston",
    description:
      "All-inclusive African safari adventure packages to Kenya, South Africa, Zimbabwe, and Tanzania.",
    url: `${siteConfig.url}/safari-packages-html/`,
    images: [{ url: "/images/services/safari-package.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "African Safari Packages | EST International Travel",
    description:
      "All-inclusive African safari adventure packages to Kenya, South Africa, Zimbabwe, and Tanzania.",
  },
};

const safariDestinations = [
  {
    country: "Kenya",
    highlights: [
      "Maasai Mara Game Reserve — guaranteed lion sightings",
      "Tsavo National Park",
      "Amboseli National Park",
      "Nairobi National Park",
      "Lake Nakuru",
      "Meru National Park",
    ],
  },
  {
    country: "South Africa",
    highlights: [
      "Kruger National Park",
      "Table Mountain & Cape Town",
      "Garden Route",
      "Addo Elephant National Park",
    ],
  },
  {
    country: "Tanzania",
    highlights: [
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Mount Kilimanjaro",
      "Zanzibar Island",
    ],
  },
  {
    country: "Zimbabwe",
    highlights: [
      "Victoria Falls",
      "Hwange National Park",
      "Mana Pools",
      "Great Zimbabwe Ruins",
    ],
  },
];

const inclusions = [
  { icon: Camera, label: "Sightseeing & Game Drives" },
  { icon: Bus, label: "Air-conditioned Transportation" },
  { icon: Utensils, label: "Meals & Refreshments" },
  { icon: Hotel, label: "Quality Accommodation" },
  { icon: Users, label: "Tour Directors & Local Guides" },
  { icon: Map, label: "Curated Itineraries" },
];

export default function SafariPackagesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "African Safari Packages",
    description:
      "All-inclusive African safari adventure packages to Kenya, South Africa, Zimbabwe, and Tanzania.",
    url: `${siteConfig.url}/safari-packages-html/`,
    provider: { "@type": "TravelAgency", name: siteConfig.name, url: siteConfig.url },
    touristType: "Safari Enthusiasts",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
      { "@type": "ListItem", position: 3, name: "Safari Packages", item: `${siteConfig.url}/safari-packages-html/` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        title="African Safari Adventures"
        subtitle="Your Safari adventure starts with the first call to EST Int'l Travel — where Safari is just the name of the game"
        breadcrumbs={[
          { label: "Services", href: "/services/" },
          { label: "Safari Packages" },
        ]}
        backgroundImage="/images/services/safari-package.jpg"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Unforgettable Experiences
              </span>
              <h2 className="text-3xl font-heading font-bold text-text mb-5">
                Best Safari Adventure Packages Across Africa
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Your Safari adventure starts with the first call to EST
                Int&apos;l Travel, where Safari is just the name of the game.
                We offer thrilling jungle experiences throughout Africa — from
                the iconic Maasai Mara in Kenya to the breathtaking Victoria
                Falls in Zimbabwe.
              </p>
              <p className="text-text-secondary leading-relaxed">
                We just request our customers to hold on tight and get ready for
                going on the best African adventure trip. Our packages are
                designed to deliver maximum value with private deluxe tours,
                group discounts, and air-conditioned motor coaches and
                minibuses.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/services/safari-package.jpg"
                alt="African Safari adventure packages"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h3 className="text-center font-heading font-bold text-text text-xl mb-8">
            What&apos;s Included in Every Safari Package
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {inclusions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center bg-white rounded-xl p-4"
                >
                  <div className="p-3 bg-primary/10 rounded-xl mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safari destinations */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Safari Destinations
            </span>
            <h2 className="text-3xl font-heading font-bold text-text">
              Explore Africa&apos;s Greatest Safari Destinations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safariDestinations.map((dest) => (
              <div
                key={dest.country}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {dest.country}
                </h3>
                <ul className="space-y-3">
                  {dest.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-text-secondary"
                    >
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group discounts */}
      <section className="py-16 bg-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Group Discounts & Private Tours Available
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you&apos;re planning a family safari, corporate retreat, or
            a group adventure — we offer group discounts and private deluxe
            tours tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contacts/"
              className="flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
