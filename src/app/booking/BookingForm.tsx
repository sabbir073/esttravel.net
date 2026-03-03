"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react";

type TripType = "one-way" | "round-trip" | "multi-city";

interface FormData {
  tripType: TripType;
  flyingFrom: string;
  flyingTo: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  travelClass: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

const initialFormData: FormData = {
  tripType: "round-trip",
  flyingFrom: "",
  flyingTo: "",
  departureDate: "",
  returnDate: "",
  passengers: 1,
  travelClass: "economy",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  specialRequests: "",
};

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "passengers" ? parseInt(value) || 1 : value,
    }));
  };

  const handleTripTypeChange = (type: TripType) => {
    setFormData((prev) => ({
      ...prev,
      tripType: type,
      returnDate: type !== "round-trip" ? "" : prev.returnDate,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-secondary" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text mb-4">
          Quote Request Submitted!
        </h3>
        <p className="text-text-secondary text-lg leading-relaxed mb-3">
          Thank you, {formData.firstName}! Your flight quote request has been
          received.
        </p>
        <p className="text-text-secondary leading-relaxed mb-8">
          One of our expert travel agents will review your request and contact
          you at{" "}
          <span className="font-semibold text-text">{formData.email}</span>{" "}
          with the best available fares within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 pl-11 border border-gray-200 rounded-xl text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white";
  const labelClasses = "block text-sm font-semibold text-text mb-1.5";
  const iconClasses =
    "absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-text-light";

  const tripTypes: { value: TripType; label: string }[] = [
    { value: "one-way", label: "One-way" },
    { value: "round-trip", label: "Round-trip" },
    { value: "multi-city", label: "Multi-city" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10 max-w-3xl mx-auto"
    >
      {/* Trip Type Selection */}
      <div className="mb-8">
        <p className={labelClasses}>Trip Type</p>
        <div className="flex flex-wrap gap-3 mt-1">
          {tripTypes.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => handleTripTypeChange(value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                formData.tripType === value
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-cream text-text-secondary border-gray-200 hover:border-primary/40 hover:text-text"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Flight Details */}
      <div className="mb-8">
        <h3 className="text-lg font-heading font-bold text-text mb-5 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Flight Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Flying From */}
          <div>
            <label htmlFor="flyingFrom" className={labelClasses}>
              Flying From
            </label>
            <div className="relative">
              <MapPin className={iconClasses} />
              <input
                type="text"
                id="flyingFrom"
                name="flyingFrom"
                value={formData.flyingFrom}
                onChange={handleChange}
                placeholder="e.g. Houston, TX"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Flying To */}
          <div>
            <label htmlFor="flyingTo" className={labelClasses}>
              Flying To
            </label>
            <div className="relative">
              <MapPin className={iconClasses} />
              <input
                type="text"
                id="flyingTo"
                name="flyingTo"
                value={formData.flyingTo}
                onChange={handleChange}
                placeholder="e.g. Lagos, Nigeria"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Departure Date */}
          <div>
            <label htmlFor="departureDate" className={labelClasses}>
              Departure Date
            </label>
            <div className="relative">
              <Calendar className={iconClasses} />
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Return Date - shown only for round-trip */}
          {formData.tripType === "round-trip" && (
            <div>
              <label htmlFor="returnDate" className={labelClasses}>
                Return Date
              </label>
              <div className="relative">
                <Calendar className={iconClasses} />
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>
          )}

          {/* Passengers */}
          <div>
            <label htmlFor="passengers" className={labelClasses}>
              Passengers
            </label>
            <div className="relative">
              <Users className={iconClasses} />
              <input
                type="number"
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                min={1}
                max={9}
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Travel Class */}
          <div>
            <label htmlFor="travelClass" className={labelClasses}>
              Class
            </label>
            <div className="relative">
              <select
                id="travelClass"
                name="travelClass"
                value={formData.travelClass}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white appearance-none cursor-pointer"
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mb-8">
        <h3 className="text-lg font-heading font-bold text-text mb-5 flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Personal Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className={labelClasses}>
              First Name
            </label>
            <div className="relative">
              <User className={iconClasses} />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className={labelClasses}>
              Last Name
            </label>
            <div className="relative">
              <User className={iconClasses} />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <div className="relative">
              <Mail className={iconClasses} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className={inputClasses}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <div className="relative">
              <Phone className={iconClasses} />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                required
                className={inputClasses}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div className="mb-8">
        <h3 className="text-lg font-heading font-bold text-text mb-5 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          Special Requests
        </h3>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any special requirements, preferred airlines, stopovers, or additional notes..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Request Quote
          </>
        )}
      </button>

      {/* Note */}
      <p className="text-center text-text-light text-sm mt-4">
        Our agents will contact you with the best available fares within 24
        hours.
      </p>
    </form>
  );
}
