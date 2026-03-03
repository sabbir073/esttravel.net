"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Faithful Client",
    image: "/images/testimonials/testimonial-1.png",
    text: "I have never met Nancy in person but the experience was so humanly personal and loyal. She went above and beyond to get me the best deals on my flight to Lagos. I will forever be grateful for her dedication and professionalism.",
    rating: 5,
    service: "Flight to Lagos",
  },
  {
    name: "Satisfied Traveler",
    image: "/images/testimonials/testimonial-2.png",
    text: "Jim handled my Nigerian visa processing with incredible efficiency. He made what seemed like a complicated process completely stress-free. The entire team at EST International Travel is exceptional — I highly recommend them.",
    rating: 5,
    service: "Nigerian Visa Processing",
  },
  {
    name: "Returning Customer",
    image: "/images/testimonials/testimonial-3.png",
    text: "I recommend everyone to use EST International Travel & Tours for all their travel needs. Nancy always finds the cheapest tickets and Jim handles all visa services perfectly. They are the best in Houston, hands down!",
    rating: 5,
    service: "Full Travel Package",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (p) => (p - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-text"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center"
            >
              <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text text-lg leading-relaxed italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={60}
                  height={60}
                  className="rounded-full ring-4 ring-primary/10"
                />
                <h4 className="mt-3 font-heading font-bold text-text">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {testimonials[current].service}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2.5 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
