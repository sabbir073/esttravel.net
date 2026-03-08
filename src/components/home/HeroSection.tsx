"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Search, Star, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [flyingFrom, setFlyingFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero/hero-main.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
      </div>

      {/* Animated particles / decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm mb-6 border border-white/10"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            Houston&apos;s #1 Nigerian & African Travel Agency — Decades of Excellence
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
          >
            Book Cheap Flights to{" "}
            <span className="text-green-500">Nigeria</span>{" "}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://flagcdn.com/w40/ng.png"
              alt="Nigeria flag"
              width={40}
              height={30}
              className="inline-block align-middle"
            />{" "}
            <span className="text-primary">and Africa</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl leading-relaxed"
          >
            Book cheap flights to Nigeria from USA — cheapest flight tickets to
            Lagos, Abuja, Port Harcourt, Kano & anywhere in Africa. Save hundreds
            on every booking. We also process Nigerian visa, safari packages & more.
          </motion.p>

          {/* Quick search form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 max-w-2xl"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Flying from..."
                value={flyingFrom}
                onChange={(e) => setFlyingFrom(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white text-text placeholder-text-light text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Flying to..."
                value={flyingTo}
                onChange={(e) => setFlyingTo(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white text-text placeholder-text-light text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Link
                href={`/booking/?from=${encodeURIComponent(flyingFrom)}&to=${encodeURIComponent(flyingTo)}`}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg text-sm"
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="p-1.5 bg-primary/20 rounded-lg">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              20+ Years Experience
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="p-1.5 bg-primary/20 rounded-lg">
                <Star className="w-4 h-4 text-primary" />
              </div>
              Best Prices Guaranteed
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="p-1.5 bg-primary/20 rounded-lg">
                <Headphones className="w-4 h-4 text-primary" />
              </div>
              24/7 Customer Support
            </div>
          </motion.div>

          {/* Phone CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors"
            >
              <div className="p-3 bg-primary rounded-full animate-pulse">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Call us now!</p>
                <p className="text-lg font-bold">{siteConfig.phoneDisplay}</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
