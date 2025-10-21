"use client";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function PropertyAnalytics() {
  // ===== Property Types Doughnut Chart =====
  const propertyTypeData = {
    labels: ["Residential", "Commercial", "Industrial", "Land"],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ["#22C55E", "#3B82F6", "#F59E0B", "#EF4444"], // green, blue, orange, red
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    plugins: { legend: { display: false } },
    cutout: "70%",
  };

  // ===== Status Distribution Bar Chart =====
  const statusDistributionData = {
    labels: ["Lagos", "Abuja", "Kano", "Ibadan"],
    datasets: [
      {
        label: "Pending",
        data: [20, 15, 10, 18],
        backgroundColor: "#F59E0B",
        borderRadius: 4,
      },
      {
        label: "Verified",
        data: [45, 35, 25, 30],
        backgroundColor: "#22C55E",
        borderRadius: 4,
      },
      {
        label: "Managed",
        data: [25, 20, 15, 15],
        backgroundColor: "#3B82F6",
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    plugins: { legend: { display: false } },
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* ===== Property Type Distribution ===== */}
      <div className="bg-[#181818] rounded-xl p-5 shadow-md flex flex-col items-center">
        <h3 className="text-sm sm:text-base font-semibold mb-4 text-white self-start">
          Property Types Distribution
        </h3>

        <div className="w-48 sm:w-56">
          <Doughnut data={propertyTypeData} options={doughnutOptions} />
        </div>

        {/* Legend */}
        <div className="flex justify-center flex-wrap gap-4 mt-4 text-xs text-gray-400">
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Residential</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>Commercial</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>Industrial</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span>Land</span>
          </span>
        </div>
      </div>

      {/* ===== Status Distribution by Location ===== */}
      <div className="bg-[#181818] rounded-xl p-5 shadow-md">
        <h3 className="text-sm sm:text-base font-semibold mb-4 text-white">
          Status Distribution by Location
        </h3>
        <Bar data={statusDistributionData} options={barOptions} />

        {/* Legend */}
        <div className="flex justify-center flex-wrap gap-4 mt-4 text-xs text-gray-400">
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>Pending</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Verified</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>Managed</span>
          </span>
        </div>
      </div>
    </div>
  );
}
