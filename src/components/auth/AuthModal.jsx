import React, { useState, useEffect } from 'react';
import RoleSelection from './RoleSelection';
import CustomerLogin from './customer/CustomerLogin';
import CustomerSignup from './customer/CustomerSignup';
import CustomerForgotPassword from './customer/CustomerForgotPassword';
import CustomerVerification from './customer/CustomerVerification';
import CustomerResetPassword from './customer/CustomerResetPassword';
import PartnerLogin from './partner/PartnerLogin';
import PartnerForgotPassword from './partner/PartnerForgotPassword';
import PartnerVerification from './partner/PartnerVerification';
import PartnerResetPassword from './partner/PartnerResetPassword';

const AuthModal = ({ isOpen, onClose, initialView = 'ROLE_SELECTION' }) => {
  const [currentView, setCurrentView] = useState(initialView);

  // Reset view when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentView(initialView);
    }
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  // Prevent clicks inside modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const renderView = () => {
    switch (currentView) {
      case 'ROLE_SELECTION':
        return <RoleSelection onNavigate={setCurrentView} onClose={onClose} mode="LOGIN" />;
      case 'ROLE_SELECTION_SIGNUP':
        return <RoleSelection onNavigate={setCurrentView} onClose={onClose} mode="SIGNUP" />;
      case 'CUSTOMER_LOGIN':
        return <CustomerLogin onNavigate={setCurrentView} />;
      case 'CUSTOMER_SIGNUP':
        return <CustomerSignup onNavigate={setCurrentView} />;
      case 'CUSTOMER_FORGOT_PASSWORD':
        return <CustomerForgotPassword onNavigate={setCurrentView} />;
      case 'CUSTOMER_VERIFICATION':
        return <CustomerVerification onNavigate={setCurrentView} />;
      case 'CUSTOMER_RESET_PASSWORD':
        return <CustomerResetPassword onNavigate={setCurrentView} />;
      case 'PARTNER_LOGIN':
        return <PartnerLogin onNavigate={setCurrentView} onClose={onClose} />;
      case 'PARTNER_FORGOT_PASSWORD':
        return <PartnerForgotPassword onNavigate={setCurrentView} />;
      case 'PARTNER_VERIFICATION':
        return <PartnerVerification onNavigate={setCurrentView} />;
      case 'PARTNER_RESET_PASSWORD':
        return <PartnerResetPassword onNavigate={setCurrentView} />;
      default:
        return <RoleSelection onNavigate={setCurrentView} onClose={onClose} mode="LOGIN" />;
    }
  };

  return (
    <div className="auth-modal-overlay d-flex align-items-center justify-content-center" onClick={onClose}>
      <div className={`auth-modal-container position-relative ${(currentView !== 'ROLE_SELECTION' && currentView !== 'ROLE_SELECTION_SIGNUP') ? 'auth-modal-narrow' : ''}`} onClick={handleModalClick}>
        <button className="auth-modal-close" onClick={onClose} aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {renderView()}
      </div>
    </div>
  );
};

export default AuthModal;
