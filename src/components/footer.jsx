import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <img src="./logo.jpg" alt="Vite logo" className="w-32 rounded" />
          <p className="mt-2 text-sm text-gray-300">
            Making property search and transactions simpler, faster, and more
            secure.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:text-green-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-green-500 cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-green-500 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-green-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-green-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Agents
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="text-sm text-gray-300">1234 Property Lane</p>
          <p className="text-sm text-gray-300">Real Estate City, RE 12345</p>
          <p className="text-sm text-gray-300 mt-2">Phone: +1 (555) 123-4567</p>
          <p className="text-sm text-gray-300">Email: info@estatex.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe for updates</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-white border w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 RALETALE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
