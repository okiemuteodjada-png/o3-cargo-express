import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, ShieldAlert, Scale, Truck, AlertCircle, ArrowLeft, Mail } from 'lucide-react';
import { BRAND } from '../config/constants';

export default function TermsPage({ onOpenQuoteModal }) {
  return (
    <div className="terms-page">
      {/* Page Header */}
      <div className="section section-bg-dark" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container text-center">
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '24px', textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" /> LEGAL & AGREEMENTS
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: '42px', marginBottom: '16px' }}>Terms & Conditions</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
            Effective Date: January 2025 • O3 Cargo Express
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
                <FileCheck size={22} style={{ color: 'var(--color-primary)' }} /> 1. Agreement to Terms
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px' }}>
                Welcome to <strong>O3 Cargo Express</strong>. By booking a cargo shipment, requesting a quotation, utilizing our Lagos procurement service, or accessing our website, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our logistics services.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 2 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Truck size={22} style={{ color: 'var(--color-primary)' }} /> 2. Logistics & Cargo Services
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px', marginBottom: '16px' }}>
                O3 Cargo Express provides international logistics management, including:
              </p>
              <ul style={{ paddingLeft: '24px', color: '#5F6368', lineHeight: 1.7, fontSize: '15px' }}>
                <li>Air freight consolidation and express delivery to the UK, USA, Canada, Europe, and worldwide.</li>
                <li>Air and sea cargo (FCL & LCL) importation services from China to Nigeria.</li>
                <li>Procurement, product sourcing, quality inspection, and packaging in Lagos for diaspora customers.</li>
                <li>Door-to-door and warehouse pickup logistics services.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 3 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldAlert size={22} style={{ color: 'var(--color-primary)' }} /> 3. Sender Responsibilities & Prohibited Items
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px', marginBottom: '16px' }}>
                As the shipper/customer, you declare and guarantee that:
              </p>
              <ul style={{ paddingLeft: '24px', color: '#5F6368', lineHeight: 1.7, fontSize: '15px' }}>
                <li>All package contents, weights, and declared monetary values provided are truthful and accurate.</li>
                <li>Your shipment does <strong>not</strong> contain prohibited items such as illegal drugs, firearms, explosives, hazardous chemicals, counterfeit merchandise, or uninspected dangerous goods prohibited by aviation/maritime laws.</li>
                <li>O3 Cargo Express reserves the unconditional right to inspect, open, and audit any package submitted for transport to verify safety compliance.</li>
              </ul>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 4 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)' }}>
                4. Rates, Quotations & Payment
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px' }}>
                Shipping rates are calculated based on actual weight or volumetric dimensional weight (L × W × H / 5000 for air cargo), whichever is greater. Quotations remain valid for the period specified at issuance. Full payment is required prior to dispatch unless explicit credit arrangements have been agreed in writing.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 5 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertCircle size={22} style={{ color: 'var(--color-primary)' }} /> 5. Customs Clearance, Duties & Delays
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px' }}>
                Customers are responsible for any statutory customs import duties, taxes, or clearance fees imposed by destination customs authorities. While O3 Cargo Express handles customs filing, we are not liable for transit delays caused by customs impoundment, border inspections, flight cancellations, or force majeure events outside our reasonable control.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 6 */}
            <div style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)' }}>
                6. Claims & Liability Limits
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px' }}>
                Claims for lost or damaged goods must be submitted in writing within 7 days of delivery receipt (or scheduled delivery date). Compensation limits apply according to carrier insurance tiers unless additional declared value coverage was selected prior to dispatch.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '32px 0' }} />

            {/* Section 7 */}
            <div>
              <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--color-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Scale size={22} style={{ color: 'var(--color-primary)' }} /> 7. Governing Law
              </h2>
              <p style={{ color: '#5F6368', lineHeight: 1.6, fontSize: '15px', marginBottom: '16px' }}>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any legal disputes arising hereunder shall be subject to arbitration in Lagos, Nigeria.
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '20px', borderRadius: '12px', fontSize: '14px', color: 'var(--color-dark)' }}>
                <div><strong>O3 Cargo Express Support & Legal Department</strong></div>
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
