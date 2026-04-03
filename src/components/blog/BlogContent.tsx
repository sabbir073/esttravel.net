"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

export function BlogContent({ html }: { html: string }) {
  const [sanitized, setSanitized] = useState("");

  useEffect(() => {
    setSanitized(
      DOMPurify.sanitize(html, {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
      })
    );
  }, [html]);

  if (!sanitized) return null;

  return (
    <div className="blog-content">
      {parse(sanitized)}
    </div>
  );
}
