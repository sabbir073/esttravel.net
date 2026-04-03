import { auth } from "@/lib/auth";
import { updateTag, deleteTag } from "@/lib/tags";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { name, slug } = await request.json();

  await updateTag(parseInt(id), name, slug);
  return Response.json({ success: true });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await deleteTag(parseInt(id));
  return Response.json({ success: true });
}
