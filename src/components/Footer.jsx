import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';
import { BRAND } from '../config/constants';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col">
            <Logo height={44} className="mb-3" />
            <p style={{ color: 'var(--color-text-light-secondary)', fontSize: '14px', marginBottom: '24px', maxWidth: '320px', marginTop: '16px' }}>
              Shipping packages and importing goods from Lagos to over 200 countries with speed, care and reliability.
            </p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={BRAND.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="TikTok"
                title="O3 Cargo Express on TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.6a6.34 6.34 0 0 0-6.14 6.35 6.35 6.35 0 0 0 10.8 4.5 6.3 6.3 0 0 0 1.88-4.5V9.41a8.27 8.27 0 0 0 4.84 1.55V7.5a4.83 4.83 0 0 1-1.27-.81z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Ship to UK</Link></li>
              <li><Link to="/services">UK Express (DHL & UPS)</Link></li>
              <li><Link to="/services">USA, Canada & Europe</Link></li>
              <li><Link to="/services">Import from China</Link></li>
              <li><Link to="/services">Procurement Services</Link></li>
            </ul>
          </div>

          {/* Col 3: Company Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/sales">Business Shipping</Link></li>
            </ul>
          </div>

          {/* Col 4: Support */}
          <div className="footer-col">
            <h4 className="footer-col-title">Support</h4>
            <ul className="footer-links">
              <li>
                <button onClick={onOpenQuoteModal} style={{ background: 'none', border: 'none', color: 'var(--color-text-light-secondary)', cursor: 'pointer', padding: 0, font: 'inherit' }}>
                  Get a Quote
                </button>
              </li>
              <li><Link to="/contact">Track Shipment</Link></li>
              <li><Link to="/how-it-works">Shipping Guide</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-links" style={{ gap: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light-secondary)', fontSize: '13px' }}>
                <Phone size={14} style={{ color: 'var(--color-primary)' }} />
                <span>{BRAND.phone}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light-secondary)', fontSize: '13px' }}>
                <Mail size={14} style={{ color: 'var(--color-primary)' }} />
                <span>{BRAND.email}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-light-secondary)', fontSize: '13px' }}>
                <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
                <span>{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} O3 Cargo Express. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--color-text-light-secondary)' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'var(--color-text-light-secondary)' }}>Terms & Conditions</Link>
          </div>
        </div>

        {/* Large watermark text */}
        <div className="footer-watermark">
          O3 CARGO EXPRESS
        </div>
      </div>
    </footer>
  );
}
