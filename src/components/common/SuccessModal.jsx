import React from "react";

const SuccessModal = ({
  isOpen,
  onClose,
  title,
  message,
  buttonText = "Great!",
  showIcon = true,
  showCloseButton = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay d-flex align-items-center justify-content-center">
      <div className="auth-modal-container auth-modal-narrow p-5 text-center animate-fade-in shadow-lg position-relative">
        {showCloseButton && (
          <button
            className="auth-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
        {showIcon && (
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
        )}
        <h2 className="text-30-700-inter mb-3">{title || "Success!"}</h2>
        <p className="text-18-400 mb-4 opacity-75">{message || "Your action was completed successfully."}</p>
        <button className="btn-peach w-100 rounded-pill py-2.5" onClick={onClose}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
