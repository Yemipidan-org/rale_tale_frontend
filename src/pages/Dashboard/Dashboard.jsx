// pages/Dashboard/Dashboard.jsx
import { User, Phone, Mail, MapPin, Heart, MessageSquare } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, John Smith!</h1>
        <p className="text-gray-400">
          Here’s a summary of your real estate journey with us
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-[#111] rounded-lg p-6 flex flex-col md:flex-row justify-between mb-6 shadow-lg">
        <div className="flex gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-lg">John Smith</p>
            <div className="flex items-center text-gray-400 text-sm">
              <Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567
            </div>
            <span className="inline-block mt-2 bg-green-600 text-white px-3 py-1 text-xs rounded-full">
              Premium Member
            </span>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="flex items-center text-gray-400 text-sm mb-2">
            <Mail className="w-4 h-4 mr-2" /> john.smith@email.com
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin className="w-4 h-4 mr-2" /> New York, USA
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 gap-2">
          <User className="w-5 h-5" /> Search Properties
        </button>
        <button className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 gap-2">
          <MapPin className="w-5 h-5" /> Book Inspection
        </button>
        <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-3 gap-2">
          <Heart className="w-5 h-5" /> My Favorites
        </button>
        <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-3 gap-2">
          <MessageSquare className="w-5 h-5" /> Contact Support
        </button>
      </div>
    </div>
  );
}
