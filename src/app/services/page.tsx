import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Shield,
  Clock,
  Globe,
  HeadphonesIcon,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";

const pageTitle = "Travel Services - Cheap Flights to Nigeria, Visa Processing & More";
const pageDescription =
  "Explore EST International Travel's services — cheap flights to Nigeria & Africa, Nigerian visa processing, safari packages, hotel bookings, cruise deals & travel insurance. Houston's #1 Nigerian travel agency.";
const pageUrl = `${siteConfig.url}/services/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "cheap flights to nigeria",
    "nigerian visa processing",
    "african travel services",
    "safari packages houston",
    "travel agency houston",
    "book flights to nigeria",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Travel Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteConfig.ogImage],
  },
};

const services = [
  {
    title: "Nigerian Visa Processing",
    slug: "nigerian-visa",
    description:
      "One of the most essential services EST International Travel provides is Nigerian visa processing. Whether you need a business visa, tourist visa, transit visa, or an emergency travel certificate, our experienced team handles every step of the application process on your behalf. As a trusted Houston-based agency with decades of expertise, we streamline the often complex Nigerian visa requirements so you can focus on planning your trip with confidence.",
    image: "/images/services/nigerian-visa.jpg",
    imageAlt:
      "Nigerian visa processing and passport services by EST International Travel",
    href: "/nigerian-visa/",
    external: false,
  },
  {
    title: "Hotel Bookings & Vacation Packages",
    slug: "hotel-packages",
    description:
      "EST International Travel is a full-service travel agency specializing in hotel reservations and curated vacation packages worldwide. From budget-friendly accommodations to luxury resorts, we negotiate exclusive rates with top hotel chains and local properties across Africa, Europe, Asia, and the Americas. Our custom vacation packages bundle flights, hotels, and activities into one seamless itinerary tailored to your budget and travel style.",
    image: "/images/services/hotel-packages.jpg",
    imageAlt:
      "Luxury hotel bookings and vacation travel packages by EST Travel",
    href: "/hotel-packages/",
    external: false,
  },
  {
    title: "Travel Insurance",
    slug: "travel-insurance",
    description:
      "Protect your trip with comprehensive travel insurance from our trusted partner, TravelSafe Insurance. Since 1971, TravelSafe has been crafting industry-leading travel protection plans that cover trip cancellations, medical emergencies abroad, lost luggage, flight delays, and more. We help you choose the right coverage level for your specific journey, ensuring you travel with complete peace of mind whether you are heading to Lagos, Nairobi, or anywhere else in the world.",
    image: "/images/services/travel-insurance.jpg",
    imageAlt: "Travel insurance coverage and protection plans for travelers",
    href: "https://travelsafe.com/",
    external: true,
  },
  {
    title: "African Safari Packages",
    slug: "safari-packages",
    description:
      "Experience the breathtaking beauty of Africa with our expertly curated safari packages. From the vast plains of the Serengeti and Kenya's Maasai Mara to South Africa's Kruger National Park and Botswana's Okavango Delta, we design unforgettable African safari adventures for solo travelers, couples, and families alike. Our safari packages include guided game drives, luxury lodge stays, bush camping options, and all ground transportation so you can witness the Big Five in their natural habitat.",
    image: "/images/services/safari-package.jpg",
    imageAlt:
      "African safari adventure packages with wildlife tours and luxury lodges",
    href: "/safari-packages-html/",
    external: false,
  },
  {
    title: "Cheap Flights to Africa",
    slug: "cheap-flights",
    description:
      "We consistently offer the lowest airline ticket prices to destinations across Africa. With decades of relationships with major airlines and consolidators, EST International Travel secures exclusive fares you simply cannot find online. Whether you are flying to Lagos, Accra, Nairobi, Johannesburg, Addis Ababa, or Dakar, our agents compare hundreds of fare options to find you the most affordable route with the best connections. Save hundreds of dollars on every booking.",
    image: "/images/services/air-ticket.jpg",
    imageAlt:
      "Cheap flights and affordable airline tickets to Africa from Houston",
    href: "/cheap-flights-to-africa/",
    external: false,
  },
  {
    title: "Cruise Packages Worldwide",
    slug: "cruise-packages",
    description:
      "Set sail and explore the world's most stunning coastlines and exotic ports of call with our premium cruise packages. From the Caribbean and Mediterranean to Alaska and the African coast, EST International Travel offers exclusive cruise deals at competitive prices. Whether you prefer a relaxing ocean voyage, an adventure-packed expedition cruise, or a family-friendly mega-ship experience, our travel consultants match you with the perfect cruise line and itinerary.",
    image: "/images/services/cruise.jpg",
    imageAlt:
      "Cruise vacation packages and worldwide cruise deals by EST Travel",
    href: "/services/",
    external: false,
  },
];

const whyChooseFeatures = [
  {
    icon: Globe,
    title: "50+ Years of Expertise",
    description:
      "Decades of specialized experience in African travel and international destinations means you benefit from unmatched industry knowledge and trusted airline partnerships.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Bonded",
    description:
      "EST International Travel is a fully licensed and bonded travel agency, giving you complete financial protection and confidence in every booking.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround Times",
    description:
      "From visa processing to last-minute flight bookings, our streamlined systems and dedicated team deliver results faster than the competition.",
  },
  {
    icon: HeadphonesIcon,
    title: "Personalized Support",
    description:
      "Every traveler works directly with an experienced agent who understands your needs, preferences, and budget to craft the perfect trip.",
  },
];

export default function ServicesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
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
          name: "Services",
          item: pageUrl,
        },
      ],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Travel Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: service.external
            ? service.href
            : `${siteConfig.url}${service.href}`,
        },
        position: index + 1,
      })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Hero */}
      <PageHero
        title="Our Travel Services"
        subtitle="Comprehensive travel solutions from Houston's most trusted African travel agency — flights, visas, safaris, hotels, cruises, and more."
        breadcrumbs={[{ label: "Services" }]}
        backgroundImage="/images/services/hotel-packages.jpg"
      />

      {/* Services Listing - Alternating Layout */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              High Quality Travel Services
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed text-lg">
              From visa processing and affordable flights to luxury safaris and
              cruise vacations, EST International Travel delivers end-to-end
              travel solutions backed by over 50 years of industry experience.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-20">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const isExternal = service.external;

              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24"
                >
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-10 lg:gap-14 items-center`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text mb-4">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {service.description}
                      </p>
                      {isExternal ? (
                        <a
                          href={service.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              The EST Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              Why Choose Our Services
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed">
              Trusted by thousands of travelers since our founding, EST
              International Travel combines deep expertise, competitive pricing,
              and genuine care for every client.
            </p>
          </div>

          {/* 4-Column Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <div className="mx-auto p-3 bg-primary/10 rounded-xl w-fit mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-text mb-2">
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(/images/services/safari-package.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-dark/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              Ready to Plan Your Next{" "}
              <span className="text-primary">Adventure?</span>
            </h2>
            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              Whether you need cheap flights to Africa, Nigerian visa
              processing, a dream safari, or a relaxing cruise — our expert
              travel consultants are ready to craft the perfect trip for you.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contacts/"
                className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
