"use client";
import React from "react";
import { Users, CheckCircle, PauseCircle, TrendingUp } from "lucide-react";

export default function UsersOverview() {
  const userStats = [
    {
      id: 1,
      title: "Total Users",
      value: "12,543",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      id: 2,
      title: "Active Users",
      value: "10,234",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    },
    {
      id: 3,
      title: "Suspended",
      value: "234",
      icon: <PauseCircle className="w-6 h-6 text-red-500" />,
    },
    {
      id: 4,
      title: "New This Month",
      value: "892",
      icon: <TrendingUp className="w-6 h-6 text-sky-500" />,
    },
  ];

  const roleDistribution = [
    { role: "Landlords", count: 4521 },
    { role: "Agents", count: 3892 },
    { role: "Seekers", count: 3230 },
    { role: "Admins", count: 900 },
  ];

  return (
    <div className="space-y-6 mb-6">
      {/* ====== Top User Stats ====== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {userStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#181818] rounded-lg p-5 flex flex-col justify-between shadow hover:bg-[#1f1f1f] transition"
          >
            <div className="flex items-center justify-between mb-2">
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-2xl sm:text-3xl font-bold mt-1">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ====== User Distribution by Role ====== */}
      <div className="bg-[#181818] rounded-lg p-5 shadow-md">
        <h3 className="text-sm sm:text-base font-semibold mb-4 text-white">
          User Distribution by Role
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roleDistribution.map((role, index) => (
            <div key={index} className="space-y-1">
              <p className="text-gray-300 text-sm">{role.role}</p>
              <p className="text-2xl font-semibold">
                {role.count.toLocaleString()}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-[#2a2a2a] rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${(role.count / 5000) * 100}%`, // scaled example
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
