import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[black] text-[white] flex justify-around items-center py-6">
      {/* Logo */}
      <img src="./logo.jpg" alt="Vite logo" className="w-32 rounded" />
      {/* Links */}
      <ul className="flex gap-8 text-[#9CA3AF]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Find Properties</Link>
        </li>
        <li>
          <Link to="#">List Property</Link>
        </li>
        <li>
          <Link to="#">Join as Realtor</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
      </ul>
      {/* Buttons */}
      <div className="space-x-4">
        <button className="border border-[#00FF94] rounded-md px-5 py-1 hover:bg-[#00FF94] cursor-pointer">
          Login
        </button>
        <button className="bg-[#00FF94] rounded-md px-5 py-1 text-black hover:bg-transparent border border-[#00FF94] hover:text-white cursor-pointer ">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
