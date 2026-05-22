import React from "react";
import logo from "../../assets/images/png/stryn-logo.png";
import { Home, Briefcase, Settings, LogOut, X } from "lucide-react";

// Custom SVG Staff Icon matching custom design specifications
const StaffIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M9.16055 10.87C9.06055 10.86 8.94055 10.86 8.83055 10.87C6.45055 10.79 4.56055 8.84 4.56055 6.44C4.56055 3.99 6.54055 2 9.00055 2C11.4505 2 13.4405 3.99 13.4405 6.44C13.4305 8.84 11.5405 10.79 9.16055 10.87Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4093 4C18.3493 4 19.9093 5.57 19.9093 7.5C19.9093 9.39 18.4093 10.93 16.5393 11C16.4593 10.99 16.3693 10.99 16.2793 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.1607 14.56C1.7407 16.18 1.7407 18.82 4.1607 20.43C6.9107 22.27 11.4207 22.27 14.1707 20.43C16.5907 18.81 16.5907 16.17 14.1707 14.56C11.4307 12.73 6.9207 12.73 4.1607 14.56Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Custom SVG Calendar Icon matching custom design specifications
const CalendarIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V19.5C2.25 20.7426 3.25736 21.75 4.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M13.875 12C14.4963 12 15 11.4963 15 10.875C15 10.2537 14.4963 9.75 13.875 9.75C13.2537 9.75 12.75 10.2537 12.75 10.875C12.75 11.4963 13.2537 12 13.875 12Z"
      fill="currentColor"
    />
    <path
      d="M17.625 12C18.2463 12 18.75 11.4963 18.75 10.875C18.75 10.2537 18.2463 9.75 17.625 9.75C17.0037 9.75 16.5 10.2537 16.5 10.875C16.5 11.4963 17.0037 12 17.625 12Z"
      fill="currentColor"
    />
    <path
      d="M13.875 15.75C14.4963 15.75 15 15.2463 15 14.625C15 14.0037 14.4963 13.5 13.875 13.5C13.2537 13.5 12.75 14.0037 12.75 14.625C12.75 15.2463 13.2537 15.75 13.875 15.75Z"
      fill="currentColor"
    />
    <path
      d="M17.625 15.75C18.2463 15.75 18.75 15.2463 18.75 14.625C18.75 14.0037 18.2463 13.5 17.625 13.5C17.0037 13.5 16.5 14.0037 16.5 14.625C16.5 15.2463 17.0037 15.75 17.625 15.75Z"
      fill="currentColor"
    />
    <path
      d="M6.375 15.75C6.99632 15.75 7.5 15.2463 7.5 14.625C7.5 14.0037 6.99632 13.5 6.375 13.5C5.75368 13.5 5.25 14.0037 5.25 14.625C5.25 15.2463 5.75368 15.75 6.375 15.75Z"
      fill="currentColor"
    />
    <path
      d="M10.125 15.75C10.7463 15.75 11.25 15.2463 11.25 14.625C11.25 14.0037 10.7463 13.5 10.125 13.5C9.50368 13.5 9 14.0037 9 14.625C9 15.2463 9.50368 15.75 10.125 15.75Z"
      fill="currentColor"
    />
    <path
      d="M6.375 19.5C6.99632 19.5 7.5 18.9963 7.5 18.375C7.5 17.7537 6.99632 17.25 6.375 17.25C5.75368 17.25 5.25 17.7537 5.25 18.375C5.25 18.9963 5.75368 19.5 6.375 19.5Z"
      fill="currentColor"
    />
    <path
      d="M10.125 19.5C10.7463 19.5 11.25 18.9963 11.25 18.375C11.25 17.7537 10.7463 17.25 10.125 17.25C9.50368 17.25 9 17.7537 9 18.375C9 18.9963 9.50368 19.5 10.125 19.5Z"
      fill="currentColor"
    />
    <path
      d="M13.875 19.5C14.4963 19.5 15 18.9963 15 18.375C15 17.7537 14.4963 17.25 13.875 17.25C13.2537 17.25 12.75 17.7537 12.75 18.375C12.75 18.9963 13.2537 19.5 13.875 19.5Z"
      fill="currentColor"
    />
    <path
      d="M6 2.25V3.75M18 2.25V3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.75 7.5H2.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

// Custom SVG Bookings Icon matching custom design specifications
const BookingsIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M6.66602 1.6665V4.1665"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.334 1.6665V4.1665"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.91602 7.5752H17.0827"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3327 15.8333C18.3327 16.4583 18.1577 17.05 17.8493 17.55C17.2743 18.5167 16.216 19.1667 14.9993 19.1667C14.1577 19.1667 13.391 18.8583 12.8077 18.3333C12.5494 18.1167 12.3244 17.85 12.1494 17.55C11.841 17.05 11.666 16.4583 11.666 15.8333C11.666 13.9917 13.1577 12.5 14.9993 12.5C15.9993 12.5 16.891 12.9417 17.4993 13.6333C18.016 14.225 18.3327 14.9917 18.3327 15.8333Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6992 15.8333L14.5242 16.6583L16.2992 15.0166"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 7.08317V13.6332C16.8917 12.9415 16 12.4998 15 12.4998C13.1583 12.4998 11.6667 13.9915 11.6667 15.8332C11.6667 16.4582 11.8417 17.0498 12.15 17.5498C12.325 17.8498 12.55 18.1165 12.8083 18.3332H6.66667C3.75 18.3332 2.5 16.6665 2.5 14.1665V7.08317C2.5 4.58317 3.75 2.9165 6.66667 2.9165H13.3333C16.25 2.9165 17.5 4.58317 17.5 7.08317Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99607 11.4167H10.0036"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.91209 11.4167H6.91957"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.91209 13.9167H6.91957"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Custom SVG Transaction Icon matching custom design specifications
const TransactionIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M15.9375 3.75H4.0625C2.85438 3.75 1.875 4.72938 1.875 5.9375V14.0625C1.875 15.2706 2.85438 16.25 4.0625 16.25H15.9375C17.1456 16.25 18.125 15.2706 18.125 14.0625V5.9375C18.125 4.72938 17.1456 3.75 15.9375 3.75Z"
      stroke="#C8C8C8"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.875 7.5H18.125M5 11.7188H6.875V12.5H5V11.7188Z"
      stroke="#C8C8C8"
      stroke-width="2.34375"
      stroke-linejoin="round"
    />
  </svg>
);

const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "staff", label: "Staff", icon: StaffIcon },
    { id: "calendar", label: "Calendar", icon: CalendarIcon },
    { id: "bookings", label: "Bookings", icon: BookingsIcon },
    { id: "transaction", label: "Transaction", icon: TransactionIcon },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="partner-sidebar-overlay" onClick={onClose} />}

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
              const isActive =
                activeTab === item.id ||
                (activeTab === "notifications" && item.id === "settings");
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
