import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <div>
      <header className="shadow-navShadow">
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
