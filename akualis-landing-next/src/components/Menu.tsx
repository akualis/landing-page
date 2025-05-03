import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const toggleMenu = () => setMenuOpen((open) => !open);
  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);
  const [hideFloatingCTA, setHideFloatingCTA] = useState(false);

  // Smooth scroll handler
  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const el = document.getElementById(href.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll logic for menu and floating CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) : 0;
      setIsScrolledPastThreshold(scrollTop > 50);

      // Check if #inform is in view
      const informEl = document.getElementById('inform');
      let informInView = false;
      if (informEl) {
        const rect = informEl.getBoundingClientRect();
        informInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      // Hide CTA if scrolled > 90% or #inform is in view
      setHideFloatingCTA(scrollPercent > 0.9 || informInView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-white shadow-md transition-all duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" aria-label="Accueil Akualis" className="flex items-center">
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
          <li>
            <a href="#concept" className="menu-item px-3 text-primary">Concept</a>
          </li>
          <li>
            <a href="#constat" className="menu-item px-3 text-primary">Mission</a>
          </li>
          <li>
            <a href="#team" className="menu-item px-3 text-primary">Equipe</a>
          </li>
          <li>
            <a href="#testimonials" className="menu-item px-3 text-primary">Témoignages</a>
          </li>
          <li>
            <Link href="/blog" className="menu-item px-3 text-primary">Blog</Link>
          </li>
          <li>
            <a
              href="https://app.akualis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-item px-3 text-primary"
            >
              Webapp
            </a>
          </li>
          <li>
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
              aria-label="Changer la langue"
            >
              {lang === "fr" ? "FR" : "EN"}
            </button>
          </li>
          <li>
            <a
              href="#inform"
              className="hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 ml-2"
            >
              Découvrez Akualis
            </a>
          </li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center p-2"
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col items-center gap-2 py-4 font-semibold">
            <li>
              <a href="#concept" className="menu-item px-3 text-primary" onClick={toggleMenu}>Concept</a>
            </li>
            <li>
              <a href="#constat" className="menu-item px-3 text-primary" onClick={toggleMenu}>Mission</a>
            </li>
            <li>
              <a href="#team" className="menu-item px-3 text-primary" onClick={toggleMenu}>Equipe</a>
            </li>
            <li>
              <a href="#testimonials" className="menu-item px-3 text-primary" onClick={toggleMenu}>Témoignages</a>
            </li>
            <li>
              <Link href="/blog" className="menu-item px-3 text-primary" onClick={toggleMenu}>Blog</Link>
            </li>
            <li>
              <a
                href="https://app.akualis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-item px-3 text-primary"
                onClick={toggleMenu}
              >
                Webapp
              </a>
            </li>
            <li>
              <button
                onClick={() => { toggleLang(); toggleMenu(); }}
                className="px-3 py-1 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
                aria-label="Changer la langue"
              >
                {lang === "fr" ? "FR" : "EN"}
              </button>
            </li>
            <li>
              <a
                href="#inform"
                className="hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 mt-2"
                onClick={toggleMenu}
              >
                Découvrez Akualis
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
        {!hideFloatingCTA && (
          <a
            className="hero-cta cta-floating md:hidden w-auto fixed rounded-full font-semibold bg-accent text-white"
            onClick={smoothScrollTo}
            href="#inform"
          >Découvrez Akualis</a>
        )}
      </>
  );
}
