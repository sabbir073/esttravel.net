"use client";

import Image from "next/image";
import Link from "next/link";
import { Destination, destinations } from "@/data/destinations";
import { siteConfig } from "@/data/siteConfig";
import {
  MapPin,
  Clock,
  Plane,
  Phone,
  ArrowRight,
  Landmark,
  Sun,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

export function DestinationPageContent({ dest }: { dest: Destination }) {
  const related = destinations
    .filter((d) => d.slug !== dest.slug && d.region === dest.region)
    .slice(0, 3);

  // If not enough from same region, add from others
  const moreRelated =
    related.length < 3
      ? [
          ...related,
          ...destinations
            .filter(
              (d) =>
                d.slug !== dest.slug &&
                !related.find((r) => r.slug === d.slug)
            )
            .slice(0, 3 - related.length),
        ]
      : related;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dest.image}
            alt={`Cheap flights to ${dest.city}, ${dest.country}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-primary/30">
            <MapPin className="w-3.5 h-3.5" />
            {dest.country}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            Cheap Flights to {dest.city}
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            {dest.tagline}
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              {dest.flightDuration}
            </span>
            <span className="flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-primary" />
              Discounted Fares Available
            </span>
          </div>
          {/* Breadcrumb */}
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/cheap-flights-to-africa/"
              className="hover:text-primary transition-colors"
            >
              Destinations
            </Link>
            <span>/</span>
            <span className="text-primary">{dest.city}</span>
          </nav>
        </div>
      </section>

      {/* About the destination */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-text mb-6">
                  About {dest.city}, {dest.country}
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {dest.description}
                </p>

                {dest.climate && (
                  <div className="mt-8 bg-cream rounded-xl p-6">
                    <h3 className="flex items-center gap-2 font-heading font-bold text-text mb-3">
                      <Sun className="w-5 h-5 text-primary" />
                      Climate & Best Time to Visit
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {dest.climate}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar - Quick booking */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-dark rounded-2xl p-8 text-white sticky top-28"
              >
                <h3 className="text-xl font-heading font-bold mb-2">
                  Book Your Flight to {dest.city}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Get the best discounted fares. Our agents will find you the
                  cheapest available tickets.
                </p>
                <Link
                  href="/booking/"
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center py-3 rounded-xl font-semibold transition-colors mb-4"
                >
                  Book Online
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full border border-white/20 hover:bg-white/10 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phoneDisplay}
                </a>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {dest.flightDuration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-primary" />
                    Multiple airlines available
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-text mb-10 text-center"
          >
            Top Tourist Attractions in {dest.city}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dest.attractions.map((attraction, index) => (
              <motion.div
                key={attraction}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Landmark className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-text">{attraction}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      {dest.travelTips && dest.travelTips.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-3xl font-heading font-bold text-text mb-8 text-center">
              Money-Saving Travel Tips
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {dest.travelTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-cream rounded-xl p-5"
                >
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-0.5">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {tip}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Fly to {dest.city}?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contact us today for the best discounted fares to{" "}
            {dest.city}, {dest.country}. Our expert agents are ready to help
            you plan the perfect trip.
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
              Book Online
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related destinations */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-heading font-bold text-text mb-10 text-center">
            Explore More Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {moreRelated.map((d) => (
              <Link
                key={d.slug}
                href={`/${d.slug}/`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={d.image}
                  alt={`Cheap flights to ${d.city}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-primary text-sm font-medium">
                    {d.country}
                  </p>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {d.city}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
