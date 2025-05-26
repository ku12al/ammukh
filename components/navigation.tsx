"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "../components/ui/button"; // or './ui/button' if in same folder


export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-100 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-black min-w-[35%] h-[50px] flex justify-start items-center">
          <img
            src="/Logo-White.png"
            alt="Logo"
            className="max-h-[45px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["/", "/about", "/contact"].map((href) => (
            <Link
              key={href}
              href={href}
              className={`text-lg pb-1 border-b-2 ${pathname === href
                  ? "text-blue-600 font-medium border-blue-600"
                  : "text-gray-700 hover:text-blue-600 border-transparent hover:border-blue-400"
                } transition-colors`}
            >
              {href === "/" ? "Home" : href.replace("/", "").charAt(0).toUpperCase() + href.slice(2)}
            </Link>
          ))}
          <Link href="/apply">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              APPLY
            </Button>
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button  size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 px-6">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <span className={`text-lg ${pathname === "/" ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"}`}>
              Home
            </span>
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            <span className={`text-lg ${pathname === "/about" ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"}`}>
              About
            </span>
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <span className={`text-lg ${pathname === "/contact" ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"}`}>
              Contact
            </span>
          </Link>
          <div className="flex justify-center">
            <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-40">
                APPLY
              </Button>
            </Link>
          </div>
        </div>

      )}
    </nav>
  )
}
