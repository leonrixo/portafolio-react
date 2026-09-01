import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Creamos el Contexto (es como una caja global de datos)
const ThemeContext = createContext();

// 2. Creamos el Provider (el componente que envuelve nuestra App y provee los datos)
export const ThemeProvider = ({ children }) => {
  
  // Usamos inicialización perezosa (lazy) para leer localStorage solo la primera vez
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // useEffect se ejecuta cada vez que 'theme' cambia
  useEffect(() => {
    // 1. Guardamos el nuevo tema en el navegador
    localStorage.setItem('theme', theme);
    
    // 2. Cambiamos la clase del body para que CSS pueda reaccionar
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  // Función sencilla para alternar
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Proveemos el estado y la función a cualquier hijo que lo necesite
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook para consumir el contexto fácilmente
export const useTheme = () => {
  return useContext(ThemeContext);
};

