import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Plane, Ship, ShoppingBag, ShieldCheck, Zap, CreditCard, MessageSquare } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { BRAND } from '../config/constants';

export default function ServicesPage({ onOpenQuoteModal }) {
  return (
    <div>
      {/* Services Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '80px',
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.9)), url("/assets/images/cargo-storage.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="eyebrow-dot" /> OUR SERVICES
            </div>
            <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>
              Shipping solutions <br />
              built around <span className="text-accent">you.</span>
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              From shipping packages to importing goods and procuring items in Lagos, we deliver what matters — safely and on time.
            </p>
          </div>

          {/* Embedded Stats Bar */}
          <div className="stats-bar" style={{ marginTop: '20px' }}>
            <div className="stats-item">
              <div className="stats-number">200+ <span className="stats-dot" /></div>
              <div className="stats-label">Countries</div>
            </div>
            <div className="stats-item">
              <div className="stats-number">Weekly <span className="stats-dot" /></div>
              <div className="stats-label">UK Cargo</div>
            </div>
            <div className="stats-item">
              <div className="stats-number">DHL & UPS <span className="stats-dot" /></div>
              <div className="stats-label">Express</div>
            </div>
            <div className="stats-item">
              <div className="stats-number">Safe & Secure <span className="stats-dot" /></div>
              <div className="stats-label">Every Shipment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Ship from Lagos */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plane size={20} />
            </div>
            <h2 style={{ fontSize: '28px' }}>Ship from Lagos</h2>
          </div>

          <div className="grid-3">
            {/* Card 1: Ship to the UK */}
            <ServiceCard
              image="/assets/images/service-uk.png"
              title="Ship to the UK"
              description="Weekly consolidated air cargo + DHL & UPS express to the United Kingdom."
              features={['Weekly departures', 'Cost-effective rates', 'Safe & reliable delivery']}
              onLearnMore={onOpenQuoteModal}
            />

            {/* Card 2: USA, Canada & Europe */}
            <ServiceCard
              image="/assets/images/service-usa-europe.png"
              title="USA, Canada & Europe"
              description="Express delivery to North America and Europe with fast transit times."
              features={['Express delivery', 'Competitive rates', 'Wide coverage']}
              onLearnMore={onOpenQuoteModal}
            />

            {/* Card 3: Import from China Overview */}
            <ServiceCard
              image="/assets/images/service-china.png"
              title="Import from China"
              description="Sea cargo, air cargo and express importation options from China."
              features={['Sea cargo (FCL & LCL)', 'Air cargo', 'Express importation']}
              onLearnMore={onOpenQuoteModal}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Import from China Detail */}
      <section className="section section-bg-secondary">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Ship size={20} />
            </div>
            <h2 style={{ fontSize: '28px' }}>Import from China</h2>
          </div>

          <div className="grid-3">
            {/* Sea Cargo */}
            <ServiceCard
              image="/assets/images/container-ship.jpg"
              title="Sea Cargo"
              description="Cost-effective shipping for large or bulky shipments from China to Nigeria."
              features={['FCL & LCL options', 'Affordable rates', 'Reliable sailing schedules']}
              onLearnMore={onOpenQuoteModal}
            />

            {/* Air Cargo */}
            <ServiceCard
              image="/assets/images/bento-team.png"
              title="Air Cargo"
              description="Faster delivery for time-sensitive shipments from China."
              features={['Frequent flights', 'Priority handling', 'Safe & secure']}
              onLearnMore={onOpenQuoteModal}
            />

            {/* China Express */}
            <ServiceCard
              image="/assets/images/truck-cargo.jpg"
              title="China Express"
              description="Express courier solutions for smaller packages and urgent items."
              features={['DHL, UPS & more', 'Fast door-to-door delivery', 'Tracking available']}
              onLearnMore={onOpenQuoteModal}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Procurement Services */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShoppingBag size={20} />
            </div>
            <h2 style={{ fontSize: '28px' }}>Procurement Services</h2>
          </div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>
                We buy. We inspect.<br />We deliver.
              </h2>
              <p style={{ marginBottom: '24px' }}>
                Need something from Lagos? We'll help you source it, inspect it, and deliver it safely to you anywhere in the world.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} /> Product sourcing
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} /> Quality inspection
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} /> Safe packaging
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '600' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} /> Worldwide delivery
                </div>
              </div>

              <button className="btn btn-primary" onClick={onOpenQuoteModal}>
                Learn more about procurement <ArrowRight size={18} />
              </button>
            </div>

            <div>
              <img
                src="/assets/images/procurement-inspector.png"
                alt="Quality inspection in warehouse"
                style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '20px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Ship CTA Band */}
      <section className="section section-bg-dark">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> READY TO SHIP?</div>
              <h2 style={{ color: '#FFFFFF', marginBottom: '8px' }}>Get a personalized quote for your shipment.</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Get a personalized quote in minutes.</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <Zap size={18} style={{ color: '#EAB308', marginBottom: '4px' }} />
                  <div style={{ fontSize: '12px', fontWeight: '700' }}>Fast Response</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>We reply quickly</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <CreditCard size={18} style={{ color: '#10B981', marginBottom: '4px' }} />
                  <div style={{ fontSize: '12px', fontWeight: '700' }}>No Hidden Fees</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Transparent pricing</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-primary)', marginBottom: '4px' }} />
                  <div style={{ fontSize: '12px', fontWeight: '700' }}>Safe & Reliable</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>Your cargo, our priority</div>
                </div>
              </div>

              <button className="btn btn-primary" onClick={onOpenQuoteModal}>
                Get a Quote Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
