import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AgileProfile from './pages/AgileProfile';
import DataProfile from './pages/DataProfile';
import SupportProfile from './pages/SupportProfile';
import { useTheme } from './hooks/ThemeProvider';
import ChatWidget from './components/common/ChatWidget';

import GlobalNavbar from './components/common/GlobalNavbar';

// Fix de UX: Hacer scroll hacia arriba siempre que se cambia de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Componente global: Footer de Contacto (Sección Completa)
const GlobalFooter = () => {
  return (
    <footer style={{
      backgroundColor: '#111827', // Un azul/gris oscuro elegante
      color: 'white',
      padding: '3rem 2rem',
      textAlign: 'center',
      borderTop: '2px solid #1f2937',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.8rem', letterSpacing: '1px' }}>Gustavo Rizo</h2>
      <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Desarrollo de Soluciones Ágiles | Análisis de Datos | IT Support
      </p>
      
      <div style={{
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        fontSize: '1.1rem'
      }}>
        <a href="tel:+524776316384" style={{ 
          background: 'rgba(77, 166, 255, 0.1)', border: '1px solid #4da6ff', color: '#4da6ff', 
          padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', transition: 'all 0.3s' 
        }}>📞 +52 477 631 6384</a>
        
        <a href="https://linkedin.com/in/leonrixo" target="_blank" rel="noreferrer" style={{ 
          background: 'rgba(77, 166, 255, 0.1)', border: '1px solid #4da6ff', color: '#4da6ff', 
          padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', transition: 'all 0.3s' 
        }}>🌐 LinkedIn</a>
        
        <a href="https://github.com/leonrixo" target="_blank" rel="noreferrer" style={{ 
          background: 'rgba(77, 166, 255, 0.1)', border: '1px solid #4da6ff', color: '#4da6ff', 
          padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', transition: 'all 0.3s' 
        }}>💻 GitHub</a>
      </div>
    </footer>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalNavbar />
      
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agile" element={<AgileProfile />} />
            <Route path="/data" element={<DataProfile />} />
            <Route path="/support" element={<SupportProfile />} />
          </Routes>
        </div>
        <GlobalFooter />
      </div>
      
      {/* Widget Global: Aparecerá en todas las rutas */}
      <ChatWidget />
      
    </BrowserRouter>
  );
}

export default App;
