import React from "react";
import SidebarMenu from "./SidebarMenu";

const MainLayout = ({ children, bgcColor }) => {
  return (
    <div className="flex h-screen">
      <SidebarMenu />
      <div className={`flex-1 p-6 rounded-3xl shadow-md mx-6 overflow-auto ${bgcColor} `}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;