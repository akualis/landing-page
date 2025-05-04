"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [lang, setLang] = useState<'fr' | 'en'>('fr');

  // const toggleMenu = () => setMenuOpen((open) => !open);
  // const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      label: "Concept",
      href: "#concept",
      show: true,
    },
    {
      label: "Mission",
      href: "#constat",
      show: true,
    },
    {
      label: "Equipe",
      href: "#team",
      show: true,
    },
    {
      label: "Témoignages",
      href: "#testimonials",
      show: true,
    },
    {
      label: "Blog",
      href: "/blog",
      show: false,
    },
    {
      label: "Webapp",
      href: "https://water.akualis.com/",
      show: true,
    },
  ];

  // Scroll logic for menu and floating CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // const docHeight =
      //   document.documentElement.scrollHeight - window.innerHeight;
      // const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setIsScrolledPastThreshold(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500
          ${
            isScrolledPastThreshold
              ? "bg-white shadow-md"
              : "bg-transparent shadow-none"
          }
          ${menuOpen ? "bg-white" : ""}
        `}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Accueil Akualis"
            className={`flex items-center transition-opacity duration-300 ${
              menuOpen
                ? "opacity-100 pointer-events-auto"
                : isScrolledPastThreshold
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src="/img/akualis-logo.webp"
              alt="Logo Akualis"
              width={112}
              height={50}
              className="h-[50px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 font-semibold">
            {menuItems.map(
              (item) =>
                item.show && (
                  <li key={item.label}>
                    <a href={item.href} className="menu-item px-3 text-primary">
                      {item.label}
                    </a>
                  </li>
                )
            )}
          </ul>

          <a
            href="#inform"
            className={`hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 ml-2
              transition-opacity duration-300 hidden md:block ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : isScrolledPastThreshold
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
              }`}
          >
            Découvrez Akualis
          </a>

          {/* Mobile menu */}
          <span className="md:hidden flex items-center gap-1">
            <a
              href="#inform"
              className={`hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 ml-2
              transition-opacity duration-300 ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : isScrolledPastThreshold
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
              }`}
            >
              Découvrez Akualis
            </a>
            {/* Hamburger for mobile */}
            {!menuOpen && (
              // Open button
              <button
                className="flex items-center p-2"
                onClick={() => setMenuOpen(true)}
                aria-label="Ouvrir le menu"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
            {menuOpen && (
              // Close button
              <button
                className="flex items-center p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </span>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col items-center gap-4 py-4 font-semibold">
              {menuItems.map(
                (item) =>
                  item.show && (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="menu-item text-primary"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
