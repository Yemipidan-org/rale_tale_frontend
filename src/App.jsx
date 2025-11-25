import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/home";
import ListingPage from "./pages/searchResultPage/page";
import VirtualInspection from "./pages/virtualInspection/page";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/signup";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SuperAdminLayout from "./layouts/superAdminLayout";
import DashboardSuperAdmin from "./pages/SuperAdmin/Dashboard";
import PropertyOwnerLayout from "./layouts/propertyOwnerLayout";
import DashboardPropertyOwner from "./pages/ProperyOwner/Dashboard";
import NotFound from "./pages/NotFound";

// Role-based redirect component
const RoleBasedRedirect = () => {
  const userRole = localStorage.getItem("userRole");

  switch (userRole?.toLowerCase()) {
    case "admin":
      return <Navigate to="/superAdmin" replace />;
    case "owner":
    case "agent":
      return <Navigate to="/propertyOwner" replace />;
    default:
      return <Navigate to="/dashboard" replace />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/searchResult" element={<ListingPage />} />
          <Route path="/vi" element={<VirtualInspection />} />
        </Route>
        {/* Auth pages (no layout wrapper) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        {/* Protected Dashboard routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* User Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* later you can add more */}
          {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard/settings" element={<Settings />} /> */}
        </Route>

        {/* SuperAdmin */}
        <Route element={<SuperAdminLayout />}>
          <Route path="/superAdmin" element={<DashboardSuperAdmin />} />
          {/* later you can add more */}
          {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard/settings" element={<Settings />} /> */}
        </Route>

        {/* Property Owner or agent */}
        <Route element={<PropertyOwnerLayout />}>
          <Route path="/propertyOwner" element={<DashboardPropertyOwner />} />
          {/* later you can add more */}
          {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
        </Route>

        {/* Role-based redirect for dashboard root */}
        <Route path="/dashboard-redirect" element={<RoleBasedRedirect />} />

        {/* 404 Not Found - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
