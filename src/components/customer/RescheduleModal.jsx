import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const RescheduleModal = ({ isOpen, onClose, booking, onConfirm }) => {
  if (!isOpen || !booking) return null;

  const { title, date: currentBookingDate, time: currentBookingTime } = booking;

  // State to manage date pagination (start index relative to today)
  const [dateStartIndex, setDateStartIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setSelectedDate(null);
      setSelectedTime(null);
      setDateStartIndex(0);
    }
  }, [isOpen]);

  // Generate 7 days array based on start index
  const getDaysArray = (startIndex) => {
    const days = [];
    const today = new Date();

    // Set to start of today for comparison
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + startIndex + i);
      days.push(date);
    }
    return days;
  };

  const days = getDaysArray(dateStartIndex);

  // Format helper for dates
  const formatDayName = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const formatDayNum = (date) => {
    return date.getDate();
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSameDate = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Static/Realistic time slots matching the screenshots
  const timeSlots = [
    { time: "09:00", available: false },
    { time: "09:30", available: true },
    { time: "10:00", available: false },
    { time: "10:30", available: true },
    { time: "11:00", available: true },
    { time: "11:30", available: true },
    { time: "12:00", available: false },
    { time: "12:30", available: true },
    { time: "13:00", available: true },
    { time: "13:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
  ];

  // Handles backdrop clicks to close modal
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("resched-modal-overlay")) {
      onClose();
    }
  };

  const handlePrevDays = () => {
    setDateStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextDays = () => {
    setDateStartIndex((prev) => prev + 1);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Reset selected time when changing date to ensure they pick a valid slot for the new day
    setSelectedTime(null);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime && onConfirm) {
      // Format selected date nicely for the update
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      onConfirm(formattedDate, selectedTime);
      setIsSuccess(true);
    }
  };

  if (isSuccess) {
    const formattedSuccessDate = selectedDate
      ? selectedDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "";

    return (
      <div
        className="resched-modal-overlay d-flex align-items-center justify-content-center"
        onClick={handleBackdropClick}
      >
        <div className="resched-modal-container success-state animate-fade-in position-relative p-5 text-center">
          {/* Close Button */}
          <button
            className="resched-modal-close-btn d-flex align-items-center justify-content-center"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} color="#ffffff" />
          </button>

          {/* Success Checkmark Circle */}
          <div className="resched-success-icon-wrapper mx-auto mb-4 d-flex align-items-center justify-content-center">
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
                stroke-width="3.33272"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9971 18.3296L19.9962 23.3287L36.6598 6.66504"
                stroke="#00C950"
                stroke-width="3.33272"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          {/* Success Header */}
          <h2 className="resched-success-title text-white mb-2">
            Rescheduled Successfully!
          </h2>

          {/* Success Subheading */}
          <p className="resched-success-subtitle mb-4">
            Your appointment has been rescheduled to
          </p>

          {/* Details Pill Box */}
          <div className="resched-success-details-box d-inline-flex align-items-center gap-4 py-3 px-4 mx-auto">
            <div className="d-flex align-items-center gap-2 text-white">
              <Calendar size={18} className="text-peach" />
              <span className="text-14-500">{formattedSuccessDate}</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-white">
              <Clock size={18} className="text-peach" />
              <span className="text-14-500">{selectedTime}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="resched-modal-overlay d-flex align-items-center justify-content-center"
      onClick={handleBackdropClick}
    >
      <div className="resched-modal-container animate-fade-in position-relative">
        {/* Close Button */}
        <button
          className="resched-modal-close-btn d-flex align-items-center justify-content-center"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} color="#ffffff" />
        </button>

        {/* Modal Header */}
        <div className="resched-modal-header p-4 pb-0">
          <h2 className="resched-modal-title text-white mb-1">
            Reschedule Appointment
          </h2>
          <p className="resched-modal-subtitle text-16-400 mb-0 opacity-60">
            {title}
          </p>
        </div>

        {/* Modal Scrollable Body */}
        <div className="resched-modal-body p-4">
          {/* Section: Current Booking */}
          <div className="resched-current-card p-3 mb-4">
            <div className="resched-current-label text-start mb-2">
              Current Booking
            </div>
            <div className="d-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-2 text-white">
                <Calendar size={18} className="text-peach" />
                <span className="text-14-500">{currentBookingDate}</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-white">
                <Clock size={18} className="text-peach" />
                <span className="text-14-500">{currentBookingTime}</span>
              </div>
            </div>
          </div>

          {/* Section: Choose a New Date */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="resched-section-title mb-0">Choose a New Date</h3>
            <div className="resched-carousel-nav d-flex gap-2">
              <button
                className="resched-nav-btn d-flex align-items-center justify-content-center"
                onClick={handlePrevDays}
                disabled={dateStartIndex === 0}
                aria-label="Previous days"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="resched-nav-btn d-flex align-items-center justify-content-center"
                onClick={handleNextDays}
                aria-label="Next days"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Date Selector Carousel Grid */}
          <div className="resched-date-grid mb-4">
            {days.map((date, index) => {
              const selected = isSameDate(date, selectedDate);
              const today = isToday(date);

              return (
                <button
                  key={index}
                  className={`resched-date-card d-flex flex-column align-items-center justify-content-center ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() => handleDateSelect(date)}
                >
                  <span className="resched-date-day mb-1">
                    {formatDayName(date)}
                  </span>
                  <span className="resched-date-number mb-1">
                    {formatDayNum(date)}
                  </span>
                  {today && (
                    <span className="resched-date-today-label">Today</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Section: Available Time Slots (shows when a date is selected) */}
          {selectedDate && (
            <div className="resched-slots-section animate-fade-in mb-4">
              <h3 className="resched-section-title text-start mb-3">
                Available Time Slots
              </h3>
              <div className="resched-time-grid">
                {timeSlots.map((slot, index) => {
                  const isSelected = selectedTime === slot.time;

                  return (
                    <button
                      key={index}
                      className={`resched-time-slot-btn d-flex align-items-center justify-content-center gap-2 ${
                        isSelected ? "selected" : ""
                      } ${!slot.available ? "disabled" : ""}`}
                      onClick={() =>
                        slot.available && setSelectedTime(slot.time)
                      }
                      disabled={!slot.available}
                    >
                      <Clock size={14} />
                      <span>{slot.time}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="resched-modal-footer d-flex gap-3 pt-3">
            <button
              className="resched-btn-cancel w-50 py-3 text-white"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`resched-btn-confirm w-50 py-3 d-flex align-items-center justify-content-center ${
                selectedDate && selectedTime ? "enabled" : "disabled"
              }`}
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
            >
              Confirm Reschedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
