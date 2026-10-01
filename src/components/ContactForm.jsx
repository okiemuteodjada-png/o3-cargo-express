import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, CreditCard, ShieldCheck, Lock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    hp_website: '', // Honeypot field for bot spam trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot Spam Protection: Silent drop if honeypot is populated
    if (formData.hp_website) {
      setSubmitted(true);
      return;
    }

    // Input Validation
    const cleanEmail = formData.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT || import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || '06cbc5a6-69ba-4896-91c8-6afeb342e1cd';

    const sanitizedData = {
      fullName: formData.fullName.trim(),
      email: cleanEmail,
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (endpoint || web3Key) {
      try {
        const targetUrl = endpoint || 'https://api.web3forms.com/submit';
        const payload = {
          access_key: web3Key,
          subject: `[Contact Form] ${sanitizedData.subject} - ${sanitizedData.fullName}`,
          from_name: sanitizedData.fullName,
          to_email: 'O3cargoexpress@gmail.com',
          ...sanitizedData,
        };

        const res = await fetch(targetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          setSubmitted(true);
        } else {
          const errData = await res.json().catch(() => ({}));
          setErrorMsg(errData.message || 'Failed to deliver message. Please try again or chat on WhatsApp.');
        }
      } catch (err) {
        setErrorMsg('Network error. Please try again or chat with us on WhatsApp.');
      } finally {
        setLoading(false);
      }
    } else {
      // Fallback for preview/testing prior to external service key configuration
      console.log('[Contact Form Submitted to O3cargoexpress@gmail.com]:', sanitizedData);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 500);
    }
  };

  if (submitted) {
    return (
      <div className="form-card text-center" style={{ padding: '48px 32px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Message Sent!</h3>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
          Thank you for reaching out, <strong>{formData.fullName}</strong>. Our customer support team will respond to your enquiry within 2 hours.
        </p>
        <button
          className="btn btn-outline-dark"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {/* Invisible Honeypot Field for Bot Spam Trap */}
      <input
        type="text"
        name="hp_website"
        value={formData.hp_website}
        onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', color: '#111111' }}>Send us a message</h3>
      <p style={{ fontSize: '14px', color: '#5F6368', marginBottom: '24px' }}>
        Fill out the form and our team will get back to you shortly.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="contactFullName">
            FULL NAME <span className="required-asterisk" style={{ color: '#D71920' }}>*</span>
          </label>
          <input
            id="contactFullName"
            type="text"
            className="form-input"
            placeholder="Enter your full name"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactEmail">
            EMAIL ADDRESS <span className="required-asterisk" style={{ color: '#D71920' }}>*</span>
          </label>
          <input
            id="contactEmail"
            type="email"
            className="form-input"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactPhone">
            PHONE / WHATSAPP <span className="required-asterisk" style={{ color: '#D71920' }}>*</span>
          </label>
          <input
            id="contactPhone"
            type="tel"
            className="form-input"
            placeholder="Your phone number"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactSubject">
            SUBJECT <span className="required-asterisk" style={{ color: '#D71920' }}>*</span>
          </label>
          <input
            id="contactSubject"
            type="text"
            className="form-input"
            placeholder="What is this about?"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="contactMessage">
            MESSAGE <span className="required-asterisk" style={{ color: '#D71920' }}>*</span>
          </label>
          <textarea
            id="contactMessage"
            className="form-textarea"
            rows={5}
            placeholder="Tell us how we can help..."
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </div>

      {/* 3 Feature Cards with 14px Corner Radius */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '20px', marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', padding: '14px 8px', borderRadius: '14px' }}>
          <Zap size={18} style={{ color: '#EAB308', marginBottom: '4px' }} />
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#111111' }}>Fast Response</div>
          <div style={{ fontSize: '10px', color: '#5F6368' }}>We reply quickly</div>
        </div>
        <div style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', padding: '14px 8px', borderRadius: '14px' }}>
          <CreditCard size={18} style={{ color: '#10B981', marginBottom: '4px' }} />
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#111111' }}>No Hidden Fees</div>
          <div style={{ fontSize: '10px', color: '#5F6368' }}>Transparent pricing</div>
        </div>
        <div style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', padding: '14px 8px', borderRadius: '14px' }}>
          <ShieldCheck size={18} style={{ color: '#D71920', marginBottom: '4px' }} />
          <div style={{ fontSize: '12px', fontWeight: '700', color: '#111111' }}>Secure & Reliable</div>
          <div style={{ fontSize: '10px', color: '#5F6368' }}>Your cargo, our priority</div>
        </div>
      </div>

      {errorMsg && (
        <div style={{ padding: '12px 16px', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', borderRadius: '8px', fontSize: '13px', marginBottom: '16px' }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={loading}
        style={{ height: '52px', fontSize: '16px', borderRadius: '10px', opacity: loading ? 0.7 : 1 }}
      >
        {loading ? 'Sending Message...' : 'Send Message'} <ArrowRight size={18} />
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: '#5F6368', marginTop: '16px' }}>
        <Lock size={12} /> Your information is safe with us.
      </div>
    </form>
  );
}
