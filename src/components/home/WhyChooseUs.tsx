"use client";

import {
  DollarSign,
  CalendarCheck,
  Shield,
  Ship,
  Headphones,
  Plane,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: DollarSign,
    title: "Cheapest Nigeria Flights",
    description:
      "Monthly specials and seasonal discounts on flights to Nigeria. Christmas and holiday deals that save you hundreds on Lagos, Abuja & more.",
  },
  {
    icon: Plane,
    title: "Nigeria & All Africa",
    description:
      "Cheap flights to Nigeria and 14+ African destinations. Lagos, Abuja, Port Harcourt, Kano, Accra, Nairobi, Johannesburg and more.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our friendly customer service agents are always here to serve you, provide assistance, and answer any travel-related questions.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Payment Plans",
    description:
      "Flexible payment options available to fit your budget. Plan your trip with affordable installments and stress-free booking.",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description:
      "Partner with TravelSafe Insurance, crafting industry-leading travel protection plans since 1971 to keep you covered worldwide.",
  },
  {
    icon: Ship,
    title: "Cruise Packages",
    description:
      "Explore stunning coastlines around the world with our exclusive cruise packages at competitive prices.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,150,62,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-white"
          >
            What We Do Best
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 leading-relaxed"
          >
            As Houston&apos;s #1 Nigerian &amp; African travel agency, we bring
            decades of expertise to every booking — ensuring you get the
            cheapest flights to Nigeria and the best value for your journey.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
