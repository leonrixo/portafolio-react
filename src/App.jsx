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

function App() {
  return (
    <BrowserRouter>
      <ThemeToggleButton />
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
