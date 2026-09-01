import React, { useState } from 'react';
// Importamos hook de validación (súper ligero y rápido)
import { useForm } from 'react-hook-form';
import './ContactForm.css';

export default function ContactForm() {
  // Extraemos las funciones clave de react-hook-form
  const {
    register,           // Conecta los inputs con el estado interno
    handleSubmit,       // Envuelve nuestra función de envío
    formState: { errors, isSubmitting }, // Extrae errores y estado de carga
    reset               // Limpia el formulario
  } = useForm();

  const [successMsg, setSuccessMsg] = useState('');

  // Simulamos el envío a un backend serverless como EmailJS
  const onSubmit = async (data) => {
    // Al retornar una promesa, isSubmitting se vuelve "true" automáticamente
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Datos listos para enviar a EmailJS:', data);
        setSuccessMsg(`¡Gracias por contactarme, ${data.nombre}! Responderé pronto a ${data.email}.`);
        reset(); // Vaciamos el formulario
        resolve();
      }, 2000); // Simulamos 2 segundos de carga en la red
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Servicio y Soporte IT</h2>
      <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
        ¿Tienes una propuesta o necesitas soporte técnico? Envíame un mensaje.
      </p>
      
      {/* Mensaje de éxito condicional */}
      {successMsg && <div className="success-banner">{successMsg}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
        
        {/* ================= CAMPO NOMBRE ================= */}
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            id="nombre"
            type="text"
            className={errors.nombre ? 'input-error' : ''}
            placeholder="Ej. Reclutador Tech"
            {...register('nombre', { 
              required: 'El nombre es obligatorio',
              minLength: { value: 3, message: 'El nombre debe tener al menos 3 letras' }
            })}
          />
          {/* Renderizado condicional de errores */}
          {errors.nombre && <span className="error-text">⚠ {errors.nombre.message}</span>}
        </div>

        {/* ================= CAMPO EMAIL ================= */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            className={errors.email ? 'input-error' : ''}
            placeholder="correo@empresa.com"
            {...register('email', { 
              required: 'El correo electrónico es obligatorio',
              pattern: { 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                message: 'Formato de correo inválido' 
              }
            })}
          />
          {errors.email && <span className="error-text">⚠ {errors.email.message}</span>}
        </div>

        {/* ================= CAMPO MENSAJE ================= */}
        <div className="form-group">
          <label htmlFor="mensaje">Tu Mensaje</label>
          <textarea
            id="mensaje"
            rows="5"
            className={errors.mensaje ? 'input-error' : ''}
            placeholder="¿En qué te puedo ayudar?"
            {...register('mensaje', { 
              required: 'Por favor, escribe un mensaje',
              minLength: { value: 10, message: 'El mensaje es muy corto (mín. 10 caracteres)' }
            })}
          />
          {errors.mensaje && <span className="error-text">⚠ {errors.mensaje.message}</span>}
        </div>

        {/* ================= BOTÓN DE ENVÍO ================= */}
        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Enviando Mensaje...' : 'Enviar vía EmailJS'}
        </button>

      </form>
    </div>
  );
}

