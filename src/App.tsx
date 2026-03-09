import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import QuienSoy from './pages/QuienSoy';
import ProduccionNacional from './pages/ProduccionNacional';
import TransparenciaInstitucional from './pages/TransparenciaInstitucional';
import BienestarCiudadano from './pages/BienestarCiudadano';
import Medios from './pages/Medios';
import Sumate from './pages/Sumate';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      {/* Resetea el scroll al inicio en cada cambio de ruta */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/produccion-nacional" element={<ProduccionNacional />} />
        <Route path="/transparencia-institucional" element={<TransparenciaInstitucional />} />
        <Route path="/bienestar-ciudadano" element={<BienestarCiudadano />} />
        <Route path="/medios" element={<Medios />} />
        <Route path="/sumate" element={<Sumate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
