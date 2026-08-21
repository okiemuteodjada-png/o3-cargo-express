import React, { useRef } from 'react';
import { ArrowRight, ShieldCheck, Clock, Globe, Zap, CreditCard, MessageSquare, Star, Phone } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import { BRAND } from '../config/constants';

export default function SalesPage({ onOpenQuoteModal }) {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Business Shipping Sales Hero */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '100px',
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.9)), url("/assets/images/bento-packing.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="eyebrow-dot" /> BUSINESS SHIPPING
            </div>
            <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>
              Ship your products <br />
              to the world from <span className="text-accent">Lagos.</span>
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '36px' }}>
              We help Nigerian business owners, exporters, and merchants ship seamlessly to UK, USA, Canada, Europe, and worldwide.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={scrollToForm} style={{ borderRadius: '10px', height: '49px' }}>
                Request a Shipping Quote <ArrowRight size={18} />
              </button>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ borderRadius: '10px', height: '49px' }}
              >
                <MessageSquare size={16} style={{ color: '#25D366' }} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ marginTop: '-40px', paddingBottom: '40px', position: 'relative', zIndex: '10' }}>
        <div className="container">
          <div className="stats-bar">
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>200+</div>
              <div className="stats-label">Countries Covered</div>
            </div>
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>Weekly</div>
              <div className="stats-label">UK Cargo Freights</div>
            </div>
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>98%</div>
              <div className="stats-label">On-Time Delivery</div>
            </div>
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>DHL & UPS</div>
              <div className="stats-label">Express Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Built for Nigerian business owners */}
      <section className="section text-center" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" /> WHY CHOOSE US
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px', color: '#111111' }}>
            Built for Nigerian business owners.
          </h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 48px', color: '#5F6368', fontSize: '15px' }}>
            Whether you export fashion, foodstuff, cosmetics or commercial merchandise, we have tailored solutions for your scale.
          </p>

          <div className="grid-3" style={{ textAlign: 'left' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📦</div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Commercial Freight</h4>
              <p style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.5 }}>Reliable air and sea freight for your business products.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>⚖️</div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Inspection & Packing</h4>
              <p style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.5 }}>Professional handling, quality checks, and doorstep arrival.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>📍</div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Customs Clearance</h4>
              <p style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.5 }}>Hassle-free documentation and smooth customs processing.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏷️</div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Transparent Pricing</h4>
              <p style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.5 }}>No hidden charges. Clear, predictable shipping rates for your budget.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🎧</div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Dedicated Support</h4>
              <p style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.5 }}>Personal account manager and real-time shipment updates.</p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>🌍</div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Global Coverage</h4>
              <p style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.5 }}>Ship to 200+ countries with speed and security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Onboarding Process */}
      <section className="section section-bg-secondary text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" /> HOW IT WORKS
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '48px', color: '#111111' }}>
            Simple onboarding process
          </h2>

          <div className="how-connected-flow">
            <div className="how-connecting-line" />
            <div className="grid-4">
              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">📝</div>
                  <span className="how-step-badge">01</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Tell us what you're shipping</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Provide item details, weight, and destination.</p>
              </div>

              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">💬</div>
                  <span className="how-step-badge">02</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Get a custom quote</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Receive transparent rates based on volume and mode.</p>
              </div>

              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">📦</div>
                  <span className="how-step-badge">03</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>We pick up & process</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Free pickup in Lagos, inspection, and packing.</p>
              </div>

              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">🌍</div>
                  <span className="how-step-badge">04</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Delivered worldwide</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Fast, safe delivery to your recipient's door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Quote Form Split Section */}
      <section className="section" ref={formRef} id="quote-form" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            {/* Left Column */}
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> GET A QUOTE</div>
              <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px', color: '#111111' }}>
                Tell us about<br />your business.
              </h2>
              <p style={{ color: '#5F6368', fontSize: '15px', marginBottom: '32px' }}>
                Fill out the form to receive a tailored shipping quote for your business needs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Zap size={22} style={{ color: '#EAB308', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#111111' }}>Fast Response</div>
                    <div style={{ fontSize: '12px', color: '#5F6368' }}>We reply within 2 hours</div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <CreditCard size={22} style={{ color: '#10B981', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#111111' }}>No Hidden Fees</div>
                    <div style={{ fontSize: '12px', color: '#5F6368' }}>Transparent pricing</div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <ShieldCheck size={22} style={{ color: '#D71920', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#111111' }}>Safe & Secure</div>
                    <div style={{ fontSize: '12px', color: '#5F6368' }}>Insured cargo handling</div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Phone size={22} style={{ color: '#D71920', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#111111' }}>Dedicated Account Manager</div>
                    <div style={{ fontSize: '12px', color: '#5F6368' }}>For high-volume shippers</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout Box */}
              <div style={{ backgroundColor: 'var(--color-brand-tint)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(213, 52, 43, 0.2)' }}>
                <div style={{ fontWeight: '700', fontSize: '15px', color: '#111111', marginBottom: '4px' }}>Prefer to talk first?</div>
                <p style={{ fontSize: '13px', color: '#5F6368', marginBottom: '16px' }}>
                  Chat with our shipping team on WhatsApp for immediate assistance and quick estimates.
                </p>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D71920', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Open WhatsApp <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Quote Form */}
            <div>
              <QuoteForm buttonText="Request a Shipping Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What our business clients say */}
      <section className="section text-center" style={{ backgroundColor: '#F9F9F9', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" /> TESTIMONIALS
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '48px', color: '#111111' }}>
            What our business clients say
          </h2>

          <div className="grid-3" style={{ textAlign: 'left' }}>
            {/* Card 1 */}
            <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#D71920" color="#D71920" />
                ))}
              </div>
              <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.55, marginBottom: '24px' }}>
                "O3 has been our go-to for UK shipments for over a year. Reliable, fast, and great rates for our fashion brand."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EAEAEA', color: '#555555', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  T
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>Tayo A.</div>
                  <div style={{ fontSize: '12px', color: '#5F6368' }}>Fashion Exporter 🇬🇧</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#D71920" color="#D71920" />
                ))}
              </div>
              <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.55, marginBottom: '24px' }}>
                "Imported my raw cosmetics materials from China smoothly. Their team handled everything without stress."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EAEAEA', color: '#555555', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  C
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>Chidinma O.</div>
                  <div style={{ fontSize: '12px', color: '#5F6368' }}>Beauty Brand Owner 🇳🇬</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#D71920" color="#D71920" />
                ))}
              </div>
              <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.55, marginBottom: '24px' }}>
                "Fast delivery to Canada for our foodstuff business. Highly recommended for any Nigerian exporter."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EAEAEA', color: '#555555', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  B
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>Bisi R.</div>
                  <div style={{ fontSize: '12px', color: '#5F6368' }}>Foodstuff Exporter 🇨🇦</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA Banner */}
      <section className="section" style={{ backgroundColor: '#111111', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ textAlign: 'left' }}>
              <div className="eyebrow" style={{ color: '#FFFFFF' }}>
                <span className="eyebrow-dot" style={{ backgroundColor: '#FFFFFF' }} /> READY TO EXPAND?
              </div>
              <h2 style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>
                Start shipping your business to the world today.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0 }}>
                Join hundreds of Nigerian merchants and exporters growing with O3 Cargo Express.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={scrollToForm} style={{ borderRadius: '10px', height: '49px' }}>
                Request a Shipping Quote <ArrowRight size={18} />
              </button>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ borderRadius: '10px', height: '49px' }}
              >
                <MessageSquare size={16} style={{ color: '#25D366' }} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
