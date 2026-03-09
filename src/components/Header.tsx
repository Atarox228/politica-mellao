import { Link } from 'react-router-dom';
import { Twitter, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-[#1a5f5f] hover:text-[#2a7f7f] transition-colors">
            Ariana Mellao
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/quien-soy" className="text-gray-700 hover:text-[#1a5f5f] transition-colors">
              ¿Quién soy?
            </Link>
            <Link to="/produccion-nacional" className="text-gray-700 hover:text-[#1a5f5f] transition-colors">
              Producción Nacional
            </Link>
            <Link to="/transparencia-institucional" className="text-gray-700 hover:text-[#1a5f5f] transition-colors">
              Transparencia Institucional
            </Link>
            <Link to="/bienestar-ciudadano" className="text-gray-700 hover:text-[#1a5f5f] transition-colors">
              Bienestar Ciudadano
            </Link>
            <Link to="/medios" className="text-gray-700 hover:text-[#1a5f5f] transition-colors">
              Medios
            </Link>
            <Link to="/sumate" className="text-gray-700 hover:text-[#1a5f5f] transition-colors">
              Sumate
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/arianamellao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1a5f5f] transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/arianamellaoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1a5f5f] transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
