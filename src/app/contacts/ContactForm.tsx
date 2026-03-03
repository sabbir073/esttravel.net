"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const travelInterests = [
  "Flights to Africa",
  "Nigerian Visa",
  "Hotel & Packages",
  "Safari Packages",
  "Travel Insurance",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    travelInterest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (no backend yet)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      travelInterest: "",
      message: "",
    });

    // Hide success toast after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="relative">
      {/* Success Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute -top-16 left-0 right-0 z-10 flex items-center gap-3 bg-secondary text-white px-5 py-3.5 rounded-xl shadow-lg"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              Thank you! Your message has been sent. We&apos;ll get back to you
              shortly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-semibold text-text mb-1.5"
            >
              Full Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-semibold text-text mb-1.5"
            >
              Email Address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Phone & Subject Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-semibold text-text mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="contact-subject"
              className="block text-sm font-semibold text-text mb-1.5"
            >
              Subject <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Travel Interest Dropdown */}
        <div>
          <label
            htmlFor="contact-interest"
            className="block text-sm font-semibold text-text mb-1.5"
          >
            Travel Interest
          </label>
          <select
            id="contact-interest"
            name="travelInterest"
            value={formData.travelInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
            }}
          >
            <option value="">Select your travel interest</option>
            {travelInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-text mb-1.5"
          >
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your travel plans or questions..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-y"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
