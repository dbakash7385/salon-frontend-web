import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/png/stryn-logo.png";
import AuthModal from "./auth/AuthModal";

const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState('ROLE_SELECTION');

  const openAuth = (view = 'ROLE_SELECTION') => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg position-absolute w-100 z-3"
      style={{ top: 0, backgroundColor: "#000" }}
    >
      <div className="container py-3 align-items-end">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="STRYN Logo"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item px-3">


              <Link className="nav-link nav-link-custom" to="/salons">
                Salons
              </Link>

            </li>
            <li className="nav-item px-3">
              <Link className="nav-link nav-link-custom" to="/about-us">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link nav-link-custom" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-auto mt-3 mt-lg-0">
            <div 
              className="text-16-500 me-4" 
              style={{ cursor: "pointer", color: "#FFF" }}
              onClick={() => openAuth('ROLE_SELECTION')}
            >
              Log In
            </div>
            <button 
              className="signup-btn"
              onClick={() => openAuth('ROLE_SELECTION')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialView={authView} 
      />
    </nav>
  );
};

export default Navbar;
