import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Heart, HandHeart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Sumate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#1a5f5f] to-[#2a7f7f] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Sumate</h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-12 text-xl text-center">
              Argentina necesita el compromiso de todos. Unite a nuestro proyecto para construir juntos
              el país que merecemos.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Users className="text-[#1a5f5f]" size={48} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5f5f] mb-2">Participá</h3>
                <p className="text-gray-600">Formá parte de nuestros encuentros y actividades</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="text-[#1a5f5f]" size={48} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5f5f] mb-2">Colaborá</h3>
                <p className="text-gray-600">Tu aporte hace la diferencia</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <HandHeart className="text-[#1a5f5f]" size={48} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5f5f] mb-2">Difundí</h3>
                <p className="text-gray-600">Compartí nuestras propuestas</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">¿Por qué sumarte?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Porque creemos en un país mejor para todos. Porque sabemos que el cambio es posible si trabajamos
              juntos. Porque cada argentino tiene el poder de transformar su realidad y la de su comunidad.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Formas de participar</h2>
            <ul className="space-y-4 mb-8">
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-[#1a5f5f]">Militancia activa:</strong> Participá en nuestras actividades
                territoriales y eventos políticos.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-[#1a5f5f]">Voluntariado:</strong> Colaborá con tu tiempo y habilidades
                en proyectos comunitarios.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-[#1a5f5f]">Difusión:</strong> Ayudanos a comunicar nuestras propuestas
                en redes sociales y tu comunidad.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-[#1a5f5f]">Aportes:</strong> Tu contribución económica nos permite
                sostener nuestras actividades.
              </li>
            </ul>

            <div className="bg-[#1a5f5f] text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Contacto</h3>
              <p className="mb-4">
                Para sumarte o consultarnos, escribinos a través de nuestras redes sociales:
              </p>
              <div className="space-y-2">
                <p>
                  <strong>Twitter:</strong> @arianamellao
                </p>
                <p>
                  <strong>Instagram:</strong> @arianamellaoo
                </p>
              </div>
            </div>
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
