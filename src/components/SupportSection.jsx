"use client";
import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SupportSection() {
  const supports = [
    {
      id: 1,
      title: "Call Us",
      description: "24/7 support line",
      value: "+1 (555) 123-4567",
      color: "text-green-400",
      icon: <Phone className="w-6 h-6 text-green-400" />,
      link: "tel:+15551234567",
    },
    {
      id: 2,
      title: "Live Chat",
      description: "Chat with our agents",
      value: "Start Chat →",
      color: "text-blue-400",
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
      link: "#",
    },
    {
      id: 3,
      title: "Email Us",
      description: "Get email support",
      value: "support@realestate.com",
      color: "text-gray-300",
      icon: <Mail className="w-6 h-6 text-gray-300" />,
      link: "mailto:support@realestate.com",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#181818] rounded-xl p-5 sm:p-6 text-white shadow-md "
    >
      <h2 className="text-lg sm:text-xl font-semibold mb-6">Need Help?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {supports.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            whileHover={{ scale: 1.03, backgroundColor: "#2a2a2a" }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col justify-between bg-[#222] rounded-lg p-4 sm:p-5 hover:bg-[#2f2f2f] transition"
          >
            <div className="flex items-center space-x-3 mb-3">
              {item.icon}
              <h3 className="font-medium text-base sm:text-lg">{item.title}</h3>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              {item.description}
            </p>
            <p className={`mt-2 font-semibold text-sm ${item.color}`}>
              {item.value}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
