import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Calendar, LogOut } from "lucide-react";
import logo from "../../assets/images/png/stryn-logo.png";

const CustomerNavbar = () => {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-4">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="STRYN" height="38" className="me-2" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#customerNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="customerNavbar">
          <ul className="navbar-nav ms-4 mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link active text-16-400" href="#">
                Salons
              </a>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link text-16-400" to="/about-us">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link text-16-400" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-auto position-relative">
            <div 
              className="user-profile-pill d-flex align-items-center bg-dark-soft rounded-pill px-3 py-2 cursor-pointer border-1-white-10"
              onClick={toggleDropdown}
            >
              <div className="user-icon-wrapper me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.1197 12.78C12.0497 12.77 11.9597 12.77 11.8797 12.78C10.1197 12.72 8.71973 11.28 8.71973 9.50998C8.71973 7.69998 10.1797 6.22998 11.9997 6.22998C13.8097 6.22998 15.2797 7.69998 15.2797 9.50998C15.2697 11.28 13.8797 12.72 12.1197 12.78Z"
                    stroke="#C8C8C8"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z"
                    stroke="#C8C8C8"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#C8C8C8"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </div>
              <span className="text-white text-14-400">John Doe</span>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="unq-user-dropdown">
                <div className="unq-dropdown-header">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className=" text-12-400">Signed in as</span>
                    <span className="unq-role-badge">Customer</span>
                  </div>
                  <div className="text-white text-14-500 text-truncate">
                    johndoe@example.com
                  </div>
                </div>

                <div className="py-1">
                  <Link to="/customer/account" className="unq-dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                    <Calendar size={18} className="" />
                    <span>My Bookings</span>
                  </Link>
                  <Link to="/customer/account" className="unq-dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                    <User size={18} className="" />
                    <span>My Account</span>
                  </Link>
                </div>

                <div className="unq-dropdown-footer py-1" onClick={()=>navigate("/")}>
                  <button className="unq-dropdown-item unq-logout-item">
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
