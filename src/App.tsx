import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuienSoy from './pages/QuienSoy';
import ProduccionNacional from './pages/ProduccionNacional';
import TransparenciaInstitucional from './pages/TransparenciaInstitucional';
import BienestarCiudadano from './pages/BienestarCiudadano';
import Medios from './pages/Medios';
import Sumate from './pages/Sumate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/produccion-nacional" element={<ProduccionNacional />} />
        <Route path="/transparencia-institucional" element={<TransparenciaInstitucional />} />
        <Route path="/bienestar-ciudadano" element={<BienestarCiudadano />} />
        <Route path="/medios" element={<Medios />} />
        <Route path="/sumate" element={<Sumate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
