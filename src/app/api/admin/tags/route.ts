import { auth } from "@/lib/auth";
import { getAllTags, createTag } from "@/lib/tags";

export async function GET() {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const tags = await getAllTags();
  return Response.json({ tags });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { name, slug } = await request.json();
  if (!name) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }

  try {
    const id = await createTag(name, slug);
    return Response.json({ id }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create tag";
    return Response.json({ error: message }, { status: 500 });
  }
}
