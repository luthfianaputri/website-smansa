"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Profil" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link
          href="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">
            <img
                src="/images/logo smansa.jpg"
                alt="Logo SMA Negeri 1 Magelang"
            />
          </span>
          <span className="brand-copy">
            SMA NEGERI 1 MAGELANG
            <small>GLADIOOL HIGH SCHOOL</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Tutup ×" : "Menu ☰"}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "menu-open" : ""}`}
          aria-label="Navigasi utama"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="#kontak"
            onClick={() => setMenuOpen(false)}
          >
            Kontak
          </a>
        </nav>

      </div>
    </header>
  );
}