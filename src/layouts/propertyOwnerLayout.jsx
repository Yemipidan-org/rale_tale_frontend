import { useState } from "react";
import SuperAdminSidebar from "../components/superadmin/Sidebar";
import SuperAdminTopNav from "../components/superadmin/TopNav";
import {
  LayoutDashboard,
  Upload,
  Building2,
  CalendarCheck,
  Wallet,
  Settings,
  HelpCircle,
} from "lucide-react";

// Import your property owner components
import DashboardContent from "../pages/ProperyOwner/Dashboard";
import UploadPropertyContent from "../pages/ProperyOwner/UploadProperty";
import MyPropertiesContent from "../pages/ProperyOwner/MyProperties";
import InspectionContent from "../pages/ProperyOwner/Inspection";
import TransactionsContent from "../pages/ProperyOwner/Transactions";
import SettingsContent from "../pages/ProperyOwner/Settings";
import SupportContent from "../pages/ProperyOwner/Support";

export default function PropertyOwnerLayout() {
  const [currentComponent, setCurrentComponent] = useState(
    <DashboardContent />
  );
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      component: <DashboardContent />,
    },
    {
      name: "Upload Property",
      icon: <Upload size={18} />,
      component: <UploadPropertyContent />,
    },
    {
      name: "My Properties",
      icon: <Building2 size={18} />,
      component: <MyPropertiesContent />,
    },
    {
      name: "Inspection",
      icon: <CalendarCheck size={18} />,
      component: <InspectionContent />,
    },
    {
      name: "Transactions",
      icon: <Wallet size={18} />,
      component: <TransactionsContent />,
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      component: <SettingsContent />,
    },
    {
      name: "Support",
      icon: <HelpCircle size={18} />,
      component: <SupportContent />,
    },
  ];

  const handleMenuSelect = (component, menuName) => {
    setCurrentComponent(component);
    setActiveMenu(menuName);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex">
        <SuperAdminSidebar
          menuItems={menuItems}
          onMenuSelect={handleMenuSelect}
          activeMenu={activeMenu}
        />
        <div className="w-full">
          <SuperAdminTopNav />
          <main className="p-6">{currentComponent}</main>
        </div>
      </div>
    </div>
  );
}
