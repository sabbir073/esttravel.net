import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import {
  Hotel,
  Plane,
  Users,
  Map,
  Star,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hotel & Vacation Packages - Nigeria, Africa & Worldwide",
  description:
    "EST International Travel offers complete hotel and vacation packages — Nigeria hotels, African safari lodges, budget to luxury five-star resorts worldwide. Disney, Caribbean, and more.",
  keywords: [
    "nigeria hotel packages",
    "africa vacation packages",
    "hotel booking nigeria",
    "safari lodge packages",
    "travel packages to nigeria",
  ],
  alternates: {
    canonical: `${siteConfig.url}/hotel-packages/`,
  },
  openGraph: {
    title: "Hotel & Vacation Packages | EST International Travel",
    description:
      "Complete hotel and vacation packages — Nigeria, Africa & worldwide. Budget to luxury options.",
    url: `${siteConfig.url}/hotel-packages/`,
    images: [{ url: "/images/services/hotel.jpg", width: 1200, height: 630, alt: "Hotel & Vacation Packages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel & Vacation Packages | EST International Travel",
    description:
      "Complete hotel and vacation packages — Nigeria, Africa & worldwide.",
    images: ["/images/services/hotel.jpg"],
  },
};

const packages = [
  {
    title: "African Safari Adventures",
    description:
      "Experience the thrill of African wildlife up close with our curated safari vacation packages including flights, lodging, meals, and expert guides.",
    image: "/images/services/safari-package.jpg",
    href: "/safari-packages-html/",
  },
  {
    title: "Caribbean Beach Resorts",
    description:
      "Escape to paradise with all-inclusive Caribbean beach resort packages. Crystal-clear waters, white sand beaches, and world-class hospitality.",
    image: "/images/services/cruise.jpg",
    href: "/contacts/",
  },
  {
    title: "Disney Vacation Packages",
    description:
      "Create magical family memories with our Disney vacation packages. Theme park tickets, resort accommodations, and dining plans all bundled together.",
    image: "/images/services/hotel.jpg",
    href: "/contacts/",
  },
  {
    title: "Worldwide City Tours",
    description:
      "Explore the world's most exciting cities with our guided tour packages including flights, boutique hotels, guided excursions, and ground transportation.",
    image: "/images/hero/contact-hero.jpg",
    href: "/contacts/",
  },
];

const inclusions = [
  { icon: Plane, label: "Round-trip Flights" },
  { icon: Hotel, label: "Quality Accommodations" },
  { icon: Users, label: "Guided Tours" },
  { icon: Map, label: "Ground Transportation" },
  { icon: Star, label: "Curated Experiences" },
];

export default function HotelPackagesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hotel & Vacation Packages",
    provider: { "@type": "TravelAgency", name: siteConfig.name, url: siteConfig.url },
    description:
      "Complete hotel and vacation packages worldwide — from budget-friendly stays to luxury five-star resorts.",
    url: `${siteConfig.url}/hotel-packages/`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
      { "@type": "ListItem", position: 3, name: "Hotel & Packages", item: `${siteConfig.url}/hotel-packages/` },
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
        title="Hotel & Vacation Packages"
        subtitle="Complete travel solutions from budget-friendly stays to luxury five-star experiences worldwide"
        breadcrumbs={[
          { label: "Services", href: "/services/" },
          { label: "Hotel & Packages" },
        ]}
        backgroundImage="/images/services/hotel-bg.jpg"
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/services/hotel-packages.jpg"
                alt="Hotel and vacation packages by EST International Travel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Your One-Stop Travel Agency
              </span>
              <h2 className="text-3xl font-heading font-bold text-text mb-5">
                Complete Travel Solutions Beyond Just Air Tickets
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                EST International Travel is a full-service agency specializing
                in all travel fields, and hotels and vacation packages are no
                exception. We locate quality lodging across major international
                destinations and popular urban centers, offering discounted
                rates from budget-friendly options to luxury five-star
                establishments.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Family travelers often require comprehensive packages that
                combine flights, accommodations, guided tours, and ground
                transportation — particularly beneficial for resort visits and
                popular worldwide attractions. Let us handle every detail so
                you can focus on making memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {inclusions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-text">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Packages
            </span>
            <h2 className="text-3xl font-heading font-bold text-text">
              Explore Our Vacation Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <Link
                key={pkg.title}
                href={pkg.href}
                className="group block bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Do This? Let&apos;s Get to Work
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contact us to customize the perfect vacation package for your needs
            and budget. Our travel experts are ready to help.
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
              href="/contacts/"
              className="flex items-center gap-2 bg-dark text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-dark-lighter transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
