import React, { useState } from 'react';
import './SQLSimulator.css';

// Base de datos (mock) en formato JSON
const databaseTable = [
  { id: 1, habilidad: 'Consultas SQL (MySQL)', area: 'Data', experiencia: 'Avanzado' },
  { id: 2, habilidad: 'Creación de Dashboards', area: 'Data', experiencia: 'Intermedio' },
  { id: 3, habilidad: 'Filtrado Geoespacial', area: 'GIS', experiencia: 'Avanzado' },
  { id: 4, habilidad: 'Limpieza de Datos (QA)', area: 'Calidad', experiencia: 'Avanzado' }
];

export default function SQLSimulator() {
  // Estados para manejar lo que escribe el usuario, los resultados y los errores
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Función que simula el motor de base de datos
  const handleExecute = () => {
    // 1. Limpiamos espacios y convertimos a mayúsculas para facilitar la validación
    const normalizedQuery = query.trim().toUpperCase();

    // 2. Lógica de validación estricta
    if (normalizedQuery === 'SELECT * FROM HABILIDADES' || normalizedQuery === 'SELECT * FROM HABILIDADES;') {
      // Éxito: Guardamos los datos en el estado y limpiamos errores
      setResult(databaseTable);
      setError('');
    } else if (normalizedQuery === '') {
      // Error por campo vacío
      setResult(null);
      setError('Error: El query no puede estar vacío.');
    } else {
      // Error de sintaxis (cualquier otra cosa escrita)
      setResult(null);
      setError("Error 1064 (42000): You have an error in your SQL syntax. Try: SELECT * FROM Habilidades");
    }
  };

  return (
    <div className="sql-simulator-container">
      <h3>Terminal SQL Interactiva</h3>
      <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1rem' }}>
        <em>Consola de mando: Ejecuta "SELECT * FROM Habilidades" para extraer datos de mi experiencia.</em>
      </p>
      
      <div className="sql-editor">
        <textarea 
          className="sql-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escribe tu query SQL aquí..."
          spellCheck="false"
        />
        <button className="sql-btn" onClick={handleExecute}>
          ▶ Ejecutar Consulta
        </button>
      </div>

      {/* Renderizado condicional del error en color rojo */}
      {error && <p className="sql-error-text">{error}</p>}

      {/* Renderizado condicional de la tabla si hay resultados */}
      {result && (
        <div className="sql-results">
          <p className="sql-success">Query OK, {result.length} rows affected.</p>
          <table className="sql-table">
            <thead>
              <tr>
                <th>id</th>
                <th>habilidad</th>
                <th>area</th>
                <th>experiencia</th>
              </tr>
            </thead>
            <tbody>
              {/* Uso de JSX puro .map() para iterar sobre el JSON sin librerías */}
              {result.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.habilidad}</td>
                  <td>{row.area}</td>
                  <td>{row.experiencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

