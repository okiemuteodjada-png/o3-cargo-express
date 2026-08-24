import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Logo({ className = '', height = 44 }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      to="/"
      className={`logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      {!imgError ? (
        <img
          src={logoImg}
          alt="O3 Cargo Express"
          onError={() => setImgError(true)}
          style={{
            height: `${height}px`,
            width: 'auto',
            maxHeight: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      ) : (
        <span
          style={{
            fontWeight: 800,
            fontSize: `${Math.max(16, height * 0.42)}px`,
            color: '#D71920',
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Zero Three <span style={{ color: '#1B2534' }}>Cargo Express</span>
        </span>
      )}
    </Link>
  );
}
