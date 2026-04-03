import { auth } from "@/lib/auth";
import { updateCategory, deleteCategory } from "@/lib/categories";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { name, slug, description } = await request.json();

  await updateCategory(parseInt(id), name, slug, description);
  return Response.json({ success: true });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await deleteCategory(parseInt(id));
  return Response.json({ success: true });
}
