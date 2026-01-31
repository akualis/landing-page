"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { FaGlobe } from "react-icons/fa";

export default function Menu({ t, sticky = false, relLangs }: { t?: any; sticky?: boolean; relLangs?: Record<string, string> }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const [langOpen, setLangOpen] = useState(false);

  const supportedLangs = [
    { code: "fr", label: t?.menu?.langFr ?? "FR" },
    { code: "en", label: t?.menu?.langEn ?? "EN" },
  ];

  const currentLang = (pathname || "").split("/")[1] || "fr";
  const makeLangHref = (lang: string) => {
    if (relLangs && relLangs[lang]) {
      return relLangs[lang];
    }
    const rest = (pathname || "").replace(/^\/(en|fr)/, "");
    return `/${lang}${rest || ""}`;
  };

  const isHomePage = pathname === `/${currentLang}` || pathname === '/';
  const isBlogPage = pathname?.includes('/blog');
  const hasInformSection = isHomePage || isBlogPage;
  const informHref = hasInformSection ? '#inform' : `/${currentLang}/#inform`;

  // memoize menu items so useEffect dependencies are stable
  const menuItems = useMemo(
    () => {
      const prefix = isHomePage ? '' : `/${currentLang}/`;

      return [
        { label: t?.menu?.concept ?? "Concept", href: `${prefix}#concept`, show: true },
        { label: t?.menu?.mission ?? "Mission", href: `${prefix}#constat`, show: true },
        { label: t?.menu?.team ?? "Equipe", href: `${prefix}#team`, show: true },
        { label: t?.menu?.testimonials ?? "Témoignages", href: `${prefix}#testimonials`, show: true },
        { label: t?.menu?.blog ?? "Blog", href: `/${currentLang}/blog`, show: true },
        { label: t?.menu?.webapp ?? "Webapp", href: `/${currentLang}/app`, show: true },
      ];
    },
    // depend on t reference so items update when translations change
    [t, pathname, currentLang, isHomePage]
  );

  // track which section is currently visible to highlight the corresponding menu item
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname?.includes('/blog')) {
      setActiveSection('blog');
      return;
    }

    if (pathname?.includes('/app')) {
      setActiveSection('webapp');
      return;
    }

    const sectionIds = menuItems
      .map((m) => (m.href?.startsWith("#") ? m.href.slice(1) : null))
      .filter(Boolean) as string[];

    function onScroll() {
      const offset = 120; // pixel threshold from top where a section is considered active
      let found: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          found = id;
          break;
        }
      }

      setActiveSection(found);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [menuItems, pathname]);

  // close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  // Scroll logic for menu and floating CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
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

  // set locale cookie (used by middleware)
  const setLocaleCookie = (lang: string) => {
    // 1 year expiration
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `locale=${lang}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  };

  const showSticky = sticky || isScrolledPastThreshold;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500
          ${showSticky ? "bg-white shadow-md" : "bg-transparent shadow-none"}
          ${menuOpen ? "bg-white" : ""}`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <Link
            href="/"
            aria-label={t?.menu?.homeAria ?? "Accueil Akualis"}
            className={`flex items-center transition-opacity duration-300 ${
              menuOpen
                ? "opacity-100 pointer-events-auto"
                : showSticky
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src="/img/akualis-logo.webp"
              alt={t?.menu?.logoAlt ?? "Logo Akualis"}
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
                    <a
                      href={item.href}
                      className={`hover:text-accent menu-item px-3 ${
                        (item.href?.startsWith("#")
                          && activeSection === item.href.slice(1)
                          && activeSection !== 'hero') // don't accent when the visible section is the hero
                        || (activeSection === 'blog' && item.href?.includes('/blog'))
                        || (activeSection === 'webapp' && item.href?.includes('/app'))
                          ? "text-accent"
                          : "text-primary"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
            )}
          </ul>

          {/* Desktop language selector (discreet globe icon) */}
          <div className="hidden md:flex items-center gap-3 ml-4 relative" ref={langRef}>
            <button
              aria-label="Select language"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((s) => !s)}
              style={{ cursor: "pointer" }}
              className="p-2 rounded transition-colors text-primary hover:text-accent"
            >
              <FaGlobe className="w-5 h-5" />
            </button>

            {langOpen && (
              <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 bg-white rounded shadow-md w-10 z-50">
                {supportedLangs.map((l) => (
                  <Link
                    key={l.code}
                    href={makeLangHref(l.code)}
                    onClick={() => {
                      setLocaleCookie(l.code);
                      setMenuOpen(false);
                      setLangOpen(false);
                    }}
                    className={`block px-3 py-2 text-sm ${
                      currentLang === l.code ? "bg-accent text-white rounded" : "text-primary hover:bg-gray-50"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={informHref}
            className={`hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 ml-2
              transition-opacity duration-300 hidden md:block ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : showSticky
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
              }`}
          >
            {t?.menu?.cta ?? "Découvrez Akualis"}
          </a>

          {/* Mobile menu */}
          <span className="md:hidden flex items-center gap-1">
            <a
              href={informHref}
              className={`hero-cta rounded-full font-semibold bg-accent text-white px-4 py-2 ml-2
              transition-opacity duration-300 ${
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : showSticky
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
              }`}
            >
              {t?.menu?.cta ?? "Découvrez Akualis"}
            </a>
            {/* Hamburger for mobile */}
            {!menuOpen && (
              // Open button
              <button
                className="flex items-center p-2"
                onClick={() => setMenuOpen(true)}
                aria-label={t?.menu?.openAria ?? "Ouvrir le menu"}
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
                aria-label={t?.menu?.closeAria ?? "Fermer le menu"}
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
                        className={`menu-item text-primary ${
                          item.href?.startsWith("#")
                            && activeSection === item.href.slice(1)
                            && activeSection !== 'hero' // same rule for mobile menu
                            ? "text-accent"
                            : ""
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
              )}
            </ul>

            {/* Mobile language selector (bottom of menu) */}
            <div className="flex justify-center items-center gap-3 py-4 border-t border-gray-100">
              {supportedLangs.map((l) => (
                <Link
                  key={l.code}
                  href={makeLangHref(l.code)}
                  onClick={() => {
                    setLocaleCookie(l.code);
                    setMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    currentLang === l.code ? "bg-accent text-white" : "text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
