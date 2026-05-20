import React from "react";
import { Search, Bell, Menu } from "lucide-react";
import avatarImg from "../../assets/images/png/reveue-mens.jpg";

const Header = ({ onMenuClick }) => {
  return (
    <header className="partner-header">
      <div className="partner-header-left">
        {/* Hamburger Trigger for Mobile */}
        <button
          className="partner-menu-trigger"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Search Bookings and Services */}
        <div className="partner-search-wrapper">
          <Search size={18} className="partner-search-icon" />
          <input
            type="text"
            className="partner-search-input"
            placeholder="Search bookings and services"
          />
        </div>
      </div>

      <div className="partner-header-actions">
        {/* Notification Bell */}
        <button className="partner-notif-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>

        {/* Profile Avatar & Info */}
        <div className="partner-profile-badge">
          <img
            src={avatarImg}
            alt="June Salon Avatar"
            className="partner-profile-avatar"
          />
          <div className="partner-profile-info">
            <span className="partner-profile-welcome">Welcome</span>
            <span className="partner-profile-name">June Salon</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
