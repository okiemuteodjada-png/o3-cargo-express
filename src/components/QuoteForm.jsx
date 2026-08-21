import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Lock } from 'lucide-react';
import { BUSINESS_TYPES, DESTINATION_COUNTRIES, SHIPMENT_VOLUMES, BRAND } from '../config/constants';

export default function QuoteForm({ buttonText = "Request A Shipping Quote", onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    whatDoYouSell: '',
    destinationCountry: '',
    shipmentVolume: '',
    message: '',
    hp_company: '', // Honeypot field for bot spam trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot Spam Protection: Silent drop if honeypot is populated
    if (formData.hp_company) {
      setSubmitted(true);
      if (onSuccess) onSuccess();
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

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT || import.meta.env.VITE_QUOTE_FORM_ENDPOINT;
    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY;

    const sanitizedData = {
      fullName: formData.fullName.trim(),
      businessName: formData.businessName.trim(),
      phone: formData.phone.trim(),
      email: cleanEmail,
      whatDoYouSell: formData.whatDoYouSell,
      destinationCountry: formData.destinationCountry,
      shipmentVolume: formData.shipmentVolume,
      message: formData.message.trim(),
    };

    if (endpoint || web3Key) {
      try {
        const targetUrl = endpoint || 'https://api.web3forms.com/submit';
        const payload = {
          access_key: web3Key,
          subject: `[Shipping Quote Request] ${sanitizedData.fullName} (${sanitizedData.destinationCountry || 'International'})`,
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
          if (onSuccess) onSuccess();
        } else {
          const errData = await res.json().catch(() => ({}));
          setErrorMsg(errData.message || 'Failed to submit quote request. Please try again or contact us via WhatsApp.');
        }
      } catch (err) {
        setErrorMsg('Network error. Please try again or contact us on WhatsApp.');
      } finally {
        setLoading(false);
      }
    } else {
      // Fallback for preview/testing prior to external service key configuration
      console.log('[Quote Request Submitted to O3cargoexpress@gmail.com]:', sanitizedData);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        if (onSuccess) onSuccess();
      }, 500);
    }
  };

  if (submitted) {
    return (
      <div className="form-card text-center" style={{ padding: '48px 32px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-brand-tint)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Quote Request Received!</h3>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
          Thank you, <strong>{formData.fullName}</strong>. Our logistics team will review your shipment details and contact you within 24 hours with a custom rate.
        </p>
        
        <div style={{ background: 'var(--color-bg-secondary)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '24px', textAlign: 'left' }}>
          <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '8px', color: 'var(--color-dark)' }}>Need urgent assistance right now?</div>
          <p style={{ fontSize: '13px', marginBottom: '14px' }}>Connect directly with our shipping team on WhatsApp for immediate pricing.</p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            Chat Directly on WhatsApp <ArrowRight size={16} />
          </a>
        </div>

        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              businessName: '',
              phone: '',
              email: '',
              whatDoYouSell: '',
              destinationCountry: '',
              shipmentVolume: '',
              message: '',
            });
          }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {/* Invisible Honeypot Field for Bot Spam Trap */}
      <input
        type="text"
        name="hp_company"
        value={formData.hp_company}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />
      <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Request A Shipping Quote</h3>
      <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
        All fields marked * are required. We respond within 24 hours.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="form-input"
            placeholder="Your full name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="businessName">Business Name *</label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            className="form-input"
            placeholder="Your business name"
            required
            value={formData.businessName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="e.g. +234 800 000 0000"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="whatDoYouSell">What Do You Sell? *</label>
          <select
            id="whatDoYouSell"
            name="whatDoYouSell"
            className="form-select"
            required
            value={formData.whatDoYouSell}
            onChange={handleChange}
          >
            <option value="">Select product category...</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="destinationCountry">Destination Country *</label>
          <select
            id="destinationCountry"
            name="destinationCountry"
            className="form-select"
            required
            value={formData.destinationCountry}
            onChange={handleChange}
          >
            <option value="">Select destination...</option>
            {DESTINATION_COUNTRIES.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="shipmentVolume">Est. Monthly Volume *</label>
          <select
            id="shipmentVolume"
            name="shipmentVolume"
            className="form-select"
            required
            value={formData.shipmentVolume}
            onChange={handleChange}
          >
            <option value="">Select volume...</option>
            {SHIPMENT_VOLUMES.map((vol) => (
              <option key={vol} value={vol}>{vol}</option>
            ))}
          </select>
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="message">Message / Additional Details</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Tell us more about your shipping needs, weight range, special requirements..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>

      {errorMsg && (
        <div style={{ padding: '12px 16px', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', borderRadius: '8px', fontSize: '13px', marginTop: '16px' }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-block"
        style={{ marginTop: '16px', height: '52px', fontSize: '16px', opacity: loading ? 0.7 : 1 }}
        disabled={loading}
      >
        {loading ? 'Submitting Quote Request...' : buttonText} <ArrowRight size={18} />
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '16px' }}>
        <Lock size={12} /> Your information is safe with us. We respond within 24 hours.
      </div>
    </form>
  );
}
