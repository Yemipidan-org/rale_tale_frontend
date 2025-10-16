/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Bell, ChevronDown, Search } from "lucide-react";

export default function SuperAdminTopNav() {
  return (
    <nav className="w-full bg-[#0f0f0f] border-b border-[#1f1f1f] text-white px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* LEFT SECTION: Logo */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#3B82F6"
          className="w-6 h-6"
        >
          <path d="M12 3l9 7-1.5 1.3L12 5.4 4.5 11.3 3 10l9-7zM4 12h16v8H4v-8zm2 2v4h12v-4H6z" />
        </svg>
        <span className="text-lg font-semibold">Raletale</span>
      </div>

      {/* CENTER: Search Bar */}
      <div className="hidden md:flex items-center bg-[#1c1c1c] rounded-lg px-3 py-1 w-full max-w-xs mx-4">
        <Search size={16} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-gray-300 focus:outline-none w-full"
        />
      </div>

      {/* RIGHT: Notifications + Profile */}
      <div className="flex items-center space-x-5">
        {/* Notification Icon */}
        <div className="relative">
          <Bell size={20} className="text-gray-300 cursor-pointer" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full"></span>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-600"
          />
          <span className="hidden sm:block text-sm font-medium text-gray-200">
            John Doe
          </span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </nav>
  );
}
