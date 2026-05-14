import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content container d-flex flex-column justify-content-center h-100">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-xl-8">
            <div className="text-84-700 mb-4">
              Book Local <span className="text-gradient">Selfcare</span>
            </div>
            <div className="text-18-300 mx-auto text-wrap" style={{ maxWidth: "600px" }}>
              Discover and book the best beauty and wellness professionals near
              you. Luxury treatments, effortless booking.
            </div>

            {/* Search Component */}
            <div className="search-container mb-4 mt-4">
              <div className="search-input-group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M9.80817 16.9386C13.7473 16.9386 16.9406 13.7453 16.9406 9.80622C16.9406 5.86711 13.7473 2.67383 9.80817 2.67383C5.86906 2.67383 2.67578 5.86711 2.67578 9.80622C2.67578 13.7453 5.86906 16.9386 9.80817 16.9386Z"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.7243 18.7223L14.8906 14.8887"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                <input
                  type="text"
                  className="search-input"
                  placeholder="All Treatments and Services"
                />
              </div>

              <div className="search-input-group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M17.8312 8.91559C17.8312 13.3671 12.8929 18.0032 11.2346 19.435C11.0801 19.5511 10.8921 19.614 10.6988 19.614C10.5055 19.614 10.3175 19.5511 10.163 19.435C8.5047 18.0032 3.56641 13.3671 3.56641 8.91559C3.56641 7.02397 4.31785 5.20981 5.65544 3.87223C6.99302 2.53465 8.80717 1.7832 10.6988 1.7832C12.5904 1.7832 14.4046 2.53465 15.7422 3.87223C17.0797 5.20981 17.8312 7.02397 17.8312 8.91559Z"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6981 11.5905C12.1753 11.5905 13.3727 10.393 13.3727 8.91586C13.3727 7.43869 12.1753 6.24121 10.6981 6.24121C9.22092 6.24121 8.02344 7.43869 8.02344 8.91586C8.02344 10.393 9.22092 11.5905 10.6981 11.5905Z"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                <input
                  type="text"
                  className="search-input"
                  placeholder="Current Location"
                />
              </div>

              <div className="search-input-group border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M7.13281 1.7832V5.3494"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.2656 1.7832V5.3494"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.9406 3.56543H4.45888C3.4741 3.56543 2.67578 4.36375 2.67578 5.34853V17.8302C2.67578 18.815 3.4741 19.6133 4.45888 19.6133H16.9406C17.9253 19.6133 18.7237 18.815 18.7237 17.8302V5.34853C18.7237 4.36375 17.9253 3.56543 16.9406 3.56543Z"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.67578 8.91602H18.7237"
                    stroke="#A1A1A1"
                    stroke-width="1.48591"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                <input
                  type="text"
                  className="search-input"
                  placeholder="Any Date"
                  // onFocus={(e) => (e.target.type = "date")}
                  // onBlur={(e) => (e.target.type = "text")}
                />
              </div>

              <button className="search-btn">Search</button>
            </div>

            {/* Popular Categories */}
            <div className="d-flex flex-wrap justify-content-center align-items-center mt-4 gap-2">
              <span className="text-12-400">Popular:</span>
              <span className="chip">Haircut</span>
              <span className="chip">Massage</span>
              <span className="chip">Manicure</span>
              <span className="chip">Facial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
