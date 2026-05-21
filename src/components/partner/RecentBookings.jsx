import React from "react";
import { useNavigate } from "react-router-dom";

const RecentBookings = () => {
  const navigate = useNavigate();
  const bookingsData = [
    {
      id: 1,
      service: "Signature Massage",
      client: "John doe",
      price: "999",
      status: "confirmed",
    },
    {
      id: 2,
      service: "Deep Tissue",
      client: "Amy Joe",
      price: "1,499",
      status: "confirmed",
    },
    {
      id: 3,
      service: "Hot Stone",
      client: "Sam Smith",
      price: "1,499",
      status: "cancelled",
    },
    {
      id: 4,
      service: "Aromatherapy",
      client: "John doe",
      price: "499",
      status: "confirmed",
    },
  ];

  return (
    <div className="bookings-card">
      <div className="bookings-header">
        <div className="bookings-title-group">
          <h2 className="bookings-title">Recent Bookings</h2>
        </div>
        <div onClick={() => navigate("/partner/booking")} className="bookings-view-all">
          View all
        </div>
      </div>

      <ul className="booking-list">
        {bookingsData.map((booking) => (
          <li key={booking.id} className="booking-item">
            <div className="booking-details">
              <span className="booking-service">{booking.service}</span>
              <span className="booking-client">{booking.client}</span>
            </div>
            <div className="booking-meta">
              <span className="booking-price">{booking.price}₹</span>
              <span className={`status-badge ${booking.status}`}>
                {booking.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBookings;
