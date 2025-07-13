import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons from lucide-react
import ProfileImage from "./sub-component/User/ProfileImage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            <Link to="/">Skill Swap Platform</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {isLoginPage ? (
              <>
                <Link to="/">Home</Link>
                <Link to="/profile">
                  <ProfileImage />
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (only visible when open) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/login"
            className="block text-gray-700 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block text-gray-700 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          {isLoginPage && (
            <Link
              to="/profile"
              className="block text-gray-700 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;