import React from 'react';

const Hero: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5511912345678?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+um+servi%C3%A7o+el%C3%A9trico.";

  return (
    <section 
      className="relative bg-cover bg-center text-white py-20 md:py-32" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093448799-ec7dcbc8e929?auto=format&fit=crop&w=1350&q=80')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down text-yellow-400">
          MF Soluções Elétricas
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Serviços elétricos residenciais com segurança, modernização e profissionalismo. Instalações, reparos e atualizações por especialistas.
        </p>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition-transform transform hover:scale-105 shadow-lg"
        >
          <i className="fab fa-whatsapp mr-3 text-2xl"></i>
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
};

export default Hero;