import React, { useState } from "react";
import { Plus, Mail, Phone, MoreVertical, CheckCircle2, X, Sparkles } from "lucide-react";

const Staff = () => {
  // Initial staff data matching screenshot details
  const [staffMembers, setStaffMembers] = useState([
    {
      id: 1,
      name: "Sarah K.",
      role: "Senior Therapist",
      email: "sarah@auraspa.com",
      phone: "+91 (555) 123-4567",
      initials: "SK",
      services: ["Signature Massage", "Deep Tissue Recovery", "Hot Stone"],
      available: true,
    },
    {
      id: 2,
      name: "Michael R.",
      role: "Senior Therapist",
      email: "michael@auraspa.com",
      phone: "+91 (555) 123-4567",
      initials: "MR",
      services: ["Signature Massage", "Deep Tissue Recovery", "Hot Stone"],
      available: true,
    },
    {
      id: 3,
      name: "Jessica T.",
      role: "Senior Therapist",
      email: "jessica@auraspa.com",
      phone: "+91 (555) 123-4567",
      initials: "JT",
      services: ["Signature Massage", "Deep Tissue Recovery", "Hot Stone"],
      available: false,
    },
    {
      id: 4,
      name: "David L.",
      role: "Senior Therapist",
      email: "david@auraspa.com",
      phone: "+91 (555) 123-4567",
      initials: "DL",
      services: ["Signature Massage", "Deep Tissue Recovery", "Hot Stone"],
      available: true,
    },
  ]);

  // Master list of services that can be assigned to staff members
  const availableServices = [
    "Signature Massage",
    "Deep Tissue Recovery",
    "Hot Stone",
    "Sports Massage",
    "Hydrating Rose Facial",
    "Anti-Aging Facial",
    "Luxury Gel Manicure",
    "Couples Spa Retreat",
    "Aromatherapy",
  ];

  // Drawer / sliding panel state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState("add"); // "add" or "edit"
  const [editingStaffId, setEditingStaffId] = useState(null);

  // Success Modal state
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [addedStaffName, setAddedStaffName] = useState("");

  // Form states
  const [formValues, setFormValues] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    services: [],
    available: true,
  });

  // Action Menu dropdown state for each card
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Delete Modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  // Close dropdown menu when clicking outside
  React.useEffect(() => {
    const closeDropdowns = () => {
      setActiveMenuId(null);
    };
    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, []);

  // Prevent background scrolling when drawer is open
  React.useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const toggleMenu = (e, memberId) => {
    e.stopPropagation();
    setActiveMenuId(activeMenuId === memberId ? null : memberId);
  };

  const handleOpenDeleteConfirm = (member) => {
    setMemberToDelete(member);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (memberToDelete) {
      setStaffMembers((prev) => prev.filter((m) => m.id !== memberToDelete.id));
      setShowDeleteModal(false);
      setMemberToDelete(null);
    }
  };

  // Toggle staff availability
  const handleToggleAvailability = (id) => {
    setStaffMembers((prev) =>
      prev.map((member) =>
        member.id === id ? { ...member, available: !member.available } : member
      )
    );
  };

  // Open drawer for adding staff member
  const handleOpenAddDrawer = () => {
    setFormValues({
      name: "",
      role: "",
      email: "",
      phone: "",
      services: [],
      available: true,
    });
    setDrawerMode("add");
    setIsDrawerOpen(true);
    setActiveMenuId(null);
  };

  // Open drawer for editing staff member
  const handleOpenEditDrawer = (member) => {
    setFormValues({
      name: member.name,
      role: member.role,
      email: member.email,
      phone: member.phone,
      services: [...member.services],
      available: member.available,
    });
    setEditingStaffId(member.id);
    setDrawerMode("edit");
    setIsDrawerOpen(true);
    setActiveMenuId(null);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Handle standard input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox toggling for assigned services
  const handleServiceToggle = (serviceName) => {
    setFormValues((prev) => {
      const alreadyAssigned = prev.services.includes(serviceName);
      const updatedServices = alreadyAssigned
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName];
      return { ...prev, services: updatedServices };
    });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email) return;

    // Helper to get initials from name
    const getInitials = (nameStr) => {
      const parts = nameStr.trim().split(" ");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return nameStr.substring(0, 2).toUpperCase();
    };

    if (drawerMode === "add") {
      const newStaff = {
        id: Date.now(),
        name: formValues.name,
        role: formValues.role,
        email: formValues.email,
        phone: formValues.phone || "+91 (555) 123-4567",
        initials: getInitials(formValues.name),
        services: formValues.services,
        available: formValues.available,
      };
      setStaffMembers((prev) => [...prev, newStaff]);
      setAddedStaffName(formValues.name);
      setIsDrawerOpen(false);
      setShowSuccessModal(true);
    } else {
      setStaffMembers((prev) =>
        prev.map((member) =>
          member.id === editingStaffId
            ? {
                ...member,
                name: formValues.name,
                role: formValues.role,
                email: formValues.email,
                phone: formValues.phone,
                initials: getInitials(formValues.name),
                services: formValues.services,
                available: formValues.available,
              }
            : member
        )
      );
      setIsDrawerOpen(false);
    }
  };

  return (
    <div className="staff-container">
      {/* Header Row */}
      <div className="staff-header-row">
        <div className="staff-header-info">
          <h1 className="services-header-title">Staff</h1>
          <p className="staff-subtitle">
            Manage your team, their availability, and assigned services.
          </p>
        </div>
        <button className="btn-add-staff" onClick={handleOpenAddDrawer}>
          <Plus size={18} />
          Add Staff Member
        </button>
      </div>

      {/* Staff Grid */}
      <div className="staff-grid">
        {staffMembers.map((member) => (
          <div key={member.id} className="staff-card">
            {/* Card Header */}
            <div className="staff-card-header">
              <div className="staff-avatar-container">
                <div className="staff-avatar">{member.initials}</div>
                {member.available && <div className="staff-avatar-status"></div>}
              </div>
              <div className="staff-header-text">
                <h3 className="staff-name">{member.name}</h3>
                <p className="staff-role">{member.role}</p>
              </div>

              {/* Action Dot Trigger and Menu */}
              <div className="staff-actions-container">
                <button
                  className="staff-actions-trigger"
                  onClick={(e) => toggleMenu(e, member.id)}
                  title="Staff Actions"
                >
                  <MoreVertical size={20} />
                </button>
                {activeMenuId === member.id && (
                  <div className="staff-actions-menu" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className="staff-menu-item edit"
                      onClick={() => {
                        handleOpenEditDrawer(member);
                        setActiveMenuId(null);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="staff-menu-item delete"
                      onClick={() => {
                        handleOpenDeleteConfirm(member);
                        setActiveMenuId(null);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="staff-contact-info">
              <div className="staff-contact-item">
                <Mail size={16} />
                <span>{member.email}</span>
              </div>
              <div className="staff-contact-item">
                <Phone size={16} />
                <span>{member.phone}</span>
              </div>
            </div>

            {/* Assigned Services */}
            <div className="staff-services-section">
              <div className="staff-services-header">
                <span className="staff-services-title">ASSIGNED SERVICES</span>
                <button
                  className="staff-services-edit"
                  onClick={() => handleOpenEditDrawer(member)}
                >
                  Edit
                </button>
              </div>
              <div className="staff-services-list">
                {member.services.map((serviceName, idx) => (
                  <span key={idx} className="staff-service-tag">
                    {serviceName}
                  </span>
                ))}
                <button
                  className="btn-add-service-tag"
                  onClick={() => handleOpenEditDrawer(member)}
                >
                  <Plus size={12} /> Add
                </button>
              </div>
            </div>

            {/* Availability Footer */}
            <div className="staff-availability-section">
              <div className="staff-availability-status">
                <CheckCircle2 size={16} />
                <span>Available for bookings</span>
              </div>
              <div
                className={`staff-switch ${member.available ? "active" : ""}`}
                onClick={() => handleToggleAvailability(member.id)}
              >
                <div className="staff-switch-knob"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Add Team Member Card */}
        <div className="staff-card add-member-card" onClick={handleOpenAddDrawer}>
          <div className="add-member-card-content">
            <div className="add-member-circle">
              <Plus size={24} />
            </div>
            <h3 className="add-member-title">Add Team Member</h3>
            <p className="add-member-subtitle">
              Invite staff, set their roles, and configure their service capabilities
            </p>
          </div>
        </div>
      </div>

      {/* Drawer Overlay Backdrop */}
      {isDrawerOpen && (
        <div
          className={`drawer-backdrop ${isDrawerOpen ? "open" : ""}`}
          onClick={handleCloseDrawer}
        ></div>
      )}

      {/* Slide-over Drawer Panel */}
      <div className={`drawer-container ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div>
            <h2 className="drawer-title">
              {drawerMode === "add" ? "Add New Staff Member" : "Edit Staff Member"}
            </h2>
            <p className="drawer-subtitle" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)", margin: "4px 0 0 0" }}>
              Enter details and assign services.
            </p>
          </div>
          <button className="drawer-close-btn" onClick={handleCloseDrawer}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="drawer-body">
          {/* Full Name & Role Rows (Side-by-side) */}
          <div className="drawer-input-row">
            <div className="drawer-form-group">
              <label className="drawer-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="drawer-input"
                placeholder="e.g. Emma S."
                value={formValues.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="drawer-form-group">
              <label className="drawer-label">Role</label>
              <input
                type="text"
                name="role"
                className="drawer-input"
                placeholder="e.g. Senior Stylist"
                value={formValues.role}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Email Address & Phone Number Row */}
          <div className="drawer-input-row">
            <div className="drawer-form-group">
              <label className="drawer-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="drawer-input"
                placeholder="emma@example.com"
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="drawer-form-group">
              <label className="drawer-label">Phone Number</label>
              <input
                type="number"
                name="phone"
                className="drawer-input"
                placeholder="Enter phone number"
                value={formValues.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Assigned Services Multi-select Custom Grid */}
          <div className="drawer-form-group" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "20px", marginTop: "12px" }}>
            <div className="drawer-label-row" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <Sparkles size={16} style={{ color: "#ffb298" }} />
              <span className="drawer-label" style={{ margin: 0 }}>Assigned Services</span>
            </div>
            <div className="drawer-services-selector">
              {availableServices.map((serviceName) => {
                const isSelected = formValues.services.includes(serviceName);
                return (
                  <label
                    key={serviceName}
                    className={`drawer-service-card ${isSelected ? "selected" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleServiceToggle(serviceName)}
                    />
                    <div className={`custom-checkbox ${isSelected ? "checked" : ""}`}>
                      {isSelected && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                    <span className="drawer-service-name">{serviceName}</span>
                  </label>
                );
              })}
            </div>
          </div>

        

          {/* Drawer Footer Actions */}
          <div className="drawer-footer">
            <button
              type="button"
              className="btn-drawer-cancel"
              onClick={handleCloseDrawer}
            >
              Cancel
            </button>
            <button type="submit" className="btn-drawer-submit">
              {drawerMode === "add" ? "Add Staff Member" : "Update"}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal-backdrop" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="success-modal-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="success-modal-title">Staff Member Added</h3>
            <p className="success-modal-text">
              {addedStaffName} has been successfully added to your staff list.
            </p>
            <button className="btn-success-close" onClick={() => setShowSuccessModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && memberToDelete && (
        <div className="success-modal-backdrop" onClick={() => setShowDeleteModal(false)}>
          <div className="success-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="delete-modal-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
            <h3 className="success-modal-title">Delete Staff Member</h3>
            <p className="success-modal-text">
              Are you sure you want to delete {memberToDelete.name}? This action cannot be undone.
            </p>
            <div className="delete-modal-actions">
              <button type="button" className="btn-delete-cancel" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button type="button" className="btn-delete-confirm" onClick={handleDeleteConfirm}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
