import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, MessageSquare, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, BRAND } from '../config/constants';

export default function MobileNav({ isOpen, onClose, onOpenQuoteModal }) {
  const location = useLocation();

  // Lock background body scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-drawer-header">
          <Logo light={true} height={36} />
          <button className="mobile-drawer-close-btn" onClick={onClose} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                <span>{link.label}</span>
                <ChevronRight size={18} style={{ opacity: 0.5 }} />
              </Link>
            );
          })}
        </nav>

        <div className="mobile-drawer-footer">
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              onClose();
              onOpenQuoteModal();
            }}
            style={{ borderRadius: '10px', height: '48px' }}
          >
            Get a Quote <ArrowRight size={16} />
          </button>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-block"
            style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)', borderRadius: '10px', height: '48px' }}
          >
            <MessageSquare size={16} style={{ color: '#25D366' }} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
