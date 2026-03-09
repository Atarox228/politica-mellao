import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProduccionNacional() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#1a5f5f] to-[#2a7f7f] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Producción Nacional</h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6">Fortalecer la producción argentina</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La producción nacional es el motor del desarrollo económico y social de nuestro país. Necesitamos
              políticas que fortalezcan a nuestros productores, generen empleo de calidad y promuevan el valor
              agregado en todos los sectores.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Apoyo a las PyMEs</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Las pequeñas y medianas empresas son el corazón productivo de Argentina. Debemos garantizar acceso
              al crédito, reducir la carga impositiva y simplificar los trámites burocráticos para que puedan crecer
              y generar más empleo.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Desarrollo regional</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cada región de Argentina tiene potencial productivo único. Promoveremos el desarrollo equilibrado del
              territorio, fortaleciendo las economías regionales y las cadenas de valor locales.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Innovación y tecnología</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La innovación tecnológica es clave para aumentar la competitividad. Impulsaremos la investigación,
              el desarrollo y la transferencia tecnológica para modernizar nuestra matriz productiva.
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
