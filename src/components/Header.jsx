import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import MobileNav from './MobileNav';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-glass-frame">
            <Logo height={42} />

            <nav className="nav-desktop">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
              <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                Services
              </Link>
              <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}>
                How it works
              </Link>
              <Link to="/testimonials" className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`}>
                Testimonials
              </Link>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                About Us
              </Link>
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </nav>

            <div className="header-actions">
              <button
                className="btn btn-primary btn-header-cta"
                onClick={onOpenQuoteModal}
                style={{ borderRadius: '10px' }}
              >
                Get a Quote <ArrowRight size={16} />
              </button>

              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuoteModal={() => {
          setMobileMenuOpen(false);
          onOpenQuoteModal();
        }}
      />
    </>
  );
}
