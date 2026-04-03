import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import {
  Phone,
  ArrowRight,
  DollarSign,
  RefreshCw,
  Crown,
  Lightbulb,
  MapPin,
  Briefcase,
  Users,
  Tag,
  Plane,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cheap Flights to Central America | EST Int'l Travel",
  description:
    "Find the absolute cheapest flight to Central America. We compare top travel companies and cheap airlines to lock in the best airfare deals. Book today!",
  keywords: [
    "cheap flights to central america",
    "cheap flights to mexico",
    "flights to cancun",
    "flights to cancun mexico",
    "flights to tulum",
    "flights to tulum mexico",
    "flights to mexico city",
    "cheap flights to mexico city",
    "flights to puerto vallarta",
    "cheap flights to puerto vallarta",
    "flights to cabo san lucas",
    "cheap airline flights",
    "cheap round trip flights",
    "cheap one way flights",
    "best flight deals",
    "cheap international flights",
    "best airfare deals",
    "flight to mexico",
    "tickets to mexico",
    "cheap fly tickets",
    "business class deals",
    "cheap business class tickets",
    "travel agency near me",
    "best website to book flights",
  ],
  alternates: {
    canonical: `${siteConfig.url}/cheap-flights-to-central-america/`,
  },
  openGraph: {
    title: "Cheap Flights to Central America & Mexico | EST Int'l Travel",
    description:
      "Find the absolute cheapest flight to Central America. We compare top travel companies and cheap airlines to lock in the best airfare deals. Book today!",
    url: `${siteConfig.url}/cheap-flights-to-central-america/`,
    images: [
      {
        url: "/images/destinations/central-america.png",
        width: 1408,
        height: 768,
        alt: "Cheap Flights to Central America & Mexico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Flights to Central America & Mexico | EST Int'l Travel",
    description:
      "Find the absolute cheapest flight to Central America. We compare top travel companies and cheap airlines to lock in the best airfare deals. Book today!",
    images: ["/images/destinations/central-america.png"],
  },
};

const whyChooseUs = [
  {
    icon: DollarSign,
    title: "The Best Bargains",
    description:
      "We aggregate data to bring you the best flight deals, cheap tickets deal options, and best airfare deals on the web.",
  },
  {
    icon: RefreshCw,
    title: "Flight Flexibility",
    description:
      "Looking for cheap round trip flights or flexible cheap one way flights? We have you covered with options that fit your schedule.",
  },
  {
    icon: Crown,
    title: "Premium Travel For Less",
    description:
      "Looking to upgrade? Ask us about our business class deals, cheap business class tickets, discounted business class flights, or cheap first class flights.",
  },
];

const mexicoRoutes = [
  {
    city: "Cancun & Tulum",
    description:
      "Beach paradise with ancient Mayan ruins. Book flights to Cancun Mexico and flights to Tulum for the ultimate Caribbean getaway.",
  },
  {
    city: "Mexico City",
    description:
      "Cultural escapes with world-class museums, cuisine, and architecture. Get specialized cheap flights to Mexico City rates.",
  },
  {
    city: "Puerto Vallarta",
    description:
      "Pacific paradise with stunning sunsets and vibrant nightlife. Score awesome cheap flights to Puerto Vallarta deals.",
  },
  {
    city: "Cabo San Lucas",
    description:
      "Where the desert meets the sea. Enjoy luxury resorts, deep-sea fishing, and breathtaking landscapes.",
  },
];

const specializedTravel = [
  {
    icon: Briefcase,
    title: "Corporate & Business",
    description:
      "We function among the top corporate travel companies and corporate travel agencies. Let our skilled business travel agents handle your team's logistics.",
  },
  {
    icon: Users,
    title: "Group & Solo Travel",
    description:
      "From single travel groups to massive family reunions managed by expert group travel companies, we streamline the process.",
  },
  {
    icon: Tag,
    title: "Everyday Discounts",
    description:
      "We find incredible student discount flights, cheap domestic flights, and cheap international flights across major carriers like United Airlines and Delta.",
  },
];

const expertTips = [
  {
    number: 1,
    title: "Timing is Everything",
    description:
      "While the best day to buy airline tickets is always a moving target, searching for the cheapest day to book flights usually points to mid-week departures.",
  },
  {
    number: 2,
    title: "Be Open-Minded",
    description:
      "If you are feeling adventurous, use our tool to search for cheap flights to anywhere and let the savings guide your next destination!",
  },
  {
    number: 3,
    title: "Trust the Pros",
    description:
      "Don't waste hours on multiple flight search sites. Let us handle the legwork and find you the absolute best deals available.",
  },
];

export default function CheapFlightsToCentralAmericaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cheap Flights to Central America & Mexico",
    description:
      "Find the absolute cheapest flight to Central America. We compare top travel companies and cheap airlines to lock in the best airfare deals.",
    url: `${siteConfig.url}/cheap-flights-to-central-america/`,
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
          name: "Cheap Flights to Central America & Mexico",
          item: `${siteConfig.url}/cheap-flights-to-central-america/`,
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
        title="Cheapest Flights to Central America & Mexico"
        subtitle="Find the best flight prices to Central America and Mexico. We take the guesswork out of vacation planning."
        breadcrumbs={[{ label: "Cheap Flights to Central America & Mexico" }]}
        backgroundImage="/images/destinations/central-america.png"
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-text mb-6">
              Find the Cheapest Flight to Central America &amp; Mexico
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Are you ready to trade the daily grind for lush rainforests,
              ancient Mayan ruins, and pristine beaches? Finding the best flight
              prices to Central America doesn&apos;t have to be a stressful
              ordeal. At EST International Travel, we take the guesswork out of
              vacation planning. Whether you need a quick getaway or a complex
              multi-country itinerary, we are here to help you find cheap flights
              that fit your budget.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Stop endlessly typing &quot;travel agency near me&quot; or
              &quot;travel agent near me&quot; into search bars. As a premier
              travel management company, we do the heavy lifting for you. We scan
              the best flight search engines and compare options from top travel
              companies to ensure you keep your hard-earned money for the actual
              adventure!
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose EST Int'l Travel */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-text mb-4 text-center">
            Why Choose EST Int&apos;l Travel as Your Booking Partner?
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
            Instead of bouncing between multiple flight search sites, our
            platform brings the universe of air travel directly to you. We are
            proud to be recognized by our clients as the best travel agency for
            securing very cheap flights and low fare flights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm text-center"
                >
                  <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flights to Mexico */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-text mb-4">
              Your Gateway to Central America: Flights to Mexico
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              For many savvy travelers, booking a flight to Mexico is the perfect
              stepping stone into the rest of Central America. Because of massive
              transit hubs, searching for cheap flights to Mexico can often save
              you hundreds of dollars on your total journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mexicoRoutes.map((route) => (
              <div
                key={route.city}
                className="flex items-start gap-4 bg-cream rounded-2xl p-6"
              >
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-text mb-2">
                    {route.city}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {route.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Travel */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-text mb-12 text-center">
            Specialized Travel For Every Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializedTravel.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-text mb-10 text-center">
            Expert Tips: How to Score a Cheap Fly Ticket
          </h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {expertTips.map((tip) => (
              <div
                key={tip.number}
                className="flex items-start gap-4 bg-cream rounded-xl p-6"
              >
                <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-0.5">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-text mb-1">
                    {tip.number}. {tip.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Banner */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <Image
          src="/images/destinations/central-america.png"
          alt="Cheapest Flight to Central America & Mexico - EST Int'l Travel"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3 text-white mb-3">
              <Plane className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wider">
                EST Int&apos;l Travel
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white max-w-xl">
              Cheapest Flights to Central America &amp; Mexico
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Book Your Cheap Airline Flights?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Stop dreaming about the tropics and start planning your cheap
            travel! Use our custom booking engine — the cheapest flight booking
            site on the web — to secure your cheap fly tickets today.
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
