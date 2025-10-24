"use client";
import React, { useState } from "react";


export default function SuperAdminSidebar({ onMenuSelect, activeMenu, menuItems }) {


  return (
    <aside className="bg-[#0f0f0f] text-gray-300 min-w-70 min-h-screen border-r border-[#1f1f1f]  left-0 top-0  ">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 px-6 py-4">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#3B82F6"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M12 3l9 7-1.5 1.3L12 5.4 4.5 11.3 3 10l9-7zM4 12h16v8H4v-8zm2 2v4h12v-4H6z" />
        </svg>
        <h1 className="text-lg font-semibold text-white">Raletale</h1> */}
        <img src="./logo.jpg" alt="Logo" className="w-44 rounded" />
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
