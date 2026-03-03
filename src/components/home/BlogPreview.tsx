"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title:
      "EST Int'l Travel Agency: Houston's No. 1 Full-Service Travel Partner and Your Trusted Source for Nigerian Visa Processing",
    slug: "est-intl-travel-agency-houstons-no-1-full-service-travel-partner-and-your-trusted-source-for-nigerian-visa-processing",
    image: "/images/blog/blog-1.jpg",
    category: "Nigerian Visa Travel Agency",
    date: "December 2025",
    excerpt:
      "Discover why EST International Travel is Houston's top choice for Nigerian visa processing and comprehensive travel services.",
  },
  {
    title:
      "Why Getting Help from EST Int'l Travel Can Make Your Nigerian Visa Process Stress-Free",
    slug: "why-getting-help-from-est-intl-travel-can-make-your-nigerian-visa-process-stress-free",
    image: "/images/blog/blog-2.png",
    category: "Visa Services",
    date: "December 2025",
    excerpt:
      "Navigate the Nigerian visa application process with expert guidance from EST International Travel's experienced agents.",
  },
  {
    title:
      "Finding Your Gateway to Africa: Navigating Travel with Houston's Full-Service Agencies",
    slug: "finding-your-gateway-to-africa-navigating-travel-with-houstons-full-service-agencies",
    image: "/images/blog/blog-3.jpg",
    category: "Travel Agencies",
    date: "January 2024",
    excerpt:
      "Explore how Houston's leading travel agencies can connect you with affordable African travel and unforgettable experiences.",
  },
];

export function BlogPreview() {
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
            Latest Articles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-text"
          >
            Travel Tips & Latest News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary mt-4 leading-relaxed"
          >
            Stay informed with the latest travel insights, visa updates, and
            expert tips for your next African adventure.
          </motion.p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/${post.slug}/`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-text-light text-xs mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h3 className="font-heading font-bold text-text group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
