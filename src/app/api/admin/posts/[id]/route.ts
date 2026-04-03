import { auth } from "@/lib/auth";
import { getPostById, updatePost, deletePost } from "@/lib/posts";
import type { UpdatePostInput } from "@/lib/types";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const post = await getPostById(parseInt(id));
  if (!post) return Response.json({ error: "Not found" }, { status: 404 });

  return Response.json({ post });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = (await request.json()) as UpdatePostInput;

  try {
    await updatePost(parseInt(id), body);
    return Response.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update post";
    if (message.includes("Duplicate entry")) {
      return Response.json({ error: "A post with this slug already exists" }, { status: 409 });
    }
    return Response.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await deletePost(parseInt(id));
  return Response.json({ success: true });
}
