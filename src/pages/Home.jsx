import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="split-screen-container">
      
      {/* 1. Lado Izquierdo: Scrum Master / PM */}
      <div className="split-side agile-side">
        <div className="glass-panel">
          <h1>Scrum Master</h1>
          <p>Liderazgo de equipos, flujos de valor ágiles y automatización empresarial con IA.</p>
          <Link to="/agile" className="btn-explore">
            Ver Experiencia
          </Link>
        </div>
      </div>

      {/* 2. Centro: Data Analyst */}
      <div className="split-side data-side">
        <div className="glass-panel">
          <h1>Data Analyst</h1>
          <p>Calidad geoespacial, bases de datos SQL y Macros en Excel (Six Sigma).</p>
          <Link to="/data" className="btn-explore">
            Ver Resultados
          </Link>
        </div>
      </div>

      {/* 3. Lado Derecho: IT Support */}
      <div className="split-side support-side">
        <div className="glass-panel">
          <h1>IT Support</h1>
          <p>Enterprise Service Desk (Jira/ServiceNow) y comunicación clínica bilingüe.</p>
          <Link to="/support" className="btn-explore">
            Ver Habilidades
          </Link>
        </div>
      </div>

    </div>
  );
}
