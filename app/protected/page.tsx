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
  if (user.role === 'administrador') {


    return (
      <div className="bg-gray-100 font-sans min-h-screen p-6">
            <div className="container mx-auto">
                {/* Dashboard Header */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Project Dashboard</h1>

                {/* Project Information Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Project: Website Redesign</h2>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <strong>Status:</strong> <span className="text-blue-500">In Progress</span>
                        </p>
                        <p className="text-gray-600">
                            <strong>Progress:</strong> <span className="text-green-500">65%</span>
                        </p>
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Team Members</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>John Doe (Project Manager)</li>
                        <li>Jane Smith (Designer)</li>
                        <li>Mike Johnson (Developer)</li>
                        <li>Sarah Lee (QA Tester)</li>
                    </ul>
                </div>

                {/* Recent Updates Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Updates</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>2023-10-01: Design phase completed.</li>
                        <li>2023-10-05: Development phase started.</li>
                        <li>2023-10-10: Initial testing completed.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
  if (user.role === 'empleado'){
    return (
      <div className="bg-gray-100 font-sans min-h-screen p-6">
            <div className="container mx-auto">
                {/* Dashboard Header */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Employee Dashboard</h1>

                {/* Welcome Message */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome, Jane Smith!</h2>
                    <p className="text-gray-600">
                        Here's an overview of your tasks and updates.
                    </p>
                </div>

                {/* Current Tasks Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Current Tasks</h2>
                    <ul className="space-y-3">
                        <li className="text-gray-600">
                            <strong>Task:</strong> Redesign homepage layout
                            <br />
                            <strong>Deadline:</strong> 2023-10-20
                            <br />
                            <strong>Status:</strong> <span className="text-yellow-500">In Progress</span>
                        </li>
                        <li className="text-gray-600">
                            <strong>Task:</strong> Implement responsive navigation
                            <br />
                            <strong>Deadline:</strong> 2023-10-25
                            <br />
                            <strong>Status:</strong> <span className="text-blue-500">Not Started</span>
                        </li>
                    </ul>
                </div>

                {/* Progress Overview Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Progress</h2>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <strong>Completed Tasks:</strong> 12
                        </p>
                        <p className="text-gray-600">
                            <strong>Pending Tasks:</strong> 3
                        </p>
                        <p className="text-gray-600">
                            <strong>Overall Progress:</strong> <span className="text-green-500">80%</span>
                        </p>
                    </div>
                </div>

                {/* Recent Updates Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Updates</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>2023-10-12: Feedback received on homepage design.</li>
                        <li>2023-10-10: Responsive navigation requirements finalized.</li>
                        <li>2023-10-08: Completed user profile page redesign.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }

  return(
    <div className="flex-1 w-full flex flex-col gap-12">
        <div className="w-full">
          <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
            <InfoIcon size="16" strokeWidth={2} />
            Esta es una pagina protegida, solo se puede acceder siendo un usuario autenticado.
          </div>


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
                    <tr className="bg-slate-500">
                      <td className="py-2 px-4 border-b">Email</td>
                      <td className="py-2 px-4 border-b">{user.email}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Role</td>
                      <td className="py-2 px-4 border-b">{user.role}</td>
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
              <p className="flex justify-center">Tu rol no es valido.</p>
              
            </div>
          </div>
        </div>
      </div>
  )
}