"use client";

import { Button } from "../components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b shadow-md border-gray-100 px-6 py-4 transition-all duration-300">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-black min-w-[35%] h-[50px] flex justify-start items-center transform transition-transform hover:rotate-[-2deg]"
        >
          <img
            src="/Logo-White.png"
            alt="Logo"
            className="max-h-[45px] w-auto object-contain flex justify-center items-center"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["/", "/about", "/contact", "/teams"].map((href) => (
            <Link
              key={href}
              to={href}
              className={`relative text-lg pb-1 transition-all duration-300 
              ${
                location.pathname === href
                  ? "text-blue-600 font-bold after:w-full"
                  : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"
              } 
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300`}
            >
              {href === "/"
                ? "Home"
                : href.replace("/", "").charAt(0).toUpperCase() + href.slice(2)}
            </Link>
          ))}

          <Link to="/apply">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transform transition-transform hover:scale-105 hover:shadow-lg">
              APPLY
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none transition-transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-slide-down">
          <div className="flex flex-col space-y-4 pt-4">
            {["/", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className={`text-lg transition-all duration-300 ${
                  location.pathname === path
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full transform transition-transform hover:scale-105 hover:shadow-lg">
                APPLY
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
