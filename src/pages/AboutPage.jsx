import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Globe, Zap, Users, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../config/constants';

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div>
      {/* About Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '100px',
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.9)), url("/assets/images/team-boxes-table.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="eyebrow-dot" /> ABOUT O3 CARGO EXPRESS
            </div>
            <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>
              Behind every parcel <br />
              is a person. <span className="text-accent">Behind O3 is a team.</span>
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              We are a Lagos-based international logistics company dedicated to bridging Nigeria with over 200 countries through care, speed and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Our Mission & Identity */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> OUR MISSION</div>
              <h2 style={{ marginBottom: '20px' }}>Making international logistics feel human and stress-free.</h2>
              <p style={{ marginBottom: '20px' }}>
                At O3 Cargo Express, we believe shipping shouldn't feel like a black box. Whether a business owner sending commercial products to the UK, an individual shipping personal parcels to family in Canada, or a diaspora customer procuring goods from Lagos — we treat every shipment with personal priority.
              </p>
              <p style={{ marginBottom: '32px' }}>
                Founded by Okemute Ekebe, O3 Cargo Express was built to solve the frustration of slow, unpredictable, and faceless shipping services.
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <button className="btn btn-primary" onClick={onOpenQuoteModal}>
                  Get a Quote <ArrowRight size={16} />
                </button>
                <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <div>
              <img
                src="/assets/images/warehouse-women-clipboard.png"
                alt="O3 logistics team working"
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Pillars */}
      <section className="section section-bg-secondary text-center">
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-dot" /> WHAT DRIVES US</div>
          <h2 style={{ marginBottom: '48px' }}>The principles we ship by</h2>

          <div className="grid-4">
            <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <ShieldCheck size={28} />
              </div>
              <h4 style={{ fontSize: '18px', marginBottom: '8px', color: '#111111' }}>Trust & Safety</h4>
              <p style={{ fontSize: '14px', color: '#5F6368' }}>Every package is carefully handled, packed securely, and fully tracked.</p>
            </div>

            <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Zap size={28} />
              </div>
              <h4 style={{ fontSize: '18px', marginBottom: '8px', color: '#111111' }}>Speed & Efficiency</h4>
              <p style={{ fontSize: '14px', color: '#5F6368' }}>Weekly UK cargo freights and DHL/UPS express partnerships ensure fast delivery.</p>
            </div>

            <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Heart size={28} />
              </div>
              <h4 style={{ fontSize: '18px', marginBottom: '8px', color: '#111111' }}>Human Service</h4>
              <p style={{ fontSize: '14px', color: '#5F6368' }}>Real people answering your calls, updating you, and taking care of your cargo.</p>
            </div>

            <div style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', borderRadius: '20px', padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Globe size={28} />
              </div>
              <h4 style={{ fontSize: '18px', marginBottom: '8px', color: '#111111' }}>Global Reach</h4>
              <p style={{ fontSize: '14px', color: '#5F6368' }}>Shipping from Lagos to 200+ countries and importing seamlessly from China.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Real People Spotlight */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <img src="/assets/images/hero-home.png" alt="Dispatch team" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '18px' }} />
              <img src="/assets/images/delivery-red-bag.png" alt="Delivery staff" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '18px' }} />
            </div>

            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> REAL PEOPLE. REAL SERVICE.</div>
              <h2 style={{ marginBottom: '20px' }}>Logistics powered by dedicated people</h2>
              <p style={{ marginBottom: '24px' }}>
                When you ship with O3 Cargo Express, your parcel passes through the hands of trained dispatchers, careful packing technicians, and customer success managers who care.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} /> Dedicated support team available Mon - Sat
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} /> Professional inspection & repackaging in Lagos
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} /> Express courier network for quick door delivery
                </li>
              </ul>

              <button className="btn btn-primary" onClick={onOpenQuoteModal}>
                Get a Quote <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section section-bg-dark text-center">
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '36px', marginBottom: '16px' }}>Ready to ship with O3 Cargo Express?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>Experience premium, warm, and reliable logistics today.</p>
          <button className="btn btn-primary" onClick={onOpenQuoteModal}>
            Get a Quote Now <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
