import { useState } from "react";
import SuperAdminTopNav from "../components/superadmin/TopNav";
import SuperAdminSidebar from "../components/superadmin/Sidebar";
import DashboardContent from "../pages/SuperAdmin/Dashboard";

export default function SuperAdminLayout() {
  const [currentComponent, setCurrentComponent] = useState(
    <DashboardContent />
  );
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuSelect = (component, menuName) => {
    setCurrentComponent(component);
    setActiveMenu(menuName);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <SuperAdminTopNav />
      <div className="flex">
        <SuperAdminSidebar
          onMenuSelect={handleMenuSelect}
          activeMenu={activeMenu}
        />
        <main className="flex-1 p-6 ml-64">{currentComponent}</main>
      </div>
    </div>
  );
}
