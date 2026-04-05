import { auth } from "@/lib/auth";
import { getAllUsers, createUser } from "@/lib/users";

export async function GET() {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const users = await getAllUsers();
    return Response.json({ users });
  } catch (err) {
    console.error("Failed to fetch users:", err);
    return Response.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { username, password, display_name, email, role } = await request.json();

  if (!username || !password || !display_name) {
    return Response.json(
      { error: "Username, password, and display name are required" },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return Response.json(
      { error: "Password must be at least 6 characters" },
      { status: 400 }
    );
  }

  if (!/^[a-zA-Z0-9_.-]{3,50}$/.test(username)) {
    return Response.json(
      { error: "Username must be 3-50 characters, letters/numbers/._- only" },
      { status: 400 }
    );
  }

  try {
    const id = await createUser(
      username,
      password,
      display_name,
      email,
      role === "admin" ? "admin" : "editor"
    );
    return Response.json({ id }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create user";
    if (message.includes("Duplicate entry")) {
      return Response.json({ error: "Username already exists" }, { status: 409 });
    }
    console.error("Create user failed:", err);
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}
