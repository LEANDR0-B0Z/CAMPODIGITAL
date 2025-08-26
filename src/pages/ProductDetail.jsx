import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft, 
  Shield, 
  Bug, 
  Leaf, 
  AlertTriangle, 
  Droplets, 
  Clock, 
  Thermometer,
  Wind,
  Eye,
  Zap,
  Heart
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { toast } from "../components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento do produto
    const savedProducts = localStorage.getItem('agro-products');
    if (savedProducts) {
      const products = JSON.parse(savedProducts);
      const foundProduct = products.find(p => p.id === parseInt(id));
      
      if (foundProduct) {
        // Adicionar informações detalhadas
        const detailedProduct = {
          ...foundProduct,
          usage: {
            application: 'Aplicação foliar com pulverizador costal ou tratorizado',
            timing: 'Aplicar preventivamente ou no início dos sintomas',
            conditions: 'Temperatura entre 18-25°C, umidade relativa acima de 60%',
            interval: '14 a 21 dias entre aplicações',
            maxApplications: '3 aplicações por ciclo'
          },
          epis: [
            'Máscara respiratória com filtro P2',
            'Óculos de proteção',
            'Luvas de nitrilo',
            'Macacão impermeável',
            'Botas de borracha',
            'Avental impermeável'
          ],
          precautions: [
            'Não aplicar em dias ventosos (velocidade do vento > 10 km/h)',
            'Evitar aplicação nas horas mais quentes do dia',
            'Manter distância de corpos d\'água',
            'Não aplicar com chuva iminente',
            'Respeitar período de carência'
          ],
          toxicity: {
            level: foundProduct.category === 'fungicida' ? 'III - Moderadamente tóxico' : 
                   foundProduct.category === 'inseticida' ? 'II - Altamente tóxico' : 
                   'III - Moderadamente tóxico',
            symptoms: 'Irritação de pele e mucosas, náusea, tontura',
            firstAid: 'Em caso de contato, lavar abundantemente com água. Procurar assistência médica.'
          }
        };
        setProduct(detailedProduct);
      }
    }
    setLoading(false);
  }, [id]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'fungicida': return Shield;
      case 'inseticida': return Bug;
      case 'pesticida': return Leaf;
      default: return Leaf;
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'fungicida': 'bg-blue-100 text-blue-800 border-blue-200',
      'inseticida': 'bg-red-100 text-red-800 border-red-200',
      'pesticida': 'bg-purple-100 text-purple-800 border-purple-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const handleContactSupplier = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 3000,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h2>
          <Button asChild>
            <Link to="/catalogo">Voltar ao Catálogo</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = getCategoryIcon(product.category);

  return (
    <>
      <Helmet>
        <title>{product.name} - Catálogo de Defensivos - AgroPortal</title>
        <meta name="description" content={`Informações completas sobre ${product.name}: dosagem, EPIs, modo de uso e precauções para aplicação segura.`} />
        <meta property="og:title" content={`${product.name} - Catálogo de Defensivos - AgroPortal`} />
        <meta property="og:description" content={`Informações técnicas sobre ${product.name} para uso agrícola seguro.`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="gradient-bg py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Button asChild variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <Link to="/catalogo">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar ao Catálogo
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 mr-3" />
                <span className={`category-badge ${getCategoryColor(product.category)}`}>
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-green-100 max-w-3xl">
                {product.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Basic Information */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações Básicas</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Ingrediente Ativo</h3>
                      <p className="text-gray-600">{product.activeIngredient}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Dosagem Recomendada</h3>
                      <p className="text-gray-600">{product.dosage}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-gray-900 mb-2">Culturas Registradas</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.crops.map((crop, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Usage Instructions */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Droplets className="w-6 h-6 mr-2 text-blue-600" />
                    Como Utilizar
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Forma de Aplicação</h3>
                        <p className="text-gray-600">{product.usage.application}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Momento da Aplicação</h3>
                        <p className="text-gray-600">{product.usage.timing}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Thermometer className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Condições Ideais</h3>
                        <p className="text-gray-600">{product.usage.conditions}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Wind className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Intervalo entre Aplicações</h3>
                        <p className="text-gray-600">{product.usage.interval}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* EPIs Required */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-600" />
                    EPIs Obrigatórios
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.epis.map((epi, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Eye className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800">{epi}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-yellow-800">Importante</h3>
                        <p className="text-yellow-700 text-sm">
                          O uso de EPIs é obrigatório durante toda a manipulação e aplicação do produto. 
                          Nunca reutilize EPIs contaminados.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Precautions */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
                    Precauções e Cuidados
                  </h2>
                  
                  <div className="space-y-3">
                    {product.precautions.map((precaution, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800">{precaution}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Product Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <img  
                    className="w-full h-64 object-cover rounded-lg mb-4" 
                    alt={`Produto ${product.name}`}
                   src="https://images.unsplash.com/photo-1702567855965-176e97304a4b" />
                  
                  <Button 
                    onClick={handleContactSupplier}
                    className="w-full gradient-bg text-white hover:opacity-90"
                  >
                    Contatar Fornecedor
                  </Button>
                </motion.div>

                {/* Toxicity Information */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-600" />
                    Informações Toxicológicas
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Classificação</h4>
                      <p className="text-gray-600 text-sm">{product.toxicity.level}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Sintomas de Intoxicação</h4>
                      <p className="text-gray-600 text-sm">{product.toxicity.symptoms}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Primeiros Socorros</h4>
                      <p className="text-gray-600 text-sm">{product.toxicity.firstAid}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-xs">
                      <strong>Emergência:</strong> Em caso de intoxicação, procure imediatamente 
                      assistência médica e leve a embalagem do produto.
                    </p>
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Resumo</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Máx. Aplicações</span>
                      <span className="font-semibold text-sm">{product.usage.maxApplications}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Culturas</span>
                      <span className="font-semibold text-sm">{product.crops.length}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Categoria</span>
                      <span className="font-semibold text-sm capitalize">{product.category}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;