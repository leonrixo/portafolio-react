import React from 'react';
// 1. Importamos todos los componentes necesarios de Recharts
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

// 2. Datos JSON Ficticios (Basados en tu experiencia en HERE Maps / QA)
const barData = [
  { name: 'Sprint 1', erroresDetectados: 120, erroresCorregidos: 90 },
  { name: 'Sprint 2', erroresDetectados: 85, erroresCorregidos: 100 },
  { name: 'Sprint 3', erroresDetectados: 50, erroresCorregidos: 55 },
  { name: 'Sprint 4', erroresDetectados: 15, erroresCorregidos: 15 },
];

const pieData = [
  { name: 'SQL / MySQL', value: 45 },
  { name: 'Análisis Geoespacial', value: 25 },
  { name: 'Macros / VBA', value: 15 },
  { name: 'Dashboarding / Reporting', value: 15 },
];

// Colores modernos para el gráfico circular
const COLORS = ['#2980b9', '#16a085', '#8e44ad', '#f39c12'];

export default function DashboardMetrics() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '1rem' }}>
      
      {/* ===================== GRÁFICO DE BARRAS ===================== */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #444', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ textAlign: 'center', color: 'var(--text-main)' }}>Impacto en la Calidad de Datos (Reducción de Errores)</h3>
        
        {/* ResponsiveContainer asegura que la gráfica se adapte al ancho de móviles y web */}
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} stroke="var(--text-main)" />
              <XAxis dataKey="name" stroke="var(--text-main)" />
              <YAxis stroke="var(--text-main)" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderRadius: '8px', border: '1px solid #666' }} 
              />
              <Legend />
              {/* Las barras representan los datos */}
              <Bar dataKey="erroresDetectados" name="Errores Reportados" fill="#e74c3c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="erroresCorregidos" name="Errores Solucionados" fill="#2ecc71" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===================== GRÁFICO CIRCULAR ===================== */}
      <div style={{ backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #444', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ textAlign: 'center', color: 'var(--text-main)' }}>Distribución de Habilidades Analíticas</h3>
        
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%" // Centrado en X
                cy="50%" // Centrado en Y
                labelLine={true}
                // Configuramos las etiquetas para que muestren el nombre y el porcentaje
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                stroke="var(--bg-main)"
              >
                {/* Pintamos cada "rebanada" del pastel con un color de nuestro array COLORS */}
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderRadius: '8px', border: '1px solid #666' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}

