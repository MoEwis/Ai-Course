import SideBar from "./_componets/SideBar";
import Header from "./_componets/Header";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="md:w-64 hidden md:flex flex-col">
        <SideBar />
      </div>
      {/* Main content */}
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow p-5 overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
