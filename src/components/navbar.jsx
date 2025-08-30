import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[black] text-[white] flex">
      {/* Logo */}
      <img src="/vite.svg" alt="Vite logo" className="logo" />
      {/* Links */}
      <ul>
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
      <div className="">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div>
    </nav>
  );
}
