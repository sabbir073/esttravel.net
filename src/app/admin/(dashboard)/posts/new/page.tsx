import { PostForm } from "@/components/admin/PostForm";
import { getAllCategories } from "@/lib/categories";
import { getAllTags } from "@/lib/tags";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  const categories = await getAllCategories();
  const tags = await getAllTags();

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-text mb-8">
        Create New Post
      </h1>
      <PostForm categories={categories} tags={tags} />
    </div>
  );
}
