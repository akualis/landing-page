'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleMenu = () => setMenuOpen((open) => !open);
  // const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

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
    }
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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500
          ${isScrolledPastThreshold ? 'bg-white shadow-md' : 'bg-transparent shadow-none'}
          ${menuOpen ? 'bg-white' : ''}
        `}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Accueil Akualis"
            className={`flex items-center transition-opacity duration-300 ${
              isScrolledPastThreshold
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }
            ${menuOpen ? 'opacity-100' : ''}`}
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
            {menuItems.map((item) => (
              item.show && (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="menu-item px-3 text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              )
            ))}
          </ul>

          <a
            href="#inform"
            className="hidden md:block hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 ml-2"
          >
            Découvrez Akualis
          </a>

          <span className="md:hidden flex items-center gap-1">
            {/* Hamburger for mobile */}
            <a
              href="#inform"
              className={`hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 ml-2
              transition-opacity duration-300 ${
                isScrolledPastThreshold
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }
            ${menuOpen ? 'opacity-100 pointer-events-auto!' : ''}`}
            >
              Découvrez Akualis
            </a>
            <button
              className="flex items-center p-2"
              onClick={toggleMenu}
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
          </span>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
            <ul className="flex flex-col items-center gap-4 py-4 font-semibold">
              {menuItems.map((item) => (
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
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
