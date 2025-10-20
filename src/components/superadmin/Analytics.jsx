"use client";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { CheckCircle, XCircle, Clock, PlusCircle } from "lucide-react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

export default function Analytics() {
  // Line Chart (Monthly Transactions)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Transactions",
        data: [4000, 3000, 2500, 3200, 2800, 3100],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59,130,246,0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Doughnut Chart (Property Types)
  const doughnutData = {
    labels: ["Houses", "Apartments", "Lands", "Offices"],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: ["#3B82F6", "#22C55E", "#FACC15", "#EF4444"],
        borderWidth: 0,
      },
    ],
  };

  // Bar Chart (User Growth)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users",
        data: [400, 700, 900, 1100, 1300, 1600],
        backgroundColor: "#3B82F6",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
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

  // Recent Activities
  const activities = [
    {
      id: 1,
      icon: <PlusCircle size={16} className="text-green-400" />,
      text: "New user registration: Sarah Johnson",
      time: "2 minutes ago",
    },
    {
      id: 2,
      icon: <XCircle size={16} className="text-red-400" />,
      text: "Property listing rejected: Downtown Apartment",
      time: "15 minutes ago",
    },
    {
      id: 3,
      icon: <Clock size={16} className="text-yellow-400" />,
      text: "Transaction pending: #TRX-2024-001",
      time: "1 hour ago",
    },
    {
      id: 4,
      icon: <CheckCircle size={16} className="text-green-400" />,
      text: "New property listing: Luxury Villa",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {/* Monthly Transactions */}
      <div className="bg-[#181818] rounded-xl p-5 shadow-md">
        <h3 className="text-sm sm:text-base font-semibold mb-4 text-white">
          Monthly Transactions
        </h3>
        <Line data={lineData} options={chartOptions} />
      </div>

      {/* Property Types */}
      <div className="bg-[#181818] rounded-xl p-5 shadow-md flex flex-col items-center justify-center">
        <h3 className="text-sm sm:text-base font-semibold mb-4 text-white">
          Property Types
        </h3>
        <div className="w-48 sm:w-56">
          <Doughnut
            data={doughnutData}
            options={{ plugins: { legend: { display: false } } }}
          />
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-4 text-xs text-gray-400">
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span>Houses</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Apartments</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span>Lands</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span>Offices</span>
          </span>
        </div>
      </div>

      {/* User Growth */}
      <div className="bg-[#181818] rounded-xl p-5 shadow-md">
        <h3 className="text-sm sm:text-base font-semibold mb-4 text-white">
          User Growth
        </h3>
        <Bar data={barData} options={chartOptions} />
      </div>

      {/* Recent Activity */}
      <div className="bg-[#181818] rounded-xl p-5 shadow-md">
        <h3 className="text-sm sm:text-base font-semibold mb-4 text-white">
          Recent Activity
        </h3>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="flex items-start space-x-3 text-sm text-gray-300"
            >
              <div className="mt-1">{activity.icon}</div>
              <div>
                <p>{activity.text}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
