import { auth } from "@/lib/auth";
import { getAllCategories, createCategory } from "@/lib/categories";

export async function GET() {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const categories = await getAllCategories();
  return Response.json({ categories });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { name, slug, description } = await request.json();
  if (!name) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }

  try {
    const id = await createCategory(name, slug, description);
    return Response.json({ id }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create category";
    return Response.json({ error: message }, { status: 500 });
  }
}
