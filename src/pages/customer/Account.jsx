import React, { useState } from "react";
import CustomerNavbar from "../../components/customer/CustomerNavbar";
import Footer from "../../components/Footer";
import {
  Calendar,
  Clock,
  MapPin,
  Eye,
  SquarePen,
  XCircle,
  Download,
  User,
  CheckCircle2,
} from "lucide-react";

// Reuse images from Home
import hairImg from "../../assets/images/png/reveue-mens.jpg";
import massageImg from "../../assets/images/png/message-img.jpg";

const BookingCard = ({
  image,
  title,
  salon,
  location,
  date,
  time,
  duration,
  price,
  status,
  isHistory = false,
}) => {
  const isCancelled = status === "Cancelled";
  const isCompleted = status === "Completed";

  return (
    <div
      className={`acc-booking-card mb-4 border-1-white-10 rounded-4 overflow-hidden bg-dark-card transition-300 ${isHistory ? "history-mode" : ""}`}
    >
      <div className="row g-0">
        {/* Image Section */}
        <div className="col-md-4 col-lg-3">
          <div className="acc-card-img-wrapper h-100 position-relative">
            <img
              src={image}
              alt={title}
              className={`w-100 h-100 object-fit-cover ${isHistory ? "opacity-50 grayscale" : ""}`}
            />
            {isHistory && (
              <div className="position-absolute top-50 start-50 translate-middle">
                <span className={`acc-status-badge ${status.toLowerCase()}`}>
                  {status}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="col-md-8 col-lg-9 p-4 d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div className="text-24-500 mb-0">{title}</div>
              {!isHistory && (
                <span className={`acc-status-badge ${status.toLowerCase()}`}>
                  {status}
                </span>
              )}
            </div>
            <p className=" text-16-400 mb-2">{salon}</p>
            <div className="d-flex align-items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_835_12633)">
                  <path
                    d="M11.6511 5.82554C11.6511 8.73427 8.42427 11.7636 7.3407 12.6992C7.23975 12.7751 7.11688 12.8161 6.99058 12.8161C6.86428 12.8161 6.7414 12.7751 6.64046 12.6992C5.55689 11.7636 2.33008 8.73427 2.33008 5.82554C2.33008 4.5895 2.82109 3.40408 3.69511 2.53007C4.56912 1.65605 5.75454 1.16504 6.99058 1.16504C8.22662 1.16504 9.41204 1.65605 10.2861 2.53007C11.1601 3.40408 11.6511 4.5895 11.6511 5.82554Z"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="1.16513"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.99085 7.57326C7.95607 7.57326 8.73854 6.79079 8.73854 5.82557C8.73854 4.86035 7.95607 4.07788 6.99085 4.07788C6.02563 4.07788 5.24316 4.86035 5.24316 5.82557C5.24316 6.79079 6.02563 7.57326 6.99085 7.57326Z"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="1.16513"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_835_12633">
                    <rect width="13.9815" height="13.9815" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              <span className="text-14-400 ">{location}</span>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-auto">
                <div className="d-flex align-items-start gap-2">
                  <Calendar size={18} className="text-peach" />
                  <div>
                    <div className="text-12-400 mb-0 text-start ">Date</div>
                    <div className="text-white text-14-500 mb-0">{date}</div>
                  </div>
                </div>
              </div>
              <div className="col-auto ms-lg-5">
                <div className="d-flex align-items-start gap-2">
                  <Clock size={18} className="text-peach" />
                  <div>
                    <div className="text-12-400 mb-0 text-start ">Time</div>
                    <div className="text-white text-14-500 mb-0">
                      {time} ({duration})
                    </div>
                  </div>
                </div>
              </div>
              <div className="col text-end d-none d-lg-block">
                <p className="text-14-400 mb-0 ">
                  Total{" "}
                  <span
                    className="text-20-400 ms-2"
                    style={{ color: "#FFB298" }}
                  >
                    ${price}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="acc-card-footer pt-3 d-flex flex-wrap gap-2 border-top-white-10">
            <button className="acc-action-btn outline d-flex align-items-center gap-2">
              <Eye size={16} />
              <span>View Details</span>
            </button>

            {!isHistory ? (
              <>
                <button className="acc-action-btn reschedule d-flex align-items-center gap-2">
                  <SquarePen color="#ffb298" size={16} />
                  <span>Reschedule</span>
                </button>
                <button className="acc-action-btn cancel d-flex align-items-center gap-2">
                  <XCircle color="#ff5e5e" size={16} />
                  <span style={{ color: "#ff5e5e" }}>Cancel</span>
                </button>
              </>
            ) : null}

            <button className="acc-action-btn outline d-flex align-items-center gap-2">
              <Download size={16} />
              <span>Receipt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileView = () => {
  return (
    <div className="prof-info-card">
      <h2 className="prof-section-title">Profile Information</h2>
      
      <div className="prof-input-wrapper">
        <label className="prof-label">Account Type</label>
        <div className="prof-readonly-field">
          <span>Customer Account</span>
          <span className="prof-badge-pill">Customer</span>
        </div>
      </div>

      <div className="prof-input-wrapper">
        <label className="prof-label">Full Name</label>
        <div className="prof-readonly-field">
          <span>John Doe</span>
        </div>
      </div>

      <div className="prof-input-wrapper">
        <label className="prof-label">Email Address</label>
        <div className="prof-readonly-field">
          <span>johndoe@example.com</span>
        </div>
      </div>

      <p className="prof-footer-note">
        Want to update your profile? Contact support at <span style={{color: 'rgba(255,255,255,0.6)'}}>support@glowbook.com</span>
      </p>
    </div>
  );
};

const CustomerAccount = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  const bookings = [
    {
      image: hairImg,
      title: "Luxury Haircut & Styling",
      salon: "Elite Hair Studio",
      location: "Downtown, NYC",
      date: "Wed, Apr 15, 2026",
      time: "16:00",
      duration: "60 min",
      price: 85,
      status: "Upcoming",
    },
    {
      image: massageImg,
      title: "Deep Tissue Massage",
      salon: "Serenity Spa & Wellness",
      location: "Midtown, NYC",
      date: "Sat, Apr 18, 2026",
      time: "10:30",
      duration: "90 min",
      price: 120,
      status: "Upcoming",
    },
  ];

  const history = [
    {
      image: hairImg,
      title: "Luxury Haircut & Styling",
      salon: "Elite Hair Studio",
      location: "Downtown, NYC",
      date: "Wed, Apr 15, 2026",
      time: "16:00",
      duration: "60 min",
      price: 85,
      status: "Cancelled",
    },
    {
      image: massageImg,
      title: "Deep Tissue Massage",
      salon: "Serenity Spa & Wellness",
      location: "Midtown, NYC",
      date: "Mon, Mar 10, 2026",
      time: "14:30",
      duration: "90 min",
      price: 120,
      status: "Completed",
    },
    {
      image: hairImg,
      title: "Beard Trim & Shape",
      salon: "Elite Hair Studio",
      location: "Downtown, NYC",
      date: "Fri, Feb 20, 2026",
      time: "11:00",
      duration: "30 min",
      price: 45,
      status: "Completed",
    },
  ];

  return (
    <div className="acc-page-wrapper bg-black-dark min-vh-100">
      <CustomerNavbar />

      <div className="container py-5">
        {/* Header */}
        <div className="acc-header mb-5">
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="text-white fs-1 fw-bold mb-0">
              My <span className="text-peach">Account</span>
            </div>
            <span className="acc-role-badge">Customer</span>
          </div>
          <div className="text-20-400 fs-5 mb-0 text-start ">
            Welcome back, John!
          </div>
        </div>

        {/* Tabs */}
        <div className="acc-tabs-wrapper d-flex gap-3 mb-5">
          <button
            className={`acc-tab-pill ${activeTab === "bookings" ? "active" : ""}`}
            onClick={() => setActiveTab("bookings")}
          >
            <Calendar size={18} className="me-2" />
            My Bookings
          </button>
          <button
            className={`acc-tab-pill ${activeTab === "history" ? "active" : ""}`}
            onClick={() => setActiveTab("history")}
          >
            <Clock size={18} className="me-2" />
            History
          </button>
          <button
            className={`acc-tab-pill ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <User size={18} className="me-2" />
            Profile
          </button>
        </div>

        {/* Content */}
        <div className="acc-content-section pb-5">
          {activeTab === "bookings" && (
            <div className="bookings-view">
              {bookings.map((booking, index) => (
                <BookingCard key={index} {...booking} />
              ))}
            </div>
          )}

          {activeTab === "history" && (
            <div className="history-view">
              {history.map((item, index) => (
                <BookingCard key={index} {...item} isHistory={true} />
              ))}
            </div>
          )}

          {activeTab === "profile" && <ProfileView />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerAccount;
