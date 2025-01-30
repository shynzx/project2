import { createClient } from "@/utils/supabase/server";
import { signOutAction } from "@/app/actions";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import React from "react";

export default async function ProtectedPage() {
  const supabase = await createClient();

  // Get the authenticated user
  const { data: { user } } = await supabase.auth.getUser();

  // Redirect if the user is not authenticated
  if (!user) {
    return redirect("/sign-in");
  }

  // Log the user data
  console.log(user);

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Esta es una pagina protegida, solo se puede acceder siendo un usuario autenticado.
        </div>

        {/* Display user data */}
        <div className="mt-6 p-6 bg-gray-600 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">Información de usuario.</h2>
          <div className="">
            <div className="flex justify-center m-2">
            <table className="min-w-fu border table-fixed border-gray-300">
              <thead>
                <tr className="bg-slate-800">
                  <th className="py-2 px-4 border-b text-left">Dato</th>
                  <th className="py-2 px-4 border-b text-left">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">ID</td>
                  <td className="py-2 px-4 border-b">{user.id}</td>
                </tr>
                <tr className="bg-slate-500">
                  <td className="py-2 px-4 border-b">Email</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Role</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                </tr>
                <tr className="bg-slate-500">
                  <td className="py-2 px-4 border-b">Email Verified</td>
                  <td className="py-2 px-4 border-b">
                    {user.email_confirmed_at ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Created At</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(user.created_at).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className="flex justify-center m-2">
            <form action={signOutAction}>
            <Button type="submit" variant={"outline"}>
              Cerrar sesión
            </Button>
          </form>
          </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}