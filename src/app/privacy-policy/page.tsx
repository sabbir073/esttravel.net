import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | EST International Travel & Tours",
  description:
    "Privacy policy for EST International Travel & Tours. Learn about how we collect, use, and protect your personal information.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy/`,
  },
  openGraph: {
    title: "Privacy Policy | EST International Travel & Tours",
    description:
      "Privacy policy for EST International Travel & Tours.",
    url: `${siteConfig.url}/privacy-policy/`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | EST International Travel & Tours",
    description:
      "Privacy policy for EST International Travel & Tours.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              SMS Messaging Terms
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              EST Int&apos;l Travel collects phone numbers for SMS messaging
              regarding flight updates, flight schedule reminders, and
              promotions. You may reply &quot;STOP&quot; at any time to
              unsubscribe, and you will be removed from our lists within 24
              hours. We do not share your data with third parties for marketing
              purposes.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              Website Information
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our website is located at{" "}
              <a
                href={siteConfig.url}
                className="text-primary hover:underline"
              >
                {siteConfig.url}
              </a>
              .
            </p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              Comments
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              When visitors leave comments on the site, we collect the data
              shown in the comments form, along with the visitor&apos;s IP
              address and browser user agent string to help with spam detection.
              An anonymized string created from your email address may be
              provided to the Gravatar service to check if you are using it.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              Media
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included. Visitors
              to the website can download and extract any location data from
              images on the website.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              Cookies
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you leave a comment on our site, you may opt-in to saving your
              name, email address, and website in cookies. These are for your
              convenience so that you do not have to fill in your details again
              when you leave another comment. These cookies will last for one
              year.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you visit our login page, we will set a temporary cookie to
              determine if your browser accepts cookies. This cookie contains
              no personal data and is discarded when you close your browser.
              When you log in, we will also set up several cookies to save your
              login information. Login cookies last for two days, and screen
              options cookies last for a year. If you select &quot;Remember
              Me&quot;, your login will persist for two weeks.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              Data Retention
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you leave a comment, the comment and its metadata are retained
              indefinitely. This is so we can recognize and approve any
              follow-up comments automatically. For users that register on our
              website, we also store the personal information they provide in
              their user profile. All users can see, edit, or delete their
              personal information at any time. Website administrators can also
              see and edit that information.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              Your Rights Over Your Data
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have an account on this site, or have left comments, you
              can request to receive an exported file of the personal data we
              hold about you, including any data you have provided to us. You
              can also request that we erase any personal data we hold about
              you. This does not include any data we are obliged to keep for
              administrative, legal, or security purposes.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">
              Embedded Content from Other Websites
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Articles on this site may include embedded content (e.g., videos,
              images, articles). Embedded content from other websites behaves
              in the exact same way as if the visitor has visited the other
              website. These websites may collect data about you, use cookies,
              embed additional third-party tracking, and monitor your
              interaction with that embedded content.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-text-light text-sm">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
