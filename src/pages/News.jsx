import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simular carregamento de notícias do localStorage
    const savedNews = localStorage.getItem('agro-news');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      // Notícias de exemplo
      const exampleNews = [
        {
          id: 1,
          title: 'Safra de Soja 2024 Bate Recorde de Produtividade',
          summary: 'Brasil registra aumento de 15% na produção de soja comparado ao ano anterior, consolidando posição de maior exportador mundial.',
          content: 'A safra de soja 2024 no Brasil alcançou números recordes...',
          category: 'Produção',
          date: '2024-01-15',
          readTime: '5 min',
          featured: true,
        },
        {
          id: 2,
          title: 'Nova Tecnologia de Irrigação Reduz Consumo de Água em 40%',
          summary: 'Sistema inteligente de irrigação por gotejamento promete revolucionar a agricultura sustentável no país.',
          content: 'A nova tecnologia desenvolvida por pesquisadores brasileiros...',
          category: 'Tecnologia',
          date: '2024-01-14',
          readTime: '3 min',
          featured: false,
        },
        {
          id: 3,
          title: 'Preços do Milho Sobem 8% no Mercado Internacional',
          summary: 'Fatores climáticos e aumento da demanda global impulsionam alta nos preços da commodity.',
          content: 'O mercado internacional de milho registrou alta significativa...',
          category: 'Mercado',
          date: '2024-01-13',
          readTime: '4 min',
          featured: false,
        },
        {
          id: 4,
          title: 'Governo Anuncia Novo Programa de Crédito Rural',
          summary: 'Plano Safra 2024/2025 disponibiliza R$ 400 bilhões para financiamento da agricultura brasileira.',
          content: 'O Ministério da Agricultura anunciou hoje o novo Plano Safra...',
          category: 'Política',
          date: '2024-01-12',
          readTime: '6 min',
          featured: true,
        },
        {
          id: 5,
          title: 'Pesquisa Desenvolve Variedade de Trigo Resistente à Seca',
          summary: 'Nova cultivar promete manter produtividade mesmo em condições de baixa precipitação.',
          content: 'Cientistas da Embrapa desenvolveram uma nova variedade...',
          category: 'Pesquisa',
          date: '2024-01-11',
          readTime: '4 min',
          featured: false,
        },
        {
          id: 6,
          title: 'Exportações do Agronegócio Crescem 12% no Primeiro Trimestre',
          summary: 'Setor mantém trajetória de crescimento e consolida importância na balança comercial brasileira.',
          content: 'As exportações do agronegócio brasileiro registraram...',
          category: 'Exportação',
          date: '2024-01-10',
          readTime: '5 min',
          featured: false,
        },
      ];
      setNews(exampleNews);
      localStorage.setItem('agro-news', JSON.stringify(exampleNews));
    }
  }, []);

  const featuredNews = news.filter(article => article.featured);
  const regularNews = news.filter(article => !article.featured);

  const handleReadMore = (id) => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 3000,
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Produção': 'bg-green-100 text-green-800',
      'Tecnologia': 'bg-blue-100 text-blue-800',
      'Mercado': 'bg-yellow-100 text-yellow-800',
      'Política': 'bg-purple-100 text-purple-800',
      'Pesquisa': 'bg-indigo-100 text-indigo-800',
      'Exportação': 'bg-orange-100 text-orange-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <Helmet>
        <title>Notícias do Agronegócio - AgroPortal</title>
        <meta name="description" content="Fique por dentro das últimas notícias do agronegócio brasileiro. Informações sobre safras, tecnologia, mercado e políticas agrícolas." />
        <meta property="og:title" content="Notícias do Agronegócio - AgroPortal" />
        <meta property="og:description" content="Últimas notícias do agronegócio brasileiro com informações sobre safras, tecnologia e mercado." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="gradient-bg py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Notícias do Agronegócio
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Mantenha-se atualizado com as últimas novidades do setor agrícola brasileiro e mundial.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center mb-8">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Destaques</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredNews.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="news-card rounded-2xl overflow-hidden"
                    >
                      <img  
                        className="w-full h-48 object-cover" 
                        alt={`Imagem da notícia: ${article.title}`}
                       src="https://images.unsplash.com/photo-1614023968559-b20a484ec2be" />
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                            {article.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(article.date)}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.summary}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleReadMore(article.id)}
                            className="text-green-600 hover:text-green-700"
                          >
                            Ler mais
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Regular News */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Todas as Notícias</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="news-card rounded-xl overflow-hidden"
                  >
                    <img  
                      className="w-full h-40 object-cover" 
                      alt={`Imagem da notícia: ${article.title}`}
                     src="https://images.unsplash.com/photo-1614023968559-b20a484ec2be" />
                    
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {article.summary}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(article.date)}
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleReadMore(article.id)}
                          className="text-green-600 hover:text-green-700 text-xs"
                        >
                          Ler mais
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;