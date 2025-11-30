
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5511912345678?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+um+servi%C3%A7o+el%C3%A9trico.";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-4xl"></i>
    </a>
  );
};

export default WhatsAppButton;
