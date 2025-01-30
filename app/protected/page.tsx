import { createClient } from "@/utils/supabase/server";
import { signOutAction } from "@/app/actions";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/sidebar";
import CrudButtons from "@/components/buttonsproyects";
import React, { useState, useEffect } from "react";

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
      <div className="w-full flex justify-center border-b border-b-foreground/10 h-">
        <Sidebar />
        <div className="bg-gray-100 font-sans min-h-screen p-6 ml-64 flex-1">
          <div className="container mx-auto">
            {/* Dashboard Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard de proyectos</h1>
            <p className="text-center mb-4">
              <strong className="text-xl font-semibold text-gray-700 mb-4">Bienvenido, administrador {user.email}</strong>
            </p>
            {/* Project Information Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Proyecto: Rediseño de la pagina de perfil.</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Status:</strong> <span className="text-blue-500">Finalizado</span>
                </p>
                <p className="text-gray-600">
                  <strong>Progress:</strong> <span className="text-green-500">100%</span>
                </p>
                <CrudButtons />
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Proyecto: Rediseño del layout de página de inicio.</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Status:</strong> <span className="text-blue-500">En progreso</span>
                </p>
                <p className="text-gray-600">
                  <strong>Progress:</strong> <span className="text-yellow-600">65%</span>
                </p>
                <CrudButtons />
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Proyecto: Implementar navegación responsiva.</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Status:</strong> <span className="text-blue-500">Sin empezar</span>
                </p>
                <p className="text-gray-600">
                  <strong>Progress:</strong> <span className="text-red-800">0%</span>
                </p>
                <CrudButtons />
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6 justify-center flex">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
              Crear proyecto
            </button>
            </div>

            {/* Team Members Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Miembros del equipo</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>{user.email}</li>
                <li>mauhudzon@gmail.com</li>
                <li>dodobelle@outlook.es</li>
              </ul>
            </div>

            {/* Recent Updates Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Actualizaciones recientes</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>2023-10-01: Fase de diseño completada.</li>
                <li>2023-10-05: Fase de desarollo iniciada.</li>
                <li>2023-10-10: Inicio de pruebas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (user.role === 'empleado') {
    return (
      <div className="w-full flex justify-center border-b border-b-foreground/10 h-">
        <Sidebar />
        <div className="bg-gray-100 font-sans min-h-screen p-6 ml-64 flex-1">
          <div className="container mx-auto">
            {/* Dashboard Header */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>

            {/* Welcome Message */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Bienvenido empleado, {user.email}!</h2>
              <p className="text-gray-600">
                Resumen de tus tareas y noticias.
              </p>
            </div>

            {/* Current Tasks Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Tus tareas actuales</h2>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  <strong>Tarea:</strong> Rediseñar layout de la página de inicio
                  <br />
                  <strong>Fecha de entrega:</strong> 2025-10-20
                  <br />
                  <strong>Status:</strong> <span className="text-yellow-500">En progreso...</span>
                </li>
                <li className="text-gray-600">
                  <strong>Tarea:</strong> Implementar navegación responsiva
                  <br />
                  <strong>Fecha de entrega:</strong> 2025-10-25
                  <br />
                  <strong>Status:</strong> <span className="text-blue-500">Sin empezar</span>
                </li>
              </ul>
            </div>

            {/* Progress Overview Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Tu progreso</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <strong>Tareas completadas:</strong> 12
                </p>
                <p className="text-gray-600">
                  <strong>Tareas pendientes:</strong> 3
                </p>
                <p className="text-gray-600">
                  <strong>Progreso total:</strong> <span className="text-green-500">80%</span>
                </p>
              </div>
              
            </div>
            

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Noticias recientes</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>2025-10-12: Comentarios recibidos en el rediseño de la página de inicio.</li>
                <li>2025-10-10: Requerimientos de navegación responsiva completados.</li>
                <li>2025-10-08: Completedado rediseño de pagina de perfiles.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
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