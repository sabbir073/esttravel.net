import { notFound } from "next/navigation";
import { UserForm } from "@/components/admin/UserForm";
import { getUserById } from "@/lib/users";

export const dynamic = "force-dynamic";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserById(parseInt(id));
  if (!user) return notFound();

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-text mb-8">
        Edit User
      </h1>
      <UserForm user={user} />
    </div>
  );
}
