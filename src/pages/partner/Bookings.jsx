import React, { useState, useEffect } from "react";
import { Check, X, Calendar as CalendarIcon, Edit2, Download, ChevronLeft, ChevronRight } from "lucide-react";

const Bookings = () => {
  // Filter state: "All" | "Pending" | "Confirmed" | "Cancelled" | "Completed"
  const [activeFilter, setActiveFilter] = useState("All");

  // Reassignment Modal state
  const [reassignModalOpen, setReassignModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);

  // Delete Modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [pageInputVal, setPageInputVal] = useState("1");

  // Mock Bookings List State
  const [bookings, setBookings] = useState([
    {
      id: 1,
      custName: "Sarah K.",
      custEmail: "sarah@gmail.com",
      serviceName: "Deep Tissue Massage",
      duration: "60 min",
      date: "20th Apr, 2026",
      time: "3:00 pm",
      assignedStaff: {
        name: "Alex Rodriguez",
        initials: "AR",
        role: "Senior Therapist",
      },
      status: "Confirmed",
    },
    {
      id: 2,
      custName: "Ian G.",
      custEmail: "iangone@gmc",
      serviceName: "Hydrating Rose Facial",
      duration: "30 min",
      date: "20th Apr, 2026",
      time: "4:30 pm",
      assignedStaff: {
        name: "Samantha Jones",
        initials: "SJ",
        role: "Senior Therapist",
      },
      status: "Pending",
    },
    {
      id: 3,
      custName: "Lily S.",
      custEmail: "lily@gmail.com",
      serviceName: "Luxury Gel Manicure",
      duration: "20 min",
      date: "21st Apr, 2026",
      time: "3:00 pm",
      assignedStaff: {
        name: "Alen Smith",
        initials: "AS",
        role: "Senior Therapist",
      },
      status: "Confirmed",
    },
    {
      id: 4,
      custName: "Ian G.",
      custEmail: "iangone@gmc",
      serviceName: "Hydrating Rose Facial",
      duration: "30 min",
      date: "21st Apr, 2026",
      time: "3:00 pm",
      assignedStaff: {
        name: "Pete John",
        initials: "PJ",
        role: "Senior Therapist",
      },
      status: "Cancelled",
    },
    {
      id: 5,
      custName: "John D.",
      custEmail: "johndoe@gmail.com",
      serviceName: "Deep Tissue Massage",
      duration: "60 min",
      date: "21st Apr, 2026",
      time: "4:00 pm",
      assignedStaff: {
        name: "Sarah K.",
        initials: "SK",
        role: "Senior Therapist",
      },
      status: "Confirmed",
    },
    {
      id: 6,
      custName: "Emma W.",
      custEmail: "emmaw@gmail.com",
      serviceName: "Signature Massage",
      duration: "60 min",
      date: "22nd Apr, 2026",
      time: "10:00 am",
      assignedStaff: {
        name: "Sarah K.",
        initials: "SK",
        role: "Senior Therapist",
      },
      status: "Completed",
    },
    {
      id: 7,
      custName: "Mia K.",
      custEmail: "mia.k@gmail.com",
      serviceName: "Hydrating Rose Facial",
      duration: "30 min",
      date: "22nd Apr, 2026",
      time: "11:30 am",
      assignedStaff: {
        name: "Samantha Jones",
        initials: "SJ",
        role: "Senior Therapist",
      },
      status: "Confirmed",
    },
    {
      id: 8,
      custName: "Liam M.",
      custEmail: "liamm@gmail.com",
      serviceName: "Couples Spa",
      duration: "90 min",
      date: "22nd Apr, 2026",
      time: "1:00 pm",
      assignedStaff: {
        name: "Pete John",
        initials: "PJ",
        role: "Senior Therapist",
      },
      status: "Confirmed",
    },
    {
      id: 9,
      custName: "David W.",
      custEmail: "davidw@gmail.com",
      serviceName: "Luxury Gel Manicure",
      duration: "20 min",
      date: "23rd Apr, 2026",
      time: "2:00 pm",
      assignedStaff: {
        name: "Alen Smith",
        initials: "AS",
        role: "Senior Therapist",
      },
      status: "Pending",
    },
    {
      id: 10,
      custName: "Grace T.",
      custEmail: "grace@gmail.com",
      serviceName: "Signature Massage",
      duration: "60 min",
      date: "23rd Apr, 2026",
      time: "4:00 pm",
      assignedStaff: {
        name: "Alex Rodriguez",
        initials: "AR",
        role: "Senior Therapist",
      },
      status: "Confirmed",
    },
    {
      id: 11,
      custName: "Lucas O.",
      custEmail: "lucas@gmail.com",
      serviceName: "Deep Tissue Massage",
      duration: "60 min",
      date: "24th Apr, 2026",
      time: "9:30 am",
      assignedStaff: {
        name: "Alex Rodriguez",
        initials: "AR",
        role: "Senior Therapist",
      },
      status: "Cancelled",
    },
    {
      id: 12,
      custName: "Sophia L.",
      custEmail: "sophial@gmail.com",
      serviceName: "Hydrating Rose Facial",
      duration: "30 min",
      date: "24th Apr, 2026",
      time: "1:00 pm",
      assignedStaff: {
        name: "Samantha Jones",
        initials: "SJ",
        role: "Senior Therapist",
      },
      status: "Completed",
    },
  ]);

  // Available staff members for reassignment list
  const staffMembersList = [
    { name: "Sarah K.", initials: "SK", role: "Senior Therapist" },
    { name: "Alen S.", initials: "AS", role: "Senior Therapist" },
    { name: "Samantha Jones", initials: "SJ", role: "Senior Therapist" },
    { name: "Alex Rodriguez", initials: "AR", role: "Senior Therapist" },
    { name: "Pete John", initials: "PJ", role: "Senior Therapist" },
  ];

  // Open Reassign Modal Handler
  const handleOpenReassignModal = (booking) => {
    setSelectedBooking(booking);
    // Find the currently assigned staff member in our list and set it as selected
    const currentlyAssigned = staffMembersList.find(
      (s) => s.name === booking.assignedStaff.name
    );
    setSelectedStaff(currentlyAssigned || staffMembersList[0]);
    setReassignModalOpen(true);
  };

  // Confirm Reassign Handler
  const handleConfirmReassign = () => {
    if (!selectedBooking || !selectedStaff) return;

    setBookings((prevBookings) =>
      prevBookings.map((b) =>
        b.id === selectedBooking.id
          ? {
            ...b,
            assignedStaff: {
              name: selectedStaff.name,
              initials: selectedStaff.initials,
              role: selectedStaff.role,
            },
          }
          : b
      )
    );

    setReassignModalOpen(false);
    setSelectedBooking(null);
    setSelectedStaff(null);
  };

  // Open Delete Modal Handler
  const handleOpenDeleteModal = (booking) => {
    setBookingToDelete(booking);
    setDeleteModalOpen(true);
  };

  // Confirm Delete Handler
  const handleConfirmDelete = () => {
    if (!bookingToDelete) return;
    setBookings((prev) => prev.filter((b) => b.id !== bookingToDelete.id));
    setDeleteModalOpen(false);
    setBookingToDelete(null);
  };

  // Filter Bookings List based on Tab selection
  const filteredBookings = bookings.filter((b) => {
    if (activeFilter === "All") return true;
    return b.status.toLowerCase() === activeFilter.toLowerCase();
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredBookings.length / pageSize) || 1;

  // Sync current page bounds if data changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
      setPageInputVal(String(totalPages));
    }
  }, [filteredBookings.length, totalPages, currentPage]);

  // Sync pagination input when current page changes
  useEffect(() => {
    setPageInputVal(String(currentPage));
  }, [currentPage]);

  // Paginated items
  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageInputChange = (e) => {
    setPageInputVal(e.target.value);
  };

  const handlePageInputBlur = () => {
    const val = parseInt(pageInputVal, 10);
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      setCurrentPage(val);
    } else {
      setPageInputVal(String(currentPage));
    }
  };

  const handlePageInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePageInputBlur();
      e.target.blur();
    }
  };

  // Reset pagination on filter tab changes
  useEffect(() => {
    setCurrentPage(1);
    setPageInputVal("1");
  }, [activeFilter]);

  return (
    <div className="bookings-view text-start">
      {/* Header Info */}
      <div className="calendar-header-row">
        <h1 className="services-header-title">Bookings</h1>
        <p className="calendar-subtitle">Never miss a booking.</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="bookings-stats-grid">
        {/* Completed Card */}
        <div className="dashboard-stat-card">
          <div className="bookings-stat-left">
            <span className="bookings-stat-label">Completed</span>
            <span className="bookings-stat-count">120</span>
            <span className="bookings-stat-trend">+12% from last week</span>
          </div>
          <div className="bookings-stat-icon-wrapper">
            <span style={{ fontSize: "18px", fontWeight: "700", color: "#ffb298" }}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path d="M9.75 18.75L0.75 10.75H3.75C5.07608 10.75 6.34785 10.2232 7.28553 9.28553C8.22322 8.34785 8.75 7.07608 8.75 5.75C8.75 4.42392 8.22322 3.15215 7.28553 2.21447C6.34785 1.27678 5.07608 0.75 3.75 0.75H0.75H12.75M0.75 5.75H12.75" stroke="#FFB298" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
          </div>
        </div>

        {/* Confirmed Card */}
        <div className="dashboard-stat-card">
          <div className="bookings-stat-left">
            <span className="bookings-stat-label">Confirmed</span>
            <span className="bookings-stat-count">26</span>
            <span className="bookings-stat-trend">-2% from last week</span>
          </div>
          <div className="bookings-stat-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#FFB298" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#FFB298" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>

        {/* Cancelled Card */}
        <div className="dashboard-stat-card">
          <div className="bookings-stat-left">
            <span className="bookings-stat-label">Canceled</span>
            <span className="bookings-stat-count">2</span>
            <span className="bookings-stat-trend">5 cancellation this month</span>
          </div>
          <div className="bookings-stat-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z" stroke="#FFB298" stroke-width="1.5" stroke-miterlimit="10" />
              <path d="M15 15L9 9M9 15L15 9" stroke="#FFB298" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>

        {/* Total Booking Card */}
        <div className="dashboard-stat-card">
          <div className="bookings-stat-left">
            <span className="bookings-stat-label">Total Booking</span>
            <span className="bookings-stat-count">148</span>
            <span className="bookings-stat-trend">+4% from last week</span>
          </div>
          <div className="bookings-stat-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 2V5" stroke="#FFB298" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 2V5" stroke="#FFB298" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.5 9.08984H20.5" stroke="#FFB298" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 19C22 19.75 21.79 20.46 21.42 21.06C20.73 22.22 19.46 23 18 23C16.99 23 16.07 22.63 15.37 22C15.06 21.74 14.79 21.42 14.58 21.06C14.21 20.46 14 19.75 14 19C14 16.79 15.79 15 18 15C19.2 15 20.27 15.53 21 16.36C21.62 17.07 22 17.99 22 19Z" stroke="#FFB298" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.4395 19L17.4295 19.99L19.5594 18.02" stroke="#FFB298" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#FFB298" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.9965 13.7002H12.0054" stroke="#FFB298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.29334 13.7002H8.30232" stroke="#FFB298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.29334 16.7002H8.30232" stroke="#FFB298" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Toolbar Status Filters */}
      <div className="transactions-filter-group" style={{ marginBottom: "20px", justifyContent: "flex-start" }}>
        {["All", "Pending", "Confirmed", "Cancelled", "Completed"].map((filter) => (
          <button
            key={filter}
            className={`transactions-filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
            style={{ minWidth: "90px" }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Bookings Table Container */}
      <div className="bookings-table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Service</th>
              <th>Date & Time</th>
              <th>Assigned to</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBookings.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", color: "rgba(255,255,255,0.35)", padding: "32px" }}>
                  No bookings found for the selected status.
                </td>
              </tr>
            ) : (
              paginatedBookings.map((b) => (
                <tr key={b.id}>
                  {/* Customer details */}
                  <td>
                    <h4 className="booking-cust-name">{b.custName}</h4>
                    <p className="booking-cust-email">{b.custEmail}</p>
                  </td>

                  {/* Service details */}
                  <td>
                    <h4 className="booking-service-title">{b.serviceName}</h4>
                    <p className="booking-service-duration">{b.duration}</p>
                  </td>

                  {/* Date details */}
                  <td>
                    <h4 className="booking-datetime-date">{b.date}</h4>
                    <p className="booking-datetime-time">{b.time}</p>
                  </td>

                  {/* Assigned Staff details */}
                  <td>
                    <div className="booking-assigned-layout">
                      <div className="booking-assigned-avatar">
                        {b.assignedStaff.initials}
                      </div>
                      <div className="booking-assigned-text">
                        <span className="booking-assigned-name">{b.assignedStaff.name}</span>
                        <button
                          className="booking-assigned-change"
                          onClick={() => handleOpenReassignModal(b)}
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td>
                    <span className={`booking-status-badge ${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>
                  </td>

                  {/* Actions column */}
                  <td>
                    <div className="booking-actions-group">
                      <button className="booking-action-btn edit" title="Edit Booking">
                        <Edit2 size={13} />
                      </button>
                      <button
                        className="booking-action-btn cancel"
                        title="Cancel/Delete Booking"
                        onClick={() => handleOpenDeleteModal(b)}
                      >
                        <X size={14} />
                      </button>
                      {(b.status === "Confirmed" || b.status === "Completed") && (
                        <button className="booking-action-btn download" title="Download Receipt">
                          <Download size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Custom Table Pagination Controls */}
      <div className="transactions-pagination" style={{ marginTop: "24px" }}>
        <span className="pagination-label">Page</span>
        <input
          type="number"
          className="pagination-input"
          value={pageInputVal}
          onChange={handlePageInputChange}
          onBlur={handlePageInputBlur}
          onKeyDown={handlePageInputKeyDown}
        />
        <span className="pagination-label">of {totalPages}</span>
        <button
          className="btn-pagination-nav"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          title="Previous Page"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className="btn-pagination-nav"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          title="Next Page"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Change Assigned Staff Popup Modal */}
      {reassignModalOpen && selectedBooking && (
        <div className="success-modal-backdrop" onClick={() => setReassignModalOpen(false)}>
          <div
            className="success-modal-container"
            style={{ maxWidth: "420px", padding: "28px", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="success-modal-close"
              onClick={() => setReassignModalOpen(false)}
              title="Close Modal"
            >
              <X size={20} />
            </button>

            {/* Modal Titles */}
            <h2 className="success-modal-title" style={{ width: "100%", textAlign: "left" }}>
              Change Assigned
            </h2>
            <p className="success-modal-text" style={{ width: "100%", textAlign: "left", marginBottom: "8px" }}>
              Choose a staff member to assign
            </p>

            {/* Staff list rows */}
            <div className="assign-staff-list">
              {staffMembersList.map((staff) => (
                <div
                  key={staff.name}
                  className={`assign-staff-item ${selectedStaff && selectedStaff.name === staff.name ? "selected" : ""
                    }`}
                  onClick={() => setSelectedStaff(staff)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="assign-staff-left">
                    <div className="assign-avatar-wrapper">
                      <div className="assign-avatar">{staff.initials}</div>
                      <span className="assign-avatar-dot"></span>
                    </div>
                    <div className="assign-staff-details">
                      <h4 className="assign-staff-name">{staff.name}</h4>
                      <p className="assign-staff-role">{staff.role}</p>
                    </div>
                  </div>

                  <button
                    className="btn-assign-action"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedStaff(staff);
                    }}
                  >
                    Assign
                  </button>
                </div>
              ))}
            </div>

            {/* Actions footer */}
            <div className="assign-modal-actions">
              <button
                type="button"
                className="btn-assign-cancel"
                onClick={() => setReassignModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-assign-confirm"
                onClick={handleConfirmReassign}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Booking Confirmation Modal */}
      {deleteModalOpen && bookingToDelete && (
        <div className="success-modal-backdrop" onClick={() => setDeleteModalOpen(false)}>
          <div
            className="success-modal-container"
            style={{ maxWidth: "420px", padding: "28px", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="success-modal-close"
              onClick={() => setDeleteModalOpen(false)}
              title="Close Modal"
            >
              <X size={20} />
            </button>

            {/* Modal Titles */}
            <h2 className="success-modal-title" style={{ width: "100%", textAlign: "left" }}>
              Delete Booking
            </h2>
            <p className="success-modal-text" style={{ width: "100%", textAlign: "left", marginBottom: "24px" }}>
              Are you sure you want to delete this booking?
            </p>

            {/* Actions footer */}
            <div className="assign-modal-actions">
              <button
                type="button"
                className="btn-assign-cancel"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-delete-confirm"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
