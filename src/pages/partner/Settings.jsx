import React, { useState, useRef } from "react";
import { Edit2 } from "lucide-react";

const Settings = () => {
  // Tabs selection state
  const [activeTab, setActiveTab] = useState("My Profile");

  // Editing state toggle
  const [isEditing, setIsEditing] = useState(false);

  // Logo upload state
  const [logoUrl, setLogoUrl] = useState(null);
  const fileInputRef = useRef(null);

  // Delete modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Original Profile data state (for Cancel rollback)
  const [profileData, setProfileData] = useState({
    businessName: "June Spa",
    email: "johndoe@gmail.com",
    businessType: "Spa",
    phoneNumber: "+91 (555) 123-4567",
    description: "A classic full-body massage using long, flowing strokes.",
    location: "Indore",
    operatingTime: "10:00am - 7:00pm",
    address: "123 Main Street, Los Angeles, California 90001",
  });

  // Temporary edit state
  const [editForm, setEditForm] = useState({ ...profileData });

  const handleEditClick = () => {
    setEditForm({ ...profileData });
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setProfileData({ ...editForm });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeLogoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
      if (file.size > 1 * 1024 * 1024) {
        alert("Image exceeds the 1MB limit.");
        return;
      }
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  return (
    <div className="settings-view">
      {/* Header Info */}
      <div className="settings-header-row">
        <h1 className="services-header-title">Settings</h1>
        <p className="settings-subtitle">
          Manage your account, business preferences, and billing
        </p>
      </div>

      {/* Tabs list */}
      <div className="settings-tabs">
        {["My Profile", "Billing & Plan", "Slot Duration", "Notifications"].map((tab) => (
          <button
            key={tab}
            className={`settings-tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === "My Profile" ? (
        <>
          {/* Profile Logo Card */}
          <div className="settings-card">
            <h3 className="services-header-title">Profile Information</h3>
            <p className="settings-card-subtitle" style={{ marginBottom: "24px" }}>
              Update your personal details and public profile.
            </p>

            <div className="settings-logo-section">
              <div className="settings-logo-circle">
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt="Business Logo"
                    className="settings-logo-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                  />
                ) : (
                  /* SVG Logo Emblem recreating the gold-black crest in screenshot */
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="49" fill="#121212" stroke="#4a3e2b" strokeWidth="2" />
                    <circle cx="50" cy="50" r="41" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
                    {/* Crest silhouette */}
                    <path
                      d="M50 20C42 30 40 40 40 50C40 62 44 72 50 80C56 72 60 62 60 50C60 40 58 30 50 20Z"
                      fill="url(#goldGrad)"
                      opacity="0.85"
                    />
                    <path
                      d="M50 25C44 33 42 42 42 50C42 60 46 68 50 75C54 68 58 60 58 50C58 42 56 33 50 25Z"
                      fill="#121212"
                    />
                    <line x1="50" y1="28" x2="50" y2="72" stroke="#d4af37" strokeWidth="1" />
                    <circle cx="50" cy="50" r="5" fill="#d4af37" />
                    {/* Tiny stars */}
                    <circle cx="46" cy="40" r="1" fill="#fff" />
                    <circle cx="54" cy="45" r="1.5" fill="#d4af37" />
                    <circle cx="45" cy="58" r="1" fill="#d4af37" />
                    <circle cx="54" cy="55" r="1" fill="#fff" />
                    
                    {/* Decorative circular text arches */}
                    <path id="archTextTop" d="M22,50 A28,28 0 0,1 78,50" fill="none" />
                    <text fill="#d4af37" fontSize="5.5" fontWeight="600" letterSpacing="0.8">
                      <textPath href="#archTextTop" startOffset="50%" textAnchor="middle">
                        LOGO GOES HERE
                      </textPath>
                    </text>
                    <path id="archTextBottom" d="M78,50 A28,28 0 0,1 22,50" fill="none" />
                    <text fill="#d4af37" fontSize="5.5" fontWeight="600" letterSpacing="0.8">
                      <textPath href="#archTextBottom" startOffset="50%" textAnchor="middle">
                        SLOGAN HERE
                      </textPath>
                    </text>

                    <defs>
                      <linearGradient id="goldGrad" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#f3e5ab" />
                        <stop offset="50%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#aa7c11" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>

              <div className="settings-logo-actions">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleLogoChange}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  className="btn-change-logo"
                  onClick={handleChangeLogoClick}
                >
                  Change Logo
                </button>
                <p className="logo-subtext">JPG, GIF or PNG. 1MB max.</p>
              </div>
            </div>
          </div>

          {/* Details Form Card */}
          <div className="settings-card">
            <div className="settings-card-header">
              <div className="settings-card-header-left">
                <h3 className="settings-card-title">Profile Information</h3>
                <p className="settings-card-subtitle">
                  Update your personal details and public profile.
                </p>
              </div>

              <div className="settings-actions-row">
                {!isEditing ? (
                  <button
                    type="button"
                    className="btn-settings-edit"
                    onClick={handleEditClick}
                  >
                    <Edit2 size={13} />
                    Edit
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn-settings-cancel"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn-settings-save"
                      onClick={handleSaveClick}
                    >
                      Save
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="settings-details-list">
              {/* Business Name */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Business Name</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="businessName"
                    className="settings-input"
                    value={editForm.businessName}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="settings-detail-value">{profileData.businessName}</span>
                )}
              </div>

              {/* Email */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Email</span>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    className="settings-input"
                    value={editForm.email}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="settings-detail-value">{profileData.email}</span>
                )}
              </div>

              {/* Business Type */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Business Type</span>
                {isEditing ? (
                  <select
                    name="businessType"
                    className="settings-select"
                    value={editForm.businessType}
                    onChange={handleChange}
                  >
                    <option value="Spa">Spa</option>
                    <option value="Salon">Salon</option>
                    <option value="Clinic">Clinic</option>
                    <option value="Therapy Center">Therapy Center</option>
                  </select>
                ) : (
                  <span className="settings-detail-value">{profileData.businessType}</span>
                )}
              </div>

              {/* Phone Number */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Phone Number</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="phoneNumber"
                    className="settings-input"
                    value={editForm.phoneNumber}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="settings-detail-value">{profileData.phoneNumber}</span>
                )}
              </div>

              {/* Description */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Description</span>
                {isEditing ? (
                  <textarea
                    name="description"
                    className="settings-textarea"
                    value={editForm.description}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="settings-detail-value">{profileData.description}</span>
                )}
              </div>

              {/* Location */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Location</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    className="settings-input"
                    value={editForm.location}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="settings-detail-value">{profileData.location}</span>
                )}
              </div>

              {/* Operating Time */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Operating Time</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="operatingTime"
                    className="settings-input"
                    value={editForm.operatingTime}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="settings-detail-value">{profileData.operatingTime}</span>
                )}
              </div>

              {/* Address */}
              <div className="settings-detail-row">
                <span className="settings-detail-label">Address</span>
                {isEditing ? (
                  <textarea
                    name="address"
                    className="settings-textarea"
                    value={editForm.address}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="settings-detail-value">{profileData.address}</span>
                )}
              </div>
            </div>
          </div>

          {/* Delete Account */}
          <button
            type="button"
            className="btn-delete-account"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete Account
          </button>
        </>
      ) : (
        <div className="settings-card" style={{ padding: "40px 28px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", margin: 0 }}>
            {activeTab} Preferences panel is coming soon.
          </p>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteModal && (
        <div className="success-modal-backdrop" onClick={() => setShowDeleteModal(false)}>
          <div className="success-modal-container" onClick={(e) => e.stopPropagation()} style={{ minWidth: "400px", padding: "32px", position: "relative" }}>
            {/* Close Button X in Top Right */}
            <button className="success-modal-close" onClick={() => setShowDeleteModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="success-modal-title" style={{ fontSize: "20px", fontWeight: "600", color: "#ffffff", marginBottom: "12px", fontFamily: "Poppins" }}>
              Delete Account
            </h3>
            <p className="success-modal-msg" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "28px", lineHeight: "1.5", fontFamily: "Inter" }}>
              Are you sure you want to delete your account? This action is permanent and cannot be undone. All your business preferences, data, and billing details will be lost forever.
            </p>

            {/* Modal Buttons */}
            <div className="settings-actions-row" style={{ justifyContent: "flex-end", gap: "12px" }}>
              <button
                type="button"
                className="btn-settings-cancel"
                onClick={() => setShowDeleteModal(false)}
                style={{ padding: "10px 24px" }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-delete-confirm"
                onClick={() => {
                  alert("Account deletion request submitted.");
                  setShowDeleteModal(false);
                }}
                style={{
                  borderRadius: "8px",
                  padding: "10px 24px",
                  fontFamily: "Poppins",
                  fontSize: "13.5px",
                  fontWeight: "500",
                }}
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

export default Settings;
