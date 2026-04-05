import Link from "next/link";
import { getAllUsers } from "@/lib/users";
import { UsersTable } from "@/components/admin/UsersTable";
import type { AdminUser } from "@/lib/types";
import { PlusCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  let users: AdminUser[] = [];
  try {
    users = await getAllUsers();
  } catch {
    // DB unavailable
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-text">Users</h1>
          <p className="text-text-secondary text-sm mt-1">
            {users.length} admin user{users.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/admin/users/new"
          className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          New User
        </Link>
      </div>

      <UsersTable users={users} />
    </div>
  );
}
