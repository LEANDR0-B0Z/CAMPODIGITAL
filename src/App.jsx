import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// imports corrigidos (caminhos relativos)
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Catalog from './pages/Catalog';
import Cotacao from './pages/Cotacao';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>AgroPortal - Noticias e Defensivos Agricolas</title>
          <meta
            name="description"
            content="Portal completo do agronegocio com noticias atualizadas e catalogo de defensivos agricolas. Informacoes sobre fungicidas, inseticidas e pesticidas."
          />
          <meta
            property="og:title"
            content="AgroPortal - Noticias e Defensivos Agricolas"
          />
          <meta
            property="og:description"
            content="Portal completo do agronegocio com noticias atualizadas e catalogo de defensivos agricolas."
          />
        </Helmet>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/catalogo" element={<Catalog />} />
             <Route path="/cotacao" element={<Cotacao />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
