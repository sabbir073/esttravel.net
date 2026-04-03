"use client";

import { signOut, useSession } from "next-auth/react";
import { LogOut, User } from "lucide-react";

export function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <User className="w-4 h-4" />
          {session?.user?.name || "Admin"}
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </header>
  );
}
