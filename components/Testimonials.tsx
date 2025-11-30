import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; avatar: string; }> = ({ quote, author, avatar }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-8 mx-4 border border-gray-700">
    <p className="text-gray-300 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold text-white">{author}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Serviço impecável! Resolveram meu problema no mesmo dia.",
      author: "Carlos A.",
      avatar: "https://picsum.photos/100/100?random=3"
    },
    {
      quote: "Profissionais muito qualificados, recomendo demais.",
      author: "Ana L.",
      avatar: "https://picsum.photos/100/100?random=4"
    },
     {
      quote: "Modernizaram meu painel elétrico e ficou perfeito. Serviço de alta qualidade!",
      author: "Júlio M.",
      avatar: "https://picsum.photos/100/100?random=5"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-gray-400 mt-2">A satisfação dos nossos clientes é a nossa maior prioridade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;