import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AgroPortal</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Seu portal completo para o agronegócio. Notícias atualizadas e informações 
              técnicas sobre defensivos agrícolas para uma agricultura mais eficiente e sustentável.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Links Rápidos</span>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-gray-300 hover:text-green-400 transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-green-400 transition-colors">
                  Catálogo de Defensivos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contato</span>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>contato@agroportal.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AgroPortal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;