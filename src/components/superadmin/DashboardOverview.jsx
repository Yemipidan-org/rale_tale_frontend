"use client";
import React from "react";
import { Users, Building2, Wallet, LineChart } from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: "2,543",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      change: "+12.5%",
      color: "text-blue-500",
    },
    {
      id: 2,
      title: "Total Properties",
      value: "1,234",
      icon: <Building2 className="w-6 h-6 text-green-500" />,
      change: "+8.2%",
      color: "text-green-500",
    },
    {
      id: 3,
      title: "Total Transactions",
      value: "892",
      icon: <Wallet className="w-6 h-6 text-yellow-500" />,
      change: "+15.3%",
      color: "text-yellow-500",
    },
    {
      id: 4,
      title: "Revenue",
      value: "$128.5K",
      icon: <LineChart className="w-6 h-6 text-red-500" />,
      change: "+23.1%",
      color: "text-red-500",
    },
  ];

  return (
    <div className="  text-white   rounded-xl shadow-md mb-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-5">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-[#181818] rounded-lg p-4 sm:p-5 flex flex-col justify-between shadow hover:bg-[#1f1f1f] transition"
          >
            <div className="flex items-start justify-between mb-4">
              <span>{item.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-green-500">
                {item.change}
              </span>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold">{item.value}</p>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
