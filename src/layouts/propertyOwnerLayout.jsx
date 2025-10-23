import { Outlet } from "react-router-dom";

export default function PropertyOwnerLayout() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* You can add a sidebar/topbar here if needed */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
