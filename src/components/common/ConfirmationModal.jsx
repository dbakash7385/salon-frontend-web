import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to perform this action?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmBtnType = "primary", // 'danger' | 'peach' | 'primary'
  successTitle = "Action Completed!",
  successMessage = "Your request was processed successfully.",
  showSuccess = true,
}) => {
  if (!isOpen) return null;

  const [isSuccess, setIsSuccess] = useState(false);

  // Reset success state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("common-confirm-overlay")) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    if (showSuccess) {
      setIsSuccess(true);
    } else {
      onClose();
    }
  };

  // Success view rendering
  if (isSuccess) {
    return (
      <div
        className="common-confirm-overlay d-flex align-items-center justify-content-center"
        onClick={handleBackdropClick}
      >
        <div className="common-confirm-container success-state animate-fade-in position-relative p-5 text-center">
          {/* Close Button */}
          <button
            className="common-confirm-close-btn d-flex align-items-center justify-content-center"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} color="#ffffff" />
          </button>

          {/* Success Checkmark Circle - Custom SVG matching mockups */}
          <div className="common-confirm-success-icon-wrapper mx-auto mb-4 d-flex align-items-center justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M36.3286 16.6637C37.0897 20.3985 36.5473 24.2814 34.792 27.6647C33.0367 31.048 30.1746 33.7273 26.6829 35.2558C23.1913 36.7843 19.2811 37.0696 15.6046 36.0641C11.9281 35.0586 8.70735 32.8231 6.47956 29.7304C4.25178 26.6376 3.15158 22.8746 3.36245 19.0689C3.57331 15.2632 5.08249 11.6448 7.63831 8.81711C10.1941 5.98943 13.6421 4.1234 17.4072 3.53021C21.1723 2.93703 25.027 3.65253 28.3284 5.55742"
                stroke="#00C950"
                strokeWidth="3.33272"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9971 18.3296L19.9962 23.3287L36.6598 6.66504"
                stroke="#00C950"
                strokeWidth="3.33272"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Success Title */}
          <h2 className="common-confirm-success-title text-white mb-2">
            {successTitle}
          </h2>

          {/* Success Description */}
          <p className="common-confirm-success-subtitle mb-0 opacity-60">
            {successMessage}
          </p>
        </div>
      </div>
    );
  }

  // Confirmation form view rendering
  return (
    <div
      className="common-confirm-overlay d-flex align-items-center justify-content-center"
      onClick={handleBackdropClick}
    >
      <div className="common-confirm-container animate-fade-in position-relative p-4">
        
        {/* Title */}
        <h2 className="common-confirm-title text-white mb-3 text-start">
          {title}
        </h2>

        {/* Description Message */}
        <p className="common-confirm-message mb-4 text-start">
          {message}
        </p>

        {/* Action Buttons Footer */}
        <div className="common-confirm-footer d-flex gap-3">
          <button
            className="common-confirm-btn-cancel w-50 py-3 text-white"
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button
            className={`common-confirm-btn-confirm w-50 py-3 text-white d-flex align-items-center justify-content-center ${confirmBtnType}`}
            onClick={handleConfirm}
          >
            {confirmText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConfirmationModal;
