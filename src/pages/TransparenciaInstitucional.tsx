import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TransparenciaInstitucional() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="relative h-64 md:h-96 bg-gradient-to-r from-[#1a5f5f] to-[#2a7f7f] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Transparencia Institucional
          </h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-12 text-xl">
              La confianza en las instituciones se construye con transparencia, rendición de cuentas y un compromiso
              firme con el Estado de Derecho. Propongo una agenda de reformas profundas para fortalecer nuestra
              democracia.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6">Gobierno Abierto</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Los ciudadanos tienen derecho a saber cómo se utilizan los recursos públicos. Impulsaremos la
              implementación de plataformas digitales que permitan el acceso abierto a la información sobre gestión
              pública, presupuestos, contrataciones y decisiones de gobierno.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              La transparencia no es solo publicar datos, es garantizar que sean comprensibles y útiles para que
              la ciudadanía pueda ejercer un control efectivo sobre sus representantes.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Pluralismo Sindical</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Los trabajadores deben tener libertad real para elegir quién los representa. El modelo de sindicato
              único concentra poder y limita la democracia sindical. Debemos avanzar hacia un sistema que permita
              la coexistencia de diferentes organizaciones sindicales en cada sector.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              El pluralismo sindical fortalece los derechos de los trabajadores, promueve la competencia entre
              representantes y garantiza que las organizaciones sindicales respondan verdaderamente a los intereses
              de sus afiliados.
            </p>

            <h2 className="text-3xl font-bold text-[#1a5f5f] mb-6 mt-12">Eliminación de fueros</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Todos los ciudadanos deben ser iguales ante la ley. Los privilegios y fueros especiales que protegen
              a algunos funcionarios de la Justicia erosionan la confianza en las instituciones y crean una sensación
              de impunidad.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Propongo la eliminación gradual de los fueros, manteniendo únicamente las garantías mínimas necesarias
              para el ejercicio de las funciones públicas, pero sin convertirlos en escudos contra la Justicia.
              Quien elige servir al país debe hacerlo con la responsabilidad de responder por sus actos.
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
