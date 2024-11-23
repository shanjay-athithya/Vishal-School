"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // FontAwesome icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-bl shadow-md text-burgundy p-2">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/school.jpeg" // Path to your logo
            alt="School Logo"
            className="w-12 h-12 object-contain" // Adjust size as needed
          />
          <div className="text-3xl font-serif font-bold">Vishal Bharti School</div>
        </div>

        {/* Menu Icon */}
        <button
          className="md:hidden text-2xl z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`fixed inset-0 bg-burgundy text-white text-center transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:transform-none md:bg-transparent md:flex md:text-burgundy`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 justify-center items-center h-full md:h-auto">
            <li className="py-4 md:py-0">
              <a
                href="#about"
                className="block px-4 text-lg font-semibold hover:text-gold"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                About Us
              </a>
            </li>
            <li className="py-4 md:py-0">
              <a
                href="#programs"
                className="block px-4 text-lg font-semibold hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                Programs
              </a>
            </li>
            <li className="py-4 md:py-0">
              <a
                href="#admissions"
                className="block px-4 text-lg font-semibold hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                Admissions
              </a>
            </li>
            <li className="py-4 md:py-0">
              <a
                href="#contact"
                className="block px-4 text-lg font-semibold hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
