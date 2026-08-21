import React, { useState } from 'react';
import { Play, Star, ArrowRight } from 'lucide-react';

export default function TestimonialsPage({ onOpenQuoteModal }) {
  const [activePlayingCard, setActivePlayingCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActivePlayingCard(cardId);
  };

  return (
    <div>
      {/* Testimonials Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '80px',
          backgroundImage: 'linear-gradient(to bottom, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.9)), url("/assets/images/delivery-red-bag.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '40px' }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <span className="eyebrow-dot" /> TESTIMONIALS
            </div>
            <h1 style={{ color: '#FFFFFF', marginBottom: '20px' }}>
              Real people.<br />
              Real shipments.<br />
              <span className="text-accent">Real experiences.</span>
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              What actual customers in Nigeria and worldwide say about our service.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>5,000+</div>
              <div className="stats-label">Parcels Delivered</div>
            </div>
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>200+</div>
              <div className="stats-label">5-Star Reviews</div>
            </div>
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>98%</div>
              <div className="stats-label">On-time Delivery</div>
            </div>
            <div className="stats-item">
              <div className="stats-number" style={{ color: 'var(--color-primary)' }}>100%</div>
              <div className="stats-label">Safe Shipment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Video Testimonials (Pure Media Cards - Plays in Same Frame) */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="eyebrow"><span className="eyebrow-dot" /> VIDEO TESTIMONIALS</div>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '36px', color: '#111111' }}>Hear from customers</h2>

          <div className="grid-3">
            {/* Video Card 1 */}
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
                  <img src="/testimonials/poster-1.png" alt="UK shipment testimonial" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="testimonial-play-badge">
                    <Play size={20} fill="#D71920" color="#D71920" />
                  </div>
                </>
              )}
            </div>

            {/* Video Card 2 */}
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
                  <img src="/testimonials/poster-2.png" alt="USA delivery testimonial" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="testimonial-play-badge">
                    <Play size={20} fill="#D71920" color="#D71920" />
                  </div>
                </>
              )}
            </div>

            {/* Video Card 3 */}
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
                  <img src="/testimonials/poster-3.png" alt="Import story testimonial" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="testimonial-play-badge">
                    <Play size={20} fill="#D71920" color="#D71920" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Image Testimonials (WhatsApp Screenshots Grid) */}
      <section className="section" style={{ backgroundColor: '#F9F9F9', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="eyebrow"><span className="eyebrow-dot" /> IMAGE TESTIMONIALS</div>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '36px', color: '#111111' }}>See what our customers say</h2>

          {/* Row 1: 3 Screenshot Cards */}
          <div className="grid-3" style={{ marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <img src="/testimonials/whatsapp-1.jpg" alt="Customer chat feedback 1" style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '10px', display: 'block' }} />
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <img src="/testimonials/whatsapp-2.jpg" alt="Customer chat feedback 2" style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '10px', display: 'block' }} />
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <img src="/testimonials/whatsapp-3.jpg" alt="Customer chat feedback 3" style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '10px', display: 'block' }} />
            </div>
          </div>

          {/* Row 2: 2 Screenshot Cards Centered */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <img src="/testimonials/whatsapp-4.jpg" alt="Customer chat feedback 4" style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '10px', display: 'block' }} />
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <img src="/testimonials/whatsapp-5.jpg" alt="Customer chat feedback 5" style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '10px', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Kind Words from our Customers (Transparent Outlined Cards - No Fill) */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '36px', color: '#111111' }}>Kind words from our customers</h2>

          <div className="grid-4">
            {/* Review 1 */}
            <div
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D71920" color="#D71920" />
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.55, marginBottom: '24px' }}>
                  "O3 Cargo Express is the real deal. My items got to me in the UK faster than I expected and everything was intact."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EAEAEA', color: '#555555', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  A
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>Aisha M.</div>
                  <div style={{ fontSize: '12px', color: '#5F6368' }}>Manchester, UK</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D71920" color="#D71920" />
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.55, marginBottom: '24px' }}>
                  "Great customer service and very transparent. They kept me updated from pickup to delivery."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EAEAEA', color: '#555555', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  D
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>David K.</div>
                  <div style={{ fontSize: '12px', color: '#5F6368' }}>Chicago, USA</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D71920" color="#D71920" />
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.55, marginBottom: '24px' }}>
                  "I love their procurement service. They buy, inspect and deliver right to my doorstep."
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EAEAEA', color: '#555555', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  F
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>Funke O.</div>
                  <div style={{ fontSize: '12px', color: '#5F6368' }}>Vancouver, Canada</div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#D71920" color="#D71920" />
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: '#111111', lineHeight: 1.55, marginBottom: '24px' }}>
                  "Shipping from Lagos to Europe has never been this easy. Highly recommended!"
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#EAEAEA', color: '#555555', fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  J
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>Jean P.</div>
                  <div style={{ fontSize: '12px', color: '#5F6368' }}>Paris, France</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Left Aligned Heading & Subtitle) */}
      <section className="section" style={{ backgroundColor: '#111111', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: '800', marginBottom: '8px', textAlign: 'left' }}>
                Ready to experience reliable shipping?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', margin: 0, textAlign: 'left' }}>
                Join thousands of happy customers who trust O3 Cargo Express.
              </p>
            </div>

            <button className="btn btn-primary" onClick={onOpenQuoteModal} style={{ borderRadius: '10px', height: '49px' }}>
              Get a Quote Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
