"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* LOGO */}
      <Link
        href="/#home"
        className={`logo ${pathname === "/" ? "active-logo" : ""}`}
        onClick={closeMenu}
      >
        <span>KN</span>

        <div>
          <strong>Dr. Khironn Neheru</strong>
          <small>NUMEROLOGIST</small>
        </div>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <nav className={menuOpen ? "nav-open" : ""}>

        {links.map(([name, href]) => {
          const finalHref =
            pathname === "/" ? href : `/${href}`;

          const isActive =
            (name === "Home" && pathname === "/") ||
            (name === "About" && pathname === "/about") ||
            (name === "Services" && pathname === "/services") ||
            (name === "Contact" && pathname === "/contact");

          return (
            <Link
              key={name}
              href={finalHref}
              className={isActive ? "active" : ""}
              onClick={closeMenu}
            >
              {name}
            </Link>
          );
        })}

        <Link
          href="/appointment"
          className={`book-btn ${
            pathname === "/appointment" ? "active-book" : ""
          }`}
          onClick={closeMenu}
        >
          Book Appointment
        </Link>

      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className={`menuButton ${menuOpen ? "menuActive" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}