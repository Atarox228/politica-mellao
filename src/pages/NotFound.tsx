import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <p className="section-label mb-4">Error 404</p>
          <h1
            className="text-6xl md:text-8xl font-black text-[#1a5f5f] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Página no encontrada
          </h1>
          <p className="text-gray-500 mb-10 max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            La página que buscás no existe o fue movida.
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
