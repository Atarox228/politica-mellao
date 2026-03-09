import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BienestarCiudadano() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#1a5f5f] to-[#2a7f7f] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Bienestar Ciudadano</h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-12 text-xl">
              El bienestar de los ciudadanos es el objetivo último de toda política pública. Trabajar por la
              dignidad, la salud y el desarrollo integral de cada argentino es nuestro compromiso fundamental.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6">Legado Alfredo Moffat</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              El pensamiento de Alfredo Moffat, pionero en psicología social comunitaria, nos enseña que el
              bienestar no es solo individual sino colectivo. Su trabajo en barrios populares demostró que las
              comunidades tienen recursos propios para transformar su realidad.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Inspirados en su legado, propongo políticas públicas que fortalezcan el tejido social, promuevan
              la participación comunitaria y reconozcan la cultura popular como fuente de identidad y transformación.
              La salud mental y el desarrollo comunitario deben ser prioridades de Estado.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Mis escritos</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A lo largo de mi trayectoria he reflexionado profundamente sobre los desafíos que enfrenta Argentina.
              Mis escritos abordan temas como la justicia social, el desarrollo económico con inclusión, y la
              necesidad de construir una democracia más participativa y transparente.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Creo en el poder de las ideas para transformar la realidad. Cada texto es una invitación al diálogo,
              un aporte al debate público y una propuesta concreta para construir el país que soñamos.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Recuperar la dignidad</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La dignidad no es un lujo, es un derecho fundamental de todo ser humano. Miles de argentinos viven
              hoy en situaciones que atentan contra su dignidad: falta de trabajo, viviendas precarias, acceso
              limitado a salud y educación de calidad.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recuperar la dignidad implica garantizar trabajo genuino, salarios justos, vivienda digna, educación
              de calidad y acceso universal a la salud. Significa también que cada ciudadano sea tratado con
              respeto por las instituciones, que se respeten sus derechos y que tenga oportunidades reales de
              desarrollo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Este es el proyecto político que propongo: devolver a cada argentino la dignidad que merece y
              construir juntos una sociedad más justa, solidaria y próspera.
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
