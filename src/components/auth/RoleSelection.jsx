import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = ({ onNavigate, onClose, mode = "LOGIN" }) => {
  const navigate = useNavigate();
  return (
    <div className="role-selection-view">
      <div className="text-center mb-5">
        <h2 className="auth-title">
          Join <span className="text-peach">Stryn</span>
        </h2>
        <p className="text-20-400">Choose how you want to use our platform</p>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-12 col-md-6">
          <div className="role-card">
            <div className="role-icon-wrapper mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.3227 27.988V25.3225C25.3227 23.9086 24.761 22.5526 23.7612 21.5529C22.7615 20.5531 21.4055 19.9915 19.9916 19.9915H11.9951C10.5812 19.9915 9.22525 20.5531 8.22548 21.5529C7.22572 22.5526 6.66406 23.9086 6.66406 25.3225V27.988"
                  stroke="#FFB298"
                  stroke-width="2.66551"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9931 14.6603C18.9374 14.6603 21.3242 12.2736 21.3242 9.32932C21.3242 6.38507 18.9374 3.99829 15.9931 3.99829C13.0489 3.99829 10.6621 6.38507 10.6621 9.32932C10.6621 12.2736 13.0489 14.6603 15.9931 14.6603Z"
                  stroke="#FFB298"
                  stroke-width="2.66551"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="role-title mb-3">I'm a Customer</h3>
            <p className="role-desc mb-4">
              Book appointments, discover services, and manage your beauty &
              wellness routine
            </p>
            <ul className="role-features list-unstyled mb-4">
              <li>
                <CheckIcon /> Browse & book services
              </li>
              <li>
                <CheckIcon /> Manage appointments
              </li>
              <li>
                <CheckIcon /> Save favorite salons
              </li>
              <li>
                <CheckIcon /> Get exclusive deals
              </li>
            </ul>
            <button
              className="btn-peach w-100"
              onClick={() => onNavigate(mode === "SIGNUP" ? "CUSTOMER_SIGNUP" : "CUSTOMER_LOGIN")}
            >
              Continue as Customer
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="role-card">
            <div className="role-icon-wrapper mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10.6634 29.3242H21.3267C26.685 29.3242 27.6447 27.1782 27.9247 24.5657L28.9243 13.9024C29.2842 10.6501 28.3512 7.99756 22.6596 7.99756H9.33047C3.63892 7.99756 2.70588 10.6501 3.06576 13.9024L4.06545 24.5657C4.34536 27.1782 5.30506 29.3242 10.6634 29.3242Z"
                  stroke="#FFB298"
                  stroke-width="2.67"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6641 7.99744V6.9311C10.6641 4.57184 10.6641 2.66577 14.9294 2.66577H17.0621C21.3274 2.66577 21.3274 4.57184 21.3274 6.9311V7.99744"
                  stroke="#FFB298"
                  stroke-width="2.67"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.6617 17.328V18.661C18.6617 18.6743 18.6617 18.6743 18.6617 18.6876C18.6617 20.1405 18.6484 21.3268 15.9959 21.3268C13.3567 21.3268 13.3301 20.1538 13.3301 18.7009V17.328C13.3301 15.9951 13.3301 15.9951 14.663 15.9951H17.3288C18.6617 15.9951 18.6617 15.9951 18.6617 17.328Z"
                  stroke="#FFB298"
                  stroke-width="2.67"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.857 14.6621C25.7779 16.9014 22.259 18.2343 18.6602 18.6875"
                  stroke="#FFB298"
                  stroke-width="2.67"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49219 15.022C6.49125 17.0747 9.87686 18.3143 13.3291 18.7008"
                  stroke="#FFB298"
                  stroke-width="2.67"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="role-title mb-3">Become a Partner</h3>
            <p className="role-desc mb-4">
              Manage your salon, accept bookings, and grow your beauty business
              routine
            </p>
            <ul className="role-features list-unstyled mb-4">
              <li>
                <CheckIcon /> Manage bookings & staff
              </li>
              <li>
                <CheckIcon /> Accept online payments
              </li>
              <li>
                <CheckIcon /> Analytics & insights
              </li>
              <li>
                <CheckIcon /> Grow your customer base
              </li>
            </ul>
            <button
              className="btn-peach w-100"
              onClick={() => {
                if (mode === "SIGNUP") {
                  if (onClose) onClose();
                  navigate("/partner-signup");
                } else {
                  onNavigate("PARTNER_LOGIN");
                }
              }}
            >
              Continue as Partner
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="auth-footer-text">
          You can always change this later in your account settings
        </p>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFB298"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="me-2 flex-shrink-0"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default RoleSelection;
