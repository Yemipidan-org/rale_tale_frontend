/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Clock } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardOverview() {
  const chartData = {
    labels: ["Inspections", "Deposits", "Purchases"],
    datasets: [
      {
        data: [20, 60, 20],
        backgroundColor: ["#3B82F6", "#22C55E", "#9CA3AF"], // Tailwind blue, green, gray
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  const inspections = [
    {
      id: 1,
      time: "Apr 5 at 2:00 PM",
      address: "123 Park Avenue",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80",
    },
    {
      id: 2,
      time: "Apr 8 at 11:00 AM",
      address: "456 Madison Street",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0f0f0f] min-h-scree p-6 text-white">
      {/* Financial Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#181818] rounded-xl p-6 flex flex-col justify-between shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-4xl font-bold text-green-400">$245,000</p>
          <p className="text-gray-400">Total Investment</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="w-40 h-40">
            <Doughnut data={chartData} options={chartOptions} />
          </div>

          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span>Inspections</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Deposits</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              <span>Purchases</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Upcoming Inspections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#181818] rounded-xl p-6 shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">Upcoming Inspections</h2>

        <div className="space-y-4">
          {inspections.map((inspection, index) => (
            <motion.div
              key={inspection.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#333333",
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex items-center space-x-4 bg-[#2a2a2a] rounded-lg p-3 cursor-pointer transition"
            >
              <img
                src={inspection.image}
                alt={inspection.address}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <div className="flex items-center text-sm text-gray-300">
                  <Clock size={14} className="mr-2 text-green-400" />
                  {inspection.time}
                </div>
                <p className="text-gray-400 mt-1">{inspection.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
