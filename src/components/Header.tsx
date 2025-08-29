"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/" className="logo">
        NAF
      </Link>

      <i
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
      ></i>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>
          About Me
        </Link>
        <Link href="/word" onClick={() => setIsOpen(false)}>
          Word Of The Day
        </Link>
      </nav>
    </header>
  );
}
