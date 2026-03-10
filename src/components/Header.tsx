import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Instagram, Menu, X } from 'lucide-react';
import { SITE, SOCIAL, NAV_LINKS } from '../content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#fafaf8] transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'border-b border-gray-200'
        }`}
      >
        {/* Top accent bar */}
        <div className="h-1 bg-[#1c2b62]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Name */}
            <Link
              to="/"
              className="group flex flex-col leading-tight"
              aria-label={`Inicio — ${SITE.name}`}
            >
              <span
                className="text-xl md:text-2xl font-bold text-[#1c2b62] tracking-tight transition-colors group-hover:text-[#1c2b40]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {SITE.name}
              </span>
              {/* <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] font-semibold hidden sm:block">
                {SITE.tagline}
              </span> */}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm tracking-wide transition-colors relative py-1 ${
                    location.pathname === to
                      ? 'text-[#1c2b62] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#c8a96e]'
                      : 'text-gray-600 hover:text-[#1c2b62]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Social + Hamburger */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href={SOCIAL.twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Twitter de ${SITE.name}`}
                  className="text-gray-400 hover:text-[#1c2b62] transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram de ${SITE.name}`}
                  className="text-gray-400 hover:text-[#1c2b62] transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Hamburger — mobile/tablet */}
              <button
                className="lg:hidden p-2 text-[#1c2b62] hover:bg-gray-100 rounded transition-colors"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 bg-[#fafaf8] transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '65px' }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Menú móvil">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`py-4 text-lg border-b border-gray-100 transition-colors ${
                location.pathname === to
                  ? 'text-[#1c2b62] font-semibold'
                  : 'text-gray-700 hover:text-[#1c2b62]'
              }`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {label}
            </Link>
          ))}

          <div className="flex items-center gap-4 mt-8 pt-4">
            <a
              href={SOCIAL.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1c2b62] transition-colors"
            >
              <Twitter size={22} />
            </a>
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1c2b62] transition-colors"
            >
              <Instagram size={22} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
