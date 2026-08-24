import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function ServiceCard({ image, title, description, features = [], onLearnMore }) {
  return (
    <div className="asymmetric-service-card">
      {/* Layer 1: Back Image Frame */}
      <div className="service-card-back-image">
        <img src={image} alt={title} />
      </div>

      {/* Layer 2: Front Content Card Stack */}
      <div className="service-card-front-content">
        <div>
          <h3 className="service-card-title">{title}</h3>
          <p className="service-card-desc">{description}</p>

          {features.length > 0 && (
            <ul className="service-card-list">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <span className="icon-check-badge">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className="card-link"
          onClick={onLearnMore}
        >
          Learn more <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
