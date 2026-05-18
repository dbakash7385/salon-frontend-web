import React, { useState, useRef } from "react";
import {
  X,
  MapPin,
  Star,
  Clock,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Phone,
  CreditCard,
  Wallet,
  Plus,
} from "lucide-react";

const ServiceBookingModal = ({
  isOpen,
  onClose,
  service,
  onBookingSuccess,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("Mon 13");
  const [selectedTime, setSelectedTime] = useState(null);

  // Step 2 Form States
  const [fullName, setFullName] = useState("John");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [notes, setNotes] = useState("");

  // Step 3 Payment States
  const [selectedPayment, setSelectedPayment] = useState("upi");
  const [payPartial, setPayPartial] = useState(false);

  const dateScrollRef = useRef(null);

  if (!isOpen || !service) return null;

  const {
    image,
    category,
    title,
    salon,
    location,
    rating,
    reviewCount,
    duration,
    price,
    description,
  } = service;

  // Static inclusions
  const inclusions = [
    "Consultation included",
    "Premium products",
    "Expert stylist",
    "Wash & blow dry",
  ];

  // Dynamic Date Cards
  const dates = [
    { day: "Mon", date: "13", label: "Today", value: "Mon 13" },
    { day: "Tue", date: "14", label: null, value: "Tue 14" },
    { day: "Wed", date: "15", label: null, value: "Wed 15" },
    { day: "Thu", date: "16", label: null, value: "Thu 16" },
    { day: "Fri", date: "17", label: null, value: "Fri 17" },
    { day: "Sat", date: "18", label: null, value: "Sat 18" },
    { day: "Sun", date: "19", label: null, value: "Sun 19" },
  ];

  // Mock time slots with disabled ones matching screenshot
  const timeSlots = [
    { time: "09:00", available: false },
    { time: "09:30", available: true },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "12:00", available: false },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
    { time: "15:00", available: true },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: false },
    { time: "17:30", available: true },
    { time: "18:00", available: true },
    { time: "18:30", available: true },
  ];

  const handleScrollLeft = () => {
    if (dateScrollRef.current) {
      dateScrollRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (dateScrollRef.current) {
      dateScrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1 && (!selectedDate || !selectedTime)) return;
    if (currentStep === 2 && (!fullName || !email || !phone)) return;

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      setCurrentStep(4); // Trigger Confirmation Success screen
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCloseSuccess = () => {
    setCurrentStep(1);
    setSelectedTime(null);
    if (onBookingSuccess) {
      onBookingSuccess({
        ...service,
        selectedDate,
        selectedTime,
        fullName,
        email,
        phone,
        notes,
        paymentMethod: selectedPayment,
      });
    }
    onClose();
  };

  return (
    <div className="common-confirm-overlay d-flex align-items-center justify-content-center">
      {currentStep === 4 ? (
        /* Step 4: Success State Overlay */
        <div className="common-confirm-container success-state text-center position-relative p-5">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="common-confirm-success-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M33.3327 10L14.9993 28.3333L6.66602 20"
                  stroke="#00C950"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="common-confirm-success-title text-white">
              Booking Confirmed!
            </h3>
            <p className="common-confirm-success-subtitle mb-4">
              Your appointment has been successfully scheduled.
            </p>

            {/* Receipt Summary Box */}
            <div className="resched-success-details-box w-100 mb-4 text-start">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white-50 text-14-400">Service:</span>
                <span className="text-white text-14-500">{title}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white-50 text-14-400">Salon:</span>
                <span className="text-white text-14-500">{salon}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white-50 text-14-400">Date:</span>
                <span className="text-peach text-14-500">
                  {selectedDate}, 2026
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white-50 text-14-400">Time Slot:</span>
                <span className="text-peach text-14-500">{selectedTime}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-white-50 text-14-400">Client Name:</span>
                <span className="text-white text-14-500">{fullName}</span>
              </div>
            </div>

            <button
              onClick={handleCloseSuccess}
              className="common-confirm-btn-confirm peach w-100 py-3 rounded-3"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        /* Steps 1, 2, and 3: Stepper Wrapper Content */
        <div
          className="common-confirm-container position-relative overflow-y-auto"
          style={{ maxHeight: "88vh", maxWidth: "680px", borderRadius: "24px" }}
        >
          {/* Top Close Button */}
          <button onClick={onClose} className="common-confirm-close-btn">
            <X size={20} />
          </button>

          {/* Banner Image with Availability Badge (Only on Step 1) */}
          {currentStep === 1 && (
            <div
              className="position-relative w-100"
              style={{ height: "300px" }}
            >
              <img
                src={image}
                alt={title}
                className="w-100 h-100 object-fit-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              <div className="position-absolute bottom-0 start-0 w-100 h-50 bg-gradient-to-t" />

              {/* Glass Badge Availability */}
              <div className="position-absolute top-0 start-0 m-4">
                <span className="badge-availables px-3 py-2 text-13-500 rounded-pill d-flex align-items-center gap-2">
                  <span className="dot-greens"></span>
                  <span>Available Now</span>
                </span>
              </div>
            </div>
          )}

          {/* Main Modal Body */}
          <div className="p-4 p-md-5">
            {/* Stepper Header (Only shown on Steps 2 and 3) */}
            {currentStep > 1 && (
              <div className="stepper-header mb-5 border-bottom-white-10 pb-4">
                <h3 className="text-white font-semibold text-26-600 mb-1">
                  Book Appointment
                </h3>
                <p className="text-white-50 text-14-400 mb-4">
                  {title} - ${price}
                </p>

                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 stepper-steps-wrapper">
                  {/* Step 1 */}
                  <div className="d-flex align-items-center gap-2 step-item">
                    <div
                      className={`step-circle ${currentStep >= 1 ? (currentStep > 1 ? "completed" : "active") : ""}`}
                    >
                      {currentStep > 1 ? (
                        <Check size={14} strokeWidth={3} />
                      ) : (
                        "1"
                      )}
                    </div>
                    <span
                      className={`step-label ${currentStep >= 1 ? "active" : ""}`}
                    >
                      Date & Time
                    </span>
                  </div>
                  <div
                    className={`step-line ${currentStep >= 2 ? "active" : ""}`}
                  />

                  {/* Step 2 */}
                  <div className="d-flex align-items-center gap-2 step-item">
                    <div
                      className={`step-circle ${currentStep >= 2 ? (currentStep > 2 ? "completed" : "active") : ""}`}
                    >
                      {currentStep > 2 ? (
                        <Check size={14} strokeWidth={3} />
                      ) : (
                        "2"
                      )}
                    </div>
                    <span
                      className={`step-label ${currentStep >= 2 ? "active" : ""}`}
                    >
                      Your Details
                    </span>
                  </div>
                  <div
                    className={`step-line ${currentStep >= 3 ? "active" : ""}`}
                  />

                  {/* Step 3 */}
                  <div className="d-flex align-items-center gap-2 step-item">
                    <div
                      className={`step-circle ${currentStep >= 3 ? (currentStep > 3 ? "completed" : "active") : ""}`}
                    >
                      {currentStep > 3 ? (
                        <Check size={14} strokeWidth={3} />
                      ) : (
                        "3"
                      )}
                    </div>
                    <span
                      className={`step-label ${currentStep >= 3 ? "active" : ""}`}
                    >
                      Payment
                    </span>
                  </div>
                  <div
                    className={`step-line ${currentStep >= 4 ? "active" : ""}`}
                  />

                  {/* Step 4 */}
                  <div className="d-flex align-items-center gap-2 step-item">
                    <div
                      className={`step-circle ${currentStep >= 4 ? "active" : ""}`}
                    >
                      4
                    </div>
                    <span
                      className={`step-label ${currentStep >= 4 ? "active" : ""}`}
                    >
                      Confirmation
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1 VIEW */}
            {currentStep === 1 && (
              <div>
                {/* Tags & Title */}
                <span className="category-badge mb-3 d-inline-block">
                  {category}
                </span>
                <h2 className="text-white text-32-600 mb-3">{title}</h2>

                {/* Quick Metadata */}
                <div className="d-flex flex-wrap align-items-center gap-4 text-white-600 text-14-400 mb-2">
                  <span className="d-flex align-items-center gap-1">
                    <MapPin size={16} className="text-white-50" />
                    {salon}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <Star size={16} fill="#ffb298" className="text-peach" />
                    {rating} ({reviewCount} reviews)
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <Clock size={16} className="text-white-50" />
                    {duration} minutes
                  </span>
                </div>
                <p className="text-white-50 text-14-400 mb-4">{location}</p>

                {/* About Section */}
                <h4 className="text-white text-18-500 mb-2">
                  About This Service
                </h4>
                <p className="text-white-600 text-14-400 mb-4">
                  {description || "No description provided."}
                </p>

                {/* Inclusions Section */}
                <h4 className="text-white text-18-500 mb-3">What's Included</h4>
                <div className="row g-3 mb-4">
                  {inclusions.map((inc, i) => (
                    <div key={i} className="col-12 col-md-6">
                      <div className="srv-inclusion-card d-flex align-items-center gap-3 p-3 rounded-3 border-1-white-10">
                        <div className="srv-inclusion-check d-flex align-items-center justify-content-center">
                          <Check size={14} className="text-peach" />
                        </div>
                        <span className="text-white text-14-400">{inc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Details Box */}
                <div className="srv-price-breakdown-box p-4 rounded-4 border-1-white-10 mb-5 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-white-50 text-13-400 mb-1">
                      Service Price
                    </p>
                    <h2 className="text-peach text-36-600 mb-1">${price}</h2>
                    <p className="text-white-50 text-12-400 mb-0">
                      {duration} minutes session
                    </p>
                  </div>
                  <div className="text-end">
                    <p className="text-white-50 text-13-400 mb-1">
                      Quick Stats
                    </p>
                    <p className="text-white text-14-500 mb-1">
                      {reviewCount} reviews
                    </p>
                    <p className="text-peach text-14-500 mb-0">
                      ★ {rating} rating
                    </p>
                  </div>
                </div>

                {/* Available Slots Title */}
                <div className="mb-4">
                  <h2 className="text-white text-28-500 m-0">
                    Available <span className="text-peach">Slots</span>
                  </h2>
                </div>

                {/* Select Date Section */}
                <h4 className="text-white text-18-500 mb-3">
                  Select Date & Time
                </h4>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p
                    className="text-white-600 text-14-500 m-0"
                    style={{ color: "#fff" }}
                  >
                    Choose a Date
                  </p>
                  <div className="d-flex gap-2">
                    <button
                      onClick={handleScrollLeft}
                      className="srv-date-nav-btn d-flex align-items-center justify-content-center transition-300"
                      type="button"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleScrollRight}
                      className="srv-date-nav-btn d-flex align-items-center justify-content-center transition-300"
                      type="button"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Dates List */}
                <div
                  ref={dateScrollRef}
                  className="d-flex align-items-center gap-3 mb-5 position-relative overflow-x-auto pb-2 srv-date-slider-container"
                >
                  {dates.map((d, index) => {
                    const isActive = selectedDate === d.value;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(d.value)}
                        className={`srv-date-pill-btn d-flex flex-column align-items-center justify-content-center transition-300 ${isActive ? "active" : ""}`}
                      >
                        <span className="day text-13-400 mb-1">{d.day}</span>
                        <span className="date text-20-500 mb-1">{d.date}</span>
                        {d.label && (
                          <span className="lbl text-10-600">{d.label}</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Available Time Slots Section */}
                <h4
                  className="text-white-600 text-15-500 mb-3"
                  style={{ color: "#fff" }}
                >
                  Available Time Slots
                </h4>
                <div className="srv-times-grid mb-5">
                  {timeSlots.map((slot, index) => {
                    const isSelected = selectedTime === slot.time;
                    return (
                      <button
                        key={index}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`srv-time-slot-btn d-flex align-items-center justify-content-center gap-2 transition-300 ${
                          !slot.available
                            ? "disabled"
                            : isSelected
                              ? "selected"
                              : ""
                        }`}
                      >
                        <Clock size={12} />
                        <span>{slot.time}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Footer Controls */}
                <div className="d-flex gap-3 pt-3 border-top-white-10">
                  <button
                    onClick={onClose}
                    className="common-confirm-btn-cancel w-50 py-3 d-flex align-items-center justify-content-center text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className={`resched-btn-confirm w-50 py-3 d-flex align-items-center justify-content-center ${
                      selectedDate && selectedTime ? "enabled" : "disabled"
                    }`}
                  >
                    Book
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 VIEW: YOUR DETAILS */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-white font-semibold text-24-500 mb-4">
                  Your Details
                </h3>

                {/* Full Name */}
                <div className="mb-4">
                  <label
                    className="text-white text-14-400 mb-2 d-flex align-items-center gap-1"
                    style={{ opacity: 0.9 }}
                  >
                    <User size={16} className="text-white-50" />
                    <span>Full Name *</span>
                  </label>
                  <div className="stepper-input-wrapper">
                    <input
                      type="text"
                      className="stepper-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John"
                      required
                    />
                    <User size={16} className="stepper-input-icon" />
                  </div>
                </div>

                {/* Email Address */}
                <div className="mb-4">
                  <label
                    className="text-white text-14-400 mb-2 d-flex align-items-center gap-1"
                    style={{ opacity: 0.9 }}
                  >
                    <Mail size={16} className="text-white-50" />
                    <span>Email Address *</span>
                  </label>
                  <div className="stepper-input-wrapper">
                    <input
                      type="email"
                      className="stepper-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johndoe@example.com"
                      required
                    />
                    <Mail size={16} className="stepper-input-icon" />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    className="text-white text-14-400 mb-2 d-flex align-items-center gap-1"
                    style={{ opacity: 0.9 }}
                  >
                    <Phone size={16} className="text-white-50" />
                    <span>Phone Number *</span>
                  </label>
                  <div className="stepper-input-wrapper">
                    <input
                      type="tel"
                      className="stepper-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                    <Phone size={16} className="stepper-input-icon" />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mb-5">
                  <label
                    className="text-white text-14-400 mb-2 d-block"
                    style={{ opacity: 0.9 }}
                  >
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    className="stepper-textarea"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any special requests or preferences..."
                  />
                </div>

                {/* Footer Controls */}
                <div className="d-flex gap-3 pt-3 border-top-white-10">
                  <button
                    onClick={handleBackStep}
                    className="common-confirm-btn-cancel w-50 py-3 d-flex align-items-center justify-content-center text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!fullName || !email || !phone}
                    className={`resched-btn-confirm w-50 py-3 d-flex align-items-center justify-content-center ${
                      fullName && email && phone ? "enabled" : "disabled"
                    }`}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 VIEW: PAYMENT */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-white font-semibold text-24-500 mb-4">
                  Payment
                </h3>

                {/* UPI Option */}
                <div
                  onClick={() => setSelectedPayment("upi")}
                  className={`payment-option-card d-flex align-items-center justify-content-between ${selectedPayment === "upi" ? "selected" : ""}`}
                >
                  <div className="d-flex align-items-center gap-3">
                    <CreditCard size={20} className="text-white-50" />
                    <div>
                      <h5 className="text-white text-15-500 m-0">UPI</h5>
                      <span className="text-white-50 text-12-400">
                        •••• 4242
                      </span>
                    </div>
                  </div>
                  <div className="payment-option-radio">
                    <div className="payment-option-radio-dot" />
                  </div>
                </div>

                {/* Card Option */}
                <div
                  onClick={() => setSelectedPayment("card")}
                  className={`payment-option-card d-flex align-items-center justify-content-between ${selectedPayment === "card" ? "selected" : ""}`}
                >
                  <div className="d-flex align-items-center gap-3">
                    <CreditCard size={20} className="text-white-50" />
                    <div>
                      <h5 className="text-white text-15-500 m-0">Card</h5>
                      <span className="text-white-50 text-12-400">
                        •••• 1004
                      </span>
                    </div>
                  </div>
                  <div className="payment-option-radio">
                    <div className="payment-option-radio-dot" />
                  </div>
                </div>

                {/* Wallet Option */}
                <div
                  onClick={() => setSelectedPayment("wallet")}
                  className={`payment-option-card d-flex align-items-center justify-content-between ${selectedPayment === "wallet" ? "selected" : ""}`}
                >
                  <div className="d-flex align-items-center gap-3">
                    <Wallet size={20} className="text-white-50" />
                    <div>
                      <h5 className="text-white text-15-500 m-0">Wallet</h5>
                    </div>
                  </div>
                  <div className="payment-option-radio">
                    <div className="payment-option-radio-dot" />
                  </div>
                </div>

                {/* Add New Card Button */}
                <button className="btn d-flex align-items-center gap-2 p-0 text-peach text-14-600 mb-5 bg-transparent border-0 mt-3 hover:opacity-80">
                  <Plus size={16} />
                  <span>ADD NEW CARD</span>
                </button>

                {/* Pay Partial Section */}
                <h4 className="text-white text-16-500 mb-3">
                  Pay Partial Amount
                </h4>
                <div
                  onClick={() => setPayPartial(!payPartial)}
                  className={`payment-option-card d-flex align-items-center justify-content-between ${payPartial ? "selected" : ""}`}
                  style={{ marginBottom: "40px" }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-white text-18-600 font-semibold">
                      ₹145
                    </span>
                  </div>
                  <div className="payment-option-radio">
                    <div className="payment-option-radio-dot" />
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="d-flex gap-3 pt-3 border-top-white-10">
                  <button
                    onClick={handleBackStep}
                    className="common-confirm-btn-cancel w-50 py-3 d-flex align-items-center justify-content-center text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="resched-btn-confirm w-50 py-3 d-flex align-items-center justify-content-center enabled"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBookingModal;
