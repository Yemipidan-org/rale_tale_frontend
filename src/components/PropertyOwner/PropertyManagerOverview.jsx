"use client";
import React from "react";
import { Home, Hourglass, Layers, Eye } from "lucide-react";

export default function PropertyManagerOverview() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const stats = [
    {
      id: 1,
      title: "Properties Uploaded",
      value: "250",
      icon: <Home className="text-green-500" size={18} />,
    },
    {
      id: 2,
      title: "Pending Approval",
      value: "12",
      icon: <Hourglass className="text-orange-500" size={18} />,
    },
    {
      id: 3,
      title: "Active Listings",
      value: "180",
      icon: <Layers className="text-blue-500" size={18} />,
    },
    {
      id: 4,
      title: "Total Views",
      value: "14,500",
      icon: <Eye className="text-purple-500" size={18} />,
    },
  ];

  return (
    <div className="space-y-6">
      {/* ===== Header Section ===== */}
      <div className="bg-[#e8faef] dark:bg-[#d8f7e0] flex flex-col sm:flex-row justify-between items-center rounded-2xl p-6">
        <div>
          <p className="text-gray-600 text-sm mb-2">{today}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            Welcome Back, Property Manager!
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Here's an overview of your property portfolio performance.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1505842465776-3d90f616310f?auto=format&fit=crop&w=300&q=60"
          alt="Property banner"
          className="w-32 h-32 rounded-lg object-cover mt-4 sm:mt-0"
        />
      </div>

      {/* ===== Quick Stats Section ===== */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-white">Quick Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#f8f9fa] dark:bg-[#181818] rounded-xl p-5 flex flex-col items-start shadow hover:bg-[#f3f4f6] dark:hover:bg-[#1f1f1f] transition"
            >
              <div className="flex items-center justify-between w-full">
                <h3 className="text-sm text-gray-500">{stat.title}</h3>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
