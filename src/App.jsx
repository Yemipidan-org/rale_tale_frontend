import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <Route path="/dashboard" element={<Dashboard />} />
          {/* later you can add more */}
          {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard/settings" element={<Settings />} /> */}
        </Route>

        <Route
          element={
            // <ProtectedRoute>
            <SuperAdminLayout />
            // </ProtectedRoute>
          }
        >
          <Route path="/superAdmin" element={<DashboardSuperAdmin />} />
          {/* later you can add more */}
          {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard/settings" element={<Settings />} /> */}
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
