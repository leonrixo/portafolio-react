import React, { useState, useRef, useEffect } from 'react';
import { useChatBot } from '../../hooks/useChatBot';
import './ChatWidget.css';

export default function ChatWidget() {
  // 1. Consumimos nuestro Custom Hook (Separación de intereses)
  const { messages, isTyping, isOpen, toggleChat, sendMessage } = useChatBot();
  
  // 2. Estados locales exclusivos de la UI (El input de texto)
  const [inputValue, setInputValue] = useState('');
  
  // 3. Referencia para auto-scroll (Usando useRef para UX/Accesibilidad)
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
    setInputValue(''); // Limpiamos el input después de enviar
  };

  return (
    <div className="chat-widget-container">
      
      {/* Condicional: Si el chat está abierto, renderizamos la ventana */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <h4>🤖 Asistente IA</h4>
            <button onClick={toggleChat} className="close-btn" aria-label="Cerrar chat">✕</button>
          </div>
          
          {/* Área de Mensajes */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            
            {/* Animación de carga */}
            {isTyping && (
              <div className="chat-bubble bot typing">Escribiendo respuesta...</div>
            )}
            
            {/* Elemento invisible para el auto-scroll */}
            <div ref={messagesEndRef} />
          </div>

          {/* Área de Input (Formulario) */}
          <form onSubmit={handleSubmit} className="chat-input-area">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu pregunta..."
              aria-label="Mensaje para el asistente"
            />
            <button type="submit" disabled={!inputValue.trim()}>Enviar</button>
          </form>
        </div>
      )}

      {/* Botón Flotante para abrir el chat */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`}
        onClick={toggleChat}
        aria-label="Abrir asistente de IA"
      >
        💬
      </button>

    </div>
  );
}

