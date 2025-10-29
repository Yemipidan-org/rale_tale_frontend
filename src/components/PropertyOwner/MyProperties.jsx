"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { BsGrid3X3GapFill, BsTable } from "react-icons/bs";

export default function MyProperties() {
  const [viewType, setViewType] = useState("card");
  const [filters, setFilters] = useState({
    status: "",
    type: "",
    city: "",
    minPrice: "",
    maxPrice: "",
    date: "",
  });

  const properties = [
    {
      id: 1,
      title: "Modern Suburban Oasis",
      type: "For Sale",
      status: "Active",
      price: "$450,000",
      address: "123 Maple Drive, Springfield, IL",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Charming Downtown Loft",
      type: "For Rent",
      status: "Pending Review",
      price: "$2,200/month",
      address: "45 Elm Street, Metropolis, NY",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Historic Townhouse",
      type: "For Sale",
      status: "Archived",
      price: "$720,000",
      address: "789 Oak Avenue, Gotham, MA",
      image:
        "https://images.unsplash.com/photo-1600585154340-0b757cbcd6c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Prime Office Space",
      type: "Commercial",
      status: "Rejected",
      price: "$5,000/month",
      address: "101 Business Blvd, Star City, CA",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Undeveloped Land",
      type: "Land",
      status: "Draft",
      price: "$180,000",
      address: "500 Green Valley Rd, Smallville, KS",
      image:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      type: "For Sale",
      status: "Active",
      price: "$1,200,000",
      address: "22 Sky Tower, Central City, FL",
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-600";
      case "Pending Review":
        return "bg-yellow-600";
      case "Rejected":
        return "bg-red-600";
      case "Archived":
        return "bg-gray-500";
      case "Draft":
        return "bg-blue-600";
      default:
        return "bg-gray-700";
    }
  };

  const filteredProperties = properties.filter(
    (p) =>
      (!filters.status || p.status === filters.status) &&
      (!filters.type || p.type === filters.type)
  );

  const inputStyle =
    "bg-[#111] text-white border border-[#2a2a2a] rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:ring-1 focus:ring-green-600 focus:outline-none";

  const cardStyle =
    "bg-[#181818] rounded-xl overflow-hidden border border-transparent hover:border-[#2a2a2a] transition duration-200";

  return (
    <div className="space-y-8">
      {/* ===== Header ===== */}
      <h2 className="text-2xl font-semibold">My Properties</h2>

      {/* ===== Filter Section ===== */}
      <div className="bg-[#181818] p-5 rounded-xl border border-transparent hover:border-[#2a2a2a] transition">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <select
            className={inputStyle}
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Pending Review">Pending Review</option>
            <option value="Rejected">Rejected</option>
            <option value="Archived">Archived</option>
            <option value="Draft">Draft</option>
          </select>

          <select
            className={inputStyle}
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">Listing Type</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>

          <input
            type="text"
            placeholder="City, State"
            className={inputStyle}
            value={filters.city}
            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          />

          <input
            type="text"
            placeholder="Min Price"
            className={inputStyle}
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Max Price"
            className={inputStyle}
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          />

          <input
            type="date"
            className={inputStyle}
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          />
        </div>

        <div className="mt-4">
          <button
            onClick={() =>
              setFilters({
                status: "",
                type: "",
                city: "",
                minPrice: "",
                maxPrice: "",
                date: "",
              })
            }
            className="px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-md hover:bg-[#333]"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* ===== View Type Switch ===== */}
      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewType("card")}
            className={`px-3 py-1 flex items-center gap-2 rounded-md ${
              viewType === "card"
                ? "bg-green-700 text-white"
                : "bg-[#222] text-gray-400"
            }`}
          >
            <BsGrid3X3GapFill /> Card View
          </button>
          <button
            onClick={() => setViewType("table")}
            className={`px-3 py-1 flex items-center gap-2 rounded-md ${
              viewType === "table"
                ? "bg-green-700 text-white"
                : "bg-[#222] text-gray-400"
            }`}
          >
            <BsTable /> Table View
          </button>
        </div>
      </div>

      {/* ===== Property Cards ===== */}
      {viewType === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className={cardStyle}>
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-52 object-cover"
                />
                <span
                  className={`absolute top-3 right-3 text-xs text-white px-2 py-1 rounded-full ${getStatusColor(
                    property.status
                  )}`}
                >
                  {property.status}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{property.type}</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {property.title}
                </h3>

                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-500" />
                  {property.address}
                </p>

                <p className="text-green-500 font-semibold text-lg mt-1">
                  {property.price}
                </p>

                <div className="flex justify-between items-center mt-3 text-gray-400">
                  <div className="flex gap-3 text-lg">
                    <FaEye className="hover:text-white cursor-pointer" />
                    <FaEdit className="hover:text-green-400 cursor-pointer" />
                    <FaTrash className="hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-[#181818] p-5 rounded-xl text-gray-300">
          <p>🧾 Table view will be implemented here later.</p>
        </div>
      )}
    </div>
  );
}
