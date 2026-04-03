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
  title: "E-Visa to Nigeria - Nigerian E-Visa Application Assistance | EST Travel Houston",
  description:
    "Apply for your Nigerian e-visa with expert assistance from EST International Travel, Houston TX. We help with tourist, business, and transit e-visa applications to Nigeria.",
  keywords: [
    "nigeria e-visa",
    "nigerian e-visa application",
    "e-visa to nigeria houston",
    "nigeria visa online",
    "nigerian electronic visa",
  ],
  alternates: {
    canonical: `${siteConfig.url}/nigeria-e-visa/`,
  },
  openGraph: {
    title: "E-Visa to Nigeria | EST International Travel Houston",
    description:
      "Apply for your Nigerian e-visa with expert assistance from EST International Travel, Houston TX.",
    url: `${siteConfig.url}/nigeria-e-visa/`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Nigerian E-Visa Application Assistance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Visa to Nigeria | EST International Travel",
    description:
      "Apply for your Nigerian e-visa with expert assistance from EST International Travel, Houston TX.",
    images: [siteConfig.ogImage],
  },
};

const requirements = [
  {
    icon: BookOpen,
    title: "1. Valid Passport",
    items: [
      "Original passport valid for at least six months from date of arrival in Nigeria",
      "At least two blank pages available for visa stamps",
      "Clear scan/photo of the passport bio-data page",
    ],
  },
  {
    icon: FileText,
    title: "2. E-Visa Application Form",
    items: [
      "Complete the online Nigerian e-visa application",
      "Name must exactly match your passport",
      "Provide a valid email address for e-visa delivery",
      "Select the correct visa category (tourist, business, or transit)",
    ],
  },
  {
    icon: Camera,
    title: "3. Passport Photograph",
    items: [
      "Recent passport-sized photograph with white background",
      "Digital format (JPEG/PNG) for online submission",
      "Face must be clearly visible without glasses",
    ],
  },
  {
    icon: MapPin,
    title: "4. Travel Details",
    items: [
      "Confirmed return flight ticket or itinerary",
      "Hotel reservation or host address in Nigeria",
      "Proof of sufficient funds for your stay",
    ],
  },
  {
    icon: FileText,
    title: "5. Additional Documents",
    items: [
      "Invitation letter for business visa applicants",
      "Yellow fever vaccination certificate",
      "Travel insurance covering your stay in Nigeria",
    ],
  },
];

export default function NigeriaEVisaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for a Nigerian E-Visa",
    description:
      "Step-by-step guide to applying for a Nigerian e-visa with EST International Travel's assistance.",
    url: `${siteConfig.url}/nigeria-e-visa/`,
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
      { "@type": "ListItem", position: 3, name: "E-Visa to Nigeria", item: `${siteConfig.url}/nigeria-e-visa/` },
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
        title="E-Visa to Nigeria"
        subtitle="Complete assistance for your Nigerian e-visa application — tourist, business, and transit visas"
        backgroundImage="/images/e-visa.png"
        breadcrumbs={[
          { label: "Services", href: "/services/" },
          { label: "E-Visa to Nigeria" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-text mb-5">
              Apply for Your Nigerian E-Visa with Expert Assistance
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Nigeria now offers an electronic visa (e-visa) system that allows
              travelers to apply online without visiting an embassy. The Nigerian
              e-visa is available for tourist, business, and transit purposes.
              EST International Travel provides complete assistance with your
              Nigerian e-visa application from Houston, TX — ensuring every
              document is prepared correctly for a smooth approval.
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
              What You Need for Your Nigerian E-Visa
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
                  Business E-Visa Information
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  The Nigerian business e-visa is ideal for those attending
                  meetings, conferences, or exploring business opportunities in
                  Nigeria. Applicants need an invitation letter from a Nigerian
                  business partner or organization describing the purpose of the
                  visit, duration of stay, and who is responsible for costs. EST
                  Travel can guide you through the entire business e-visa
                  process.
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
            Need Help with Your Nigerian E-Visa Application?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let EST International Travel handle the paperwork. We assist
            Houston residents and travelers across the USA with Nigerian e-visa
            applications — tourist, business, and transit.
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
