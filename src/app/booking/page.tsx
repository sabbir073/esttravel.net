import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { BookingForm } from "./BookingForm";
import {
  DollarSign,
  CreditCard,
  Headphones,
  Plane,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Cheap Flights to Nigeria & Africa | EST Travel Houston",
  description:
    "Book cheap flights to Nigeria from USA with EST Travel. Request a quote for affordable flight tickets to Lagos, Abuja, Port Harcourt, Kano & all African destinations. Best price guarantee.",
  keywords: [
    "book flights to nigeria",
    "cheap flights to nigeria from usa",
    "usa to nigeria flight ticket price",
    "flights to lagos nigeria",
    "cheap flights to abuja",
    "nigeria flight booking",
    "cheap flight tickets to nigeria",
  ],
  alternates: {
    canonical: `${siteConfig.url}/booking/`,
  },
  openGraph: {
    title: "Book Cheap Flights to Nigeria & Africa | EST Travel",
    description:
      "Book cheap flights to Nigeria from USA. Affordable flight tickets to Lagos, Abuja, Port Harcourt & all African destinations.",
    url: `${siteConfig.url}/booking/`,
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Book Cheap Flights to Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Cheap Flights to Nigeria & Africa | EST Travel",
    description:
      "Book cheap flights to Nigeria from USA. Affordable flight tickets to Lagos, Abuja & all African destinations.",
    images: [siteConfig.ogImage],
  },
};

const whyBookFeatures = [
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description:
      "We negotiate directly with airlines to secure the lowest fares. If you find a lower price elsewhere, we will match it or beat it.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Plans",
    description:
      "Spread the cost of your trip with our affordable installment options. Book now and pay over time with zero stress.",
  },
  {
    icon: Headphones,
    title: "Expert Travel Agents",
    description:
      "Our experienced team specializes in African travel. Get personalized service, insider tips, and support from booking to boarding.",
  },
];

const popularRoutes = [
  {
    from: "Houston",
    to: "Lagos",
    country: "Nigeria",
    slug: "/cheap-flights-lagos-nigeria/",
    image: "/images/destinations/lagos.jpg",
    duration: "13h 33m",
  },
  {
    from: "Houston",
    to: "Nairobi",
    country: "Kenya",
    slug: "/cheap-flights-to-nairobi/",
    image: "/images/destinations/nairobi.jpg",
    duration: "18h",
  },
  {
    from: "Houston",
    to: "Accra",
    country: "Ghana",
    slug: "/cheap-flights-to-accra/",
    image: "/images/destinations/accra.jpg",
    duration: "14h",
  },
  {
    from: "Houston",
    to: "Johannesburg",
    country: "South Africa",
    slug: "/cheap-flights-to-johannesburg/",
    image: "/images/destinations/accra.jpg",
    duration: "20h",
  },
];

export default function BookingPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Book Your Flight | Affordable Flights to Africa",
    description:
      "Book cheap flights to Africa with EST Travel. Request a quote for affordable airfares to Lagos, Nairobi, Accra, Johannesburg and more.",
    url: `${siteConfig.url}/booking/`,
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Book Your Flight",
          item: `${siteConfig.url}/booking/`,
        },
      ],
    },
    mainEntity: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
      priceRange: "$$",
      areaServed: {
        "@type": "Place",
        name: "Africa",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Book Your Flight"
        subtitle="Affordable flights to Africa and beyond"
        breadcrumbs={[{ label: "Book Your Flight" }]}
        backgroundImage="/images/services/air-ticket.jpg"
      />

      {/* Booking Form Section */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Request a Quote
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              Tell Us Where You Want to Go
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed">
              Fill out the form below and our travel experts will find you the
              best available fares. No obligation, no hidden fees.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              Why Book With Us
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed">
              With decades of experience in African travel, we deliver unmatched
              value and personalized service on every booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBookFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group bg-cream border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-5 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 sm:py-20 bg-dark relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(200,150,62,0.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Top Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Popular Routes
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Our most booked routes from Houston to Africa. Click any route to
              see destination details and start planning your trip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRoutes.map((route) => (
              <Link
                key={route.slug}
                href={route.slug}
                className="group block relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-800"
              >
                <Image
                  src={route.image}
                  alt={`Cheap flights from ${route.from} to ${route.to}, ${route.country}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                    <Plane className="w-3.5 h-3.5" />
                    {route.duration} flight
                  </div>
                  <div className="flex items-center gap-2 text-white mb-1">
                    <span className="text-lg font-heading font-bold">
                      {route.from}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span className="text-lg font-heading font-bold">
                      {route.to}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{route.country}</p>

                  {/* Hover reveal */}
                  <div className="flex items-center gap-2 mt-3 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Flights
                    <ArrowRight className="w-4 h-4" />
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
