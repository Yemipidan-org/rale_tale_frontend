"use client";
import React from "react";
import {
  Bell,
  CheckCircle2,
  Info,
  AlertTriangle,
  Wrench,
  Lightbulb,
} from "lucide-react";

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      title: "New Property Listed",
      description:
        'The property "Grand View Apartments" at 123 Main Street has been successfully listed and is now active on the portal.',
      time: "2 hours ago",
      status: "Success",
      icon: <CheckCircle2 className="text-green-500" size={18} />,
    },
    {
      id: 2,
      title: "Inspection Scheduled",
      description:
        'An inspection for "Oceanfront Villa" (456 Beach Blvd) has been scheduled for July 20th, 2024, 10:00 AM.',
      time: "5 hours ago",
      status: "Info",
      icon: <Info className="text-blue-500" size={18} />,
    },
    {
      id: 3,
      title: "Transaction Update",
      description:
        'Payment for "Urban Loft" (789 City Lane) received. Transaction ID: #T20240715-001.',
      time: "1 day ago",
      status: "Success",
      icon: <CheckCircle2 className="text-green-500" size={18} />,
    },
    {
      id: 4,
      title: "New Inquiry",
      description:
        'A potential buyer has submitted an inquiry for "Rustic Farmhouse" (101 Country Road). Please respond within 24 hours.',
      time: "2 days ago",
      status: "Warning",
      icon: <AlertTriangle className="text-orange-500" size={18} />,
    },
    {
      id: 5,
      title: "System Maintenance",
      description:
        "Scheduled system maintenance will occur on July 22nd, 2024, from 1:00 AM to 3:00 AM UTC. Expect brief service interruptions.",
      time: "3 days ago",
      status: "Neutral",
      icon: <Wrench className="text-gray-400" size={18} />,
    },
    {
      id: 6,
      title: "Feature Update",
      description:
        "New analytics dashboard for property performance is now available. Explore detailed insights for your listings.",
      time: "4 days ago",
      status: "Info",
      icon: <Lightbulb className="text-blue-400" size={18} />,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Success":
        return "bg-green-500 text-white";
      case "Info":
        return "bg-blue-500 text-white";
      case "Warning":
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className=" text-white rounded-xl shadow-md space-y-4 mt-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        Recent Activities
      </h2>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-[#1f1f1f] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between border border-transparent hover:border-gray-700 transition"
          >
            <div className="flex items-start sm:items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-[#2a2a2a] rounded-lg">
                {activity.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {activity.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 leading-snug">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                  activity.status
                )}`}
              >
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
