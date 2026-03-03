"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Users, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Globe, value: "14+", label: "African Destinations" },
  { icon: Users, value: "10K+", label: "Happy Travelers" },
  { icon: MapPin, value: "20+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/hero/contact-hero.jpg"
                alt="EST International Travel & Tours - Your trusted African travel partner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-text">20+</p>
                  <p className="text-sm text-text-secondary">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text leading-tight">
              Houston&apos;s #1{" "}
              <span className="text-primary">
                Nigerian &amp; African Travel Agency
              </span>
            </h2>
            <p className="text-text-secondary mt-5 leading-relaxed">
              Looking to book cheap flights to Nigeria from USA? EST
              International Travel &amp; Tours is Houston&apos;s most trusted
              travel agency for cheap flight tickets to Nigeria — Lagos, Abuja,
              Port Harcourt, Kano and beyond. With decades of experience, we
              offer the cheapest flights to Nigeria and all of Africa.
            </p>
            <p className="text-text-secondary mt-4 leading-relaxed">
              Whether you need USA to Nigeria flight tickets, Nigerian visa
              processing, safari packages in Kenya, or competitive fares to
              Accra, Johannesburg, Nairobi and more — our expert team helps you
              plan custom-designed travel itineraries at the best prices.
            </p>

            {/* Features list */}
            <ul className="mt-6 space-y-3">
              {[
                "Cheapest flights to Nigeria — Lagos, Abuja, Port Harcourt, Kano",
                "Nigerian visa processing and emergency travel certificates",
                "Cheap flight tickets to 14+ African destinations",
                "24/7 customer support, safari packages & custom itineraries",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-secondary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about-us/"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold mt-8 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-heading font-bold text-text">
                  {stat.value}
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
