import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/support/ContactForm';
import './SupportProfile.css';

export default function SupportProfile() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <header className="support-header">
        <h1 style={{ color: 'var(--text-main)', margin: 0 }}>IT Support & Intérprete</h1>
        <Link to="/" style={{ padding: '10px 20px', backgroundColor: '#16a085', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          ← Volver al Inicio
        </Link>
      </header>
      
      <main>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '2.5rem', opacity: 0.9 }}>
          Profesional de Soporte Técnico enfocado en Enterprise Service Desk. 
          Combino sólidos conocimientos de infraestructura con una capacidad extraordinaria de comunicación bajo presión.
        </p>

        {/* ================= EXPERIENCIA LABORAL ================= */}
        <section>
          <div className="experience-card">
            <h3>Technical Support Agent</h3>
            <strong style={{ color: '#7f8c8d', display: 'block', marginBottom: '15px', fontSize: '1rem' }}>
              Ascend Learning | Ago 2022 - Dic 2023
            </strong>
            <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.7', fontSize: '1.05rem' }}>
              <li>Gestión y resolución de tickets de soporte técnico corporativo asegurando el cumplimiento de SLAs.</li>
              <li>Atención 100% bilingüe (Inglés/Español) para usuarios, resolviendo problemas de software y accesos.</li>
              <li>Creación de documentación técnica y troubleshooting para plataformas educativas propietarias.</li>
            </ul>
          </div>
        </section>

        {/* ================= MATRIZ DE HABILIDADES (2 Columnas) ================= */}
        <section className="skills-grid">
          
          {/* Columna 1: Hard Skills IT */}
          <div className="skill-box">
            <h3>💻 Hard Skills IT</h3>
            <ul className="skill-list">
              <li>
                <span className="skill-icon">✔</span>
                <span><strong>Ticketing Systems:</strong> Dominio de <em>Jira</em> y <em>ServiceNow</em> para el ciclo de vida del incidente.</span>
              </li>
              <li>
                <span className="skill-icon">✔</span>
                <span><strong>Infraestructura:</strong> Experiencia práctica en administración de <em>Active Directory</em> y <em>Windows Server</em>.</span>
              </li>
              <li>
                <span className="skill-icon">✔</span>
                <span><strong>Troubleshooting:</strong> Diagnóstico asertivo de problemas de software, hardware y red corporativa.</span>
              </li>
              <li>
                <span className="skill-icon">✔</span>
                <span><strong>Lenguajes de Programación (Bases):</strong> Fundamentos teóricos en HTML, Java, C++, y comandos de PowerShell para facilitar la comunicación con el Tier 2/3.</span>
              </li>
            </ul>
          </div>

          {/* Columna 2: Soft Skills y Bilingüismo */}
          <div className="skill-box">
            <h3>🗣️ Soft Skills & Idiomas</h3>
            <ul className="skill-list">
              <li>
                <span className="skill-icon">✔</span>
                <span><strong>Intérprete Médico/Legal Certificado:</strong> Capacidad demostrada para traducir información técnica y crítica con precisión clínica (Inglés/Español).</span>
              </li>
              <li>
                <span className="skill-icon">✔</span>
                <span><strong>Trabajo bajo Presión:</strong> Triage de incidentes críticos, manejo de escalaciones y empatía con usuarios frustrados en situaciones de alto estrés.</span>
              </li>
              <li>
                <span className="skill-icon">✔</span>
                <span><strong>Escucha Activa:</strong> Habilidad para traducir los reportes confusos de los usuarios en requerimientos técnicos claros para el equipo de ingeniería.</span>
              </li>
            </ul>
          </div>
          
        </section>

        <hr style={{ margin: '4rem 0', borderColor: '#444' }} />

        {/* ================= COMPONENTE DE CONTACTO PREVIO ================= */}
        <section style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '2rem' }}>¿Necesitas ayuda con tu equipo IT o Proyecto?</h2>
          <ContactForm />
        </section>
        
      </main>
    </div>
  );
}
