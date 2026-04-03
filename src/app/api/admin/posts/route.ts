import { auth } from "@/lib/auth";
import { getAllPosts, createPost } from "@/lib/posts";
import type { CreatePostInput } from "@/lib/types";

export async function GET(request: Request) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const status = searchParams.get("status") || undefined;
  const search = searchParams.get("search") || undefined;

  const result = await getAllPosts(page, limit, status, search);
  return Response.json(result);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json()) as CreatePostInput;

  if (!body.title || !body.slug || !body.content) {
    return Response.json(
      { error: "Title, slug, and content are required" },
      { status: 400 }
    );
  }

  try {
    const id = await createPost(body);
    return Response.json({ id }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create post";
    if (message.includes("Duplicate entry")) {
      return Response.json({ error: "A post with this slug already exists" }, { status: 409 });
    }
    return Response.json({ error: message }, { status: 500 });
  }
}
