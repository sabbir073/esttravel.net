import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import {
  FileText,
  Camera,
  MapPin,
  BookOpen,
  CheckCircle,
  Phone,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Indian Tourist Visa Guide - How to Apply from Houston TX",
  description:
    "Complete guide to applying for an Indian tourist visa from Houston. EST International Travel assists with passport requirements, application forms, photographs, and all documentation needed.",
  keywords: [
    "indian tourist visa houston",
    "apply indian visa houston",
    "indian visa application guide",
    "indian business visa houston",
  ],
  alternates: {
    canonical: `${siteConfig.url}/apply-indian-tourist-visa/`,
  },
  openGraph: {
    title: "Indian Tourist Visa Guide | EST International Travel Houston",
    description:
      "Complete guide to applying for an Indian tourist visa from Houston, TX.",
    url: `${siteConfig.url}/apply-indian-tourist-visa/`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Indian Tourist Visa Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Tourist Visa Guide | EST International Travel",
    description:
      "Complete guide to applying for an Indian tourist visa from Houston, TX.",
    images: [siteConfig.ogImage],
  },
};

const requirements = [
  {
    icon: BookOpen,
    title: "1. Valid Passport",
    items: [
      "Original passport document required",
      "One photocopy of passport information page",
      "Must be signed by applicant",
      "Valid for minimum six months during India stay",
      "At least two blank pages available for visa stamps",
    ],
  },
  {
    icon: FileText,
    title: "2. Visa Application Form",
    items: [
      "Complete the online application with a valid email address (mandatory)",
      "Name must exactly match your passport",
      "Select the correct visa type",
      "Signature under all photographs must match passport signature",
    ],
  },
  {
    icon: Camera,
    title: "3. Passport Photographs",
    items: [
      "Recent 2x2 inch colored passport-style photo",
      "Plain background required",
      "No glasses in photographs",
      "Do not staple photos to application",
    ],
  },
  {
    icon: MapPin,
    title: "4. Proof of State Residency",
    items: [
      "Photocopy of driver's license or state-issued ID",
      "Address must match visa application",
      "Alternative: utility bills (water, gas, electric, sewage) from last 90 days",
    ],
  },
  {
    icon: FileText,
    title: "5. Additional Documents",
    items: [
      "All forms must be printed, completed, and signed with original signature",
      "Business visa applicants need a letter from the Indian business partner",
      "Letter must describe business nature, stay duration, locations, and cost responsibility",
    ],
  },
];

export default function IndianVisaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for an Indian Tourist Visa from Houston",
    description:
      "Step-by-step guide to applying for an Indian tourist visa with EST International Travel's assistance.",
    url: `${siteConfig.url}/apply-indian-tourist-visa/`,
    step: requirements.map((req, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: req.title,
      text: req.items.join(". "),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services/` },
      { "@type": "ListItem", position: 3, name: "Indian Tourist Visa", item: `${siteConfig.url}/apply-indian-tourist-visa/` },
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
        title="Indian Tourist Visa Guide"
        subtitle="Complete guide and expert assistance for applying for an Indian tourist or business visa from Houston"
        breadcrumbs={[
          { label: "Services", href: "/services/" },
          { label: "Indian Tourist Visa" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-text mb-5">
              Apply for Your Indian Tourist Visa with Expert Assistance
            </h2>
            <p className="text-text-secondary leading-relaxed">
              India welcomed over one million U.S. visitors in 2018, and that
              number continues to grow. American citizens require valid passports
              and visas for entry into India. EST International Travel offers
              complete assistance with your Indian visa application from
              Houston, TX — ensuring every document is prepared correctly.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Requirements Checklist
            </span>
            <h2 className="text-3xl font-heading font-bold text-text">
              What You Need for Your Indian Visa
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {requirements.map((req) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.title}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="flex items-center gap-3 text-xl font-heading font-bold text-text mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {req.title}
                  </h3>
                  <ul className="space-y-2 ml-12">
                    {req.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-text-secondary"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business visa info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-cream rounded-xl p-6 border-l-4 border-primary">
              <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-text text-lg mb-2">
                  Business Visa Information
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Business visas allow investigation of business opportunities
                  without employment in India. Applicants need a letter from the
                  Indian business partner describing the business nature, stay
                  duration, locations to be visited, and who is responsible for
                  costs. EST Travel can guide you through the entire business
                  visa process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Need Help with Your Indian Visa Application?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let EST International Travel handle the paperwork. We assist
            Houston residents with both tourist and business visa applications
            to India.
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
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
