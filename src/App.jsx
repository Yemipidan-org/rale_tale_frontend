import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/searchResult" element={<ListingPage />} />
          <Route path="/vi" element={<VirtualInspection />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* later you can add more */}
          {/* <Route path="/dashboard/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
