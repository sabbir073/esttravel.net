import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BlogPagination({
  currentPage,
  totalPages,
  basePath = "/blog",
  categorySlug,
}: {
  currentPage: number;
  totalPages: number;
  basePath?: string;
  categorySlug?: string;
}) {
  if (totalPages <= 1) return null;

  function buildUrl(page: number) {
    const params = new URLSearchParams();
    if (page > 1) params.set("page", String(page));
    if (categorySlug) params.set("category", categorySlug);
    const qs = params.toString();
    return `${basePath}/${qs ? `?${qs}` : ""}`;
  }

  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      {currentPage > 1 && (
        <Link
          href={buildUrl(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-200 text-text-secondary hover:text-primary hover:border-primary transition-colors text-sm font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </Link>
      )}

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`dots-${idx}`} className="px-3 py-2 text-text-light">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={buildUrl(page)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-primary text-white"
                : "bg-white border border-gray-200 text-text-secondary hover:text-primary hover:border-primary"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={buildUrl(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-gray-200 text-text-secondary hover:text-primary hover:border-primary transition-colors text-sm font-medium"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </nav>
  );
}
