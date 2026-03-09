import { Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a5f5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            <a
              href="https://twitter.com/arianamellao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/arianamellaoo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Ariana Mellao. Liderazgo Argentino.
          </p>
        </div>
      </div>
    </footer>
  );
}
