import React from 'react';
import { Link } from 'react-router-dom';
import DashboardMetrics from '../components/data/DashboardMetrics';
import SQLSimulator from '../components/data/SQLSimulator';
import './DataProfile.css';

export default function DataProfile() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* HEADER ACTUALIZADO: CTAs de Conversión */}
      <header className="data-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', borderBottom: '2px solid #555', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--text-main)', margin: 0 }}>Data Analyst</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => window.print()} style={{ padding: '10px 20px', backgroundColor: '#34d399', color: '#111827', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
            📄 Imprimir / PDF
          </button>
          <a href="mailto:leonrixo@gmail.com" style={{ padding: '10px 20px', backgroundColor: '#2980b9', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
            ✉️ Contactar
          </a>
        </div>
      </header>
      
      <main>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '2.5rem', opacity: 0.9 }}>
          Analista de datos con historial comprobado en <strong>HERE Maps</strong> (Ago 2017 - Mar 2022). 
          Especializado en asegurar la calidad e integridad de datos geoespaciales a través de consultas avanzadas y automatización.
        </p>

        {/* ================= CERTIFICACIONES TEÓRICAS ================= */}
        <section>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '2px solid #555', paddingBottom: '10px' }}>
            Formación y Bases Teóricas
          </h2>
          <div className="cert-list">
            <span className="cert-item">📊 Data Management (Microsoft 365)</span>
            <span className="cert-item">📈 Power BI (LinkedIn Learning)</span>
            <span className="cert-item">🧠 Data Science Basics</span>
          </div>
        </section>

        {/* ================= LOGROS DE IMPACTO (TIMELINE/LIST) ================= */}
        <section>
          <h2 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid #555', paddingBottom: '10px' }}>
            Logros de Impacto (HERE Maps)
          </h2>
          <div className="impact-list">
            
            <div className="impact-item">
              <h3>Automatización de Procesos (Six Sigma Green Belt)</h3>
              <p>
                Lideré una exitosa iniciativa de mejora continua bajo la metodología Six Sigma. 
                Diseñé y programé <strong>Macros de Excel</strong> complejas para automatizar la revisión de coordenadas, 
                logrando un ahorro tangible de <strong>2 horas diarias</strong> de trabajo manual para el equipo de analistas.
              </p>
              <div>
                <span className="data-badge">Excel Macros</span>
                <span className="data-badge">Six Sigma</span>
                <span className="data-badge">Mejora Continua</span>
              </div>
            </div>

            <div className="impact-item">
              <h3>Extracción y Validación de Datos (SQL)</h3>
              <p>
                Uso intensivo de <strong>SQL (MySQL)</strong> para la extracción, filtrado y validación de bases de datos masivas.
                Creación de consultas estructuradas para auditar anomalías en la cartografía digital y asegurar la calidad del producto final entregado al cliente.
              </p>
              <div>
                <span className="data-badge">SQL</span>
                <span className="data-badge">MySQL</span>
                <span className="data-badge">Data QA</span>
              </div>
            </div>

          </div>
        </section>

        <hr style={{ margin: '3rem 0', borderColor: '#444' }} />

        {/* ================= COMPONENTES INTERACTIVOS PREVIOS ================= */}
        <section>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '2rem', textAlign: 'center' }}>
            Dashboard de Impacto Analítico
          </h2>
          <DashboardMetrics />
        </section>

        <hr style={{ margin: '3rem 0', borderColor: '#444' }} />

        <section>
          <SQLSimulator />
        </section>
        
      </main>
    </div>
  );
}
