"use client";
import React, { useState } from "react";
import { MapPin, Check, X, MoreVertical } from "lucide-react";

export default function PropertiesTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const properties = [
    {
      id: "PR001",
      name: "Modern Apartment",
      location: "Lekki, Lagos",
      price: "₦150,000,000",
      owner: "John Doe",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=60",
    },
    {
      id: "PR002",
      name: "Luxury Villa",
      location: "Victoria Island, Lagos",
      price: "₦350,000,000",
      owner: "Sarah Johnson",
      status: "Verified",
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9c79813?auto=format&fit=crop&w=200&q=60",
    },
    {
      id: "PR003",
      name: "Commercial Space",
      location: "Ikoyi, Lagos",
      price: "₦250,000,000",
      owner: "Michael Brown",
      status: "Managed",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=200&q=60",
    },
    {
      id: "PR004",
      name: "Office Complex",
      location: "Central Business District, Abuja",
      price: "₦450,000,000",
      owner: "Emma Wilson",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=200&q=60",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-600/20 text-yellow-400 border border-yellow-600/40";
      case "Verified":
        return "bg-green-600/20 text-green-400 border border-green-600/40";
      case "Managed":
        return "bg-blue-600/20 text-blue-400 border border-blue-600/40";
      default:
        return "bg-gray-600/20 text-gray-400 border border-gray-600/40";
    }
  };

  return (
    <div className="bg-[#181818] rounded-xl p-5 shadow-md text-white overflow-x-auto">
      <h3 className="text-sm sm:text-base font-semibold mb-4 text-white">
        Properties
      </h3>

      <table className="min-w-full text-sm text-left text-gray-300">
        <thead className="border-b border-[#2a2a2a] text-gray-400 text-xs sm:text-sm">
          <tr>
            <th className="py-3 px-2 sm:px-3">Property</th>
            <th className="py-3 px-2 sm:px-3">Location</th>
            <th className="py-3 px-2 sm:px-3">Price</th>
            <th className="py-3 px-2 sm:px-3">Owner</th>
            <th className="py-3 px-2 sm:px-3">Status</th>
            <th className="py-3 px-2 sm:px-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr
              key={property.id}
              className="border-b border-[#2a2a2a] hover:bg-[#1f1f1f] transition"
            >
              <td className="py-3 px-2 sm:px-3 flex items-center space-x-3">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div>
                  <p className="font-medium text-white">{property.name}</p>
                  <p className="text-xs text-gray-500">{property.id}</p>
                </div>
              </td>
              <td className="py-3 px-2 sm:px-3  ">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} className="text-gray-400" />
                  <span>{property.location}</span>
                </div>
              </td>
              <td className="py-3 px-2 sm:px-3">{property.price}</td>
              {/* <td className="py-3 px-2 sm:px-3">{property.price}</td> */}
              <td className="py-3 px-2 sm:px-3">{property.owner}</td>
              <td className="py-3 px-2 sm:px-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                    property.status
                  )}`}
                >
                  {property.status}
                </span>
              </td>
              <td className="py-3 px-2 sm:px-3 flex items-center space-x-3">
                <Check
                  size={16}
                  className="text-green-400 cursor-pointer hover:text-green-300"
                />
                <X
                  size={16}
                  className="text-red-400 cursor-pointer hover:text-red-300"
                />
                <MoreVertical
                  size={16}
                  className="text-gray-400 cursor-pointer hover:text-gray-200"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===== Pagination ===== */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-xs text-gray-400">
        <p>
          Showing <span className="text-white font-medium">1</span> to{" "}
          <span className="text-white font-medium">4</span> of{" "}
          <span className="text-white font-medium">100</span> entries
        </p>

        <div className="flex items-center space-x-2 mt-3 sm:mt-0">
          <button className="bg-[#1c1c1c] px-3 py-1 rounded text-gray-300 hover:bg-[#2a2a2a]">
            Previous
          </button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">
            1
          </button>
          <button className="bg-[#1c1c1c] px-3 py-1 rounded text-gray-300 hover:bg-[#2a2a2a]">
            2
          </button>
          <button className="bg-[#1c1c1c] px-3 py-1 rounded text-gray-300 hover:bg-[#2a2a2a]">
            3
          </button>
          <button className="bg-[#1c1c1c] px-3 py-1 rounded text-gray-300 hover:bg-[#2a2a2a]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
