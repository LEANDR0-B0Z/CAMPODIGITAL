// src/pages/CriaIMG.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const CriaIMG = () => {
  // Array de imagens de exemplo (substitua pelas suas próprias URLs)
  const images = [
    "https://images.unsplash.com/photo-1595436006484-9ff4e36d0c8f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1597848212624-e9f54c3a9d8a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1597848212624-e9f54c3a9d8a?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1595436006484-9ff4e36d0c8f?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1597848212624-e9f54c3a9d8a?w=300&h=300&fit=crop&crop=face"
  ];

  return (
    <>
      <Helmet>
        <title>Layout de Imagens - AgroPortal</title>
        <meta name="description" content="Layout criativo com imagens para o AgroPortal" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        {/* Header */}
        <section className="gradient-bg2 h-64 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Layout Criativo de Imagens
              </h1>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                Design exclusivo com 4 imagens quadradas e uma circular central
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-800 mb-2">Layout de Imagens</h2>
              <p className="text-gray-600">4 imagens quadradas com uma imagem circular central, separadas por linhas brancas</p>
            </div>

            {/* Container do layout de imagens */}
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Grid com 4 imagens quadradas */}
              <div className="grid grid-cols-2 grid-rows-2 gap-2 relative">
                {/* Linhas divisórias */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-white transform -translate-y-1/2 z-10"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-white transform -translate-x-1/2 z-10"></div>
                
                {/* Quadrante superior esquerdo */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={images[0]} 
                    alt="Imagem 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Quadrante superior direito */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={images[1]} 
                    alt="Imagem 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Quadrante inferior esquerdo */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={images[2]} 
                    alt="Imagem 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Quadrante inferior direito */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={images[3]} 
                    alt="Imagem 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Imagem circular central */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={images[4]} 
                      alt="Imagem Central" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Como funciona este layout</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Este design combina 4 imagens quadradas formando um fundo, com uma imagem circular no centro.
                As linhas brancas de 2px separam as imagens quadradas, criando um visual moderno e atraente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CriaIMG;