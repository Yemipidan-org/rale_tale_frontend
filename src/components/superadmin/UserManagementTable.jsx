"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  User,
  Calendar,
  MapPin,
  DollarSign,
  Trash2,
  Bell,
  PauseCircle,
  MoreVertical,
} from "lucide-react";

export default function UserManagementTable() {
  const [selectedAll, setSelectedAll] = useState(false);

  const users = [
    {
      id: "USR001",
      name: "John Doe",
      role: "Landlord",
      email: "john.doe@example.com",
      phone: "+1 234 567 890",
      status: "Active",
      dateJoined: "2024-01-15",
      transaction: "$2,500",
    },
    {
      id: "USR002",
      name: "Jane Smith",
      role: "Agent",
      email: "jane.smith@example.com",
      phone: "+1 234 567 891",
      status: "Suspended",
      dateJoined: "2024-01-14",
      transaction: "$1,800",
    },
    {
      id: "USR003",
      name: "Mike Johnson",
      role: "Seeker",
      email: "mike.j@example.com",
      phone: "+1 234 567 892",
      status: "Active",
      dateJoined: "2024-01-13",
      transaction: "$3,200",
    },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case "Landlord":
        return "bg-blue-600/20 text-blue-400 border border-blue-600/40";
      case "Agent":
        return "bg-green-600/20 text-green-400 border border-green-600/40";
      case "Seeker":
        return "bg-red-600/20 text-red-400 border border-red-600/40";
      default:
        return "bg-gray-600/20 text-gray-400 border border-gray-600/40";
    }
  };

  const getStatusColor = (status) =>
    status === "Active"
      ? "bg-green-600/20 text-green-400 border border-green-600/40"
      : "bg-red-600/20 text-red-400 border border-red-600/40";

  return (
    <div className="bg-[#181818] rounded-xl p-5 shadow-md text-white space-y-5">
      {/* Search & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <div className="flex items-center bg-[#1c1c1c] rounded-lg px-3 py-2 w-full lg:w-1/2">
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search users..."
            className="bg-transparent text-sm text-gray-300 focus:outline-none w-full"
          />
        </div>

        <button className="flex items-center justify-center bg-[#1c1c1c] hover:bg-[#2a2a2a] text-gray-300 px-3 py-2 rounded-lg text-sm">
          <Filter size={14} className="mr-2" /> Filters
        </button>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
        <button className="flex items-center bg-[#1c1c1c] px-3 py-2 rounded-lg text-gray-300">
          <User size={14} className="mr-2" /> Role
        </button>
        <button className="flex items-center bg-[#1c1c1c] px-3 py-2 rounded-lg text-gray-300">
          <PauseCircle size={14} className="mr-2" /> Status
        </button>
        <button className="flex items-center bg-[#1c1c1c] px-3 py-2 rounded-lg text-gray-300">
          <Calendar size={14} className="mr-2" /> Date Joined
        </button>
        <button className="flex items-center bg-[#1c1c1c] px-3 py-2 rounded-lg text-gray-300">
          <MapPin size={14} className="mr-2" /> State
        </button>
        <button className="flex items-center bg-[#1c1c1c] px-3 py-2 rounded-lg text-gray-300">
          <MapPin size={14} className="mr-2" /> LGA
        </button>
        <button className="flex items-center bg-[#1c1c1c] px-3 py-2 rounded-lg text-gray-300">
          <DollarSign size={14} className="mr-2" /> Transaction Range
        </button>
      </div>

      {/* Bulk Actions */}
      <div className="flex items-center justify-between flex-wrap gap-3 border-t border-[#2a2a2a] pt-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedAll}
            onChange={() => setSelectedAll(!selectedAll)}
            className="w-4 h-4 accent-blue-500"
          />
          <span className="text-sm text-gray-300">Select All</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs sm:text-sm">
            Suspend
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-xs sm:text-sm">
            Delete
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded text-xs sm:text-sm">
            Send Notification
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="border-b border-[#2a2a2a] text-gray-400 text-xs sm:text-sm">
            <tr>
              <th className="py-3 px-2 sm:px-3">
                <input type="checkbox" className="w-4 h-4 accent-blue-500" />
              </th>
              <th className="py-3 px-2 sm:px-3">ID</th>
              <th className="py-3 px-2 sm:px-3">Full Name</th>
              <th className="py-3 px-2 sm:px-3">Role</th>
              <th className="py-3 px-2 sm:px-3">Email</th>
              <th className="py-3 px-2 sm:px-3">Phone</th>
              <th className="py-3 px-2 sm:px-3">Status</th>
              <th className="py-3 px-2 sm:px-3 text-nowrap">Date Joined</th>
              <th className="py-3 px-2 sm:px-3">Transaction</th>
              <th className="py-3 px-2 sm:px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-[#2a2a2a] hover:bg-[#1f1f1f] transition"
              >
                <td className="py-3 px-2 sm:px-3">
                  <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                </td>
                <td className="py-3 px-2 sm:px-3">{user.id}</td>
                <td className="py-3 px-2 sm:px-3 text-nowrap">{user.name}</td>
                <td className="py-3 px-2 sm:px-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${getRoleColor(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-2 sm:px-3">{user.email}</td>
                <td className="py-3 px-2 sm:px-3 text-nowrap">{user.phone}</td>
                <td className="py-3 px-2 sm:px-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-2 sm:px-3 text-gray-400 text-nowrap">
                  {user.dateJoined}
                </td>
                <td className="py-3 px-2 sm:px-3">{user.transaction}</td>
                <td className="py-3 px-2 sm:px-3">
                  <MoreVertical
                    size={16}
                    className="text-gray-400 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
