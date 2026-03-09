import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, Video, Radio } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Medios() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#1a5f5f] to-[#2a7f7f] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Medios</h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-12 text-xl">
              El diálogo con los medios de comunicación es fundamental para acercar las propuestas a la ciudadanía.
              Aquí encontrarás mis apariciones, entrevistas y artículos.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Newspaper className="text-[#1a5f5f]" size={48} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5f5f] mb-2">Prensa Escrita</h3>
                <p className="text-gray-600">Artículos y entrevistas en medios gráficos</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Video className="text-[#1a5f5f]" size={48} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5f5f] mb-2">Televisión</h3>
                <p className="text-gray-600">Participación en programas y noticieros</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Radio className="text-[#1a5f5f]" size={48} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5f5f] mb-2">Radio</h3>
                <p className="text-gray-600">Entrevistas y columnas radiales</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Últimas apariciones</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mantente informado sobre mis últimas intervenciones en medios de comunicación. La transparencia
              y el diálogo permanente con la ciudadanía son pilares fundamentales de mi gestión.
            </p>

            <div className="bg-[#f0f9f9] border-l-4 border-[#1a5f5f] p-6 rounded-r-lg mt-8">
              <p className="text-gray-700 italic">
                Para solicitudes de entrevistas o información para prensa, contacta a través de nuestras redes
                sociales o el formulario en la sección Sumate.
              </p>
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
