import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/ThemeProvider';

export default function GlobalNavbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinkStyle = ({ isActive }) => ({
    padding: '8px 16px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: isActive ? '#fff' : (theme === 'light' ? '#333' : '#bbb'),
    backgroundColor: isActive ? '#38bdf8' : 'transparent',
    transition: 'all 0.3s ease'
  });

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: theme === 'light' ? '#ffffff' : '#1f2937',
      borderBottom: `1px solid ${theme === 'light' ? '#e5e7eb' : '#374151'}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <NavLink to="/" style={({ isActive }) => ({ ...navLinkStyle({ isActive }), backgroundColor: isActive ? '#10b981' : 'transparent' })}>
          🏠 Inicio
        </NavLink>
        <NavLink to="/agile" style={({ isActive }) => ({ ...navLinkStyle({ isActive }), backgroundColor: isActive ? '#38bdf8' : 'transparent' })}>
          ⚡ Agile
        </NavLink>
        <NavLink to="/data" style={({ isActive }) => ({ ...navLinkStyle({ isActive }), backgroundColor: isActive ? '#34d399' : 'transparent' })}>
          📊 Data
        </NavLink>
        <NavLink to="/support" style={({ isActive }) => ({ ...navLinkStyle({ isActive }), backgroundColor: isActive ? '#818cf8' : 'transparent' })}>
          🛠️ Support
        </NavLink>
        <NavLink to="/cv" style={({ isActive }) => ({ ...navLinkStyle({ isActive }), backgroundColor: isActive ? '#f59e0b' : 'transparent' })}>
          📄 CV
        </NavLink>
      </div>

      {!isHome && (
        <button 
          onClick={toggleTheme} 
          style={{
            padding: '8px 15px', cursor: 'pointer', borderRadius: '20px',
            border: 'none', backgroundColor: theme === 'light' ? '#333' : '#f5f5f5',
            color: theme === 'light' ? '#fff' : '#333', fontWeight: 'bold'
          }}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      )}
    </nav>
  );
}
