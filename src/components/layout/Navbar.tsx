"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { destinations } from "@/data/destinations";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Plane,
  Shield,
  Hotel,
  TreePalm,
  FileText,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Destinations",
    href: "/cheap-flights-to-africa/",
    megaMenu: true,
  },
  {
    label: "Services",
    href: "/services/",
    dropdown: [
      {
        label: "Nigerian Visa",
        href: "/nigerian-visa/",
        icon: Shield,
        description: "All kinds of Nigerian visas & emergency travel certificates",
      },
      {
        label: "Hotel & Packages",
        href: "/hotel-packages/",
        icon: Hotel,
        description: "Budget to luxury accommodations worldwide",
      },
      {
        label: "Safari Packages",
        href: "/safari-packages-html/",
        icon: TreePalm,
        description: "Unforgettable African safari adventures",
      },
      {
        label: "Travel Insurance",
        href: "https://travelsafe.com/",
        icon: FileText,
        description: "Industry-leading travel protection plans",
        external: true,
      },
      {
        label: "E-Visa to Nigeria",
        href: "/nigeria-e-visa/",
        icon: FileText,
        description: "Nigerian e-visa application assistance",
      },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contacts/" },
];

// Nigeria first, then rest of Africa grouped by region
const nigeriaDestinations = destinations.filter((d) => d.country === "Nigeria");
const westAfricaOther = destinations.filter((d) => d.region === "west-africa" && d.country !== "Nigeria");

const destinationRegions = [
  {
    name: "Nigeria",
    destinations: nigeriaDestinations,
  },
  {
    name: "West Africa",
    destinations: westAfricaOther,
  },
  {
    name: "East Africa",
    destinations: destinations.filter((d) => d.region === "east-africa"),
  },
  {
    name: "Southern & Other Africa",
    destinations: [
      ...destinations.filter((d) => d.region === "southern-africa"),
      ...destinations.filter((d) => d.region === "central-africa"),
      ...destinations.filter((d) => d.region === "northeast-africa"),
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white text-sm hidden lg:block">
        <div className="mx-auto max-w-7xl px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {siteConfig.address.full}
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {Object.entries(siteConfig.social).map(([platform, url]) => {
              const Icon = { facebook: Facebook, twitter: Twitter, instagram: Instagram, linkedin: Linkedin }[platform];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={platform}
                >
                  {Icon ? <Icon className="w-4 h-4" /> : platform}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={160}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-colors flex items-center gap-1 ${
                      activeDropdown === link.label
                        ? "text-primary bg-primary/5"
                        : "text-text hover:text-primary"
                    }`}
                  >
                    {link.label}
                    {(link.dropdown || link.megaMenu) && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Standard dropdown */}
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-72">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-fade-in-down">
                        {link.dropdown.map((item) => {
                          const Icon = item.icon;
                          const Comp = item.external ? "a" : Link;
                          const extraProps = item.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {};
                          return (
                            <Comp
                              key={item.label}
                              href={item.href}
                              {...extraProps}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-cream transition-colors group"
                            >
                              <div className="mt-0.5 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-base font-semibold text-text group-hover:text-primary transition-colors">
                                  {item.label}
                                </div>
                                <div className="text-sm text-text-secondary mt-0.5">
                                  {item.description}
                                </div>
                              </div>
                            </Comp>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Mega menu for destinations */}
                  {link.megaMenu && activeDropdown === link.label && (
                    <div className="absolute top-full -left-48 pt-2">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 animate-fade-in-down w-[700px]">
                        <div className="grid grid-cols-3 gap-6">
                          {destinationRegions.map((region) => (
                            <div key={region.name}>
                              <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                                {region.name}
                              </h4>
                              <ul className="space-y-1.5">
                                {region.destinations.map((dest) => (
                                  <li key={dest.slug}>
                                    <Link
                                      href={`/${dest.slug}/`}
                                      className="flex items-center gap-2 text-base text-text-secondary hover:text-primary transition-colors py-0.5"
                                    >
                                      <Plane className="w-3 h-3" />
                                      {dest.city}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 pt-4 border-t border-gray-100">
                          <Link
                            href="/safari-packages-html/"
                            className="flex items-center gap-2 text-base font-semibold text-secondary hover:text-secondary-light transition-colors"
                          >
                            <TreePalm className="w-4 h-4" />
                            Safari Packages — Explore African Adventures
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-semibold text-text hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/booking/"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto animate-fade-in">
            <nav className="p-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown || link.megaMenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          )
                        }
                        className="w-full flex items-center justify-between p-3 rounded-lg text-text hover:bg-cream transition-colors font-medium"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="pl-4 space-y-1 mt-1">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block p-2.5 rounded-lg text-sm text-text-secondary hover:text-primary hover:bg-cream transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                          {link.megaMenu &&
                            destinations.map((dest) => (
                              <Link
                                key={dest.slug}
                                href={`/${dest.slug}/`}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 p-2.5 rounded-lg text-sm text-text-secondary hover:text-primary hover:bg-cream transition-colors"
                              >
                                <Plane className="w-3 h-3" />
                                {dest.city}, {dest.country}
                              </Link>
                            ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-3 rounded-lg text-text hover:bg-cream transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-cream text-primary font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phoneDisplay}
                </a>
                <Link
                  href="/booking/"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center p-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
