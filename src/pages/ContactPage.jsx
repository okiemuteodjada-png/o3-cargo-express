import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ArrowRight, Clock, Map } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { BRAND } from '../config/constants';

export default function ContactPage({ onOpenQuoteModal }) {
  return (
    <div>
      {/* Contact Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '100px',
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.9)), url("/assets/images/hero-contact.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="eyebrow-dot" /> CONTACT US
            </div>
            <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>
              We're here to help <br />
              you ship from Lagos <span className="text-accent">to the world.</span>
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
              Have a question, need a quote, or want to speak with our team? Get in touch — we'll respond quickly.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onOpenQuoteModal}>
                Get a Quote <ArrowRight size={16} />
              </button>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <MessageSquare size={16} style={{ color: '#25D366' }} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Contact Info Cards + Form */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            {/* Left Column: Contact info */}
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> GET IN TOUCH</div>
              <h2 style={{ marginBottom: '16px' }}>Multiple ways to reach us</h2>
              <p style={{ marginBottom: '32px' }}>
                Choose the option that works best for you. We're always ready to assist.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Call Us */}
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>CALL US</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-dark)' }}>{BRAND.phone}</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Mon - Sat: 9:00AM - 6:00PM</div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ background: '#FFFFFF', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '16px', transition: 'all var(--transition-fast)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#E8F5E9', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>WHATSAPP</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-dark)' }}>{BRAND.phone}</div>
                    <div style={{ fontSize: '12px', color: '#128C7E' }}>Quick replies on WhatsApp</div>
                  </div>
                </a>

                {/* Email Us */}
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>EMAIL US</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-dark)' }}>{BRAND.email}</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>We respond within 2 hours</div>
                  </div>
                </div>

                {/* Visit Office */}
                <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>VISIT OUR OFFICE</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-dark)' }}>{BRAND.address}</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>By appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visit us in Lagos Map */}
      <section className="section section-bg-secondary">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> OUR OFFICE</div>
              <h2 style={{ marginBottom: '16px' }}>Visit us in Lagos</h2>
              <p style={{ marginBottom: '32px' }}>
                Our operations hub is based in Lagos. We're open to serve you better.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={20} style={{ color: 'var(--color-primary)', marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '13px', textTransform: 'uppercase' }}>ADDRESS</div>
                    <div style={{ fontSize: '15px' }}>{BRAND.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Clock size={20} style={{ color: 'var(--color-primary)', marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '13px', textTransform: 'uppercase' }}>HOURS</div>
                    <div style={{ fontSize: '15px' }}>Mon - Sat: 9:00AM - 6:00PM</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Sunday: Closed</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Map size={20} style={{ color: 'var(--color-primary)', marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '13px', textTransform: 'uppercase' }}>DIRECTIONS</div>
                    <a
                      href="https://maps.google.com/?q=15+Thanni+Olodo+Street,+Jibowu,+Lagos,+Nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '14px' }}
                    >
                      Click to view on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Google Maps Embed Box */}
            <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--color-border)', backgroundColor: '#E5E3DF' }}>
              <iframe
                title="O3 Cargo Express Office Location"
                src="https://maps.google.com/maps?q=15+Thanni+Olodo+Street,+Jibowu,+Lagos,+Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Support Bar */}
      <section className="section-bg-dark" style={{ padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MessageSquare size={24} style={{ color: '#25D366' }} />
              <div>
                <div style={{ fontWeight: '700', fontSize: '16px', color: '#FFFFFF' }}>Need help with an urgent shipment?</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Our support team is ready to assist you on WhatsApp.</div>
              </div>
            </div>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
