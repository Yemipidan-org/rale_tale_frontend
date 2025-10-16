"use client";
import React, { useState } from "react";
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
import { Link } from "react-router-dom";


export default function SuperAdminSidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, link: "/superadmin" },
    {
      name: "Users Management",
      icon: <Users size={18} />,
      link: "/superadmin/users",
    },
    {
      name: "Property Management",
      icon: <Building2 size={18} />,
      link: "/superadmin/properties",
    },
    {
      name: "Transactions",
      icon: <Wallet size={18} />,
      link: "/superadmin/transactions",
    },
    {
      name: "Legal Documents",
      icon: <FileText size={18} />,
      link: "/superadmin/documents",
    },
    {
      name: "Notifications",
      icon: <Bell size={18} />,
      link: "/superadmin/notifications",
    },
    {
      name: "Reports",
      icon: <BarChart2 size={18} />,
      link: "/superadmin/reports",
    },
    {
      name: "Settings",
      icon: <Settings size={18} />,
      link: "/superadmin/settings",
    },
  ];

  return (
    <aside className="bg-[#0f0f0f] text-gray-300 w-64 min-h-screen border-r border-[#1f1f1f] hidden md:flex flex-col">
      {/* Logo Section */}
      {/* <div className="flex items-center space-x-2 px-6 py-4 border-b border-[#1f1f1f]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#3B82F6"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M12 3l9 7-1.5 1.3L12 5.4 4.5 11.3 3 10l9-7zM4 12h16v8H4v-8zm2 2v4h12v-4H6z" />
        </svg>
        <h1 className="text-lg font-semibold text-white">Raletale</h1>
      </div> */}

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            onClick={() => setActive(item.name)}
            className={`flex items-center space-x-3 px-6 py-3 text-sm font-medium transition ${
              active === item.name
                ? "bg-blue-600 text-white"
                : "hover:bg-[#1c1c1c] text-gray-400"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
