import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img src="./logo.jpg" alt="Logo" className="w-28 rounded" />

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Find Properties
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                List Property
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Join as Realtor
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="border border-[#00FF94] rounded-md px-5 py-1 hover:bg-[#00FF94] hover:text-black transition">
              Login
            </button>
            <button className="bg-[#00FF94] rounded-md px-5 py-1 text-black hover:bg-transparent border border-[#00FF94] hover:text-white transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-black border-t border-gray-700">
          <ul className="flex flex-col gap-4 text-gray-300">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setIsOpen(false)}>
                Find Properties
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setIsOpen(false)}>
                List Property
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setIsOpen(false)}>
                Join as Realtor
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button className="border border-[#00FF94] rounded-md px-5 py-2 hover:bg-[#00FF94] hover:text-black transition">
              Login
            </button>
            <button className="bg-[#00FF94] rounded-md px-5 py-2 text-black hover:bg-transparent border border-[#00FF94] hover:text-white transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
