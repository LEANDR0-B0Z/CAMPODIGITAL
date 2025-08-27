import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Search, Filter, Shield, Bug, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Importando as imagens locais
import azoxystrobinImg from '@/assets/images/Azoxistrobina.png';
import tebuconazoleImg from '@/assets/images/Tebuconazol.png';
import mancozebImg from '@/assets/images/Mancozebe.png';
import propiconazoleImg from '@/assets/images/Propiconazol.png';
import carbendazimImg from '@/assets/images/Carbendazim.png';
import imidaclopridImg from '@/assets/images/Imidacloprido.png';
import lambdaCyhalothrinImg from '@/assets/images/Lambda-cialotrina.png';
import chlorpyrifosImg from '@/assets/images/Clorpirifós.png';
import thiamethoxamImg from '@/assets/images/Tiametoxam.png';
import spinosadImg from '@/assets/images/Espinosade.png';
import glyphosateImg from '@/assets/images/Glifosato.png';
import twoFourDImg from '@/assets/images/2,4-D.png';
import atrazineImg from '@/assets/images/Atrazina.png';
import paraquatImg from '@/assets/images/Paraquate.png';
import dicambaImg from '@/assets/images/Dicamba.png';
import placeholderImg from '@/assets/images/PlaceHolder.png';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'Todos', icon: Leaf, color: 'text-green-600' },
    { id: 'fungicida', name: 'Fungicidas', icon: Shield, color: 'text-blue-600' },
    { id: 'inseticida', name: 'Inseticidas', icon: Bug, color: 'text-red-600' },
    { id: 'pesticida', name: 'Pesticidas', icon: Leaf, color: 'text-purple-600' },
  ];

  // Mapeamento de imagens
  const imageMap = {
    'fungicide-azoxystrobin': azoxystrobinImg,
    'fungicide-tebuconazole': tebuconazoleImg,
    'fungicide-mancozeb': mancozebImg,
    'fungicide-propiconazole': propiconazoleImg,
    'fungicide-carbendazim': carbendazimImg,
    'insecticide-imidacloprid': imidaclopridImg,
    'insecticide-lambda-cyhalothrin': lambdaCyhalothrinImg,
    'insecticide-chlorpyrifos': chlorpyrifosImg,
    'insecticide-thiamethoxam': thiamethoxamImg,
    'insecticide-spinosad': spinosadImg,
    'herbicide-glyphosate': glyphosateImg,
    'herbicide-2-4-d': twoFourDImg,
    'herbicide-atrazine': atrazineImg,
    'herbicide-paraquat': paraquatImg,
    'herbicide-dicamba': dicambaImg,
  };

  // Função para obter a imagem com fallback
  const getProductImage = (imageName) => {
    return imageMap[imageName] || placeholderImg;
  };

  useEffect(() => {
    // Simular carregamento de produtos do localStorage
    const savedProducts = localStorage.getItem('agro-products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      // Produtos de exemplo
      const exampleProducts = [
        // Fungicidas
        {
          id: 1,
          name: 'Azoxistrobina',
          category: 'fungicida',
          activeIngredient: 'Azoxistrobina 250g/L',
          description: 'Fungicida sistêmico para controle de doenças foliares em diversas culturas.',
          crops: ['Soja', 'Milho', 'Trigo', 'Café'],
          dosage: '0,3 a 0,5 L/ha',
          image: 'fungicide-azoxystrobin'
        },
        {
          id: 2,
          name: 'Tebuconazol',
          category: 'fungicida',
          activeIngredient: 'Tebuconazol 200g/L',
          description: 'Fungicida sistêmico triazol para controle preventivo e curativo.',
          crops: ['Soja', 'Algodão', 'Feijão'],
          dosage: '0,5 a 1,0 L/ha',
          image: 'fungicide-tebuconazole'
        },
        {
          id: 3,
          name: 'Mancozebe',
          category: 'fungicida',
          activeIngredient: 'Mancozebe 800g/kg',
          description: 'Fungicida de contato para controle preventivo de doenças.',
          crops: ['Tomate', 'Batata', 'Uva'],
          dosage: '2,0 a 3,0 kg/ha',
          image: 'fungicide-mancozeb'
        },
        {
          id: 4,
          name: 'Propiconazol',
          category: 'fungicida',
          activeIngredient: 'Propiconazol 250g/L',
          description: 'Fungicida sistêmico para controle de ferrugens e oídios.',
          crops: ['Trigo', 'Cevada', 'Aveia'],
          dosage: '0,3 a 0,5 L/ha',
          image: 'fungicide-propiconazole'
        },
        {
          id: 5,
          name: 'Carbendazim',
          category: 'fungicida',
          activeIngredient: 'Carbendazim 500g/L',
          description: 'Fungicida sistêmico benzimidazol para tratamento de sementes.',
          crops: ['Soja', 'Milho', 'Algodão'],
          dosage: '200 a 300 mL/100kg sementes',
          image: 'fungicide-carbendazim'
        },
        // Inseticidas
        {
          id: 6,
          name: 'Imidacloprido',
          category: 'inseticida',
          activeIngredient: 'Imidacloprido 200g/L',
          description: 'Inseticida sistêmico neonicotinoide para controle de pragas sugadoras.',
          crops: ['Soja', 'Milho', 'Algodão', 'Café'],
          dosage: '0,3 a 0,5 L/ha',
          image: 'insecticide-imidacloprid'
        },
        {
          id: 7,
          name: 'Lambda-cialotrina',
          category: 'inseticida',
          activeIngredient: 'Lambda-cialotrina 50g/L',
          description: 'Inseticida piretroide de contato e ingestão.',
          crops: ['Soja', 'Milho', 'Algodão'],
          dosage: '0,2 a 0,3 L/ha',
          image: 'insecticide-lambda-cyhalothrin'
        },
        {
          id: 8,
          name: 'Clorpirifós',
          category: 'inseticida',
          activeIngredient: 'Clorpirifós 480g/L',
          description: 'Inseticida organofosforado para controle de pragas do solo.',
          crops: ['Milho', 'Soja', 'Cana-de-açúcar'],
          dosage: '1,0 a 2,0 L/ha',
          image: 'insecticide-chlorpyrifos'
        },
        {
          id: 9,
          name: 'Tiametoxam',
          category: 'inseticida',
          activeIngredient: 'Tiametoxam 250g/kg',
          description: 'Inseticida sistêmico para tratamento de sementes.',
          crops: ['Soja', 'Milho', 'Feijão'],
          dosage: '200 a 300g/100kg sementes',
          image: 'insecticide-thiamethoxam'
        },
        {
          id: 10,
          name: 'Espinosade',
          category: 'inseticida',
          activeIngredient: 'Espinosade 240g/L',
          description: 'Inseticida biológico para controle de lepidópteros.',
          crops: ['Tomate', 'Pimentão', 'Brócolis'],
          dosage: '0,1 a 0,2 L/ha',
          image: 'insecticide-spinosad'
        },
        // Pesticidas (Herbicidas)
        {
          id: 11,
          name: 'Glifosato',
          category: 'pesticida',
          activeIngredient: 'Glifosato 480g/L',
          description: 'Herbicida sistêmico não seletivo para controle de plantas daninhas.',
          crops: ['Soja', 'Milho', 'Algodão'],
          dosage: '2,0 a 4,0 L/ha',
          image: 'herbicide-glyphosate'
        },
        {
          id: 12,
          name: '2,4-D',
          category: 'pesticida',
          activeIngredient: '2,4-D 670g/L',
          description: 'Herbicida hormonal para controle de plantas daninhas de folha larga.',
          crops: ['Milho', 'Trigo', 'Pastagem'],
          dosage: '1,0 a 2,0 L/ha',
          image: 'herbicide-2-4-d'
        },
        {
          id: 13,
          name: 'Atrazina',
          category: 'pesticida',
          activeIngredient: 'Atrazina 500g/L',
          description: 'Herbicida seletivo para controle pré e pós-emergente.',
          crops: ['Milho', 'Sorgo', 'Cana-de-açúcar'],
          dosage: '3,0 a 5,0 L/ha',
          image: 'herbicide-atrazine'
        },
        {
          id: 14,
          name: 'Paraquate',
          category: 'pesticida',
          activeIngredient: 'Paraquate 200g/L',
          description: 'Herbicida de contato para dessecação e controle de plantas daninhas.',
          crops: ['Soja', 'Milho', 'Café'],
          dosage: '1,5 a 3,0 L/ha',
          image: 'herbicide-paraquat'
        },
        {
          id: 15,
          name: 'Dicamba',
          category: 'pesticida',
          activeIngredient: 'Dicamba 480g/L',
          description: 'Herbicida sistêmico para controle de plantas daninhas resistentes.',
          crops: ['Soja', 'Milho', 'Algodão'],
          dosage: '0,5 a 1,0 L/ha',
          image: 'herbicide-dicamba'
        },
      ];
      setProducts(exampleProducts);
      setFilteredProducts(exampleProducts);
      localStorage.setItem('agro-products', JSON.stringify(exampleProducts));
    }
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filtrar por categoria
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.activeIngredient.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

  const getCategoryIcon = (category) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Leaf;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'fungicida': 'bg-blue-100 text-blue-800 border-blue-200',
      'inseticida': 'bg-red-100 text-red-800 border-red-200',
      'pesticida': 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <>
      <Helmet>
        <title>Catálogo de Defensivos Agrícolas - AgroPortal</title>
        <meta name="description" content="Catálogo completo de defensivos agrícolas com informações sobre fungicidas, inseticidas e pesticidas. Dosagens, EPIs e instruções de uso." />
        <meta property="og:title" content="Catálogo de Defensivos Agrícolas - AgroPortal" />
        <meta property="og:description" content="Catálogo completo de defensivos agrícolas com informações técnicas detalhadas." />
      </Helmet>

            
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="gradient-bg2 h-96 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
              >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Catálogo de Defensivos
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Encontre informações técnicas completas sobre fungicidas, inseticidas e pesticidas 
                para uma aplicação segura e eficiente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar defensivos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Visualização:</span>
                <Button 
                  variant={viewMode === 'grid' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="p-2 h-9 w-9"
                >
                  <i className="fas fa-th"></i>
                </Button>
                <Button 
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="p-2 h-9 w-9"
                >
                  <i className="fas fa-list"></i>
                </Button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 ${
                        selectedCategory === category.id 
                          ? 'gradient-bg text-white' 
                          : 'hover:bg-green-50 hover:text-green-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros ou termo de busca.
                </p>
              </motion.div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => {
                  const Icon = getCategoryIcon(product.category);
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="product-card bg-white rounded-xl overflow-hidden"
                    >
                      <div className="relative">
                        <img  
                          className="w-full h-48 object-cover" 
                          alt={`Produto ${product.name}`}
                          src={getProductImage(product.image)}
                          onError={(e) => {
                            e.target.src = placeholderImg;
                          }}
                        />
                        <div className="absolute top-3 right-3">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full category-badge ${getCategoryColor(product.category)}`}>
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center mb-3">
                          <Icon className="w-5 h-5 text-green-600 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-900">
                            {product.name}
                          </h3>
                        </div>

                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="text-xs text-gray-500">
                            <strong>Ingrediente Ativo:</strong> {product.activeIngredient}
                          </div>
                          <div className="text-xs text-gray-500">
                            <strong>Dosagem:</strong> {product.dosage}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.crops.slice(0, 3).map((crop, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                            >
                              {crop}
                            </span>
                          ))}
                          {product.crops.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{product.crops.length - 3}
                            </span>
                          )}
                        </div>

                        <Button asChild className="w-full gradient-bg text-white hover:opacity-90">
                          <Link to={`/produto/${product.id}`}>
                            Ver Detalhes
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product, index) => {
                  const Icon = getCategoryIcon(product.category);
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="product-card bg-white rounded-xl overflow-hidden flex flex-col md:flex-row"
                    >
                      <div className="md:w-1/4">
                        <img  
                          className="w-full h-48 md:h-full object-cover" 
                          alt={`Produto ${product.name}`}
                          src={getProductImage(product.image)}
                          onError={(e) => {
                            e.target.src = placeholderImg;
                          }}
                        />
                      </div>
                      <div className="p-5 md:w-3/4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <Icon className="w-5 h-5 text-green-600 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900">
                              {product.name}
                            </h3>
                          </div>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full category-badge ${getCategoryColor(product.category)}`}>
                            {product.category}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">
                          {product.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-gray-500">
                              <strong>Ingrediente Ativo:</strong> {product.activeIngredient}
                            </div>
                            <div className="text-sm text-gray-500">
                              <strong>Dosagem:</strong> {product.dosage}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              <strong>Culturas:</strong>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {product.crops.slice(0, 5).map((crop, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                                >
                                  {crop}
                                </span>
                              ))}
                              {product.crops.length > 5 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{product.crops.length - 5}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <Button asChild className="gradient-bg text-white hover:opacity-90">
                          <Link to={`/produto/${product.id}`}>
                            Ver Detalhes
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Catalog;