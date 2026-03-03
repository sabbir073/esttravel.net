import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = "/images/services/safari-package.jpg",
}: PageHeroProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        <nav
          className="mt-6 flex items-center justify-center gap-2 text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          {breadcrumbs.map((item, index) => (
            <span key={item.label} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              {item.href && index < breadcrumbs.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
