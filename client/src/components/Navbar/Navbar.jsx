import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const Menu = ['Mentorship', 'Achievement', 'Opportunity', 'Donation', 'Transcript'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Check token whenever route changes
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // true if token exists
  }, [location]);

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex justify-between items-center p-2 bg-blue-900 text-white font-semibold">
        <Link to="/" className="flex items-center space-x-3">
          <img className="w-10 h-10 ml-10 rounded-full" src={logo} alt="Alumni Plus Logo" />
          <p className="text-xl ml-5">Alumni Plus</p>
        </Link>
        <div className="flex space-x-6 mr-10 text-lg">
          <a href="https://www.tezu.ernet.in/" className="hover:underline">TU</a>
          {isLoggedIn ? (
  <Link to="/dashboard" className="hover:underline">Profile</Link>
) : (
  <Link to="/login" className="hover:underline">Log in</Link>
)}

        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-white text-black font-semibold shadow-md">
        <ul className="flex flex-wrap justify-center md:justify-evenly p-3 space-x-4 md:space-x-6">
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/community" className="hover:text-blue-600">Communities</Link></li>
          <li><Link to="/events" className="hover:text-blue-600">Events</Link></li>
          <li><Link to="/family" className="hover:text-blue-600">Alumni Family</Link></li>
          <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-600">Gallery</Link></li>

          {/* Dropdown Menu */}
          <li className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none hover:text-blue-600"
              onClick={toggleDropdown}
            >
              <span>Giveback</span>
              <span className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2 z-50 animate-fadeIn">
                {Menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
