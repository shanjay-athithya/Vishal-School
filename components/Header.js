"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-burgundy p-2 text-bl border-b-4 border-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold">ABC School</div>

        {/* Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-burgundy md:bg-transparent text-center md:text-left transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="md:flex md:space-x-6">
            <li className="py-2 md:py-0">
              <a href="#about" className="block px-4 hover:text-gold">
                About Us
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#programs" className="block px-4 hover:text-gold">
                Programs
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#admissions" className="block px-4 hover:text-gold">
                Admissions
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#contact" className="block px-4 hover:text-gold">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
