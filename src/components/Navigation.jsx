"use client";

import { Button } from "../components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b shadow-md border-gray-100 px-6 py-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-black min-w-[35%] h-[50px] flex justify-start items-center"
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
              className={`text-lg pb-1 border-b-2 ${
                location.pathname === href
                  ? "text-blue-600 font-bold border-blue-600"
                  : "text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-400"
              } transition-colors`}
            >
              {href === "/"
                ? "Home"
                : href.replace("/", "").charAt(0).toUpperCase() + href.slice(2)}
            </Link>
          ))}

          <Link to="/apply">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              APPLY
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              to="/"
              className={`text-lg ${
                location.pathname === "/"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg ${
                location.pathname === "/about"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-lg ${
                location.pathname === "/contact"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full">
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
