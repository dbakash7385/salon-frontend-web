import React from "react";
import logo from "../assets/images/png/stryn-logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid" style={{ padding: "80px 50px 40px" }}>
        <div className="row gy-5">
          {/* Left Column */}
          <div className="col-12 col-lg-5 pe-lg-5">
            <img src={logo} alt="STRYN Logo" className="footer-logo mb-4" />
            <p className="text-14-400 mb-4">
              The world's leading destination for beauty and wellness bookings.
              Elevate your self-care routine with STRYN.
            </p>
            <h5 className="footer-heading mb-3">Subscribe to our newsletter</h5>
            <div className="footer-subscribe d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button className="footer-subscribe-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#121212"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>

          {/* Spacer Column for layout */}
          <div className="col-12 col-lg-2 d-none d-lg-block"></div>

          {/* Middle Column */}
          <div className="col-6 col-lg-2">
            <h5 className="footer-heading mb-4">About STRYN</h5>
            <ul className="footer-links list-unstyled">
              <li className="mb-3">
                <a href="#">Services</a>
              </li>
              <li className="mb-3">
                <a href="#">About</a>
              </li>
              <li className="mb-3">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-6 col-lg-3">
            <h5 className="footer-heading mb-4">For Businesses</h5>
            <ul className="footer-links list-unstyled">
              <li className="mb-3">
                <a href="#">Become a Partner</a>
              </li>
              <li className="mb-3">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="mb-3">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-fluid" style={{ padding: "0px 50px" }}>
          <div className="row align-items-center py-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start">
              <p className="footer-copyright mb-0">
                © 2026 STRYN All rights reserved.
              </p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M13.49 1.49902H11.2417C10.2478 1.49902 9.29471 1.89382 8.59197 2.59656C7.88923 3.2993 7.49443 4.25243 7.49443 5.24626V7.49459H5.24609V10.4924H7.49443V16.488H10.4922V10.4924H12.7406L13.49 7.49459H10.4922V5.24626C10.4922 5.04749 10.5712 4.85687 10.7117 4.71632C10.8523 4.57577 11.0429 4.49681 11.2417 4.49681H13.49V1.49902Z"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M12.7417 1.49902H5.24723C3.17769 1.49902 1.5 3.17672 1.5 5.24626V12.7407C1.5 14.8103 3.17769 16.488 5.24723 16.488H12.7417C14.8112 16.488 16.4889 14.8103 16.4889 12.7407V5.24626C16.4889 3.17672 14.8112 1.49902 12.7417 1.49902Z"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9905 8.52144C12.083 9.14517 11.9764 9.78217 11.686 10.3419C11.3956 10.9015 10.9361 11.3554 10.3729 11.6389C9.80968 11.9224 9.17141 12.0211 8.54887 11.9209C7.92634 11.8207 7.35124 11.5268 6.90538 11.0809C6.45952 10.6351 6.16559 10.06 6.06542 9.43743C5.96525 8.81489 6.06392 8.17662 6.34741 7.61339C6.63089 7.05017 7.08476 6.59067 7.64444 6.30026C8.20413 6.00985 8.84113 5.90332 9.46486 5.99581C10.1011 6.09015 10.6901 6.38662 11.1449 6.84141C11.5997 7.29621 11.8961 7.88522 11.9905 8.52144Z"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.1172 4.87158H13.1247"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.4889 2.99757C16.4889 2.99757 15.9643 4.57141 14.99 5.54569C16.1891 13.0402 7.94524 18.5111 1.5 14.2393C3.14878 14.3142 4.79756 13.7896 5.99668 12.7404C2.24945 11.6162 0.375831 7.19447 2.24945 3.74702C3.89823 5.69558 6.44635 6.81975 8.99446 6.7448C8.31996 3.59713 11.9922 1.79846 14.2406 3.89691C15.065 3.89691 16.4889 2.99757 16.4889 2.99757Z"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M11.9928 5.99561C13.1854 5.99561 14.3291 6.46936 15.1724 7.31265C16.0157 8.15594 16.4894 9.29969 16.4894 10.4923V15.7384H13.4917V10.4923C13.4917 10.0948 13.3337 9.7135 13.0526 9.43241C12.7716 9.15131 12.3903 8.99339 11.9928 8.99339C11.5952 8.99339 11.214 9.15131 10.9329 9.43241C10.6518 9.7135 10.4939 10.0948 10.4939 10.4923V15.7384H7.49609V10.4923C7.49609 9.29969 7.96985 8.15594 8.81314 7.31265C9.65643 6.46936 10.8002 5.99561 11.9928 5.99561Z"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.49779 6.74512H1.5V15.7385H4.49779V6.74512Z"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.99889 4.49681C3.82671 4.49681 4.49779 3.82573 4.49779 2.99792C4.49779 2.1701 3.82671 1.49902 2.99889 1.49902C2.17108 1.49902 1.5 2.1701 1.5 2.99792C1.5 3.82573 2.17108 4.49681 2.99889 4.49681Z"
                    stroke="white"
                    stroke-width="1.49889"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
