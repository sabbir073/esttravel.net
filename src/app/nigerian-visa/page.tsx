import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import {
  Shield,
  FileText,
  Baby,
  Briefcase,
  HardHat,
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nigerian Visa Services - All Types of Nigerian Visas & Emergency Travel Certificates",
  description:
    "EST Int'l Travel provides expert Nigerian visa processing in Houston. Visit visas, emergency travel certificates, infant/child visas, business visas, and STR visas for Nigeria's oil & gas sector.",
  keywords: [
    "nigerian visa processing",
    "nigerian visa houston",
    "nigerian visit visa",
    "emergency travel certificate nigeria",
    "nigerian business visa",
    "book flights to nigeria",
    "cheap flights to nigeria from usa",
  ],
  alternates: {
    canonical: `${siteConfig.url}/nigerian-visa/`,
  },
  openGraph: {
    title: "Nigerian Visa Services | EST International Travel Houston",
    description:
      "Expert Nigerian visa processing in Houston — visit visas, emergency certificates, business visas, and more.",
    url: `${siteConfig.url}/nigerian-visa/`,
    images: [{ url: "/images/services/nigerian-visa.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nigerian Visa Services | EST International Travel",
    description:
      "Expert Nigerian visa processing — visit visas, emergency certificates, business visas, and more.",
  },
};

const visaTypes = [
  {
    icon: FileText,
    title: "Nigerian Visit Visa",
    description:
      "For general travelers to Nigeria who do not possess Nigerian passports. Whether you're visiting family, exploring the country's rich culture, or attending events, our team handles the entire application process to ensure your visit visa is processed accurately and on time.",
    whoFor: "International travelers visiting Nigeria for tourism or family visits",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Visa & Travel Certificates",
    description:
      "For unexpected or urgent travel situations that require immediate documentation. When emergencies arise and you need to travel to Nigeria on short notice, EST International Travel expedites the process to get you on your way as quickly as possible.",
    whoFor: "Travelers with urgent or emergency travel needs to Nigeria",
  },
  {
    icon: Baby,
    title: "Infant & Child Visas",
    description:
      "Specialized visa processing for young travelers with extensive paperwork support. Traveling with infants and children requires additional documentation that can cause unnecessary stress. Our experienced team handles all the details so your family can travel worry-free.",
    whoFor: "Families traveling with children under 18",
  },
  {
    icon: Briefcase,
    title: "Business Visa",
    description:
      "For business professionals prioritizing time-sensitive travel to Nigeria. When time is money, you need a visa service that understands the urgency of business travel. We expedite business visa applications so professionals can focus on what matters most.",
    whoFor: "Business professionals and corporate travelers",
  },
  {
    icon: HardHat,
    title: "STR Visa (Subject to Regularization)",
    description:
      "For employment purposes, particularly in Nigeria's oil and gas sectors. The STR visa is specifically designed for expatriates working in Nigeria. Applying for the wrong visa type could get you in a lot of unnecessary trouble on arrival — let our experts guide you.",
    whoFor: "Expatriates and workers in Nigeria's oil & gas industry",
  },
];

const processSteps = [
  { step: "01", title: "Contact Us", description: "Reach out by phone or email to discuss your visa needs" },
  { step: "02", title: "Submit Documents", description: "Provide the required documentation for your visa type" },
  { step: "03", title: "Processing", description: "Our experts handle the entire application process" },
  { step: "04", title: "Receive Visa", description: "Get your approved visa and travel with confidence" },
];

export default function NigerianVisaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nigerian Visa Processing Services",
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description:
      "Expert Nigerian visa processing including visit visas, emergency travel certificates, infant/child visas, business visas, and STR visas.",
    url: `${siteConfig.url}/nigerian-visa/`,
    areaServed: "Nigeria",
    serviceType: "Visa Processing",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
      { "@type": "ListItem", position: 3, name: "Nigerian Visa", item: `${siteConfig.url}/nigerian-visa/` },
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
        title="Nigerian Visa Services"
        subtitle="Expert processing for all Nigerian visa types — from visit visas to emergency travel certificates"
        breadcrumbs={[
          { label: "Services", href: "/services/" },
          { label: "Nigerian Visa" },
        ]}
      />

      {/* Important notice */}
      <section className="py-8 bg-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border-l-4 border-accent">
            <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading font-bold text-text text-lg">
                Important: A Plane Ticket Does Not Guarantee Entry
              </h2>
              <p className="text-text-secondary mt-1">
                Buying airline tickets doesn&apos;t guarantee that you can enter
                into Nigeria. Proper visa documentation is essential for
                hassle-free travel. Applying for the incorrect visa type could
                get you in unnecessary trouble upon arrival. Let our experts
                ensure you have the right documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Our Expertise
              </span>
              <h2 className="text-3xl font-heading font-bold text-text mb-5">
                All Kinds of Nigerian Visas and Emergency Travel Certificates
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                One of the most important services EST Int&apos;l Travel
                provides is obtaining and processing visas for Nigerian citizens
                and international travelers. With decades of experience, our
                visa processing team can save you a lot of time and money by
                handling the entire application on your behalf.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Whether you need a standard visit visa, an emergency travel
                certificate, documentation for your infant, a business visa, or
                an STR visa for the oil and gas sector — we have the expertise
                to get it done right the first time.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/services/nigerian-visa.jpg"
                alt="Nigerian Visa Processing Services by EST International Travel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa types */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Visa Types We Process
            </span>
            <h2 className="text-3xl font-heading font-bold text-text">
              Choose the Right Visa for Your Travel
            </h2>
          </div>
          <div className="space-y-6">
            {visaTypes.map((visa) => {
              const Icon = visa.icon;
              return (
                <div
                  key={visa.title}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-text mb-2">
                        {visa.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed mb-3">
                        {visa.description}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-cream text-text-secondary text-sm px-3 py-1.5 rounded-lg">
                        <Shield className="w-3.5 h-3.5 text-primary" />
                        <span className="font-medium">Best for:</span>{" "}
                        {visa.whoFor}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="text-3xl font-heading font-bold text-text">
              Simple 4-Step Visa Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="text-center bg-cream rounded-2xl p-6"
              >
                <div className="text-4xl font-heading font-bold text-primary/20 mb-3">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-text text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Need a Nigerian Visa? Contact Us Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact EST Int&apos;l Travel at your earliest convenience for any
            of your Nigerian Visa Services and travel on time. Our team is
            ready to help.
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
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
