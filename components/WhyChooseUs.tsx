import React from 'react';
import { UserCheckIcon, ShieldCheckIcon, PriceTagIcon, ClockIcon } from './icons';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-1 text-gray-400">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <UserCheckIcon className="w-10 h-10 text-yellow-400" />,
      title: "Profissionais Qualificados",
      description: "Nossa equipe é formada por eletricistas certificados e experientes, prontos para qualquer desafio."
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10 text-yellow-400" />,
      title: "Segurança e Normas Técnicas",
      description: "Seguimos rigorosamente todas as normas de segurança para garantir a proteção da sua família e do seu patrimônio."
    },
    {
      icon: <PriceTagIcon className="w-10 h-10 text-yellow-400" />,
      title: "Orçamento Justo e Transparente",
      description: "Oferecemos orçamentos claros e detalhados, sem custos escondidos e com o melhor custo-benefício."
    },
    {
      icon: <ClockIcon className="w-10 h-10 text-yellow-400" />,
      title: "Atendimento Rápido e Eficiente",
      description: "Valorizamos o seu tempo. Comprometemo-nos com a pontualidade e a agilidade na execução dos serviços."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-6">Por Que Nos Escolher?</h2>
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80" 
              alt="Eletricista profissional trabalhando" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;