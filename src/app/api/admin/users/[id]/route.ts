import { auth } from "@/lib/auth";
import { getUserById, updateUser, deleteUser, getUserCount } from "@/lib/users";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const user = await getUserById(parseInt(id));
  if (!user) return Response.json({ error: "Not found" }, { status: 404 });

  return Response.json({ user });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();

  if (body.password && body.password.length < 6) {
    return Response.json(
      { error: "Password must be at least 6 characters" },
      { status: 400 }
    );
  }

  if (body.username && !/^[a-zA-Z0-9_.-]{3,50}$/.test(body.username)) {
    return Response.json(
      { error: "Username must be 3-50 characters, letters/numbers/._- only" },
      { status: 400 }
    );
  }

  try {
    await updateUser(parseInt(id), body);
    return Response.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update user";
    if (message.includes("Duplicate entry")) {
      return Response.json({ error: "Username already exists" }, { status: 409 });
    }
    console.error("Update user failed:", err);
    return Response.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  // Prevent deleting the last admin
  try {
    const count = await getUserCount();
    if (count <= 1) {
      return Response.json(
        { error: "Cannot delete the last admin user" },
        { status: 400 }
      );
    }

    // Prevent deleting yourself
    if (session.user?.id === id) {
      return Response.json(
        { error: "Cannot delete your own account" },
        { status: 400 }
      );
    }

    await deleteUser(parseInt(id));
    return Response.json({ success: true });
  } catch (err) {
    console.error("Delete user failed:", err);
    return Response.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
