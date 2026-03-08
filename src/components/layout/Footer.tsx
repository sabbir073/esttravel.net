import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Plane,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services/" },
  { label: "Booking", href: "/booking/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contacts/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

const topDestinations = [
  { label: "Lagos, Nigeria", href: "/cheap-flights-lagos-nigeria/" },
  { label: "Abuja, Nigeria", href: "/cheap-flights-to-abuja/" },
  { label: "Port Harcourt, Nigeria", href: "/cheap-flights-to-port-harcourt/" },
  { label: "Kano, Nigeria", href: "/cheap-flights-to-kano/" },
  { label: "Accra, Ghana", href: "/cheap-flights-to-accra/" },
  { label: "Nairobi, Kenya", href: "/cheap-flights-to-nairobi/" },
  { label: "Johannesburg, SA", href: "/cheap-flights-to-johannesburg/" },
  { label: "Dakar, Senegal", href: "/cheap-flights-to-dakar/" },
];

const services = [
  { label: "Nigerian Visa", href: "/nigerian-visa/" },
  { label: "Hotel & Packages", href: "/hotel-packages/" },
  { label: "Safari Packages", href: "/safari-packages-html/" },
  { label: "E-Visa to Nigeria", href: "/nigeria-e-visa/" },
];

const socialLinks = [
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Newsletter / CTA strip */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white">
              Ready to Book Cheap Flights to Nigeria?
            </h3>
            <p className="text-white/80 mt-1">
              Call us for the cheapest flights to Nigeria &amp; Africa
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/booking/"
              className="flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-lighter transition-colors"
            >
              Book Online
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={160}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Houston&apos;s #1 Nigerian &amp; African travel agency. Book cheap
              flights to Nigeria — Lagos, Abuja, Port Harcourt, Kano &amp; all
              of Africa. Nigerian visa processing, safari packages &amp; more.
              Decades of trust and excellence.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-5">
              Top Destinations
            </h4>
            <ul className="space-y-3">
              {topDestinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    href={dest.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <Plane className="w-3 h-3" />
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span className="text-sm">{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm">{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy/"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
