import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Dashboard />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
