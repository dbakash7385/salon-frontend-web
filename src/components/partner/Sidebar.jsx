import React from "react";
import logo from "../../assets/images/png/stryn-logo.png";
import {
  Home,
  Briefcase,
  Users,
  Calendar,
  ClipboardList,
  CreditCard,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "staff", label: "Staff", icon: Users },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "bookings", label: "Bookings", icon: ClipboardList },
    { id: "transaction", label: "Transaction", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="partner-sidebar-overlay" onClick={onClose} />
      )}

      <aside className={`partner-sidebar ${isOpen ? "open" : ""}`}>
        <div>
          {/* Logo & Close toggle */}
          <div className="partner-sidebar-header ms-5">
            <img src={logo} alt="STRYN Logo" className="partner-logo-img" />
            <button
              className="partner-sidebar-close"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="partner-nav-list">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id);
                      if (onClose) onClose(); // Close on mobile navigation
                    }}
                    className={`partner-nav-link ${isActive ? "active" : ""}`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer with Sign Out */}
        <div className="partner-sidebar-footer">
          <button
            className="partner-signout-btn"
            onClick={() => {
              console.log("Senior Developer: Signing out partner...");
              // Handle actual logout redirection if needed, otherwise just reload or go to landing page
              window.location.href = "/";
            }}
          >
            <LogOut size={18} />
            <span>Sign out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
