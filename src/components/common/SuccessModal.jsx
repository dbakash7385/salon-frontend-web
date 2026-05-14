import React from "react";

const SuccessModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay d-flex align-items-center justify-content-center">
      <div className="auth-modal-container auth-modal-narrow p-5 text-center animate-fade-in shadow-lg position-relative">
        <div className="success-icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffb298"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 className="text-30-700 mb-3">{title || "Success!"}</h2>
        <p className="text-18-400 mb-4 opacity-75">{message || "Your action was completed successfully."}</p>
        <button className="btn-peach w-100" onClick={onClose}>
          Great!
        </button>
      </div>
    </div>

  );
};

export default SuccessModal;
