"use client";
import React from "react";
import { X, User, Mail, Phone, FileText, Activity } from "lucide-react";

export default function UserDetailsModal({ user, onClose }) {
  if (!user) return null; // return nothing if no user selected

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-end z-50">
      <div className="bg-[#181818] w-full sm:w-[400px] h-full sm:h-auto sm:rounded-l-xl overflow-y-auto text-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">User Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={user.image || "https://i.pravatar.cc/100?img=3"}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-700"
          />
          <h3 className="mt-3 text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-400 text-sm">{user.role}</p>
        </div>

        {/* Personal Information */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-gray-300">
            Personal Information
          </h4>

          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3">
              <User size={16} className="text-gray-400" />
              <span>{user.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={16} className="text-gray-400" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={16} className="text-gray-400" />
              <span>{user.phone}</span>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-gray-300">
            Documents
          </h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {user.documents?.map((doc, index) => (
              <button
                key={index}
                className="bg-[#222] hover:bg-[#2a2a2a] text-gray-300 px-3 py-2 rounded-lg text-left"
              >
                {doc}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-300">
            Recent Activity
          </h4>
          <ul className="space-y-3 text-sm">
            {user.activities?.map((activity, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Activity size={16} className="text-blue-400 mt-0.5" />
                <div>
                  <p>{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
