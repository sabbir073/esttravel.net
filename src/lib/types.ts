export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  status: "draft" | "published" | "archived";
  author_name: string;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
  categories: Category[];
}

export interface BlogPostFull extends BlogPost {
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  tags: Tag[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  post_count?: number;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface CreatePostInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  featured_image_alt?: string;
  status: "draft" | "published";
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  category_ids: number[];
  tag_ids: number[];
  published_at?: Date;
}

export type UpdatePostInput = Partial<CreatePostInput>;
