import React from "react";
import bgImage from "../assets/images/png/pocket-section-background.jpg";

const AppPromo = () => {
  return (
    <section className="app-promo-section position-relative">
      <div
        className="app-promo-bg"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>
      <div className="app-promo-overlay"></div>

      <div className="container-fluid px-section position-relative z-2 h-100 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="text-53-400 mb-4 px-5">
              Beauty in Your
              <br />
              Pocket
            </div>
            <div className="text-16-400 mb-5 px-5">
              Book appointments anytime, anywhere. Get exclusive offers, manage
              your bookings, and discover new styles with the STRYN app.
            </div>
            <div className="d-flex flex-wrap gap-3 align-items-center px-5">
              <a href="#" className="app-store-badge">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                />
              </a>
              <a href="#" className="google-play-badge">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
