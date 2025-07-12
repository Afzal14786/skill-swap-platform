// components/Navbar.tsx

import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react"; // for icons
import ProfileImage from "./sub-component/User/ProfileImage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === '/login';
  // const isProfilePage = location.pathname === '/profile';

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            <Link to={'/'}>Skill Swap Platform</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {
              isLoginPage ? (
                <div className="flex items-center space-x-4">
                  <Link to={'/'}>Home</Link>
                  {/* After login we can see the profile image */}
                  <Link to={'/profile'}><ProfileImage/></Link>
                </div>
              ) : 
              (
                <div className="flex items-center space-x-4">
                  <Link to={'/login'} className={'ml-6'}>Login</Link> &nbsp;&nbsp;&nbsp;
                  <Link to={'/register'}>Register</Link>
                </div>
              )
            }
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-black focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-black">Home</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
