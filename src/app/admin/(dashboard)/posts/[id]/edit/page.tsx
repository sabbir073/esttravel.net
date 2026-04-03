import { notFound } from "next/navigation";
import { PostForm } from "@/components/admin/PostForm";
import { getPostById } from "@/lib/posts";
import { getAllCategories } from "@/lib/categories";
import { getAllTags } from "@/lib/tags";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(parseInt(id));
  if (!post) return notFound();

  const categories = await getAllCategories();
  const tags = await getAllTags();

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-text mb-8">
        Edit Post
      </h1>
      <PostForm post={post} categories={categories} tags={tags} />
    </div>
  );
}
