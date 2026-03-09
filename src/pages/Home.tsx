import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-[#1a5f5f] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <img
                src="/politica.jpeg"
                alt="Ariana Mellao"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Liderazgo Argentino<br />para una nueva etapa
            </h1>
          </div>
        </section>

        <div className="border-t-4 border-gray-200"></div>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <Link
                to="/quien-soy"
                className="bg-white border-2 border-[#1a5f5f] text-[#1a5f5f] font-semibold py-4 px-6 rounded-lg hover:bg-[#1a5f5f] hover:text-white transition-all duration-300 text-center shadow-sm"
              >
                ¿Quién soy?
              </Link>
              <Link
                to="/produccion-nacional"
                className="bg-white border-2 border-[#1a5f5f] text-[#1a5f5f] font-semibold py-4 px-6 rounded-lg hover:bg-[#1a5f5f] hover:text-white transition-all duration-300 text-center shadow-sm"
              >
                Producción Nacional
              </Link>
              <Link
                to="/transparencia-institucional"
                className="bg-white border-2 border-[#1a5f5f] text-[#1a5f5f] font-semibold py-4 px-6 rounded-lg hover:bg-[#1a5f5f] hover:text-white transition-all duration-300 text-center shadow-sm"
              >
                Transparencia Institucional
              </Link>
              <Link
                to="/bienestar-ciudadano"
                className="bg-white border-2 border-[#1a5f5f] text-[#1a5f5f] font-semibold py-4 px-6 rounded-lg hover:bg-[#1a5f5f] hover:text-white transition-all duration-300 text-center shadow-sm"
              >
                Bienestar Ciudadano
              </Link>
              <Link
                to="/medios"
                className="bg-white border-2 border-[#1a5f5f] text-[#1a5f5f] font-semibold py-4 px-6 rounded-lg hover:bg-[#1a5f5f] hover:text-white transition-all duration-300 text-center shadow-sm"
              >
                Medios
              </Link>
              <Link
                to="/sumate"
                className="bg-white border-2 border-[#1a5f5f] text-[#1a5f5f] font-semibold py-4 px-6 rounded-lg hover:bg-[#1a5f5f] hover:text-white transition-all duration-300 text-center shadow-sm"
              >
                Sumate
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
