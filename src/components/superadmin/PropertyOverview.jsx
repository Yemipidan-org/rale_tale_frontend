"use client";
import React from "react";
import { Search, Home, Calendar, User, DollarSign } from "lucide-react";

export default function PropertyOverview() {
  return (
    <div className="bg-[#181818] text-white rounded-xl p-5 shadow-md space-y-5 mb-6">
      {/* ===== Search Bar ===== */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="flex items-center bg-[#1c1c1c] rounded-lg px-3 py-2 w-full lg:w-auto flex-1">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search properties..."
            className="bg-transparent text-sm text-gray-300 focus:outline-none w-full"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
          Search
        </button>
      </div>

      {/* ===== Filter Bar ===== */}
      <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
        <select className="bg-[#1c1c1c] text-gray-300 rounded-lg px-3 py-2 focus:outline-none border border-[#2a2a2a]">
          <option>All Locations</option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Ibadan</option>
        </select>

        <select className="bg-[#1c1c1c] text-gray-300 rounded-lg px-3 py-2 focus:outline-none border border-[#2a2a2a]">
          <option>All Types</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Office</option>
        </select>

        <select className="bg-[#1c1c1c] text-gray-300 rounded-lg px-3 py-2 focus:outline-none border border-[#2a2a2a]">
          <option>Price Range</option>
          <option>₦0 – ₦1M</option>
          <option>₦1M – ₦10M</option>
          <option>₦10M+</option>
        </select>

        <select className="bg-[#1c1c1c] text-gray-300 rounded-lg px-3 py-2 focus:outline-none border border-[#2a2a2a]">
          <option>All Status</option>
          <option>Available</option>
          <option>Sold</option>
          <option>Pending</option>
        </select>
      </div>

      {/* ===== Stats Summary ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0f0f0f] rounded-lg p-5 flex items-center justify-between shadow">
          <div>
            <p className="text-gray-400 text-sm">Total Properties</p>
            <p className="text-2xl font-bold mt-1">1,234</p>
          </div>
          <Home size={22} className="text-blue-500" />
        </div>

        <div className="bg-[#0f0f0f] rounded-lg p-5 flex items-center justify-between shadow">
          <div>
            <p className="text-gray-400 text-sm">Pending Approvals</p>
            <p className="text-2xl font-bold mt-1">56</p>
          </div>
          <Calendar size={22} className="text-blue-400" />
        </div>

        <div className="bg-[#0f0f0f] rounded-lg p-5 flex items-center justify-between shadow">
          <div>
            <p className="text-gray-400 text-sm">Managed Properties</p>
            <p className="text-2xl font-bold mt-1">892</p>
          </div>
          <User size={22} className="text-blue-400" />
        </div>

        <div className="bg-[#0f0f0f] rounded-lg p-5 flex items-center justify-between shadow">
          <div>
            <p className="text-gray-400 text-sm">Total Value</p>
            <p className="text-2xl font-bold mt-1">₦2.5B</p>
          </div>
          <DollarSign size={22} className="text-blue-400" />
        </div>
      </div>
    </div>
  );
}
