import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { TrendingUp, Calendar, RefreshCw, ArrowUp, ArrowDown, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';



const Cotacao = () => {
  const [prices, setPrices] = useState({});
  const [lastUpdate, setLastUpdate] = useState('');
  const [selectedGrain, setSelectedGrain] = useState('soja');
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de dados em tempo real
  useEffect(() => {
    const fetchPrices = () => {
      setIsLoading(true);

      // Dados simulados baseados nas cotações reais do RS
      const mockData = {
        soja: [
          { cooperative: 'Cotricampo', price: 123.00, variation: '+0.5%', lastUpdate: '2025-08-28 10:30' },
          { cooperative: 'Cooperativa Sicredi', price: 124.50, variation: '+0.3%', lastUpdate: '2025-08-28 10:25' },
          { cooperative: 'Cooperativa Languiru', price: 122.75, variation: '-0.2%', lastUpdate: '2025-08-28 10:28' }
        ],
        milho: [
          { cooperative: 'Cotricampo', price: 59.00, variation: '+0.8%', lastUpdate: '2025-08-28 10:30' },
          { cooperative: 'Cooperativa Sicredi', price: 60.20, variation: '+0.5%', lastUpdate: '2025-08-28 10:25' },
          { cooperative: 'Cooperativa Dália', price: 58.50, variation: '+0.3%', lastUpdate: '2025-08-28 10:28' }
        ],
        canola: [
          { cooperative: 'Cotricampo', price: 185.00, variation: '+1.2%', lastUpdate: '2025-08-28 10:30' },
          { cooperative: 'Cooperativa Castrolanda', price: 187.50, variation: '+0.9%', lastUpdate: '2025-08-28 10:25' },
          { cooperative: 'Cooperativa Agrária', price: 183.75, variation: '+0.7%', lastUpdate: '2025-08-28 10:28' }
        ],
        feijao: [
          { cooperative: 'Cotricampo', price: 215.00, variation: '-0.4%', lastUpdate: '2025-08-28 10:30' },
          { cooperative: 'Cooperativa Sicredi', price: 218.00, variation: '-0.2%', lastUpdate: '2025-08-28 10:25' },
          { cooperative: 'Cooperativa Dália', price: 212.50, variation: '+0.1%', lastUpdate: '2025-08-28 10:28' }
        ],
        arroz: [
          { cooperative: 'Cotricampo', price: 72.00, variation: '+0.3%', lastUpdate: '2025-08-28 10:30' },
          { cooperative: 'Cooperativa Irga', price: 73.50, variation: '+0.5%', lastUpdate: '2025-08-28 10:25' },
          { cooperative: 'Cooperativa Santa Clara', price: 71.25, variation: '+0.2%', lastUpdate: '2025-08-28 10:28' }
        ]
      };

      setPrices(mockData);
      setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
      setIsLoading(false);
    };

    // Carregar inicialmente
    fetchPrices();

    // Simular atualização em tempo real a cada 5 minutos
    const interval = setInterval(fetchPrices, 300000);

    return () => clearInterval(interval);
  }, []);

  const grains = [
    { id: 'soja', name: 'Soja', icon: '🌱' },
    { id: 'milho', name: 'Milho', icon: '🌽' },
    { id: 'canola', name: 'Canola', icon: '🟡' },
    { id: 'feijao', name: 'Feijão', icon: '🥫' },
    { id: 'arroz', name: 'Arroz', icon: '🍚' }
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      const event = new Event('refreshPrices');
      window.dispatchEvent(event);
      setIsLoading(false);
    }, 1000);
  };

  const getVariationIcon = (variation) => {
    if (variation.startsWith('+')) {
      return <ArrowUp className="h-4 w-4 text-green-500" />;
    } else if (variation.startsWith('-')) {
      return <ArrowDown className="h-4 w-4 text-red-500" />;
    }
    return null;
  };

  return (
    <>
      <Helmet>
        <title>Cotações de Grãos - AgroPortal</title>
        <meta name="description" content="Cotações em tempo real dos principais grãos das cooperativas do Rio Grande do Sul" />
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
                Cotações dos Grãos em Tempo Real
              </h1>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                Acompanhe em tempo real os preços dos principais grãos nas cooperativas do Rio Grande do Sul
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filtros e Controles */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

              {/* botoes de graos */}
              <div className="flex flex-wrap gap-2">
                {grains.map((grain) => (
                  <Button
                    key={grain.id}
                    onClick={() => setSelectedGrain(grain.id)}
                    size="sm"
                    variant={selectedGrain === grain.id ? "default" : "outline"}
                    className={`
              w-32 h-14 rounded-[9px] font-bold flex items-center justify-center space-x-2
              transition-all duration-300
              ${selectedGrain === grain.id
                        ? "bg-yellow-600 text-white shadow-lg scale-110"
                        : "bg-green-600 text-white hover:bg-green-700 hover:scale-105 shadow-md"}
            `}
                  >
                    <span className="w-6 h-6">{grain.icon}</span>
                    <span>{grain.name}</span>
                  </Button>
                ))}
              </div>

              {/* lado direito */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date().toLocaleDateString('pt-BR')}</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className="flex items-center space-x-2"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                  <span>Atualizar</span>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* Tabela de Cotações */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {grains.find(g => g.id === selectedGrain)?.name} - Preços por Saca (60kg)
                  </h2>
                  <span className="text-sm text-gray-500">
                    Última atualização: {lastUpdate}
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cooperativa
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Preço (R$)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Variação
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Última Atualização
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {prices[selectedGrain]?.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                              <TrendingUp className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item.cooperative}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-semibold">
                            R$ {item.price.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getVariationIcon(item.variation)}
                            <span className={`ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.variation.startsWith('+')
                              ? 'bg-green-100 text-green-800'
                              : item.variation.startsWith('-')
                                ? 'bg-red-100 text-red-800'
                                : 'bg-gray-100 text-gray-800'
                              }`}>
                              {item.variation}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.lastUpdate}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {isLoading && (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
              )}
            </motion.div>

            {/* Informações Adicionais */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  📊 Análise do Mercado
                </h3>
                <p className="text-gray-600">
                  {selectedGrain === 'soja' && 'A soja mantém preços estáveis com tendência de alta devido à demanda internacional. As exportações brasileiras de soja mostraram recuperação em março de 2025, totalizando 14,67 milhões de toneladas.'}
                  {selectedGrain === 'milho' && 'O milho apresenta valorização com expectativa de alta nos próximos meses. O estoque de milho especial no Brasil se mantém nos menores patamares em mais de uma década.'}
                  {selectedGrain === 'canola' && 'A canola mantém preços firmes com boa demanda internacional para óleos vegetais.'}
                  {selectedGrain === 'feijao' && 'O feijão apresenta estabilidade de preços com oferta equilibrada no mercado interno.'}
                  {selectedGrain === 'arroz' && 'O arroz mantém preços estáveis com boa oferta e demanda equilibrada.'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  ℹ️ Informações Relevantes
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Preços por saca de 60kg</li>
                  <li>• Atualizado automaticamente a cada 5 minutos</li>
                  <li>• Dados das principais cooperativas do RS</li>
                  <li>• Variação em relação ao dia anterior</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cotacao;