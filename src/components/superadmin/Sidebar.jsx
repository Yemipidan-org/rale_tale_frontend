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

import DashboardContent from "../../pages/SuperAdmin/Dashboard";
import UsersContent from "../../pages/SuperAdmin/Users";
import PropertiesContent from "../../pages/SuperAdmin/Properties";
import TransactionsContent from "../../pages/SuperAdmin/Transactions";
import DocumentsContent from "../../pages/SuperAdmin/Documents";
import NotificationsContent from "../../pages/SuperAdmin/Notifications";
import ReportsContent from "../../pages/SuperAdmin/Reports";
import SettingsContent from "../../pages/SuperAdmin/Settings";

export default function SuperAdminSidebar({ onMenuSelect, activeMenu }) {
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

  return (
    <aside className="bg-[#0f0f0f] text-gray-300 w-64 min-h-screen border-r border-[#1f1f1f] fixed left-0 top-0  ">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 px-6 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#3B82F6"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M12 3l9 7-1.5 1.3L12 5.4 4.5 11.3 3 10l9-7zM4 12h16v8H4v-8zm2 2v4h12v-4H6z" />
        </svg>
        <h1 className="text-lg font-semibold text-white">Raletale</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => onMenuSelect(item.component, item.name)}
            className={`flex items-center w-full space-x-3 px-6 py-3 text-sm font-medium transition ${
              activeMenu === item.name
                ? "bg-blue-600 text-white"
                : "hover:bg-[#1c1c1c] text-gray-400"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
