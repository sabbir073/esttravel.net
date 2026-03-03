"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cheap Flights to Nigeria & Africa from USA",
    description:
      "Book the cheapest flights to Nigeria — Lagos, Abuja, Port Harcourt, Kano and all African destinations. Our decades of experience save you hundreds on every flight ticket.",
    image: "/images/services/air-ticket.jpg",
    href: "/cheap-flights-to-africa/",
    tag: "Flights to Nigeria",
  },
  {
    title: "All Kinds of Nigerian Visas and Emergency Travel Certificates",
    description:
      "One of our most important services — obtaining and processing visas for Nigerian citizens. From visit visas to business visas and emergency travel certificates.",
    image: "/images/services/visa-passport.jpg",
    href: "/nigerian-visa/",
    tag: "Visa Services",
  },
  {
    title: "One-Stop Travel Agency for All Your Travel Needs",
    description:
      "Est International Travel is a full-service agency covering flights, hotels, vacation packages, travel insurance, and custom itineraries — from budget to luxury.",
    image: "/images/services/hotel.jpg",
    href: "/hotel-packages/",
    tag: "Hotels & Packages",
  },
  {
    title: "Cruise Around the World with Us",
    description:
      "Explore the world's most stunning coastlines and exotic ports of call. We offer exclusive cruise packages at competitive prices for unforgettable voyages.",
    image: "/images/services/cruise.jpg",
    href: "/services/",
    tag: "Cruise",
  },
];

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-text"
          >
            Cheap Flights to Nigeria &amp; Complete Travel Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary mt-4 leading-relaxed"
          >
            From cheap flights to Nigeria and visa processing to safari
            adventures and cruise packages — we&apos;re Houston&apos;s complete
            Nigerian &amp; African travel solution.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-text group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
