import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "./ContactForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO Metadata                                                      */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Contact Us - EST International Travel & Tours Houston",
  description:
    "Contact EST International Travel & Tours for cheap flights to Nigeria & Africa, Nigerian visa processing, safari packages & travel insurance. Call +1 713-974-0521 or visit us in Houston, TX.",
  keywords: [
    "est travel houston contact",
    "nigerian travel agency houston",
    "book flights to nigeria",
    "cheap flights to nigeria from usa",
    "nigerian visa processing houston",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contacts/`,
  },
  openGraph: {
    title: "Contact Us - EST International Travel & Tours Houston",
    description:
      "Get in touch with Houston's #1 Nigerian & African travel agency. Cheap flights to Nigeria, visa services, safari packages.",
    url: `${siteConfig.url}/contacts/`,
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Contact EST International Travel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - EST International Travel & Tours",
    description:
      "Get in touch with Houston's #1 Nigerian & African travel agency. Cheap flights to Nigeria, visa services, safari packages.",
    images: [siteConfig.ogImage],
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                          */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    question: "How do I book a flight to Africa with EST Travel?",
    answer:
      "You can book a flight by calling us at +1 713-974-0521, emailing info@esttravel.net, or filling out the contact form on this page. One of our travel experts will find you the cheapest flights to your desired African destination and walk you through every step of the booking process.",
  },
  {
    question: "How long does Nigerian visa processing take?",
    answer:
      "Nigerian visa processing times vary depending on the type of visa. A standard tourist visa typically takes 5-10 business days. We also offer expedited processing for urgent travel needs. Our team handles the entire application process to ensure a smooth experience.",
  },
  {
    question: "Do you offer payment plans for travel packages?",
    answer:
      "Yes! We understand that travel is an investment, and we offer flexible payment plans for flight bookings, safari packages, and hotel bundles. Contact us to discuss a plan that works for your budget. A deposit is required to secure your booking.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "Our cancellation policy depends on the type of booking and the airline or hotel provider. Most bookings can be cancelled within 24 hours for a full refund. After that, cancellation fees may apply. We always recommend travel insurance to protect your investment.",
  },
  {
    question: "Can you help with group travel or corporate bookings?",
    answer:
      "Absolutely! We specialize in group travel arrangements for families, churches, organizations, and corporate teams. Group bookings often come with discounted rates. Contact us with your group size and travel dates for a custom quote.",
  },
  {
    question: "What documents do I need to travel to Africa?",
    answer:
      "Requirements vary by country but generally include a valid passport (with at least 6 months validity), visa (if required), vaccination records (such as Yellow Fever), and return/onward flight tickets. Our team will provide a full checklist for your specific destination.",
  },
];

/* ------------------------------------------------------------------ */
/*  Contact Info Cards                                                */
/* ------------------------------------------------------------------ */

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phoneDisplay,
    description: "Mon - Fri, 9:00 AM - 6:00 PM CST",
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.email,
    description: "We reply within 24 hours",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: siteConfig.address.street,
    description: `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`,
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Accordion (Server Component with native <details>)            */
/* ------------------------------------------------------------------ */

function FAQAccordion() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-md"
        >
          <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg font-heading font-semibold text-text pr-4">
              {faq.question}
            </h3>
            <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-5">
            <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                    */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  /* JSON-LD ContactPage Schema */
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us - EST International Travel & Tours",
    description:
      "Contact EST International Travel & Tours for cheap flights to Africa, Nigerian visa processing, safari packages, and more.",
    url: `${siteConfig.url}/contacts/`,
    mainEntity: {
      "@type": "TravelAgency",
      name: siteConfig.name,
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
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
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
          name: "Contact Us",
          item: `${siteConfig.url}/contacts/`,
        },
      ],
    },
  };

  /* FAQ Schema */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ============================== */}
      {/*  1. Page Hero                  */}
      {/* ============================== */}
      <PageHero
        title="Contact Us"
        subtitle="We are looking forward to hearing from you. Please feel free to get in touch via the form below, we will get back to you as soon as possible."
        breadcrumbs={[{ label: "Contact Us" }]}
        backgroundImage="/images/hero/contact-hero.jpg"
      />

      {/* ============================== */}
      {/*  2. Contact Info Cards         */}
      {/* ============================== */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.icon === MapPin ? "_blank" : undefined}
                  rel={
                    card.icon === MapPin ? "noopener noreferrer" : undefined
                  }
                  className="group bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-text">
                    {card.label}
                  </h3>
                  <p className="text-primary font-semibold mt-2">
                    {card.value}
                  </p>
                  <p className="text-text-secondary text-sm mt-1">
                    {card.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/*  3. Contact Form + Map Split   */}
      {/* ============================== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              Send Us a <span className="text-primary">Message</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
              Fill out the form below and our travel experts will respond within
              24 hours with personalized travel solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Contact Form */}
            <div className="bg-cream rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-100">
              <ContactForm />
            </div>

            {/* Right: Google Maps + Office Info */}
            <div className="flex flex-col gap-6">
              {/* Google Maps Embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex-1 min-h-[400px]">
                <iframe
                  title="EST International Travel & Tours Office Location"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.2!2d-95.5349!3d29.7087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent("6776 Southwest Fwy #444, Houston, TX 77074")}!5e0!3m2!1sen!2sus!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Office Hours Card */}
              <div className="bg-dark rounded-2xl p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white font-medium">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white font-medium">
                      10:00 AM - 3:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-text-light">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/*  4. FAQ Accordion Section      */}
      {/* ============================== */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
              Find answers to common questions about booking flights, visa
              processing, payment options, and travel to Africa.
            </p>
          </div>

          <FAQAccordion />

          <div className="text-center mt-10">
            <p className="text-text-secondary">
              Still have questions?{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-primary font-semibold hover:underline"
              >
                Call us at {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/*  5. CTA Section                */}
      {/* ============================== */}
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
              Ready to Plan Your{" "}
              <span className="text-primary">Dream Trip?</span>
            </h2>
            <p className="text-gray-300 mt-5 text-lg leading-relaxed">
              Whether you need the cheapest flights to Africa, Nigerian visa
              assistance, safari packages, or a complete travel itinerary — our
              expert team is just a phone call away.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
              >
                Email Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
