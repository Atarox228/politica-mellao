import { Twitter, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE, SOCIAL, NAV_LINKS, PRESS } from '../content';

export default function Footer() {
  return (
    <footer className="bg-[#124444] text-white">
      {/* Gold accent line */}
      <div className="h-1 bg-[#c8a96e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {SITE.name}
            </h2>
            <p className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] font-semibold mb-4">
              {SITE.tagline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Construyendo juntos una Argentina más justa, productiva y transparente.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] font-semibold mb-4">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] font-semibold mb-4">
              Redes Sociales
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={SOCIAL.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Twitter size={16} />
                {SOCIAL.twitter.handle}
              </a>
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Instagram size={16} />
                {SOCIAL.instagram.handle}
              </a>
            </div>
          </div>

          {/* Press contact */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] font-semibold mb-4">
              {PRESS.label}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Para consultas de medios y solicitudes de entrevistas, contactanos por WhatsApp.
            </p>
            <a
              href={PRESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366]/10 border border-[#25d366]/30 px-4 py-2.5 text-[#25d366] text-sm font-medium tracking-wide hover:bg-[#25d366]/20 transition-colors"
            >
              <MessageCircle size={16} />
              {PRESS.displayNumber}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
