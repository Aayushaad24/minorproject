import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#547792] text-white">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
