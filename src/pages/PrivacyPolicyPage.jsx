import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, ArrowLeft, Mail } from 'lucide-react';
import { BRAND } from '../config/constants';

export default function PrivacyPolicyPage({ onOpenQuoteModal }) {
  return (
    <div className="privacy-policy-page">
      {/* Page Header */}
      <div className="section section-bg-dark" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container text-center">
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" /> LEGAL & PRIVACY
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: '42px', marginBottom: '16px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
            Last updated: January 2025 • O3 Cargo Express
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="content-legal-card">
            
            {/* Section 1 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={22} style={{ color: 'var(--color-primary)' }} /> 1. Introduction
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px' }}>
                At <strong>O3 Cargo Express</strong>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, utilize our cargo shipping services (including Air Cargo, Sea Freight, Express Shipping, and Procurement), or interact with our customer support teams in Lagos and internationally.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 2 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={22} style={{ color: 'var(--color-primary)' }} /> 2. Information We Collect
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px', marginBottom: '16px' }}>
                We collect personal information that you voluntarily provide to us when booking shipments, requesting quotes, or communicating with us:
              </p>
              <ul style={{ paddingLeft: '24px', color: '#5F6368', lineHeight: 1.7, fontSize: '15px' }}>
                <li><strong>Contact Information:</strong> Full name, telephone number, WhatsApp number, email address, billing address, and physical delivery destination address.</li>
                <li><strong>Shipment Information:</strong> Package dimensions, weight, declared value, item descriptions, customs documentation, sender and recipient details.</li>
                <li><strong>Payment Data:</strong> Payment transaction receipts, payment reference numbers, and invoicing details (bank details are processed securely via encrypted payment partners).</li>
                <li><strong>Communication Logs:</strong> Customer support correspondence, WhatsApp messages, and email records regarding quote inquiries and shipment tracking.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage patterns collected via cookies when browsing our website.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 3 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Eye size={22} style={{ color: 'var(--color-primary)' }} /> 3. How We Use Your Information
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px', marginBottom: '16px' }}>
                We utilize your personal information solely to fulfill logistics operations and improve customer experience:
              </p>
              <ul style={{ paddingLeft: '24px', color: '#5F6368', lineHeight: 1.7, fontSize: '15px' }}>
                <li>Processing, picking up, consolidating, customs clearing, and delivering your cargo.</li>
                <li>Providing real-time tracking updates, shipping quotes, and delivery notifications via SMS, email, or WhatsApp.</li>
                <li>Managing procurement services, product sourcing, quality inspections, and packaging in Lagos.</li>
                <li>Responding to customer inquiries, resolving claims, and verifying identity for pickup security.</li>
                <li>Complying with aviation security regulations, international maritime laws, and customs import/export mandates.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 4 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lock size={22} style={{ color: 'var(--color-primary)' }} /> 4. Information Sharing & Third Parties
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px', marginBottom: '16px' }}>
                We do <strong>not</strong> sell, rent, or lease your personal information to third parties. We share data only with trusted partners essential for shipment execution:
              </p>
              <ul style={{ paddingLeft: '24px', color: '#5F6368', lineHeight: 1.7, fontSize: '15px' }}>
                <li><strong>Logistics & Carrier Partners:</strong> Partner airlines, ocean freight carriers, and express couriers (such as DHL and UPS) for international transit.</li>
                <li><strong>Customs & Regulatory Authorities:</strong> Border protection and customs agencies in Nigeria, UK, USA, Canada, China, and destination countries as required by law.</li>
                <li><strong>Service Providers:</strong> IT infrastructure providers, payment processors, and SMS/WhatsApp messaging gateways.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 5 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)' }}>
                5. Data Security & Storage
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px' }}>
                We implement administrative, technical, and physical security measures to protect your personal data against unauthorized access, loss, alteration, or disclosure. All digital transactions use SSL encryption technology.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 6 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)' }}>
                6. Your Rights
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px' }}>
                Depending on your location, you have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request deletion of your account records subject to mandatory legal data retention requirements. To exercise these rights, please email us at <code>{BRAND.email}</code>.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 7 */}
            <div>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={22} style={{ color: 'var(--color-primary)' }} /> 7. Contact Us
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px', marginBottom: '12px' }}>
                If you have questions regarding this Privacy Policy or how your data is handled, please contact our team:
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '20px', borderRadius: '12px', fontSize: '14px', color: 'var(--color-dark)' }}>
                <div><strong>O3 Cargo Express Privacy Office</strong></div>
                <div>Address: {BRAND.address}</div>
                <div>Email: {BRAND.email}</div>
                <div>Phone: {BRAND.phone}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
