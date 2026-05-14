import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SuccessModal from "./common/SuccessModal";

const ContactUs = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Senior Developer: Message sent!");
    setShowSuccess(true);
  };

  return (
    <div className="contact-us-page bg-black-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero position-relative d-flex align-items-center justify-content-center text-center">
        <div className="contact-hero-overlay"></div>
        <div className="container position-relative z-index-1">
          <div className="get-in-text mb-3">
            Get in <span className="text-peach-script">Touch</span>
          </div>
          <div className="text-18-400">
            We'd love to hear from you. Reach out anytime.
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            {/* Form Column */}
            <div className="col-lg-7">
              <h2 className="text-30-700">Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control-custom-contact py-3"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control-custom-contact py-3"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control-custom-contact py-3"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control-custom-contact py-3"
                    placeholder="Your message..."
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-peach">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="col-lg-5">
              <h2 className="text-30-700 ps-lg-5">Contact Info</h2>
              <div className="ps-lg-5">
                {/* Email */}
                <div className="d-flex align-items-start mb-4">
                  <div className="contact-icon-box me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="text-14-400-subtext">Email</div>
                    <div className="text-16-500-inter">hello@stryn.com</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-start mb-4">
                  <div className="contact-icon-box me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-14-400-subtext">Phone</div>
                    <div className="text-16-500-inter">+91 98765 43210</div>
                  </div>
                </div>

                {/* Address */}
                <div className="d-flex align-items-start">
                  <div className="contact-icon-box me-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="text-14-400-subtext">Address</div>
                    <div className="text-16-500-inter">
                      123 Vijay Nagar, Indore, MP 452010
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thank you for reaching out. We've received your message and will get back to you shortly."
      />
    </div>
  );
};

export default ContactUs;
