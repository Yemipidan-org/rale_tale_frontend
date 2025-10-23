"use client";
import React from "react";
import { FileDown, MoreVertical, Clipboard } from "lucide-react";

export default function TransactionTable() {
  const transactions = [
    {
      id: "TRX-001",
      user: "John Doe",
      property: "Luxury Apartment",
      amount: "$45,000",
      type: "Rent",
      status: "Completed",
      date: "2024-01-15",
    },
    {
      id: "TRX-002",
      user: "Jane Smith",
      property: "Office Space",
      amount: "$150,000",
      type: "Escrow",
      status: "Pending",
      date: "2024-01-14",
    },
    {
      id: "TRX-003",
      user: "Mike Johnson",
      property: "Retail Outlet",
      amount: "$95,000",
      type: "Inspection",
      status: "Failed",
      date: "2024-01-13",
    },
    {
      id: "TRX-004",
      user: "Sarah Wilson",
      property: "Studio Apartment",
      amount: "$35,000",
      type: "Virtual Tour",
      status: "Disputed",
      date: "2024-01-12",
    },
  ];

  // Color utilities
  const getTypeColor = (type) => {
    switch (type) {
      case "Rent":
        return "bg-blue-600/20 text-blue-400 border border-blue-600/40";
      case "Escrow":
        return "bg-green-600/20 text-green-400 border border-green-600/40";
      case "Inspection":
        return "bg-purple-600/20 text-purple-400 border border-purple-600/40";
      case "Virtual Tour":
        return "bg-orange-600/20 text-orange-400 border border-orange-600/40";
      default:
        return "bg-gray-600/20 text-gray-400 border border-gray-600/40";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-400";
      case "Pending":
        return "text-yellow-400";
      case "Failed":
        return "text-red-400";
      case "Disputed":
        return "text-orange-400";
      default:
        return "text-gray-400";
    }
  };

  // Clipboard copy handler
  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    alert(`Transaction ID ${id} copied to clipboard`);
  };

  return (
    <div className="bg-[#181818] rounded-xl p-5 shadow-md text-white overflow-x-auto">
      {/* ===== Export Buttons ===== */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
          <FileDown size={16} className="mr-2" /> Export to Excel
        </button>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
          <FileDown size={16} className="mr-2" /> Export to PDF
        </button>
      </div>

      {/* ===== Transactions Table ===== */}
      <table className="min-w-full text-sm text-left text-gray-300">
        <thead className="border-b border-[#2a2a2a] text-gray-400 text-xs sm:text-sm">
          <tr>
            <th className="py-3 px-2 sm:px-3">Transaction ID</th>
            <th className="py-3 px-2 sm:px-3">User</th>
            <th className="py-3 px-2 sm:px-3">Property</th>
            <th className="py-3 px-2 sm:px-3">Amount</th>
            <th className="py-3 px-2 sm:px-3">Type</th>
            <th className="py-3 px-2 sm:px-3">Status</th>
            <th className="py-3 px-2 sm:px-3">Date</th>
            <th className="py-3 px-2 sm:px-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((txn) => (
            <tr
              key={txn.id}
              className="border-b border-[#2a2a2a] hover:bg-[#1f1f1f] transition"
            >
              <td className="py-3 px-2 sm:px-3 flex items-center space-x-2">
                <span>{txn.id}</span>
                <Clipboard
                  size={14}
                  className="text-gray-400 cursor-pointer hover:text-blue-400"
                  onClick={() => handleCopy(txn.id)}
                />
              </td>
              <td className="py-3 px-2 sm:px-3">{txn.user}</td>
              <td className="py-3 px-2 sm:px-3">{txn.property}</td>
              <td className="py-3 px-2 sm:px-3">{txn.amount}</td>
              <td className="py-3 px-2 sm:px-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getTypeColor(
                    txn.type
                  )}`}
                >
                  {txn.type}
                </span>
              </td>
              <td className="py-3 px-2 sm:px-3">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full ${getStatusColor(
                      txn.status
                    )}`}
                  ></span>
                  <span className={`${getStatusColor(txn.status)}`}>
                    {txn.status}
                  </span>
                </div>
              </td>
              <td className="py-3 px-2 sm:px-3">{txn.date}</td>
              <td className="py-3 px-2 sm:px-3">
                <MoreVertical
                  size={16}
                  className="text-gray-400 cursor-pointer hover:text-gray-200"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
