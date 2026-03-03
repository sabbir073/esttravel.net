"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/images/services/safari-package.jpg)" }}
      >
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight"
          >
            Ready to Do This?{" "}
            <span className="text-primary">Let&apos;s Get to Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 mt-5 text-lg leading-relaxed"
          >
            Whether you need cheap flights to Nigeria from USA, Nigerian visa
            processing, safari packages, or flight tickets to anywhere in
            Africa — our expert team is ready to make your trip a reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contacts/"
              className="flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all backdrop-blur-sm"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
