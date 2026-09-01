# 🚀 Wiki del Proyecto: Portafolio Híbrido (React + Vite)

**Propietario:** Gustavo Rizo
**Versión Actual:** 1.0.0 (Desplegado en Producción)
**Repositorio GitHub:** [leonrixo/portafolio-react](https://github.com/leonrixo/portafolio-react)
**URL de Producción:** [portafolio-react-mocha.vercel.app](https://portafolio-react-mocha.vercel.app) *(Próximamente `grizo.is-a.dev`)*

---

## 🎯 Objetivo del Proyecto
Crear un "Currículum Web Interactivo" de tres vías (*Triple-track*) que permita a los reclutadores explorar las tres facetas profesionales de Gustavo de forma dinámica y moderna, demostrando habilidades de programación, análisis de datos y metodologías ágiles en tiempo real.

---

## 🏗️ Stack Tecnológico
*   **Core:** React 18, Vite (Empaquetador ultrarrápido).
*   **Enrutamiento:** `react-router-dom` (Navegación SPA sin recargas).
*   **Gestión de Estado:** React Context API (Para el Dark Mode Global) y Hooks nativos (`useState`, `useEffect`, `useRef`).
*   **Formularios:** `react-hook-form` (Rendimiento optimizado sin re-renders).
*   **Gráficas de Datos:** `recharts` (Componentes SVG responsivos).
*   **Drag & Drop:** `@hello-pangea/dnd` (Tablero Kanban).
*   **Estilos:** CSS3 Moderno, Glassmorphism, CSS Grid/Flexbox, Variables CSS globales (`:root`).
*   **Despliegue (CI/CD):** Vercel + GitHub Actions integradas.

---

## 🗺️ Estructura de Rutas (Triple-Track)

1.  **`/` (Home):** Landing page con diseño "Split Screen" (3 columnas) usando Glassmorphism e imágenes abstractas para redireccionar a los perfiles.
2.  **`/agile` (Scrum Master):** Perfil orientado al liderazgo de equipos, experiencia en HERE Maps y automatización empresarial con IA. Incluye un **Tablero Kanban interactivo**.
3.  **`/data` (Data Analyst):** Perfil orientado al análisis geoespacial, Six Sigma, SQL y automatización en Excel. Incluye **Dashboards gráficos interactivos** y un **Simulador SQL** con validación en tiempo real.
4.  **`/support` (IT Support & Intérprete):** Perfil orientado a Enterprise Service Desk, manejo de incidentes (Jira/ServiceNow), Active Directory y habilidades críticas de Intérprete Médico/Legal. Incluye un **Formulario de Contacto** de alto rendimiento.

---

## ✨ Características Técnicas Destacadas

*   **Dark Mode Global persistente:** Utiliza `localStorage` para recordar la preferencia de luz del usuario en su navegador.
*   **Asistente IA Integrado (Chatbot):** Un widget flotante global desarrollado con separación de intereses (Custom Hook `useChatBot.js` para la lógica y Componente UI). Simula procesamiento de lenguaje natural y auto-scroll.
*   **Micro-interacciones UX/UI:** Implementación global de la fuente `Poppins` de Google Fonts y un sistema avanzado de sombras variables (`--shadow-base` y `--shadow-hover`) con efecto "Glow" (resplandor de neón sutil).
*   **Protección Anti-Spam UX:** El formulario de contacto valida el formato de correos y la longitud del mensaje en tiempo real, bloqueando el envío y mostrando advertencias dinámicas usando `react-hook-form`.

---

## 🌐 Configuración de DevOps y DNS
*   **Integración Continua:** El repositorio en GitHub está enlazado directamente a Vercel. Cada `git push` a la rama `main` compila y actualiza el sitio web automáticamente en menos de 1 minuto.
*   **Dominio Personalizado:** Solicitud oficial registrada y aprobada mediante Pull Request a la fundación Open Source `is-a.dev` (`grizo.is-a.dev`) vinculada al DNS de Vercel (Registros CNAME y TXT de verificación aplicados).
