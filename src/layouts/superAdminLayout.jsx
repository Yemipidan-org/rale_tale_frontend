import { Outlet } from "react-router-dom";
import SuperAdminTopNav from "../components/superadmin/TopNav";
import SuperAdminSidebar from "../components/superadmin/Sidebar";

export default function SuperAdminLayout() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* You can add a sidebar/topbar here if needed */}
          <SuperAdminTopNav />
          <SuperAdminSidebar/>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
