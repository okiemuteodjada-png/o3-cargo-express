import React from 'react';
import { X } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        <QuoteForm buttonText="Submit Quote Request" onSuccess={() => {}} />
      </div>
    </div>
  );
}
