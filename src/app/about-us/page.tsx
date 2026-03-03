import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import {
  Globe,
  Users,
  MapPin,
  Award,
  Phone,
  Mail,
  Building,
  Clock,
  ArrowRight,
  CheckCircle,
  Plane,
  Shield,
  Hotel,
  TreePalm,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO Metadata                                                       */
/* ------------------------------------------------------------------ */

const pageTitle =
  "About EST Travel - Houston's #1 Nigerian & African Travel Agency";
const pageDescription =
  "Learn about EST International Travel & Tours, Houston's #1 Nigerian & African travel agency. Cheap flights to Nigeria — Lagos, Abuja, Port Harcourt, Kano — Nigerian visa processing, safari packages & 24/7 support.";
const pageUrl = `${siteConfig.url}/about-us/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "est travel houston",
    "nigerian travel agency houston",
    "african travel agency",
    "cheap flights to nigeria from usa",
    "book flights to nigeria",
    "nigerian visa processing houston",
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
        url: `${siteConfig.url}/images/hero/contact-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "About EST International Travel & Tours - Houston's #1 Nigerian Travel Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteConfig.url}/images/hero/contact-hero.jpg`],
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const missionValues = [
  {
    icon: Globe,
    title: "Our Mission",
    description:
      "To make African travel accessible and affordable for everyone. We connect travelers with the best flight deals, visa services, and curated itineraries so every journey to Africa is seamless and memorable.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "With decades in the travel industry, we have built lasting relationships with airlines, hotels, and local operators. Every fare we quote is honest, every itinerary is tailored, and every traveler is treated like family.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Our 24/7 customer support team is always ready to assist. Whether you need a last-minute flight change or on-the-ground guidance in Africa, our staff goes above and beyond to ensure your comfort.",
  },
];

const specializations = [
  {
    icon: Plane,
    label: "Discounted airfare to 14+ African destinations",
  },
  {
    icon: MapPin,
    label:
      "Budget-friendly tickets to Nigeria, South Africa, Cameroon, Tanzania & more",
  },
  {
    icon: Globe,
    label: "Safari packages to Kenya, Tanzania, and Southern Africa",
  },
  {
    icon: CheckCircle,
    label: "Nigerian visa processing and emergency travel certificates",
  },
  {
    icon: Shield,
    label: "Comprehensive travel insurance through trusted partners",
  },
  {
    icon: Hotel,
    label: "Hotel reservations and complete vacation packages",
  },
  {
    icon: TreePalm,
    label: "Custom-designed travel itineraries for every budget",
  },
  {
    icon: Users,
    label: "Professional guides with deep local expertise across Africa",
  },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "14+", label: "African Destinations" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "100%", label: "Client Satisfaction" },
];

const bookingChannels = [
  {
    icon: Phone,
    title: "By Phone",
    description:
      "Call our friendly team any time for instant booking assistance, fare quotes, and travel advice.",
    detail: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "By Email",
    description:
      "Send us your travel requirements and receive a personalized quote within hours.",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Building,
    title: "In-Person Office Visit",
    description:
      "Walk into our Houston office for face-to-face consultation with our travel experts.",
    detail: siteConfig.address.full,
    href: "https://maps.google.com/?q=6776+Southwest+Fwy+%23444+Houston+TX+77074",
  },
  {
    icon: Clock,
    title: "24/7 Online Support",
    description:
      "Reach out any time through our website contact form or social media channels for round-the-clock support.",
    detail: "Always available",
    href: "/contacts/",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function AboutUsPage() {
  /* --- JSON-LD Structured Data --- */
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "About Us",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ==================== 1. Page Hero ==================== */}
      <PageHero
        title="About Us"
        subtitle="Discover the story behind Houston's most trusted African travel agency"
        breadcrumbs={[{ label: "About Us" }]}
        backgroundImage="/images/services/safari-package.jpg"
      />

      {/* ==================== 2. Our Story ==================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/hero/contact-hero.jpg"
                  alt="EST International Travel & Tours team helping customers plan African travel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 text-white hidden lg:flex items-center gap-4 shadow-xl">
                <Award className="w-10 h-10 shrink-0" />
                <div>
                  <p className="text-2xl font-heading font-bold">20+ Years</p>
                  <p className="text-sm text-white/80">
                    of Travel Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text leading-tight">
                Think Africa, Think{" "}
                <span className="text-primary">
                  EST International Travel&nbsp;&amp;&nbsp;Tours
                </span>
              </h2>
              <p className="text-text-secondary mt-5 leading-relaxed text-lg">
                The Magical, Magnificent Africa awaits you. For over two decades,
                EST International Travel &amp; Tours has served as Houston&rsquo;s
                premier gateway to the African continent. What began as a passion
                for connecting people with Africa&rsquo;s rich cultures and
                breathtaking landscapes has grown into one of the most trusted
                full-service travel agencies in the United States.
              </p>
              <p className="text-text-secondary mt-4 leading-relaxed">
                We specialize in delivering deeply discounted airfare to
                destinations across the entire African continent. From
                budget-friendly tickets to Nigeria and world-class safari
                packages in Kenya, to competitive fares to South Africa, Dakar,
                Cameroon, Tanzania, and Nairobi &mdash; our team of African
                travel experts helps you plan custom-designed itineraries
                tailored to your schedule, preferences, and budget.
              </p>
              <p className="text-text-secondary mt-4 leading-relaxed">
                Beyond flights, we provide comprehensive Nigerian visa
                processing, travel insurance services, hotel reservations, and
                professional local guides who bring authentic expertise to every
                trip. Our staff is available around the clock to ensure your
                journey is seamless from booking to return.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contacts/"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. Mission & Values ==================== */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              Our Mission &amp; Values
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed">
              Every decision we make is guided by a commitment to affordable
              travel, honest service, and the belief that exploring Africa should
              be within everyone&rsquo;s reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionValues.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 4. What We Specialize In ==================== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text leading-tight">
                What We <span className="text-primary">Specialize</span> In
              </h2>
              <p className="text-text-secondary mt-5 leading-relaxed">
                As a full-service African travel agency based in Houston, we
                bring specialized knowledge and industry connections that
                translate into real savings and better experiences for our
                clients.
              </p>

              <ul className="mt-8 space-y-4">
                {specializations.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.label}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-text-secondary pt-2 leading-snug">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/services/safari-package.jpg"
                  alt="African safari experience with EST Travel - expert-guided wildlife tours"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative dot pattern */}
              <div
                className="absolute -z-10 -top-6 -right-6 w-48 h-48 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--color-primary) 1.5px, transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. Statistics Bar ==================== */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(/images/services/safari-package.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-dark/90" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-heading font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. How We Work / Booking Channels ==================== */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Convenient Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              Multiple Ways to <span className="text-primary">Book</span> With
              Us
            </h2>
            <p className="text-text-secondary mt-4 leading-relaxed">
              We believe booking your dream African trip should be as easy as
              possible. Reach us through whichever channel suits you best.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingChannels.map((channel) => {
              const Icon = channel.icon;
              const isExternal =
                channel.href.startsWith("tel:") ||
                channel.href.startsWith("mailto:") ||
                channel.href.startsWith("https://");

              const wrapperClasses =
                "group block h-full";

              const CardContent = (
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-text mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {channel.description}
                  </p>
                  <p className="text-primary font-semibold text-sm flex items-center gap-1">
                    {channel.detail}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              );

              return isExternal ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  className={wrapperClasses}
                  target={
                    channel.href.startsWith("https://") ? "_blank" : undefined
                  }
                  rel={
                    channel.href.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {CardContent}
                </a>
              ) : (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className={wrapperClasses}
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 7. CTA Section ==================== */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(/images/hero/contact-hero.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-dark/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              Ready to Explore{" "}
              <span className="text-primary">Africa</span>?
            </h2>
            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              Whether you need the cheapest flights to Lagos, a complete safari
              adventure, Nigerian visa assistance, or a fully planned vacation
              &mdash; our team is here to turn your travel dreams into reality.
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
                Contact Us Online
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-gray-400 mt-6 text-sm">
              <MapPin className="w-4 h-4 inline-block mr-1 -mt-0.5" />
              {siteConfig.address.full} &bull;{" "}
              <Mail className="w-4 h-4 inline-block mr-1 -mt-0.5" />
              {siteConfig.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
