import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

      <Sidebar />
      <main>
        <div
          className={`main-container ${showSidebar ? "" : 'shrink-container'}`}
        >
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
