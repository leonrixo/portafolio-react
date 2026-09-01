import { useState } from 'react';

// Custom Hook (Pura Lógica de Negocio)
export const useChatBot = () => {
  // 1. Estados
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: '¡Hola! Soy el IA-Assistant de Gustavo. Escribe "Scrum", "SQL" o "Soporte" para conocer más sobre su experiencia.' 
    }
  ]);

  // 2. Control de la ventana (UI toggle)
  const toggleChat = () => setIsOpen(!isOpen);

  // 3. Función principal de envío de mensajes y simulador de API
  const sendMessage = (text) => {
    if (!text.trim()) return;

    // A. Guardamos el mensaje del usuario inmediatamente
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    
    // B. Encendemos el estado de "Escribiendo..."
    setIsTyping(true);

    // C. Simulamos el tiempo de respuesta del modelo de IA (Mock API)
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let botResponse = "Interesante. Gustavo está disponible para entrevista si quieres profundizar en ese tema.";

      // Procesamiento de lenguaje natural muy básico (Mock)
      if (lowerText.includes('scrum') || lowerText.includes('agile')) {
        botResponse = "Gustavo tiene certificación CSM y ha co-facilitado ceremonias Scrum por más de 2 años en HERE Maps.";
      } else if (lowerText.includes('sql') || lowerText.includes('data')) {
        botResponse = "Posee experiencia real usando SQL (MySQL) y macros para automatizar auditorías de mapas geoespaciales.";
      } else if (lowerText.includes('soporte') || lowerText.includes('it')) {
        botResponse = "Trabajó con Jira y ServiceNow en Ascend Learning, dando soporte técnico 100% bilingüe (EN/ES).";
      }

      // D. Añadimos la respuesta del bot y apagamos el "Escribiendo..."
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500); // 1.5 segundos de delay para sentirse "real"
  };

  // 4. Exportamos solo lo que la Vista (Componente JSX) necesita
  return {
    messages,
    isTyping,
    isOpen,
    toggleChat,
    sendMessage
  };
};

