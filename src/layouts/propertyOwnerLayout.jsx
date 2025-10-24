import { Outlet } from "react-router-dom";
import SuperAdminSidebar from "../components/superadmin/Sidebar";
import SuperAdminTopNav from "../components/superadmin/TopNav";
import Home from "../pages/Home/home";
import { BarChart2, Bell, Building2, FileText, Settings, Users, Wallet } from "lucide-react";


 const menuItems = [
    {
      name: "Dashboard",
      icon: <Home size={18} />,
    //   component: <DashboardContent />,
    },
    {
      name: "Users Management",
      icon: <Users size={18} />,
    //   component: <UsersContent />,
    },
    {
      name: "Property Management",
      icon: <Building2 size={18} />,
    //   component: <PropertiesContent />,
    },
    {
      name: "Transactions",
      icon: <Wallet size={18} />,
    //   component: <TransactionsContent />,
    },
    {
      name: "Legal Documents",
      icon: <FileText size={18} />,
    //   component: <DocumentsContent />,
    },
    {
      name: "Notifications",
      icon: <Bell size={18} />,
    //   component: <NotificationsContent />,
    },
    {
      name: "Reports",
      icon: <BarChart2 size={18} />,
    //   component: <ReportsContent />,
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
    //   component: <SettingsContent />,
    },
];
  
export default function PropertyOwnerLayout() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex">
        <SuperAdminSidebar menuItems={menuItems} />
        <div className="w-full">
          <SuperAdminTopNav />
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
