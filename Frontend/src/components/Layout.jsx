import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main>
        <Navbar />

        {/* Placeholder for child routes */}
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
