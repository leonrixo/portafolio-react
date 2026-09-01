import React from 'react';
import { Link } from 'react-router-dom';
import KanbanBoard from '../components/agile/KanbanBoard';
import './AgileProfile.css';

export default function AgileProfile() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* HEADER ACTUALIZADO: Sin "Project Manager" */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #2c3e50', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--text-main)', margin: 0 }}>Scrum Master | Delivery Manager</h1>
        <Link to="/" style={{ padding: '10px 20px', backgroundColor: '#2c3e50', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          ← Volver al Inicio
        </Link>
      </header>
      
      <main>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '3rem', opacity: 0.9 }}>
          Profesional ágil certificado con experiencia liderando equipos en entornos corporativos (HERE Maps) 
          y aplicando Inteligencia Artificial para la optimización de procesos de negocio.
        </p>

        {/* ================= CERTIFICACIONES ================= */}
        <section className="resume-section">
          <h2 className="resume-title">Credenciales y Certificaciones</h2>
          <div>
            <span className="badge badge-cert">🏆 Certified Scrum Master (CSM) - Scrum Alliance</span>
            <span className="badge badge-cert">🏆 PMI Foundations</span>
            <span className="badge badge-cert">⭐ NASBA Approved</span>
          </div>
        </section>

        {/* ================= EXPERIENCIA SCRUM ================= */}
        <section className="resume-section">
          <h2 className="resume-title">Experiencia Scrum / Agile</h2>
          <div className="card-grid">
            
            <div className="resume-card">
              <h3>Scrum Master</h3>
              <span className="timeline-date">Abr 2022 - Oct 2022 | HERE Maps</span>
              <ul>
                <li>Liderazgo y facilitación de Sprints para un equipo multidisciplinario de 10-12 personas.</li>
                <li>Gestión de impedimentos operativos, asegurando el flujo continuo de valor.</li>
                <li>Administración de artefactos Scrum y alineación de expectativas con stakeholders.</li>
              </ul>
              <div>
                <span className="badge badge-scrum">Sprint Planning</span>
                <span className="badge badge-scrum">Liderazgo Servicial</span>
              </div>
            </div>

            <div className="resume-card">
              <h3>Agile Co-Facilitator</h3>
              <span className="timeline-date">2 Años de Experiencia Continua | HERE Maps</span>
              <ul>
                <li>Co-facilitación activa de ceremonias ágiles: Daily Standups, Reviews y Retrospectivas.</li>
                <li>Monitoreo de métricas del equipo para promover la mejora continua (Kaizen).</li>
                <li>Refinamiento colaborativo del Product Backlog.</li>
              </ul>
              <div>
                <span className="badge badge-scrum">Facilitación</span>
                <span className="badge badge-scrum">Métricas Ágiles</span>
              </div>
            </div>

          </div>
        </section>

        {/* ================= HERRAMIENTAS DE GESTIÓN ================= */}
        <section className="resume-section">
          <h2 className="resume-title">Herramientas de Gestión Ágil</h2>
          <div className="card-grid">
            <div className="resume-card">
              <h3>Stack Tecnológico & Reporteo</h3>
              <span className="timeline-date">Uso Diario Avanzado</span>
              <ul>
                <li><strong>Jira & Confluence:</strong> Configuración de flujos de trabajo, tableros Kanban/Scrum, seguimiento de épicas e historias de usuario.</li>
                <li><strong>Power BI & Excel:</strong> Extracción de métricas ágiles, creación de dashboards de velocidad (velocity) y reportes de burndown/burnup para stakeholders.</li>
              </ul>
              <div>
                <span className="badge badge-scrum">Jira</span>
                <span className="badge badge-scrum">Confluence</span>
                <span className="badge badge-scrum">Power BI</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCIA IA ================= */}
        <section className="resume-section">
          <h2 className="resume-title">Automatización con IA en Negocios</h2>
          <div className="card-grid">
            <div className="resume-card">
              <h3>Emprendedor & Business Owner</h3>
              <span className="timeline-date">Feb 2021 - Presente</span>
              <ul>
                <li>Implementación de modelos de IA Generativa (Gemini, Claude, Copilot) para automatizar el 60% de los flujos de negocio.</li>
                <li>Gestión automatizada de finanzas, correspondencia corporativa y generación de reportes.</li>
                <li>Optimización de recursos técnicos para escalar operaciones con eficiencia extrema.</li>
              </ul>
              <div>
                <span className="badge badge-ai">Prompt Engineering</span>
                <span className="badge badge-ai">GenAI Automation</span>
                <span className="badge badge-ai">Business Operations</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPONENTE INTERACTIVO ================= */}
        <section className="resume-section" style={{ marginTop: '4rem' }}>
          <h2 className="resume-title">Zona Interactiva: Mi Flujo de Trabajo</h2>
          <p style={{ color: 'var(--text-main)', marginBottom: '1.5rem', opacity: 0.9 }}>
            Interactúa con mi tablero Kanban simulado. Arrastra y suelta mis habilidades comprobadas a través de las columnas.
          </p>
          <KanbanBoard />
        </section>
        
      </main>
    </div>
  );
}
