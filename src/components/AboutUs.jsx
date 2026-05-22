import React from "react";
import Navbar from "./Navbar";
import CustomerNavbar from "./customer/CustomerNavbar";
import Footer from "./Footer";

const AboutUs = ({ isCustomer }) => {
  return (
    <div className="about-us-page bg-black-dark">
      {isCustomer ? <CustomerNavbar /> : <Navbar />}

      {/* Hero Section */}
      <section className="about-hero position-relative d-flex align-items-center justify-content-center text-center">
        <div className="contact-hero-overlay"></div>
        <div className="container position-relative z-index-1">
          <div className="get-in-text mb-3">
            About <span className="text-peach-script">Us</span>
          </div>
          <div className="text-18-400">
            We're on a mission to make luxury selfcare accessible to everyone.
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-3 bg-black-dark">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-36-700 mb-4">Our Story</div>
              <div className="text-16-400 mb-4 px-md-5">
                STRYN was born from a simple idea: everyone deserves access to
                exceptional beauty and wellness services. We noticed how hard it
                was to discover quality salons and book treatments without the
                hassle. So we built a platform that connects you with the best
                local professionals — vetted, reviewed, and ready to help you
                look and feel your best.
              </div>
              <div className="text-16-400 mb-4 px-md-5">
                From hair styling to facials, massage to manicures, we curate a
                network of trusted beauty experts so you can book with
                confidence, every single time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container py-4">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="stat-number">1M+</div>
              <div className="stat-label-lower">Booked Appointments</div>
            </div>
            <div className="col-md-3">
              <div className="stat-number">13K+</div>
              <div className="stat-label-lower">Partner Salons</div>
            </div>
            <div className="col-md-3">
              <div className="stat-number">45K</div>
              <div className="stat-label-lower">Stylist and Professionals</div>
            </div>
            <div className="col-md-3">
              <div className="stat-number">4.9</div>
              <div className="stat-label-lower">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-3 bg-black-dark mb-5">
        <div className="container py-5 text-center">
          <h2 className="text-36-700 mb-5">What We Stand For</h2>
          <div className="row g-4 text-start">
            {/* Quality First */}
            <div className="col-lg-4">
              <div className="value-card p-4 h-100">
                <h3 className="text-20-600 mb-3">Quality First</h3>
                <p className="text-14-400 mb-0">
                  We partner only with vetted, top-rated professionals who
                  deliver exceptional service every time.
                </p>
              </div>
            </div>
            {/* Effortless Booking */}
            <div className="col-lg-4">
              <div className="value-card p-4 h-100">
                <h3 className="text-20-600 mb-3">Effortless Booking</h3>
                <p className="text-14-400 mb-0">
                  Our platform makes finding and booking beauty services as
                  seamless as possible — anytime, anywhere.
                </p>
              </div>
            </div>
            {/* Community Driven */}
            <div className="col-lg-4">
              <div className="value-card p-4 h-100">
                <h3 className="text-20-600 mb-3">Community Driven</h3>
                <p className="text-14-400 mb-0">
                  Real reviews from real people help you discover the best
                  treatments and salons in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
