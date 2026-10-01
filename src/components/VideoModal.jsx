import React from 'react';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, title = "O3 Cargo Express", videoSrc }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: '24px', backgroundColor: '#000000' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal" style={{ color: '#FFFFFF' }}>
          <X size={24} />
        </button>
        <h4 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '18px' }}>{title}</h4>
        
        <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%', backgroundColor: '#000000', borderRadius: '12px', overflow: 'hidden' }}>
          <video
            src={videoSrc}
            controls
            autoPlay
            playsInline
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}
