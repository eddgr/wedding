"use client";

import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between container mx-auto p-4 items-center">
      <div>
        <div>Vivian ❤️ Edgar</div>
      </div>
      <div className="hidden md:flex">
        <a href="#ceremony" className="mx-4">
          Ceremony
        </a>
        <a href="#reception" className="mx-4">
          Reception
        </a>
        <a href="#accommodations" className="mx-4">
          Accommodations
        </a>
        <a href="#faq" className="mx-4">
          FAQ
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSexi1ygLEJ436agoeJfkVus5KSLInBj0-vZuDaZ6LcX2TZQ2w/viewform?usp=header"
          className="ml-4 font-bold rsvp-border"
        >
          RSVP
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
