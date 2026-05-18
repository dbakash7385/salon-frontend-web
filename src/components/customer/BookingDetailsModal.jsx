import React from "react";
import { X, Calendar, Clock, User, Mail, Phone, Download } from "lucide-react";

const BookingDetailsModal = ({ isOpen, onClose, booking }) => {
  if (!isOpen || !booking) return null;

  const {
    image,
    title,
    salon,
    location,
    date,
    time,
    duration,
    price,
    status,
    bookingId = "1776147080523",
    bookedOn = "Apr 14, 2026, 11:41 AM",
    customerName = "John",
    customerPhone = "+919638527410",
    customerEmail = "johndoe@example.com",
    fullDate = "Wednesday, April 15, 2026",
  } = booking;

  // Handles backdrop clicks to close
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("details-modal-overlay")) {
      onClose();
    }
  };

  return (
    <div 
      className="details-modal-overlay d-flex align-items-center justify-content-center"
      onClick={handleBackdropClick}
    >
      <div className="details-modal-container animate-fade-in position-relative">
        
        {/* Close Button on top of Image Banner */}
        <button 
          className="details-modal-close-btn d-flex align-items-center justify-content-center"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} color="#ffffff" />
        </button>

        {/* Top Image & Badge */}
        <div className="details-modal-hero position-relative">
          <img 
            src={image} 
            alt={title} 
            className="w-100 object-fit-cover details-modal-hero-img" 
          />
          {/* Status Badge */}
          <span className={`details-modal-status-badge ${status.toLowerCase()}`}>
            {status}
          </span>
          {/* Subtle gradient overlay at the bottom of the image for premium feel */}
          <div className="details-modal-hero-overlay"></div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="details-modal-body p-4">
          
          {/* Header Info */}
          <div className="details-modal-header mb-4">
            <h2 className="details-modal-title text-white mb-1">{title}</h2>
            <div className="details-modal-subtitle text-16-400 mb-2">{salon}</div>
            <div className="d-flex align-items-center gap-2 details-modal-location text-14-400 opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_details_loc)">
                  <path
                    d="M11.6511 5.82554C11.6511 8.73427 8.42427 11.7636 7.3407 12.6992C7.23975 12.7751 7.11688 12.8161 6.99058 12.8161C6.86428 12.8161 6.7414 12.7751 6.64046 12.6992C5.55689 11.7636 2.33008 8.73427 2.33008 5.82554C2.33008 4.5895 2.82109 3.40408 3.69511 2.53007C4.56912 1.65605 5.75454 1.16504 6.99058 1.16504C8.22662 1.16504 9.41204 1.65605 10.2861 2.53007C11.1601 3.40408 11.6511 4.5895 11.6511 5.82554Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="1.16513"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.99085 7.57326C7.95607 7.57326 8.73854 6.79079 8.73854 5.82557C8.73854 4.86035 7.95607 4.07788 6.99085 4.07788C6.02563 4.07788 5.24316 4.86035 5.24316 5.82557C5.24316 6.79079 6.02563 7.57326 6.99085 7.57326Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="1.16513"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_details_loc">
                    <rect width="13.9815" height="13.9815" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>{location}</span>
            </div>
          </div>

          {/* Section: Appointment Details */}
          <div className="details-info-card p-3 mb-3">
            <h3 className="details-card-title mb-3">Appointment Details</h3>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="d-flex align-items-start gap-3">
                  <div className="details-icon-wrapper d-flex align-items-center justify-content-center">
                    <Calendar size={18} className="text-peach" />
                  </div>
                  <div>
                    <div className="details-label mb-0 text-start">Date</div>
                    <div className="details-value text-white mb-0">{fullDate}</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-start gap-3">
                  <div className="details-icon-wrapper d-flex align-items-center justify-content-center">
                    <Clock size={18} className="text-peach" />
                  </div>
                  <div>
                    <div className="details-label mb-0 text-start">Time & Duration</div>
                    <div className="details-value text-white mb-0">{time} ({duration === "60 min" ? "60 minutes" : duration === "90 min" ? "90 minutes" : duration})</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Customer Information */}
          <div className="details-info-card p-3 mb-3">
            <h3 className="details-card-title mb-3">Customer Information</h3>
            <div className="d-flex flex-column gap-3">
              {/* Name */}
              <div className="d-flex align-items-start gap-3">
                <div className="details-icon-wrapper d-flex align-items-center justify-content-center">
                  <User size={18} color="#fff"/>
                </div>
                <div>
                  <div className="details-label mb-0 text-start">Name</div>
                  <div className="details-value text-white mb-0">{customerName}</div>
                </div>
              </div>
              
              {/* Email */}
              <div className="d-flex align-items-start gap-3">
                <div className="details-icon-wrapper d-flex align-items-center justify-content-center">
                  <Mail size={18} color="#fff" />
                </div>
                <div>
                  <div className="details-label mb-0 text-start">Email Address</div>
                  <div className="details-value text-white mb-0">{customerEmail}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-start gap-3">
                <div className="details-icon-wrapper d-flex align-items-center justify-content-center">
                  <Phone size={18} color="#fff" />
                </div>
                <div>
                  <div className="details-label mb-0 text-start">Phone</div>
                  <div className="details-value text-white mb-0">{customerPhone}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Payment Summary */}
          <div className="details-info-card p-3 mb-4">
            <h3 className="details-card-title mb-3">Payment Summary</h3>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="details-label-summary">Service Fee</span>
              <span className="details-value-summary text-white">${price}</span>
            </div>
            <div className="details-summary-divider my-2"></div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span className="details-label-total">Total</span>
              <span className="details-value-total">${price}</span>
            </div>
          </div>

          {/* Meta text: Booking ID & Booked On */}
          <div className="details-meta-section text-center mb-4">
            <div className="details-meta-item">Booking ID: {bookingId}</div>
            <div className="details-meta-item">Booked on {bookedOn}</div>
          </div>

          {/* Action Buttons Footer */}
          <div className="details-modal-footer d-flex gap-3">
            <button 
              className="details-btn-close w-50 py-3 text-white"
              onClick={onClose}
            >
              Close
            </button>
            <button 
              className="details-btn-download w-50 py-3 d-flex align-items-center justify-content-center gap-2"
              onClick={() => alert("Downloading receipt...")}
            >
              <Download size={16} />
              <span>Download Receipt</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
