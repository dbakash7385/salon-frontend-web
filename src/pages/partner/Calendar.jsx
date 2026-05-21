import React, { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

const Calendar = () => {
  // View states: "day" | "week" | "month"
  const [viewMode, setViewMode] = useState("day");

  // Selected date reference: Monday, April 20, 2026
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 3, 20));

  // Modal detail states
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Mock appointments matching screenshots exactly
  const appointments = [
    {
      id: 1,
      name: "Emma W.",
      service: "Signature Massage",
      staff: "Sarah K.",
      time: "10:00 AM",
      dateStr: "Mon 20",
      fullDate: "2026-04-20",
      theme: "brown",
      duration: "1 hour",
    },
    {
      id: 2,
      name: "John D.",
      service: "Deep Tissue",
      staff: "Michael R.",
      time: "1:00 PM",
      dateStr: "Mon 20",
      fullDate: "2026-04-20",
      theme: "blue",
      duration: "1 hour",
    },
    {
      id: 3,
      name: "Liam M.",
      service: "Couples Spa",
      staff: "Jessica T.",
      time: "11:00 AM",
      dateStr: "Mon 20",
      fullDate: "2026-04-20",
      theme: "purple",
      duration: "2 hours",
    },
    {
      id: 4,
      name: "Emma W.",
      service: "Signature Massage",
      staff: "Sarah K.",
      time: "12:00 PM",
      dateStr: "Wed 22",
      fullDate: "2026-04-22",
      theme: "blue",
      duration: "1 hour",
    },
    {
      id: 5,
      name: "Emma W.",
      service: "Signature Massage",
      staff: "Sarah K.",
      time: "9:00 AM",
      dateStr: "Thu 8",
      fullDate: "2026-04-08",
      theme: "blue",
      duration: "1 hour",
    },
    {
      id: 6,
      name: "John D.",
      service: "Deep Tissue",
      staff: "Michael R.",
      time: "11:00 AM",
      dateStr: "Thu 8",
      fullDate: "2026-04-08",
      theme: "brown",
      duration: "1 hour",
    },
    {
      id: 7,
      name: "Emma W.",
      service: "Signature Massage",
      staff: "Sarah K.",
      time: "10:00 AM",
      dateStr: "Fri 17",
      fullDate: "2026-04-17",
      theme: "brown",
      duration: "1 hour",
    },
  ];

  // Staff members for Day View
  const staffList = ["Sarah K.", "Michael R.", "Jessica T."];

  // Hours for Day / Week Views
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
  ];

  // Week View columns
  const weekDays = [
    { label: "Mon 20", fullDate: "2026-04-20" },
    { label: "Tue 21", fullDate: "2026-04-21" },
    { label: "Wed 22", fullDate: "2026-04-22" },
    { label: "Thu 23", fullDate: "2026-04-23" },
    { label: "Fri 24", fullDate: "2026-04-24" },
    { label: "Sat 25", fullDate: "2026-04-25" },
    { label: "Sun 26", fullDate: "2026-04-26" },
  ];

  // Month grid days: Row-by-row structure as shown in screenshot
  const monthWeeks = [
    // Preceding month days & start of April
    [
      { dayNum: 29, isCurrentMonth: false, fullDate: "2026-03-29" },
      { dayNum: 30, isCurrentMonth: false, fullDate: "2026-03-30" },
      { dayNum: 31, isCurrentMonth: false, fullDate: "2026-03-31" },
      { dayNum: 1, isCurrentMonth: true, fullDate: "2026-04-01" },
      { dayNum: 2, isCurrentMonth: true, fullDate: "2026-04-02" },
      { dayNum: 3, isCurrentMonth: true, fullDate: "2026-04-03" },
      { dayNum: 4, isCurrentMonth: true, fullDate: "2026-04-04" },
    ],
    // Week 2
    [
      { dayNum: 5, isCurrentMonth: true, fullDate: "2026-04-05" },
      { dayNum: 6, isCurrentMonth: true, fullDate: "2026-04-06" },
      { dayNum: 7, isCurrentMonth: true, fullDate: "2026-04-07" },
      { dayNum: 8, isCurrentMonth: true, fullDate: "2026-04-08", hasTags: true },
      { dayNum: 9, isCurrentMonth: true, fullDate: "2026-04-09" },
      { dayNum: 10, isCurrentMonth: true, fullDate: "2026-04-10" },
      { dayNum: 11, isCurrentMonth: true, fullDate: "2026-04-11" },
    ],
    // Week 3
    [
      { dayNum: 12, isCurrentMonth: true, fullDate: "2026-04-12" },
      { dayNum: 13, isCurrentMonth: true, fullDate: "2026-04-13" },
      { dayNum: 14, isCurrentMonth: true, fullDate: "2026-04-14" },
      { dayNum: 15, isCurrentMonth: true, fullDate: "2026-04-15" },
      { dayNum: 16, isCurrentMonth: true, fullDate: "2026-04-16" },
      { dayNum: 17, isCurrentMonth: true, fullDate: "2026-04-17", hasTags: true },
      { dayNum: 18, isCurrentMonth: true, fullDate: "2026-04-18" },
    ],
    // Week 4
    [
      { dayNum: 19, isCurrentMonth: true, fullDate: "2026-04-19" },
      { dayNum: 20, isCurrentMonth: true, fullDate: "2026-04-20", isToday: true },
      { dayNum: 21, isCurrentMonth: true, fullDate: "2026-04-21" },
      { dayNum: 22, isCurrentMonth: true, fullDate: "2026-04-22" },
      { dayNum: 23, isCurrentMonth: true, fullDate: "2026-04-23" },
      { dayNum: 24, isCurrentMonth: true, fullDate: "2026-04-24" },
      { dayNum: 25, isCurrentMonth: true, fullDate: "2026-04-25" },
    ],
    // Week 5
    [
      { dayNum: 26, isCurrentMonth: true, fullDate: "2026-04-26" },
      { dayNum: 27, isCurrentMonth: true, fullDate: "2026-04-27" },
      { dayNum: 28, isCurrentMonth: true, fullDate: "2026-04-28" },
      { dayNum: 29, isCurrentMonth: true, fullDate: "2026-04-29" },
      { dayNum: 30, isCurrentMonth: true, fullDate: "2026-04-30" },
      { dayNum: 1, isCurrentMonth: false, fullDate: "2026-05-01" },
      { dayNum: 2, isCurrentMonth: false, fullDate: "2026-05-02" },
    ],
  ];

  // Dynamic Date navigation handlers
  const handlePrevDate = () => {
    const nextDate = new Date(selectedDate);
    if (viewMode === "day") {
      nextDate.setDate(selectedDate.getDate() - 1);
    } else if (viewMode === "week") {
      nextDate.setDate(selectedDate.getDate() - 7);
    } else {
      nextDate.setMonth(selectedDate.getMonth() - 1);
    }
    setSelectedDate(nextDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(selectedDate);
    if (viewMode === "day") {
      nextDate.setDate(selectedDate.getDate() + 1);
    } else if (viewMode === "week") {
      nextDate.setDate(selectedDate.getDate() + 7);
    } else {
      nextDate.setMonth(selectedDate.getMonth() + 1);
    }
    setSelectedDate(nextDate);
  };

  // Format active date label
  const formatDateLabel = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[selectedDate.getDay()];
    const monthName = months[selectedDate.getMonth()];
    const dateNum = selectedDate.getDate();

    return `${dayName}, ${monthName} ${dateNum}`;
  };

  // Day View cell appointments lookup
  const getDayAppointment = (staff, time) => {
    // Only show items that match the active day structure
    const formattedSelected = selectedDate.toISOString().split("T")[0];
    return appointments.find(
      (app) =>
        app.fullDate === formattedSelected &&
        app.staff === staff &&
        app.time === time
    );
  };

  // Week View cell appointments lookup
  const getWeekAppointment = (dayFullDate, time) => {
    return appointments.find(
      (app) => app.fullDate === dayFullDate && app.time === time
    );
  };

  // Render subgrids
  const renderDayView = () => {
    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th></th>
            {staffList.map((staff) => (
              <th key={staff}>{staff}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td>{time}</td>
              {staffList.map((staff) => {
                const app = getDayAppointment(staff, time);
                return (
                  <td key={staff}>
                    {app && (
                      <div
                        className={`calendar-appointment-card type-${app.theme}`}
                        onClick={() => setSelectedAppointment(app)}
                      >
                        <span className="appointment-name">{app.name}</span>
                        <span className="appointment-service">{app.service}</span>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderWeekView = () => {
    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th></th>
            {weekDays.map((day) => (
              <th key={day.label}>{day.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              <td>{time}</td>
              {weekDays.map((day) => {
                const app = getWeekAppointment(day.fullDate, time);
                return (
                  <td key={day.label}>
                    {app && (
                      <div
                        className={`calendar-appointment-card type-${app.theme}`}
                        onClick={() => setSelectedAppointment(app)}
                      >
                        <span className="appointment-name">{app.name}</span>
                        <span className="appointment-service">{app.service}</span>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderMonthView = () => {
    const monthHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div className="month-grid">
        {monthHeaders.map((hdr) => (
          <div className="month-header-cell" key={hdr}>
            {hdr}
          </div>
        ))}

        {monthWeeks.flat().map((cell, idx) => {
          // Find appointments on this specific date
          const dateApps = appointments.filter((app) => app.fullDate === cell.fullDate);

          return (
            <div
              className={`month-date-cell ${
                cell.isCurrentMonth ? "current-month" : ""
              } ${cell.isToday ? "today" : ""}`}
              key={idx}
            >
              <span className="month-date-num">{cell.dayNum}</span>
              {dateApps.map((app) => (
                <div
                  className={`month-tag ${app.theme === "blue" ? "blue" : "brown"}`}
                  key={app.id}
                  onClick={() => setSelectedAppointment(app)}
                  title={`${app.name}: ${app.service}`}
                >
                  {app.service}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="calendar-view">
      {/* Header Info */}
      <div className="calendar-header-row">
        <h1 className="services-header-title">Calendar</h1>
        <p className="calendar-subtitle">Check out your appointments and events.</p>
      </div>

      {/* Toolbar Controls */}
      <div className="calendar-toolbar">
        {/* Left Side: Date Nav */}
        <div className="calendar-date-nav">
          <button className="calendar-nav-btn" onClick={handlePrevDate} title="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className="calendar-nav-label">
            <CalendarIcon size={18} />
            <span>{formatDateLabel()}</span>
          </div>
          <button className="calendar-nav-btn" onClick={handleNextDate} title="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Side: Segment Switch */}
        <div className="calendar-view-selector">
          <button
            className={`calendar-view-btn ${viewMode === "day" ? "active" : ""}`}
            onClick={() => setViewMode("day")}
          >
            Day
          </button>
          <button
            className={`calendar-view-btn ${viewMode === "week" ? "active" : ""}`}
            onClick={() => setViewMode("week")}
          >
            Week
          </button>
          <button
            className={`calendar-view-btn ${viewMode === "month" ? "active" : ""}`}
            onClick={() => setViewMode("month")}
          >
            Month
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="calendar-grid-container">
        <div className="calendar-grid-responsive">
          {viewMode === "day" && renderDayView()}
          {viewMode === "week" && renderWeekView()}
          {viewMode === "month" && renderMonthView()}
        </div>
      </div>

      {/* Appointment Detail Popup Modal */}
      {selectedAppointment && (
        <div className="success-modal-backdrop" onClick={() => setSelectedAppointment(null)}>
          <div
            className="success-modal-container"
            style={{ maxWidth: "400px", padding: "28px", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="success-modal-close"
              onClick={() => setSelectedAppointment(null)}
              title="Close Details"
            >
              <X size={20} />
            </button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <div
                className={`add-member-circle`}
                style={{
                  width: "56px",
                  height: "56px",
                  fontSize: "20px",
                  backgroundColor:
                    selectedAppointment.theme === "blue"
                      ? "rgba(66, 133, 244, 0.12)"
                      : selectedAppointment.theme === "purple"
                      ? "rgba(161, 66, 244, 0.12)"
                      : "rgba(255, 178, 152, 0.12)",
                  color:
                    selectedAppointment.theme === "blue"
                      ? "#4285f4"
                      : selectedAppointment.theme === "purple"
                      ? "#a142f4"
                      : "#ffb298",
                  marginBottom: "16px",
                  border: "none",
                }}
              >
                {selectedAppointment.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h2 className="success-modal-title" style={{ marginBottom: "16px" }}>
                Appointment Info
              </h2>

              <div className="appointment-detail-label">Customer</div>
              <div className="appointment-detail-value">{selectedAppointment.name}</div>

              <div className="appointment-detail-label">Service</div>
              <div className="appointment-detail-value">{selectedAppointment.service}</div>

              <div className="appointment-detail-label">Staff Member</div>
              <div className="appointment-detail-value">{selectedAppointment.staff}</div>

              <div className="appointment-detail-label">Time & Duration</div>
              <div className="appointment-detail-value">
                {selectedAppointment.time} ({selectedAppointment.duration})
              </div>

              <button
                className="btn-close-details"
                style={{ marginTop: "20px" }}
                onClick={() => setSelectedAppointment(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
