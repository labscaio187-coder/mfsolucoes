import React from 'react';
import { BoltIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BoltIcon className="w-8 h-8 text-yellow-400" />
          <h1 className="text-2xl font-bold text-white">
            MF Soluções Elétricas
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Serviços</a>
          <a href="#why-us" className="text-gray-300 hover:text-yellow-400 transition-colors">Por Que Nos Escolher</a>
          <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">Depoimentos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;