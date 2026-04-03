"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import { PostEditor } from "./PostEditor";
import { ImageUploader } from "./ImageUploader";
import {
  Save,
  Loader2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import type { BlogPostFull, Category, Tag } from "@/lib/types";

export function PostForm({
  post,
  categories,
  tags,
}: {
  post?: BlogPostFull;
  categories: Category[];
  tags: Tag[];
}) {
  const router = useRouter();
  const isEditing = !!post;

  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "");
  const [featuredImage, setFeaturedImage] = useState(
    post?.featured_image || ""
  );
  const [featuredImageAlt, setFeaturedImageAlt] = useState(
    post?.featured_image_alt || ""
  );
  const [status, setStatus] = useState<"draft" | "published">(
    (post?.status as "draft" | "published") || "draft"
  );
  const [selectedCategories, setSelectedCategories] = useState<number[]>(
    post?.categories.map((c) => c.id) || []
  );
  const [selectedTags, setSelectedTags] = useState<number[]>(
    post?.tags.map((t) => t.id) || []
  );
  const [metaTitle, setMetaTitle] = useState(post?.meta_title || "");
  const [metaDescription, setMetaDescription] = useState(
    post?.meta_description || ""
  );
  const [showSeo, setShowSeo] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [newCategoryName, setNewCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState(categories);
  const [newTagName, setNewTagName] = useState("");
  const [allTags, setAllTags] = useState(tags);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!isEditing || !post?.slug) {
      setSlug(slugify(value, { lower: true, strict: true }));
    }
  };

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return;
    const res = await fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategoryName.trim() }),
    });
    const data = await res.json();
    if (res.ok) {
      const newCat: Category = {
        id: data.id,
        name: newCategoryName.trim(),
        slug: slugify(newCategoryName.trim(), { lower: true, strict: true }),
        description: null,
      };
      setAllCategories((prev) => [...prev, newCat]);
      setSelectedCategories((prev) => [...prev, data.id]);
      setNewCategoryName("");
    }
  };

  const handleAddTag = async () => {
    if (!newTagName.trim()) return;
    const res = await fetch("/api/admin/tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTagName.trim() }),
    });
    const data = await res.json();
    if (res.ok) {
      const newTag: Tag = {
        id: data.id,
        name: newTagName.trim(),
        slug: slugify(newTagName.trim(), { lower: true, strict: true }),
      };
      setAllTags((prev) => [...prev, newTag]);
      setSelectedTags((prev) => [...prev, data.id]);
      setNewTagName("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    const body = {
      title,
      slug,
      content,
      excerpt: excerpt || undefined,
      featured_image: featuredImage || undefined,
      featured_image_alt: featuredImageAlt || undefined,
      status,
      meta_title: metaTitle || undefined,
      meta_description: metaDescription || undefined,
      category_ids: selectedCategories,
      tag_ids: selectedTags,
      published_at:
        status === "published" ? new Date().toISOString() : undefined,
    };

    try {
      const url = isEditing
        ? `/api/admin/posts/${post.id}`
        : "/api/admin/posts";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");

      router.push("/admin/posts");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="flex items-center gap-2 bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-6">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-lg"
              placeholder="Post title"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm font-mono"
              placeholder="post-url-slug"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Excerpt
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-y"
              placeholder="Brief summary of the post..."
            />
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Content
            </label>
            <PostEditor content={content} onChange={setContent} />
          </div>

          {/* SEO Section */}
          <div className="bg-gray-50 rounded-lg border border-gray-200">
            <button
              type="button"
              onClick={() => setShowSeo(!showSeo)}
              className="w-full flex items-center justify-between p-4 text-sm font-medium text-gray-700"
            >
              SEO Settings
              {showSeo ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {showSeo && (
              <div className="px-4 pb-4 space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                    placeholder="Leave blank to use post title"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Meta Description
                  </label>
                  <textarea
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm resize-y"
                    placeholder="Leave blank to use excerpt"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish box */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-text mb-4">Publish</h3>
            <div className="space-y-3 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="draft"
                  checked={status === "draft"}
                  onChange={() => setStatus("draft")}
                  className="text-primary"
                />
                <span className="text-sm">Draft</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="published"
                  checked={status === "published"}
                  onChange={() => setStatus("published")}
                  className="text-primary"
                />
                <span className="text-sm">Published</span>
              </label>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? "Saving..." : isEditing ? "Update Post" : "Save Post"}
            </button>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-text mb-3">Featured Image</h3>
            <ImageUploader value={featuredImage} onChange={setFeaturedImage} />
            {featuredImage && (
              <div className="mt-3">
                <input
                  type="text"
                  value={featuredImageAlt}
                  onChange={(e) => setFeaturedImageAlt(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  placeholder="Alt text for image"
                />
              </div>
            )}
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-text mb-3">Categories</h3>
            <div className="max-h-40 overflow-y-auto space-y-1.5 mb-3">
              {allCategories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories((prev) => [...prev, cat.id]);
                      } else {
                        setSelectedCategories((prev) =>
                          prev.filter((id) => id !== cat.id)
                        );
                      }
                    }}
                    className="rounded text-primary"
                  />
                  <span className="text-sm">{cat.name}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                placeholder="New category"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddCategory();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddCategory}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-text mb-3">Tags</h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {allTags
                .filter((t) => selectedTags.includes(t.id))
                .map((tag) => (
                  <span
                    key={tag.id}
                    className="flex items-center gap-1 bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full"
                  >
                    {tag.name}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedTags((prev) =>
                          prev.filter((id) => id !== tag.id)
                        )
                      }
                      className="hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
            </div>
            <div className="max-h-32 overflow-y-auto space-y-1.5 mb-3">
              {allTags
                .filter((t) => !selectedTags.includes(t.id))
                .map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() =>
                      setSelectedTags((prev) => [...prev, tag.id])
                    }
                    className="block text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    + {tag.name}
                  </button>
                ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTagName}
                onChange={(e) => setNewTagName(e.target.value)}
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                placeholder="New tag"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
