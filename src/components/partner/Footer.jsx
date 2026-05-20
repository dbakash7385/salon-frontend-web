import React from "react";

const Footer = () => {
  return (
    <footer className="partner-footer">
      <div>
        <span>&copy; {new Date().getFullYear()} STRYN All rights reserved.</span>
      </div>
      <div className="partner-footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#help">Help Center</a>
      </div>
    </footer>
  );
};

export default Footer;
