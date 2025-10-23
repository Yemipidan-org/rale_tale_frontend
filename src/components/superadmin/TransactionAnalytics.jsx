"use client";
import React from "react";
import {
  Calendar,
  Building2,
  User,
  ArrowLeftRight,
  BarChart3,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TransactionAnalytics() {
  // ===== Chart Data =====
  const residentialData = {
    labels: ["Flat", "Duplex", "Bungalow", "Penthouse", "Studio"],
    datasets: [
      {
        label: "amount",
        data: [45000, 85000, 110000, 260000, 35000],
        backgroundColor: "#3B82F6", // blue
        borderRadius: 6,
      },
    ],
  };

  const commercialData = {
    labels: ["Office", "Shop", "Warehouse", "Hotel", "Restaurant"],
    datasets: [
      {
        label: "amount",
        data: [130000, 90000, 200000, 350000, 180000],
        backgroundColor: "#22C55E", // green
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: { color: "#9CA3AF" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#9CA3AF" },
        grid: { color: "#1F2937" },
      },
      y: {
        ticks: { color: "#9CA3AF" },
        grid: { color: "#1F2937" },
      },
    },
  };

  // ===== JSX =====
  return (
    <div className="bg-[#181818] text-white rounded-xl p-5 shadow-md space-y-6 mb-6">
      {/* ===== Filters Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Date Range */}
        <div className="flex items-center bg-[#1c1c1c] rounded-lg px-3 py-2">
          <Calendar size={16} className="text-gray-400 mr-2" />
          <input
            type="date"
            className="bg-transparent text-sm text-gray-300 focus:outline-none w-full"
            placeholder="yyyy/mm/dd"
          />
        </div>

        {/* Property Type */}
        <div className="flex items-center bg-[#1c1c1c] rounded-lg px-3 py-2">
          <Building2 size={16} className="text-gray-400 mr-2" />
          <select className="bg-transparent text-sm text-gray-300 focus:outline-none w-full">
            <option>All Properties</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </div>

        {/* User */}
        <div className="flex items-center bg-[#1c1c1c] rounded-lg px-3 py-2">
          <User size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search user"
            className="bg-transparent text-sm text-gray-300 focus:outline-none w-full"
          />
        </div>

        {/* Transaction Type */}
        <div className="flex items-center bg-[#1c1c1c] rounded-lg px-3 py-2">
          <ArrowLeftRight size={16} className="text-gray-400 mr-2" />
          <select className="bg-transparent text-sm text-gray-300 focus:outline-none w-full">
            <option>All Types</option>
            <option>Payment</option>
            <option>Refund</option>
            <option>Deposit</option>
          </select>
        </div>
      </div>

      {/* ===== Filter Buttons ===== */}
      <div className="flex items-center gap-3 flex-wrap">
        <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-lg">
          Apply Filters
        </button>
        <button className="bg-transparent border border-gray-500 text-gray-300 text-sm px-4 py-2 rounded-lg hover:bg-[#2a2a2a]">
          Reset
        </button>
      </div>

      {/* ===== Charts Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Residential Properties */}
        <div className="bg-[#0f0f0f] rounded-lg p-5 shadow flex flex-col">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 size={18} className="text-blue-500" />
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Residential Properties
            </h3>
          </div>
          <Bar data={residentialData} options={chartOptions} />
        </div>

        {/* Commercial Properties */}
        <div className="bg-[#0f0f0f] rounded-lg p-5 shadow flex flex-col">
          <div className="flex items-center space-x-2 mb-4">
            <Building2 size={18} className="text-green-500" />
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Commercial Properties
            </h3>
          </div>
          <Bar data={commercialData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
