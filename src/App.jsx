import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AgileProfile from './pages/AgileProfile';
import DataProfile from './pages/DataProfile';
import SupportProfile from './pages/SupportProfile';
import { useTheme } from './hooks/ThemeProvider';
import ChatWidget from './components/common/ChatWidget';

// Componente global: Botón flotante para cambiar el tema
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme} 
      style={{
        position: 'absolute', top: '20px', left: '20px', zIndex: 1000, 
        padding: '10px 15px', cursor: 'pointer', borderRadius: '20px',
        border: 'none', backgroundColor: theme === 'light' ? '#333' : '#f5f5f5',
        color: theme === 'light' ? '#fff' : '#333', fontWeight: 'bold'
      }}>
      {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
    </button>
  );
};

// Componente global: Info de contacto básica
const SocialInfo = () => {
  return (
    <div style={{
      position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 1000, display: 'flex', gap: '15px', padding: '10px 20px',
      background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
      borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)',
      color: 'white', fontSize: '0.9rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'
    }}>
      <strong>Gustavo Rizo</strong>
      <span>|</span>
      <a href="tel:+524776316384" style={{ color: '#4da6ff', textDecoration: 'none' }}>📞 +52 477 631 6384</a>
      <span>|</span>
      <a href="https://linkedin.com/in/leonrixo" target="_blank" rel="noreferrer" style={{ color: '#4da6ff', textDecoration: 'none' }}>LinkedIn</a>
      <span>|</span>
      <a href="https://github.com/leonrixo" target="_blank" rel="noreferrer" style={{ color: '#4da6ff', textDecoration: 'none' }}>GitHub</a>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeToggleButton />
      <SocialInfo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agile" element={<AgileProfile />} />
        <Route path="/data" element={<DataProfile />} />
        <Route path="/support" element={<SupportProfile />} />
      </Routes>
      
      {/* Widget Global: Aparecerá en todas las rutas */}
      <ChatWidget />
      
    </BrowserRouter>
  );
}

export default App;
