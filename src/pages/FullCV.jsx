import React from 'react';
import { useTheme } from '../hooks/ThemeProvider';

export default function FullCV() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  
  const pageStyle = {
    maxWidth: '850px',
    margin: '2rem auto',
    padding: '3rem',
    backgroundColor: isDark ? '#1f2937' : '#ffffff',
    color: isDark ? '#f3f4f6' : '#111827',
    borderRadius: '8px',
    boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.1)',
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    lineHeight: '1.6'
  };

  const headerStyle = {
    borderBottom: `2px solid ${isDark ? '#374151' : '#e5e7eb'}`,
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const sectionTitleStyle = {
    color: isDark ? '#38bdf8' : '#0284c7',
    borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
    paddingBottom: '0.5rem',
    marginTop: '2.5rem',
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const jobTitleStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: isDark ? '#f9fafb' : '#111827',
    marginBottom: '0.2rem'
  };

  const dateStyle = {
    color: isDark ? '#9ca3af' : '#6b7280',
    fontStyle: 'italic',
    fontSize: '0.95rem',
    marginBottom: '0.8rem',
    display: 'block'
  };

  const listStyle = {
    paddingLeft: '1.5rem',
    marginBottom: '1.5rem'
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button 
          onClick={() => window.print()}
          style={{ 
            padding: '10px 24px', backgroundColor: '#38bdf8', color: '#111827', 
            border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)', fontSize: '1rem'
          }}
        >
          ⬇️ Descargar PDF
        </button>
      </div>
      
      <div style={pageStyle} className="cv-document">
        <header style={headerStyle}>
          <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', color: isDark ? '#fff' : '#000' }}>
            Gustavo Leon Rizo Cisneros
          </h1>
          <p style={{ margin: '0', fontSize: '1.1rem', color: isDark ? '#9ca3af' : '#4b5563' }}>
            León, Guanajuato, México | +52 477 631 6384 | leonrixo@gmail.com | linkedin.com/in/leonrixo
          </p>
        </header>

        <section>
          <h2 style={sectionTitleStyle}>Professional Summary</h2>
          <p>
            Bilingual (English/Spanish) professional with 5+ years in data analysis and IT operations, including 2+ years of Agile/Scrum practice at HERE Maps and a 6-month independent Scrum Master rotation leading a team of 10-12. Combines Six Sigma Green Belt process-improvement work with technical automation (SQL, Excel VBA/macros). Certified Scrum Master (NASBA), with additional training in Project Management (PMI) and Business Analysis (Microsoft & LinkedIn). Also owns and operates an independent equipment-supply business for 5+ years, applying AI tools to automate financial reporting, performance analysis, and business communication.
          </p>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>Skills</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'grid', gap: '10px' }}>
            <li><strong>Project & Agile:</strong> ~2 Years Agile/Scrum Practice, Scrum Master (Certified), Sprint Planning & Facilitation, Jira, Power BI</li>
            <li><strong>Process Improvement:</strong> Six Sigma Green Belt, Workflow Automation, Excel VBA/Macros</li>
            <li><strong>Technical:</strong> Data Analysis, SQL (MySQL), System Administration, ServiceNow, Microsoft O365</li>
            <li><strong>Languages:</strong> Spanish (Native); English (Professional certified interpreter, B2 written)</li>
            <li><strong>AI Tools:</strong> Google Gemini, Microsoft Copilot, Claude Code (for automation, reporting, and coding)</li>
          </ul>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>Work Experience</h2>

          <div>
            <div style={jobTitleStyle}>Owner | Independent Business (Maintenance Equipment Supplier)</div>
            <span style={dateStyle}>Feb 2021 - Present (5+ años)</span>
            <ul style={listStyle}>
              <li>Founded and operate an independent business supplying maintenance equipment to multiple client companies, managing vendor relationships, client accounts, and end-to-end business operations.</li>
              <li>Use AI tools to analyze performance data, verify earnings, and generate profit and tax reports.</li>
            </ul>
          </div>

          <div>
            <div style={jobTitleStyle}>Scrum Master (Internal Rotation) | HERE Maps</div>
            <span style={dateStyle}>Apr 2022 - Oct 2022 (6 meses)</span>
            <ul style={listStyle}>
              <li>Independently led Agile sprints for a cross-functional team of 10-12 during a 6-month internal Scrum Master rotation, facilitating sprint planning, stand-ups, and retrospectives.</li>
              <li>Drove a Six Sigma Green Belt process-improvement initiative building Excel macros that automated daily map-coordinate updates, saving 2 hours of manual work per day.</li>
            </ul>
          </div>

          <div>
            <div style={jobTitleStyle}>Data Analyst | HERE Maps</div>
            <span style={dateStyle}>Aug 2017 - Mar 2022</span>
            <ul style={listStyle}>
              <li>Co-facilitated Agile ceremonies alongside the team's Scrum Master for ~2 years.</li>
              <li>Conducted data analysis on geographic datasets using SQL (MySQL) to extract, filter, and validate data, improving map accuracy.</li>
            </ul>
          </div>

          <div>
            <div style={jobTitleStyle}>Technical Support Agent | Ascend Learning</div>
            <span style={dateStyle}>Aug 2022 - Dec 2023</span>
            <ul style={listStyle}>
              <li>Provided technical support for educational platforms (FISDAP) used by paramedic/nursing students.</li>
              <li>Monitored system performance and managed shift scheduling to maintain consistent support SLA.</li>
            </ul>
          </div>

          <div>
            <div style={jobTitleStyle}>Medical & Legal Interpreter (Level 4/5) | Propio & Kelly Services & AMN</div>
            <span style={dateStyle}>Dec 2023 - Present</span>
            <ul style={listStyle}>
              <li>Provide remote interpretation (English-Spanish) at Level 4/5 proficiency for medical and legal engagements, strictly upholding HIPAA confidentiality standards.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 style={sectionTitleStyle}>Education & Certifications</h2>
          <ul style={listStyle}>
            <li><strong>Bachelor of Computer Science (In Progress)</strong> - Universidad Tecnológica de León (2022 - Present)</li>
            <li><strong>Certified Scrum Master (CSM)</strong> - NASBA</li>
            <li><strong>Project Management Foundations</strong> - PMI</li>
            <li><strong>Professional Foundations of Business Analysis</strong> - Microsoft</li>
            <li><strong>Six Sigma Green Belt</strong></li>
          </ul>
        </section>
        
      </div>
      
      {/* Estilos para impresión */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .cv-document, .cv-document * { visibility: visible; }
          .cv-document { position: absolute; left: 0; top: 0; width: 100%; margin: 0; padding: 0; background: white; color: black; box-shadow: none; }
          .cv-document h1, .cv-document h2 { color: black !important; }
        }
      `}</style>
    </div>
  );
}
