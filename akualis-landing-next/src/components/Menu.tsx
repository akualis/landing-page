import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Menu() {

  const [showToolbar, setShowToolbar] = useState(true);
    const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

    // Smooth scroll handler
    const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.getElementById(href.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Scroll logic for menu
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolledPastThreshold(currentScrollPosition > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Carousel logic (simple, not animated)
    const nextPreview = () =>
      setAppPreviewSlide((s) => (s + 1) % appPreviews.length);
    const prevPreview = () =>
      setAppPreviewSlide(
        (s) => (s - 1 + appPreviews.length) % appPreviews.length,
      );

    const nextTestimonial = () =>
      setTestimonialSlide((s) => (s + 1) % testimonials.length);
    const prevTestimonial = () =>
      setTestimonialSlide(
        (s) => (s - 1 + testimonials.length) % testimonials.length,
      );

  return (
    <div id="parent-menu">
        {showToolbar && (
          <div
            id="menu"
            className={`fixed z-[1000] transition-all duration-1000 px-0 py-1 menu-start text-center font-semibold flex justify-around items-center ${
              isScrolledPastThreshold
                ? 'top-0 w-full rounded-none shadow-md bg-white'
                : 'top-5 w-[600px] rounded-full mx-auto bg-white'
            }`}
          >
            <Link href="/" aria-label="Accueil Akualis">
              <Image
                id="menu-logo"
                src="/img/akualis-logo.webp"
                alt="Logo Akualis"
                className={
                  isScrolledPastThreshold ? 'h-[50px] pl-2' : 'h-[60px]'
                }
                width={112.53} // Adjust width as needed
                height={50} // Adjust height as needed
                priority
              />
            </Link>
            <ul className="flex list-none p-0 m-4">
              <li>
                <a
                  href="#concept"
                  onClick={smoothScrollTo}
                  className="menu-item px-4 text-primary"
                >
                  Concept
                </a>
              </li>
              <li>
                <a
                  href="#constat"
                  onClick={smoothScrollTo}
                  className="menu-item px-4 text-primary"
                >
                  Mission
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  href="#team"
                  onClick={smoothScrollTo}
                  className="menu-item px-4 text-primary"
                >
                  Equipe
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={smoothScrollTo}
                  className="menu-item px-4 text-primary"
                >
                  Témoignages
                </a>
              </li>
              <li className="hidden">
                <a
                  href="#inform"
                  onClick={smoothScrollTo}
                  className="menu-item px-4 text-primary"
                >
                  S'informer
                </a>
              </li>
            </ul>
            <a
              className="hero-cta hidden md:inline-block rounded-full px-4 py-2 font-semibold bg-accent text-white"
              onClick={smoothScrollTo}
              href="#inform"
            >
              Découvrez Akualis
            </a>
          </div>
        )}
        <a
          className="hero-cta cta-floating md:hidden fixed bottom-4 right-4 rounded-full px-4 py-2 font-semibold bg-accent text-white"
          onClick={smoothScrollTo}
          href="#inform"
        >
          Découvrez Akualis
        </a>
      </div>
  );
}
