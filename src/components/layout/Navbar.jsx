import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Bell, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Companies', href: '#', active: true },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Companies Directory
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  link.active
                    ? 'bg-blue-50 text-blue-600'
                    : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-800 hover:bg-white/20'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Button */}
            <button className={`p-2 rounded-lg transition-all duration-200 ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
            }`}>
              <Search className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`} />
            </button>

            {/* Notifications */}
            <button className={`p-2 rounded-lg transition-all duration-200 relative ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
            }`}>
              <Bell className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
                }`}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <ChevronDown className={`w-4 h-4 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Settings
                  </a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                  link.active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <hr className="my-2" />
            <a href="#" className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Profile
            </a>
            <a href="#" className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Settings
            </a>
            <a href="#" className="block px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50">
              Logout
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;