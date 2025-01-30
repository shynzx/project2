import React, { useEffect, useState } from "react";



const ProfileCard = () => {
    
    
    return (
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src='' alt={email} />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{email}</h2>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="mt-4 text-gray-700">Correo verificado: {emailVerified}</p>
        </div>
      </div>
    );
  };
  
  const Dashboard = () => {
    const profile = {
      email: 'John Doe',
      role: 'Software Engineer',
      emailVerified: 'True',
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <ProfileCard {...profile} />
      </div>
    );
  };
  
  export default Dashboard;