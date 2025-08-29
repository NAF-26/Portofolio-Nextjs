"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // pastikan sudah install: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="text-xl font-bold">NAF</h1>

      {/* Hamburger Button (muncul di HP) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-800 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <li>
            <a
              href="#home"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
