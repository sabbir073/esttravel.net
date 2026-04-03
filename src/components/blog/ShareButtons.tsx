"use client";

import { useState } from "react";
import { Facebook, Twitter, Linkedin, Link2, Check } from "lucide-react";

export function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
  ];

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-text-secondary">Share:</span>
      {shareLinks.map(({ icon: Icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg bg-gray-100 text-gray-600 hover:text-white transition-colors ${color}`}
          aria-label={`Share on ${label}`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <button
        onClick={copyLink}
        className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
}
