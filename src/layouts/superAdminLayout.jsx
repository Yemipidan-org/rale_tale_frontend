import { useState } from "react";
import SuperAdminTopNav from "../components/superadmin/TopNav";
import SuperAdminSidebar from "../components/superadmin/Sidebar";

import DashboardContent from "../pages/SuperAdmin/Dashboard";
import UsersContent from "../pages/SuperAdmin/Users";
import PropertiesContent from "../pages/SuperAdmin/Properties";
import TransactionsContent from "../pages/SuperAdmin/Transactions";
import DocumentsContent from "../pages/SuperAdmin/Documents";
import NotificationsContent from "../pages/SuperAdmin/Notifications";
import ReportsContent from "../pages/SuperAdmin/Reports";
import SettingsContent from "../pages/SuperAdmin/Settings";
import {
  Home,
  Users,
  Building2,
  FileText,
  Bell,
  BarChart2,
  Settings,
  Wallet,
} from "lucide-react";

  const menuItems = [
    {
      name: "Dashboard",
      icon: <Home size={18} />,
      component: <DashboardContent />,
    },
    {
      name: "Users Management",
      icon: <Users size={18} />,
      component: <UsersContent />,
    },
    {
      name: "Property Management",
      icon: <Building2 size={18} />,
      component: <PropertiesContent />,
    },
    {
      name: "Transactions",
      icon: <Wallet size={18} />,
      component: <TransactionsContent />,
    },
    {
      name: "Legal Documents",
      icon: <FileText size={18} />,
      component: <DocumentsContent />,
    },
    {
      name: "Notifications",
      icon: <Bell size={18} />,
      component: <NotificationsContent />,
    },
    {
      name: "Reports",
      icon: <BarChart2 size={18} />,
      component: <ReportsContent />,
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      component: <SettingsContent />,
    },
  ];
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
      <div className="flex">
        <SuperAdminSidebar
          onMenuSelect={(component, menuName) =>
            handleMenuSelect(component, menuName)
          }
          activeMenu={activeMenu}
          menuItems={menuItems}
        />
        <div className="w-full">
          <SuperAdminTopNav />
          <main className="flex-1 p-6 ">{currentComponent}</main>
        </div>
      </div>
    </div>
  );
}
