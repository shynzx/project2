import react from "react";
export default function CrudButtons () {
    return (
      <div className="flex gap-4 p-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Modificar proyecto
        </button>
        <button  
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
          Eliminar proyecto
        </button>
      </div>
    );
  };

  