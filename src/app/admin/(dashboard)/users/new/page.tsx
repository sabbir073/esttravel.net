import { UserForm } from "@/components/admin/UserForm";

export const dynamic = "force-dynamic";

export default function NewUserPage() {
  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-text mb-8">
        Create New User
      </h1>
      <UserForm />
    </div>
  );
}
