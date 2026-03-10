import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE, HOME } from '../content';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Header />

      <main className="flex-grow">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#1c2b62]">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 60px)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <p className="hero-line-1 section-label mb-6">{SITE.tagline}</p>
                <h1
                  className="hero-line-2 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {HOME.heroHeadline}<br />
                  <em className="not-italic text-[#c8a96e]">{HOME.heroHeadlineAccent}</em>
                </h1>
                <p
                  className="hero-line-3 text-gray-300 text-lg leading-relaxed mb-10 max-w-md"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {HOME.heroSubtitle}
                </p>
                <div className="hero-line-4 flex flex-wrap gap-4">
                  <Link to="/quien-soy" className="btn-primary">
                    {HOME.heroCta}
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/sumate"
                    className="inline-flex items-center gap-2 text-white border-b border-[#c8a96e] pb-0.5 text-sm tracking-wider uppercase font-semibold hover:text-[#c8a96e] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {HOME.heroCtaSecondary}
                  </Link>
                </div>
              </div>

              {/* Photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#c8a96e]" />
                  <img
                    src={SITE.heroPhoto}
                    alt={SITE.heroPhotoAlt}
                    className="relative w-56 h-56 md:w-72 md:h-72 object-cover"
                    style={{ filter: 'grayscale(20%) brightness(0.92)' }}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-1 bg-[#c8a96e]" />
        </section>

        {/* ── Agenda sections ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="section-label mb-2">Agenda política</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1c2b62]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Propuestas
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {HOME.sections.map(({ to, label, title, description, highlight }) => (
                <Link
                  key={to}
                  to={to}
                  className={`group relative flex flex-col p-8 transition-colors duration-300 ${
                    highlight
                      ? 'bg-[#1c2b62] text-white'
                      : 'bg-[#fafaf8] hover:bg-white'
                  }`}
                >
                  <span className="text-xs font-semibold tracking-[0.2em] mb-4 text-[#c8a96e]">
                    {label}
                  </span>
                  <h3
                    className={`text-xl font-bold mb-3 leading-tight ${
                      highlight ? 'text-white' : 'text-[#1c2b62]'
                    }`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed flex-grow ${
                      highlight ? 'text-gray-300' : 'text-gray-500'
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {description}
                  </p>
                  <div
                    className={`mt-6 flex items-center gap-2 text-xs tracking-widest uppercase font-semibold ${
                      highlight ? 'text-[#c8a96e]' : 'text-[#1c2b62]'
                    }`}
                  >
                    Leer más
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quote strip ── */}
        <section className="bg-[#1c2b40] py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-12 h-1 bg-[#c8a96e] mx-auto mb-8" />
            <blockquote
              className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {HOME.quote}
            </blockquote>
            <p className="text-[#c8a96e] text-sm tracking-[0.2em] uppercase font-semibold">
              {HOME.quoteAuthor}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
