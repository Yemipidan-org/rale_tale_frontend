"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      property: "234 Central Park West",
      price: "$850,000",
      date: "March 15, 2024",
      status: "Completed",
      statusColor: "bg-green-600",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80",
    },
    {
      id: 2,
      property: "567 Broadway Avenue",
      price: "$425,000",
      date: "March 10, 2024",
      status: "Pending",
      statusColor: "bg-blue-600",
      image:
        "https://images.unsplash.com/photo-1560184897-50e4b3b9d08d?w=200&q=80",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#181818] rounded-xl p-5 sm:p-6 shadow-md text-white mb-6"
    >
      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        Transaction History
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {transactions.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#2a2a2a] rounded-lg p-3 sm:p-4 hover:bg-[#333] transition"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-0">
              <img
                src={item.image}
                alt={item.property}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover"
              />
              <div>
                <p className="text-sm sm:text-base font-medium">
                  {item.property}
                </p>
                <p className="text-green-400 font-semibold text-xs sm:text-sm">
                  {item.price}
                </p>
              </div>
            </div>
            <div className="flex justify-between sm:flex-col sm:items-end">
              <p className="text-xs sm:text-sm text-gray-400">{item.date}</p>
              <span
                className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 mt-1 rounded-full ${item.statusColor}`}
              >
                {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
