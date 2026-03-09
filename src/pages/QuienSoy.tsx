import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function QuienSoy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#1a5f5f] to-[#2a7f7f] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">¿Quién soy?</h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6">Mi trayectoria</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Soy una dirigente comprometida con el futuro de Argentina. Mi carrera política se ha caracterizado por
              la búsqueda incansable de soluciones concretas a los problemas que enfrentan los argentinos día a día.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Mis valores</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creo firmemente en la transparencia, la honestidad y el trabajo en equipo. Mi compromiso es con todos
              los argentinos, sin distinción de origen, ideología o condición social.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Mi visión</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Argentina necesita un liderazgo renovado que ponga el foco en la producción, la transparencia y el
              bienestar de todos sus ciudadanos. Trabajemos juntos para construir el país que merecemos.
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center bg-[#1a5f5f] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#2a7f7f] transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Volver a Inicio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
