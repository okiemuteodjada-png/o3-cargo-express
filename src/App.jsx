import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SalesPage from './pages/SalesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

import './styles/global.css';
import './styles/components.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenQuote = () => {
    navigate('/sales');
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuote} />

      {/* Main Content Viewport */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/services" element={<ServicesPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/how-it-works" element={<HowItWorksPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/testimonials" element={<TestimonialsPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/contact" element={<ContactPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/sales" element={<SalesPage onOpenQuoteModal={() => setQuoteModalOpen(true)} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/terms" element={<TermsPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/terms-and-conditions" element={<TermsPage onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="*" element={<HomePage onOpenQuoteModal={handleOpenQuote} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuote} />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
