import React, { useState } from "react";
import { Bell, X, Calendar, Clock } from "lucide-react";

// Import existing assets for high-fidelity demonstration
import spaImg from "../../assets/images/png/spa-service.jpg";
import barberImg from "../../assets/images/png/barber-service.jpg";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const [selectedNotif, setSelectedNotif] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock notifications matching the screenshots
  const notificationsData = {
    today: [
      {
        id: 1,
        title: "Jonny Smith booked a spa appointment",
        serviceName: "Deep Tissue Massage",
        type: "booking",
        timeLabel: "14:00 PM",
        dateLabel: "Oct 24, 2023",
        duration: "90 min",
        assignedTo: {
          name: "Aaron Rayan",
          role: "Senior Therapist",
          initials: "AR"
        },
        payment: {
          price: "1000.00",
          taxes: "200.00",
          total: "1200"
        },
        image: spaImg
      },
      {
        id: 2,
        title: "Kathy Lee booked a spa appointment",
        serviceName: "Hair Cutting",
        type: "booking",
        timeLabel: "11:30 AM",
        dateLabel: "Oct 24, 2023",
        duration: "45 min",
        assignedTo: {
          name: "Sarah Conner",
          role: "Hair Stylist",
          initials: "SC"
        },
        payment: {
          price: "600.00",
          taxes: "120.00",
          total: "720"
        },
        image: barberImg
      }
    ],
    yesterday: [
      {
        id: 3,
        title: "Ian Smith booked a spa appointment",
        serviceName: "Hair Cutting",
        type: "booking",
        timeLabel: "16:00 PM",
        dateLabel: "Oct 23, 2023",
        duration: "45 min",
        assignedTo: {
          name: "Sarah Conner",
          role: "Hair Stylist",
          initials: "SC"
        },
        payment: {
          price: "600.00",
          taxes: "120.00",
          total: "720"
        },
        image: barberImg
      },
      {
        id: 4,
        title: "Liya Ave cancelled her appointment",
        serviceName: "Deep Tissue Massage",
        type: "cancellation",
        timeLabel: "09:00 AM",
        dateLabel: "Oct 23, 2023",
        duration: "90 min",
        assignedTo: {
          name: "Aaron Rayan",
          role: "Senior Therapist",
          initials: "AR"
        },
        payment: {
          price: "1000.00",
          taxes: "200.00",
          total: "1200"
        },
        image: spaImg
      }
    ]
  };

  const handleOpenDetails = (notif) => {
    setSelectedNotif(notif);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedNotif(null);
  };

  return (
    <div className="notifications-view-container">
      {/* Page Header */}
      <div className="notifications-page-header">
        <h2 className="notifications-page-title">Notifications</h2>
        <p className="notifications-page-subtitle">Check out your notifications here</p>
      </div>

      {/* Today Section */}
      <div className="notifications-section">
        <h3 className="notifications-section-title">Today</h3>
        <div className="notifications-list">
          {notificationsData.today.map((notif) => (
            <div key={notif.id} className="notification-card">
              <div className="notification-card-left">
                <div className="notification-icon-wrapper booking">
                  <Bell size={18} />
                </div>
                <div className="notification-content-info">
                  <h4 className="notification-msg">{notif.title}</h4>
                  <p className="notification-meta">{notif.serviceName}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-view-details"
                onClick={() => handleOpenDetails(notif)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Yesterday Section */}
      <div className="notifications-section" style={{ marginTop: "32px" }}>
        <h3 className="notifications-section-title">Yesterday</h3>
        <div className="notifications-list">
          {notificationsData.yesterday.map((notif) => (
            <div key={notif.id} className="notification-card">
              <div className="notification-card-left">
                <div className={`notification-icon-wrapper ${notif.type}`}>
                  {notif.type === "booking" ? <Bell size={18} /> : <X size={18} />}
                </div>
                <div className="notification-content-info">
                  <h4 className="notification-msg">{notif.title}</h4>
                  <p className="notification-meta">{notif.serviceName}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-view-details"
                onClick={() => handleOpenDetails(notif)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Details Modal */}
      {showModal && selectedNotif && (
        <div className="success-modal-backdrop" onClick={handleCloseModal}>
          <div
            className="success-modal-container notif-details-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "420px", padding: "28px", position: "relative" }}
          >
            {/* Modal Close Button */}
            <button className="notif-modal-close" onClick={handleCloseModal}>
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="notif-modal-header" style={{ marginBottom: "16px", textAlign: "left", width: "100%" }}>
              <h3 className="success-modal-title" style={{ fontSize: "20px", fontWeight: "600", color: "#ffffff", marginBottom: "4px" }}>
                View Details
              </h3>
              <p className="success-modal-msg" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.45)", margin: 0 }}>
                Booking details
              </p>
            </div>

            <div className="notif-modal-divider" style={{ margin: "0 0 20px 0" }}></div>

            {/* Scrollable Content Container */}
            <div className="notif-modal-content">
              {/* Service Summary Card */}
              <div className="notif-service-summary-card">
                <img
                  src={selectedNotif.image}
                  alt={selectedNotif.serviceName}
                  className="notif-service-img"
                />
                <div className="notif-service-details">
                  <h4 className="notif-service-title">
                    {selectedNotif.serviceName === "Deep Tissue Massage" ? "Deep Tissue Recovery" : "Hair Cutting & Styling"}
                  </h4>
                  <div className="notif-service-badges">
                    <span className="notif-badge">
                      <Calendar size={11} />
                      <span>{selectedNotif.dateLabel}</span>
                    </span>
                    <span className="notif-badge">
                      <Clock size={11} />
                      <span>{selectedNotif.timeLabel}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Assigned Therapist */}
              <div className="notif-details-section" style={{ marginBottom: "16px" }}>
                <h5 className="notif-details-section-label">Assigned to</h5>
                <div className="notif-therapist-row">
                  <div className="notif-therapist-profile">
                    <div className="notif-therapist-avatar">
                      {selectedNotif.assignedTo.initials}
                    </div>
                    <div>
                      <h6 className="notif-therapist-name">{selectedNotif.assignedTo.name}</h6>
                      <p className="notif-therapist-role">{selectedNotif.assignedTo.role}</p>
                    </div>
                  </div>
                  <button type="button" className="btn-notif-reassign">Reassign</button>
                </div>
              </div>

              <div className="notif-modal-divider" style={{ margin: "0 0 20px 0" }}></div>

              {/* Payment Details */}
              <div className="notif-details-section" style={{ marginBottom: "16px" }}>
                <h5 className="notif-details-section-label">Payment Details</h5>
                <div className="notif-payment-rows">
                  <div className="notif-payment-row">
                    <span>{selectedNotif.serviceName === "Deep Tissue Massage" ? "Deep Tissue Recovery" : "Hair Cutting"} ({selectedNotif.duration})</span>
                    <span>₹{selectedNotif.payment.price}</span>
                  </div>
                  <div className="notif-payment-row">
                    <span>Taxes & Fees</span>
                    <span>₹{parseFloat(selectedNotif.payment.taxes)}</span>
                  </div>
                </div>
              </div>

              <div className="notif-modal-divider" style={{ margin: "0 0 24px 0" }}></div>

              {/* Total Row */}
              <div className="notif-total-row">
                <span>Total</span>
                <span className="notif-total-value">₹{selectedNotif.payment.total}</span>
              </div>
            </div>

            <div className="notif-modal-divider" style={{ margin: "0" }}></div>

            {/* Action Buttons */}
            <div className="notif-modal-actions" style={{ marginTop: "20px", justifyContent: "flex-end" }}>
              <button type="button" className="btn-notif-close" onClick={handleCloseModal}>
                Close
              </button>
              <button
                type="button"
                className="btn-notif-view-booking"
                onClick={() => {
                  navigate("/partner/booking");
                  handleCloseModal();
                }}
              >
                View Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
