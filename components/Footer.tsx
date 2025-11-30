import React from 'react';
import { BoltIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <BoltIcon className="w-8 h-8 text-yellow-400" />
              <h1 className="text-2xl font-bold">
                MF Soluções Elétricas
              </h1>
            </div>
            <p className="text-gray-400">Atendimento de Segunda a Sábado.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-facebook"></i></a>
            <a href="https://wa.me/5511912345678" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MF Soluções Elétricas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;