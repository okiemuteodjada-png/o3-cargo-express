import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Clock, Globe, Award, Sparkles, MessageSquare, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { BRAND } from '../config/constants';

export default function HomePage({ onOpenQuoteModal }) {
  const [activePlayingCard, setActivePlayingCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActivePlayingCard(cardId);
  };

  return (
    <div>
      {/* Hero Section — Directive #1: Black delivery man holding box image + 20px rounded hero frame */}
      <section
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '130px',
          paddingBottom: '80px',
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.72), rgba(20, 20, 20, 0.85)), url("/assets/images/hero-home.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="eyebrow-dot" /> LAGOS TO THE WORLD
            </div>
            
            <h1 style={{ color: '#FFFFFF', marginBottom: '20px', fontSize: 'var(--font-size-display)' }}>
              Your packages. <br />
              Our priority. <br />
              <span className="text-accent">Delivered worldwide.</span>
            </h1>

            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '36px' }}>
              O3 Cargo Express ships from Lagos to over 200 countries with speed, care and reliability you can trust.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onOpenQuoteModal} style={{ borderRadius: '10px' }}>
                Get a Quote <ArrowRight size={18} />
              </button>
              <Link to="/services" className="btn btn-outline" style={{ borderRadius: '10px' }}>
                Explore Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — Directive #4: Impact Measurement */}
      <section style={{ marginTop: '-40px', paddingBottom: '40px', position: 'relative', zIndex: '10' }}>
        <div className="container">
          <div className="stats-bar">
            <div className="stats-item">
              <div className="stats-number">
                200+ <span className="stats-dot" />
              </div>
              <div className="stats-label">Countries Served</div>
            </div>

            <div className="stats-item">
              <div className="stats-number">
                Weekly <span className="stats-dot" />
              </div>
              <div className="stats-label">UK Cargo Freights</div>
            </div>

            <div className="stats-item">
              <div className="stats-number">
                DHL & UPS <span className="stats-dot" />
              </div>
              <div className="stats-label">Express Partners</div>
            </div>

            <div className="stats-item">
              <div className="stats-number">
                Safe & Secure <span className="stats-dot" />
              </div>
              <div className="stats-label">Every Shipment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section — Directive #5: Bookmark-shaped layered service cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> OUR SERVICES</div>
              <h2>Solutions that move<br />your world</h2>
            </div>
            <Link to="/services" className="btn btn-outline-dark" style={{ borderRadius: '10px' }}>
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-4">
            <ServiceCard
              image="/assets/images/service-uk.png"
              title="Ship to the UK"
              description="Weekly consolidated air cargo + DHL & UPS express to the United Kingdom."
              features={['Weekly departures', 'Cost-effective rates', 'Safe & reliable delivery']}
              onLearnMore={onOpenQuoteModal}
            />

            <ServiceCard
              image="/assets/images/service-usa-europe.png"
              title="USA, Canada & Europe"
              description="Express delivery to North America and Europe with fast transit times."
              features={['Express delivery', 'Competitive rates', 'Wide coverage']}
              onLearnMore={onOpenQuoteModal}
            />

            <ServiceCard
              image="/assets/images/service-china.png"
              title="Import from China"
              description="Sea cargo, air cargo and express importation options from China."
              features={['Sea cargo (FCL & LCL)', 'Air cargo', 'Express importation']}
              onLearnMore={onOpenQuoteModal}
            />

            <ServiceCard
              image="/assets/images/service-procurement.png"
              title="Procurement Services"
              description="We buy, inspect and deliver goods from Lagos for diaspora customers."
              features={['Product sourcing', 'Quality inspection', 'Worldwide delivery']}
              onLearnMore={onOpenQuoteModal}
            />
          </div>
        </div>
      </section>

      {/* Tailored Solutions / Bento Grid Section — Section 1 */}
      <section className="section section-bg-secondary">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> BUILT FOR YOU</div>
              <h2 style={{ marginBottom: '20px' }}>Tailored solutions<br />for every shipment.</h2>
              <p style={{ marginBottom: '32px' }}>
                Every shipment is different. Whether you're sending a parcel to London, importing a container from Shenzhen, or procuring goods from Lagos — we build a solution around you.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
                <div className="outlined-feature-card">
                  <Clock size={24} style={{ color: 'var(--color-primary)', marginBottom: '12px' }} />
                  <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>Real-Time Updates</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Stay informed at every stage.</div>
                </div>

                <div className="outlined-feature-card">
                  <Shield size={24} style={{ color: 'var(--color-primary)', marginBottom: '12px' }} />
                  <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>Fully Insured</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Every package is protected.</div>
                </div>

                <div className="outlined-feature-card">
                  <Globe size={24} style={{ color: 'var(--color-primary)', marginBottom: '12px' }} />
                  <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>200+ Countries</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Truly global coverage.</div>
                </div>

                <div className="outlined-feature-card">
                  <Sparkles size={24} style={{ color: 'var(--color-primary)', marginBottom: '12px' }} />
                  <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px' }}>98% On-Time Rate</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>We deliver on schedule.</div>
                </div>
              </div>

              <Link to="/services" className="btn btn-primary" style={{ borderRadius: '10px' }}>
                Explore our services <ArrowRight size={18} />
              </Link>
            </div>

            {/* Bento Grid Images Side (Exact Figma image assets) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <img
                src="/assets/images/bento-team.png"
                alt="O3 team at work"
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '20px', gridColumn: '1 / -1' }}
              />
              <img
                src="/assets/images/bento-packing.png"
                alt="Packing shipments"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' }}
              />
              <div style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF', padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '52px', fontWeight: '800', lineHeight: 1, marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>98%</div>
                <div style={{ fontSize: '14px', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>On-Time Delivery</div>
                <div style={{ fontSize: '12px', opacity: 0.85, marginTop: '4px' }}>Across all shipment types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose O3 Section — Section 2 (Matching Figma Composition) */}
      <section className="section">
        <div className="container">
          <div className="why-choose-layout">
            {/* Static Image (Fixed 447x440 box on desktop, moves below text on mobile) */}
            <div className="why-image-box">
              <img src="/assets/images/why-choose-image.png" alt="We handle it like it's our own" />
            </div>

            {/* Right Side Cards & Content */}
            <div className="why-choose-text">
              <div className="eyebrow"><span className="eyebrow-dot" /> WHY CHOOSE O3</div>
              <h2 style={{ marginBottom: '16px' }}>We handle it like<br />it's our own.</h2>
              <p style={{ marginBottom: '28px', color: '#5F6368' }}>
                We combine technology, experience and a people-first approach to deliver a shipping experience you can trust — every single time.
              </p>

              {/* 4 Cards Grid with #F4F3F0 background */}
              <div className="why-feature-grid">
                <div className="why-feature-card">
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>🛡️</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px', color: '#111111' }}>Reliable & Safe</div>
                    <div style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.4 }}>Packages handled with the utmost care and insured every step.</div>
                  </div>
                </div>

                <div className="why-feature-card">
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>⚡</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px', color: '#111111' }}>Fast & Efficient</div>
                    <div style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.4 }}>Speedy delivery with trusted logistics partners worldwide.</div>
                  </div>
                </div>

                <div className="why-feature-card">
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>📍</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px', color: '#111111' }}>Real-Time Updates</div>
                    <div style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.4 }}>Stay informed at every stage of your shipment.</div>
                  </div>
                </div>

                <div className="why-feature-card">
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>👋</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '4px', color: '#111111' }}>Customer First</div>
                    <div style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.4 }}>Here before, during and after every delivery.</div>
                  </div>
                </div>
              </div>

              <Link to="/how-it-works" className="btn btn-outline-dark" style={{ borderRadius: '10px' }}>
                Learn more about our process <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section — Section 3 (Connected Circular Steps) */}
      <section className="section section-bg-secondary text-center">
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-dot" /> HOW IT WORKS</div>
          <h2 style={{ marginBottom: '12px' }}>Shipping made simple</h2>
          <div style={{ width: '40px', height: '3px', backgroundColor: '#D71920', borderRadius: '2px', margin: '0 auto 48px auto' }} />

          <div className="how-connected-flow">
            <div className="how-connecting-line" />
            
            <div className="grid-4">
              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">📋</div>
                  <span className="how-step-badge">01</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Tell us what you're sending</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45, maxWidth: '240px' }}>Share package details, destination and preferred shipping option.</p>
              </div>

              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">💬</div>
                  <span className="how-step-badge">02</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>Get your quote</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45, maxWidth: '240px' }}>We review your request and provide the best rates and options.</p>
              </div>

              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">📦</div>
                  <span className="how-step-badge">03</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>We handle the shipment</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45, maxWidth: '240px' }}>Pickup, packing, customs clearance — all managed by our team.</p>
              </div>

              <div className="how-step-node">
                <div className="how-step-circle-wrap">
                  <div className="how-step-circle">🌍</div>
                  <span className="how-step-badge">04</span>
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '8px', color: '#111111' }}>It reaches its destination</h4>
                <p style={{ fontSize: '13px', color: '#5F6368', lineHeight: 1.45, maxWidth: '240px' }}>Delivered safely to the door, anywhere in the world.</p>
              </div>
            </div>
          </div>

          <Link to="/how-it-works" className="btn btn-outline-dark" style={{ borderRadius: '10px' }}>
            See the full process <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials Section — Section 4 (Actual Testimonial Media & Videos) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="eyebrow"><span className="eyebrow-dot" /> REAL STORIES. REAL PEOPLE.</div>
              <h2>Loved by customers<br />around the world.</h2>
            </div>
            <Link to="/testimonials" className="btn btn-outline-dark" style={{ borderRadius: '10px' }}>
              View all testimonials <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-4">
            {/* Card 1: Video 1 */}
            <div
              className="testimonial-pure-media-card"
              onClick={() => handleCardClick(1)}
            >
              {activePlayingCard === 1 ? (
                <video
                  src="/testimonials/video-1.mp4"
                  controls
                  autoPlay
                  playsInline
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px' }}
                />
              ) : (
                <>
                  <img src="/testimonials/poster-1.png" alt="UK Shipment Story" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="testimonial-play-badge">
                    <Play size={16} fill="#D71920" color="#D71920" />
                  </div>
                </>
              )}
            </div>

            {/* Card 2: Video 2 */}
            <div
              className="testimonial-pure-media-card"
              onClick={() => handleCardClick(2)}
            >
              {activePlayingCard === 2 ? (
                <video
                  src="/testimonials/video-2.mp4"
                  controls
                  autoPlay
                  playsInline
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px' }}
                />
              ) : (
                <>
                  <img src="/testimonials/poster-2.png" alt="USA Delivery Story" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="testimonial-play-badge">
                    <Play size={16} fill="#D71920" color="#D71920" />
                  </div>
                </>
              )}
            </div>

            {/* Card 3: Video 3 */}
            <div
              className="testimonial-pure-media-card"
              onClick={() => handleCardClick(3)}
            >
              {activePlayingCard === 3 ? (
                <video
                  src="/testimonials/video-3.mp4"
                  controls
                  autoPlay
                  playsInline
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px' }}
                />
              ) : (
                <>
                  <img src="/testimonials/poster-3.png" alt="Import Story" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="testimonial-play-badge">
                    <Play size={16} fill="#D71920" color="#D71920" />
                  </div>
                </>
              )}
            </div>

            {/* Card 4: WhatsApp Testimonial Screenshot Image */}
            <div className="testimonial-pure-media-card" style={{ cursor: 'default' }}>
              <img src="/testimonials/whatsapp-image.jpeg" alt="WhatsApp Customer Testimonial" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section — Directive #12: Transparent Dark Outlined Cards (NO White Fills!) */}
      <section className="section section-bg-dark text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-dot" /> GLOBAL REACH</div>
          <h2 style={{ fontSize: 'var(--font-size-display)', marginBottom: '16px' }}>
            From Lagos to over<br />200 countries.
          </h2>
          <p className="lead" style={{ marginBottom: '32px', color: 'rgba(255,255,255,0.7)' }}>
            Wherever it's going, we'll get it there.
          </p>

          <button className="btn btn-primary" onClick={onOpenQuoteModal} style={{ marginBottom: '64px', borderRadius: '10px' }}>
            Get a Quote Now <ArrowRight size={18} />
          </button>

          {/* Directive #12: Outlined dark transparent cards with 12px radius */}
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div className="outlined-dark-card">
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>200+</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Countries served</div>
            </div>

            <div className="outlined-dark-card">
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>Weekly</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>UK cargo shipments</div>
            </div>

            <div className="outlined-dark-card">
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>DHL & UPS</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Express partners</div>
            </div>

            <div className="outlined-dark-card">
              <div style={{ fontSize: '32px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>Safe & Secure</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Every shipment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ background: 'var(--color-bg-secondary)', padding: '48px', borderRadius: '20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Ready to ship from Lagos?</h2>
              <p>Get a personalized quote in minutes. Transparent pricing — no hidden fees.</p>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onOpenQuoteModal} style={{ borderRadius: '10px' }}>
                Get a Quote <ArrowRight size={16} />
              </button>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark" style={{ borderRadius: '10px' }}>
                <MessageSquare size={16} style={{ color: '#25D366' }} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
