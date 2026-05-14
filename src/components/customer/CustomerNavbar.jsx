import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/png/stryn-logo.png";

const CustomerNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-4">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="STRYN" height="38" className="me-2" />
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#customerNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="customerNavbar">
          <ul className="navbar-nav ms-4 mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link active text-16-400" href="#">Salons</a>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link text-16-400" to="/about-us">About</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link text-16-400" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center ms-auto">
            <div className="user-profile-pill d-flex align-items-center bg-dark-soft rounded-pill px-3 py-2 cursor-pointer border-1-white-10">
              <div className="user-icon-wrapper me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className="text-white text-14-400">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomerNavbar;
