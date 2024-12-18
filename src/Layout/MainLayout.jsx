import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <div>
      <header className="bg-[#074799] ">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
