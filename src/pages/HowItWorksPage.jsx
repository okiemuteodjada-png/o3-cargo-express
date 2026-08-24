import React from 'react';
import { ArrowRight, FileText, MessageSquare, Package, Globe } from 'lucide-react';
import { BRAND } from '../config/constants';

export default function HowItWorksPage({ onOpenQuoteModal }) {
  return (
    <div>
      {/* How It Works Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '100px',
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.85), rgba(20, 20, 20, 0.9)), url("/assets/images/how-it-works-hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="eyebrow-dot" /> HOW IT WORKS
            </div>
            <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>
              Simple steps. <br />
              <span className="text-accent">Seamless delivery.</span>
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We've made shipping from Lagos to the world straightforward, transparent and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: How we get your package there */}
      <section className="section text-center" style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px', color: '#111111' }}>How we get your package there</h2>
            <p style={{ color: '#5F6368', fontSize: '15px', margin: 0 }}>
              From the moment you contact us to final delivery, we're with you every step.
            </p>
          </div>

          <div className="how-connected-flow">
            <div className="how-connecting-line" />
            <div className="grid-4">
              {/* Step 1 */}
              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">
                    <FileText size={28} style={{ color: '#8A4A4A' }} />
                  </div>
                  <span className="how-step-badge">01</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Tell us what you're sending</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Provide item details, weight, destination, and any special handling needs.</p>
              </div>

              {/* Step 2 */}
              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">
                    <MessageSquare size={28} style={{ color: '#8A4A4A' }} />
                  </div>
                  <span className="how-step-badge">02</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Get your quote</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Receive a clear, transparent price quote based on your preferred shipping mode.</p>
              </div>

              {/* Step 3 */}
              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">
                    <Package size={28} style={{ color: '#8A4A4A' }} />
                  </div>
                  <span className="how-step-badge">03</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>We handle the shipment</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Pickup, packing, customs documentation, clearance — we handle it all.</p>
              </div>

              {/* Step 4 */}
              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">
                    <Globe size={28} style={{ color: '#8A4A4A' }} />
                  </div>
                  <span className="how-step-badge">04</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>It reaches its destination</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Your package is safely delivered to your doorstep with full peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why It Works */}
      <section className="section" style={{ backgroundColor: '#F4F3F0', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            {/* Left Content */}
            <div>
              <div className="eyebrow" style={{ color: '#D71920', fontWeight: '700' }}>
                <span className="eyebrow-dot" style={{ backgroundColor: '#D71920' }} /> WHY IT WORKS
              </div>
              <h2 style={{ marginBottom: '20px', fontSize: '32px', fontWeight: '800', color: '#111111', lineHeight: 1.25 }}>
                A process built on care and commitment.
              </h2>
              <p style={{ marginBottom: '32px', color: '#5F6368', fontSize: '14px', lineHeight: 1.6 }}>
                We combine technology, experience and a people-first approach to deliver a shipping experience you can trust.
              </p>
              <button className="btn btn-outline-dark" onClick={onOpenQuoteModal} style={{ borderRadius: '10px', height: '52px' }}>
                Learn more <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>🛡️</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px', color: '#111111' }}>Safe & Secure</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Packages protected and insured every step of the way.</p>
              </div>

              <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>⏱️</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px', color: '#111111' }}>Timely Updates</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Real-time notifications from pickup to delivery.</p>
              </div>

              <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>🤝</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px', color: '#111111' }}>People You Can Trust</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Our team handles your shipments like our own.</p>
              </div>

              <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>🎧</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '6px', color: '#111111' }}>Support When You Need It</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45 }}>Ready to help before, during and after delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: From Lagos to your doorstep */}
      <section className="section text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-dot" /> SEE IT IN ACTION</div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px', color: '#111111' }}>From Lagos to your doorstep</h2>
            <p style={{ color: '#5F6368', fontSize: '15px', margin: 0 }}>
              Real shipments. Real people. Real results.
            </p>
          </div>

          <div className="action-steps-grid">
            {/* Step 1: Pickup */}
            <div style={{ textAlign: 'left' }}>
              <img src="/assets/images/pickup-rider.jpg" alt="We pick up" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px', display: 'block' }} />
              <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', color: '#111111' }}>We pick up</h4>
              <p style={{ fontSize: '12px', color: '#5F6368', margin: 0, lineHeight: 1.4 }}>Collected from your location in Lagos.</p>
            </div>

            {/* Step 2: Reception / Pack & process */}
            <div style={{ textAlign: 'left' }}>
              <img src="/assets/images/reception-boxes.jpg" alt="We pack & process" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px', display: 'block' }} />
              <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', color: '#111111' }}>We pack & process</h4>
              <p style={{ fontSize: '12px', color: '#5F6368', margin: 0, lineHeight: 1.4 }}>Packed, labelled and prepared for the journey.</p>
            </div>

            {/* Step 3 */}
            <div style={{ textAlign: 'left' }}>
              <img src="/assets/images/hero-home.png" alt="We ship" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px', display: 'block' }} />
              <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', color: '#111111' }}>We ship</h4>
              <p style={{ fontSize: '12px', color: '#5F6368', margin: 0, lineHeight: 1.4 }}>Travels by air or sea to your destination.</p>
            </div>

            {/* Step 4 */}
            <div style={{ textAlign: 'left' }}>
              <img src="/assets/images/container-ship.jpg" alt="We clear customs" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px', display: 'block' }} />
              <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', color: '#111111' }}>We clear customs</h4>
              <p style={{ fontSize: '12px', color: '#5F6368', margin: 0, lineHeight: 1.4 }}>Documentation and customs clearance handled.</p>
            </div>

            {/* Step 5 */}
            <div style={{ textAlign: 'left' }}>
              <img src="/assets/images/delivery-red-bag.png" alt="We deliver" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px', display: 'block' }} />
              <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', color: '#111111' }}>We deliver</h4>
              <p style={{ fontSize: '12px', color: '#5F6368', margin: 0, lineHeight: 1.4 }}>Arrives at your doorstep, on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="section" style={{ backgroundColor: '#111111', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            {/* Left Content */}
            <div>
              <div className="eyebrow" style={{ color: '#FFFFFF' }}>
                <span className="eyebrow-dot" style={{ backgroundColor: '#FFFFFF' }} /> Ready to Ship?
              </div>
              <h2 style={{ color: '#FFFFFF', marginBottom: '8px', fontSize: '32px', fontWeight: '800' }}>
                Let's move your package the right way.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                Get a personalized quote in minutes.
              </p>
            </div>

            {/* Right Badges & Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', marginBottom: '4px' }}>⚡</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF' }}>Fast Response</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>We reply quickly</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', marginBottom: '4px' }}>💳</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF' }}>No Hidden Fees</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Transparent pricing</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', marginBottom: '4px' }}>🛡️</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#FFFFFF' }}>Safe & Reliable</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>Your cargo, our priority</div>
                </div>
              </div>

              <button className="btn btn-primary" onClick={onOpenQuoteModal} style={{ borderRadius: '10px', height: '49px' }}>
                Get a Quote Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
