"use client";
import React, { useMemo, useState } from "react";
import { Search, CalendarDays, List as ListIcon } from "lucide-react";

/** Small helpers */
const pillClass = (status) => {
  switch (status) {
    case "Confirmed":
      return "bg-green-700/20 text-green-400 border border-green-700/30";
    case "Pending":
      return "bg-yellow-700/20 text-yellow-400 border border-yellow-700/30";
    case "Completed":
      return "bg-slate-600/30 text-slate-300 border border-slate-500/40";
    case "Cancelled":
      return "bg-red-700/20 text-red-400 border border-red-700/30";
    default:
      return "bg-gray-700/30 text-gray-300 border border-gray-600/40";
  }
};

const card = "bg-[#181818] rounded-xl border border-transparent hover:border-[#2a2a2a]";

export default function InspectionsDashboardList() {
  const [query, setQuery] = useState("");

  const rows = useMemo(
    () => [
      {
        id: "ins-001",
        property: {
          titleTop: "Modern",
          titleBottom: "Family Home",
          thumb:
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop",
          address1: "123 Oak Avenue,",
          address2: "Springfield, IL",
        },
        requester: {
          name: "Alice Johnson",
          email: "alice.j@example.com",
          phone: "+1 555-000-1111",
        },
        schedule: {
          date: "January 15, 2024",
          start: "10:00 AM",
          end: "11:00 AM",
        },
        status: "Confirmed",
        fee: 250,
      },
      {
        id: "ins-002",
        property: {
          titleTop: "Downtown",
          titleBottom: "Loft Apartment",
          thumb:
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=400&auto=format&fit=crop",
          address1: "456 Elm Street,",
          address2: "Metropolis, NY",
        },
        requester: {
          name: "Bob Williams",
          email: "bob.w@example.com",
          phone: "+1 555-123-4567",
        },
        schedule: {
          date: "January 16, 2024",
          start: "02:00 PM",
          end: "03:30 PM",
        },
        status: "Pending",
        fee: 180,
      },
      {
        id: "ins-003",
        property: {
          titleTop: "Countryside",
          titleBottom: "Bungalow",
          thumb:
            "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=400&auto=format&fit=crop",
          address1: "789 Pine Lane,",
          address2: "Ruraville, GA",
        },
        requester: {
          name: "Charlie Brown",
          email: "charlie.b@example.com",
          phone: "+1 555-777-8888",
        },
        schedule: {
          date: "January 17, 2024",
          start: "11:00 AM",
          end: "12:00 PM",
        },
        status: "Completed",
        fee: 300,
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.property.titleTop.toLowerCase().includes(q) ||
        r.property.titleBottom.toLowerCase().includes(q) ||
        r.requester.name.toLowerCase().includes(q) ||
        r.requester.email.toLowerCase().includes(q)
    );
  }, [rows, query]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Inspections Dashboard</h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-2 text-gray-300 bg-[#202020] px-3 py-1.5 rounded-md hover:bg-[#232323]"
            title="Calendar View (placeholder)"
          >
            <CalendarDays size={16} />
            <span className="hidden sm:inline">Calendar View</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-white bg-[#2a2a2a] px-3 py-1.5 rounded-md"
            title="List View"
          >
            <ListIcon size={16} />
            <span className="hidden sm:inline">List View</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-end">
        <div className="relative w-full max-w-xs">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search inspections..."
            className="w-full pl-9 pr-3 py-2 rounded-md bg-[#111] border border-[#2a2a2a] text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-green-600 outline-none"
          />
        </div>
      </div>

      {/* Table Card */}
      <div className={`${card} p-4 overflow-x-auto`}>
        <h3 className="text-base font-semibold text-white mb-3">All Inspections</h3>

        {/* Table Head */}
        <div className="hidden md:flex items-center gap-4 text-xs uppercase tracking-wide text-gray-400 pb-2 border-b border-[#2a2a2a]">
          <div className="w-[28%] px-1">Property</div>
          <div className="w-[18%] px-1">Requester</div>
          <div className="w-[18%] px-1">Scheduled</div>
          <div className="w-[12%] px-1">Status</div>
          <div className="w-[8%] px-1">Fee</div>
          <div className="flex-1 text-right px-1">Actions</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#232323]">
          {filtered.map((r) => (
            <div key={r.id} className="hidden md:flex items-center gap-4 py-4">
              {/* Property */}
              <div className="w-[28%] px-1">
                <div className="flex items-start gap-3">
                  <img
                    src={r.property.thumb}
                    alt={r.property.titleBottom}
                    className="h-12 w-12 rounded-md object-cover border border-[#2a2a2a]"
                  />
                  <div className="text-sm">
                    <p className="leading-4 text-white">
                      <span className="font-semibold">{r.property.titleTop}</span>
                      <br />
                      {r.property.titleBottom}
                    </p>
                    <p className="text-gray-400 mt-1">
                      {r.property.address1}
                      <br />
                      {r.property.address2}
                    </p>
                  </div>
                </div>
              </div>

              {/* Requester */}
              <div className="w-[18%] px-1">
                <p className="text-white font-medium">{r.requester.name}</p>
                <p className="text-gray-400">{r.requester.email}</p>
                <p className="text-gray-500 hidden lg:block">{r.requester.phone}</p>
              </div>

              {/* Scheduled */}
              <div className="w-[18%] px-1">
                <p className="text-white font-medium">{r.schedule.date}</p>
                <p className="text-gray-400">
                  {r.schedule.start} <span className="mx-1">—</span> {r.schedule.end}
                </p>
              </div>

              {/* Status */}
              <div className="w-[12%] px-1">
                <span className={`px-2 py-1 rounded-full text-xs ${pillClass(r.status)}`}>
                  {r.status}
                </span>
              </div>

              {/* Access Fee */}
              <div className="w-[8%] px-1 text-sm text-white">
                ${r.fee.toFixed(2)}
              </div>

              {/* Actions */}
              <div className="flex-1 flex justify-end gap-1.5">
                <button className="px-2 py-1 rounded text-xs bg-[#1f2937] text-gray-200 hover:bg-[#253041]">
                  Confirm
                </button>
                <button className="px-2 py-1 rounded text-xs bg-[#2a2a2a] text-gray-200 hover:bg-[#333]">
                  Reschedule
                </button>
                <button className="px-2 py-1 rounded text-xs bg-[#2a2a2a] text-gray-200 hover:bg-[#333]">
                  Complete
                </button>
                <button className="px-2 py-1 rounded text-xs bg-red-700/80 text-white hover:bg-red-700">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// }
