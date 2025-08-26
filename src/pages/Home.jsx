import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Newspaper, BookOpen, Shield, Sprout, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Home = () => {
  const features = [{
    icon: Newspaper,
    title: 'Notícias Atualizadas',
    description: 'Fique por dentro das últimas novidades do agronegócio brasileiro e mundial.'
  }, {
    icon: BookOpen,
    title: 'Catálogo Completo',
    description: 'Acesse informações detalhadas sobre defensivos agrícolas e suas aplicações.'
  }, {
    icon: Shield,
    title: 'Segurança em Primeiro Lugar',
    description: 'Orientações sobre EPIs e uso seguro de produtos fitossanitários.'
  }];
  const stats = [{
    icon: Users,
    value: '50K+',
    label: 'Produtores Atendidos'
  }, {
    icon: BookOpen,
    value: '200+',
    label: 'Produtos Catalogados'
  }, {
    icon: TrendingUp,
    value: '95%',
    label: 'Satisfação dos Usuários'
  }];
  return <>
      <Helmet>
        <title>AgroPortal - Portal do Agronegócio</title>
        <meta name="description" content="Portal completo do agronegócio com notícias atualizadas, catálogo de defensivos agrícolas e informações técnicas para produtores rurais." />
        <meta property="og:title" content="AgroPortal - Portal do Agronegócio" />
        <meta property="og:description" content="Portal completo do agronegócio com notícias atualizadas e catálogo de defensivos agrícolas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                O Futuro do
                <span className="block text-green-200">Agronegócio</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">Seu portal completo com notícias atualizadas do setor agrícola e catálogo técnico de defensivos para uma agricultura mais eficiente.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
                  <Link to="/noticias">
                    Ver Notícias
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-700">
                  <Link to="/catalogo">
                    Explorar Catálogo
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative">
              <img className="w-full h-auto rounded-2xl shadow-2xl" alt="Agricultura moderna com tecnologia" src="https://horizons-cdn.hostinger.com/5b738eec-d7b9-4c58-a19c-a1dcd413e0d1/lucid_origin_uma_imagem_de_uma_lavoura_verdejante_com_uma_vari_0-fO8xh.jpg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo que Você Precisa em Um Só Lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos as melhores ferramentas e informações para impulsionar 
              sua produtividade no campo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: index * 0.2
            }} viewport={{
              once: true
            }} className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Números que Impressionam
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Confira alguns dados sobre nossa plataforma e comunidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
            const Icon = stat.icon;
            return <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: index * 0.2
            }} viewport={{
              once: true
            }} className="text-center glass-effect rounded-2xl p-8">
                  <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-green-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <Sprout className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pronto para Revolucionar sua Agricultura?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de produtores que já confiam no AgroPortal 
              para se manterem atualizados e produtivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg text-white hover:opacity-90">
                <Link to="/catalogo">
                  Explorar Catálogo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/noticias">
                  Ler Notícias
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Home;