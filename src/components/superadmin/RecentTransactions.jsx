"use client";
import React from "react";

export default function RecentTransactions() {
  const transactions = [
    {
      id: "TRX-001",
      property: "Luxury Villa",
      buyer: "John Smith",
      amount: "$520,000",
      status: "Completed",
      date: "2024-01-15",
    },
    {
      id: "TRX-002",
      property: "Downtown Apartment",
      buyer: "Emma Wilson",
      amount: "$280,000",
      status: "Pending",
      date: "2024-01-14",
    },
    {
      id: "TRX-003",
      property: "Beach House",
      buyer: "Michael Brown",
      amount: "$750,000",
      status: "Completed",
      date: "2024-01-13",
    },
    {
      id: "TRX-004",
      property: "City Office Space",
      buyer: "Sarah Davis",
      amount: "$420,000",
      status: "Failed",
      date: "2024-01-12",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-600/20 text-green-400 border border-green-600/40";
      case "Pending":
        return "bg-yellow-600/20 text-yellow-400 border border-yellow-600/40";
      case "Failed":
        return "bg-red-600/20 text-red-400 border border-red-600/40";
      default:
        return "bg-gray-600/20 text-gray-400 border border-gray-600/40";
    }
  };

  return (
    <div className="bg-[#181818] rounded-xl p-5 shadow-md overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm sm:text-base font-semibold text-white">
          Recent Transactions
        </h3>
        <button className="text-blue-400 text-xs sm:text-sm hover:underline">
          View All
        </button>
      </div>

      <table className="min-w-full text-sm text-left text-gray-300">
        <thead className="border-b border-[#2a2a2a] text-gray-400 text-xs sm:text-sm">
          <tr>
            <th className="py-3 px-2 sm:px-3">Transaction ID</th>
            <th className="py-3 px-2 sm:px-3">Property</th>
            <th className="py-3 px-2 sm:px-3">Buyer</th>
            <th className="py-3 px-2 sm:px-3">Amount</th>
            <th className="py-3 px-2 sm:px-3">Status</th>
            <th className="py-3 px-2 sm:px-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr
              key={t.id}
              className={`border-b border-[#2a2a2a] hover:bg-[#1f1f1f] transition ${
                index === transactions.length - 1 ? "border-0" : ""
              }`}
            >
              <td className="py-3 px-2 sm:px-3 font-medium">{t.id}</td>
              <td className="py-3 px-2 sm:px-3">{t.property}</td>
              <td className="py-3 px-2 sm:px-3">{t.buyer}</td>
              <td className="py-3 px-2 sm:px-3">{t.amount}</td>
              <td className="py-3 px-2 sm:px-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                    t.status
                  )}`}
                >
                  {t.status}
                </span>
              </td>
              <td className="py-3 px-2 sm:px-3 text-gray-400">{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
