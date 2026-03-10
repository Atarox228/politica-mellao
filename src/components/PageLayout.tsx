import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  title: string;
  label?: string;
  children: React.ReactNode;
  /** Show back-to-home button at the bottom (default: true) */
  showBack?: boolean;
}

export default function PageLayout({
  title,
  label,
  children,
  showBack = true,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Header />

      <main className="flex-grow page-enter">
        {/* Hero banner */}
        <div className="relative overflow-hidden bg-[#1c2b62]">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
              backgroundSize: '12px 12px',
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            {label && (
              <p className="section-label mb-4">{label}</p>
            )}
            <h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h1>
          </div>
          {/* Bottom gold accent */}
          <div className="h-1 bg-[#c8a96e]" />
        </div>

        {/* Content area */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          {children}

          {showBack && (
            <div className="mt-14 pt-8 border-t border-gray-200">
              <Link to="/" className="btn-outline">
                <ArrowLeft size={16} />
                Volver a Inicio
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
