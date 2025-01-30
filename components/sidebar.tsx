import React from 'react';
import { createClient } from "@/utils/supabase/server";

export default async function Sidebar () {
    const supabase = await createClient();
    const {
        data: { user },
      } = await supabase.auth.getUser();

    if (user?.role!== 'administrador'){
        return (
            <div className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 p-6">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <ul className="space-y-4">
                <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-white">
                        <span className="mr-2">🏠</span>
                        Inicio 
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-white">
                        <span className="mr-2">📂</span>
                        Proyectos
                    </a>
                </li>
            </ul>
            <div className="absolute bottom-6 left-6">
                <p className="text-gray-400 text-sm">© 2025 Login Proyectos</p>
            </div>
        </div>
        )
    }
    return (
        <div className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 p-6">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <ul className="space-y-4">
                <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-white">
                        <span className="mr-2">🏠</span>
                        Inicio 
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-white">
                        <span className="mr-2">📊</span>
                        Empleados
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center text-gray-300 hover:text-white">
                        <span className="mr-2">📂</span>
                        Proyectos
                    </a>
                </li>
            </ul>
            <div className="absolute bottom-6 left-6">
                <p className="text-gray-400 text-sm">© 2025 Login Proyectos</p>
            </div>
        </div>
    );
};
