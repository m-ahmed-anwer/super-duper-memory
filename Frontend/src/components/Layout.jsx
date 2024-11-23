import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main>
        <Navbar />

        {/* Placeholder for child routes */}
        <Outlet />

        <Footer />
      </main>
    </>
  );
}

export default Layout;
