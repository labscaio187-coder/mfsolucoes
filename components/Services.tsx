import React from 'react';
import { PlugIcon, WrenchIcon, PanelIcon, LightbulbIcon, ShowerIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-yellow-400/10 transition-shadow transform hover:-translate-y-1 border border-gray-700">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-400/10 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <ShowerIcon className="w-8 h-8 text-yellow-400" />,
      title: "Instalação de Chuveiros",
      description: "Instalação correta e segura de chuveiros, evitando quedas de disjuntor e mau contato."
    },
    {
      icon: <LightbulbIcon className="w-8 h-8 text-yellow-400" />,
      title: "Projetos de Iluminação",
      description: "Iluminação moderna, econômica e eficiente para ambientes internos e externos."
    },
    {
      icon: <PanelIcon className="w-8 h-8 text-yellow-400" />,
      title: "Atualização de Painéis",
      description: "Modernização de painéis elétricos garantindo maior capacidade e segurança."
    },
    {
      icon: <PanelIcon className="w-8 h-8 text-yellow-400" />,
      title: "Quadros de Distribuição",
      description: "Substituição e reorganização profissional de quadros de distribuição para sua segurança."
    },
    {
      icon: <WrenchIcon className="w-8 h-8 text-yellow-400" />,
      title: "Reparos e Manutenção",
      description: "Diagnóstico rápido e soluções definitivas para curtos-circuitos e falhas elétricas."
    },
    {
      icon: <PlugIcon className="w-8 h-8 text-yellow-400" />,
      title: "Instalações Gerais",
      description: "Instalação completa de tomadas, interruptores, e fiação para novas construções e reformas."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Nossos Serviços</h2>
          <p className="text-lg text-gray-400 mt-2">Soluções completas para a parte elétrica da sua residência.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;