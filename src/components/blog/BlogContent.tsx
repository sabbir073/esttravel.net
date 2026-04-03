"use client";

import { useMemo } from "react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

export function BlogContent({ html }: { html: string }) {
  const content = useMemo(() => {
    if (typeof window === "undefined") return null;
    return DOMPurify.sanitize(html, {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
    });
  }, [html]);

  return (
    <div className="blog-content" suppressHydrationWarning>
      {parse(content ?? html)}
    </div>
  );
}
