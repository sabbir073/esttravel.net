"use client";

import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Nigeria destinations first, then other popular African destinations
const nigeriaFirst = destinations.filter((d) => d.country === "Nigeria");
const otherFeatured = destinations.filter((d) => d.country !== "Nigeria").slice(0, 6 - nigeriaFirst.length);
const featured = [...nigeriaFirst, ...otherFeatured].slice(0, 6);

export function DestinationsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Cheap Flights to Nigeria &amp; Africa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-text"
          >
            Book Cheap Flights to Nigeria &amp; Anywhere in Africa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary mt-4 leading-relaxed"
          >
            Find the cheapest flight tickets to Lagos, Abuja, Port Harcourt,
            Kano and all major Nigerian &amp; African cities. Book flights to
            Nigeria from USA and save hundreds on every booking.
          </motion.p>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dest, index) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/${dest.slug}/`}
                className="group block relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100"
              >
                <Image
                  src={dest.image}
                  alt={`Cheap flights to ${dest.city}, ${dest.country}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <Plane className="w-3.5 h-3.5" />
                    {dest.country}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {dest.city}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">{dest.tagline}</p>

                  {/* Hover reveal */}
                  <div className="flex items-center gap-2 mt-3 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Flights
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/cheap-flights-to-africa/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
