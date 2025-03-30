// src/components/Header.jsx
import React, { useState } from 'react';
import { FiSearch, FiLock, FiFacebook, FiTwitter, FiBell, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { headerText } from '../../constants/HeaderConstants';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (id) => {
    setDropdownOpen((prevDropdownOpen) => {
      if (prevDropdownOpen === id) {
        return null;
      } else {
        return id;
      }
    });
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top Ad Section */}
      <div className="bg-gray-50 p-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            {headerText.adSections[0].content}
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-2xl font-bold text-indigo-600">{headerText.logo}</h1>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center w-64 md:w-80">
          <input
            type="text"
            placeholder={headerText.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="absolute right-3">
            <FiSearch className="text-gray-500" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-500 focus:outline-none lg:hidden"
        >
          {!mobileMenuOpen ? <FiMenu /> : <FiX />}
        </button>

        {/* Icons Right - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <Link to="/login" className="flex items-center text-gray-500 hover:text-indigo-600">
              <FiLock className="text-gray-500 mr-2" />
              <span className="text-sm font-medium">{headerText.loginText}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Link to="/facebook" className="text-gray-500 hover:text-indigo-600">
              <FiFacebook />
            </Link>
            <Link to="/twitter" className="text-gray-500 hover:text-indigo-600">
              <FiTwitter />
            </Link>
          </div>

          <div className="relative">
            <FiBell className="text-gray-500" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-6 py-3">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          {/* Main Navigation */}
          <div className="flex items-center space-x-8">
            {headerText.navLinks.map(link => (
              <div key={link.id} className="relative group">
                <Link
                  to={link.href}
                  className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                  onClick={() => link.dropdown && handleDropdown(link.id)}
                >
                  {link.text}
                  {link.dropdown && (
                    <FiChevronDown className="ml-1 text-sm" />
                  )}
                </Link>

                {link.dropdown && (
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 min-w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 ${
                      dropdownOpen === link.id ? 'block' : 'hidden'
                    }`}
                  >
                    <ul className="py-2">
                      {link.dropdownItems.map(item => (
                        <li key={item.text}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => handleDropdown(link.id)}
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="mt-4 pb-6 border-b border-gray-100">
            {headerText.navLinks.map(link => (
              <div key={link.id} className="relative group">
                <button
                  onClick={() => handleDropdown(link.id)}
                  className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-indigo-600"
                >
                  {link.text}
                  {link.dropdown && (
                    <FiChevronDown className={`w-4 h-4 transform transition-transform ${
                      dropdownOpen === link.id ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {link.dropdown && (
                  <div
                    className={`mt-2 ${
                      dropdownOpen === link.id ? 'block' : 'hidden'
                    }`}
                  >
                    <ul className="space-y-2 pl-4 border-l border-gray-200">
                      {link.dropdownItems.map(item => (
                        <li key={item.text}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                            onClick={() => handleDropdown(link.id)}
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col space-y-3">
            <Link
              to="/pricing"
              className="px-4 py-2 text-gray-700 font-medium rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              {headerText.pricingText}
            </Link>
            <Link
              to="/join"
              className="px-4 py-2 text-white font-medium rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              {headerText.joinText}
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 font-medium hover:text-indigo-600 flex items-center"
            >
              <FiLock className="text-gray-500 mr-2" />
              <span>{headerText.loginText}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Ad Section */}
      <div className="bg-gray-50 p-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            {headerText.adSections[1].content}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;