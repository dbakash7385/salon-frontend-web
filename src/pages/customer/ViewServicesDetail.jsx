import React from "react";
import { useLocation } from "react-router-dom";
import CustomerNavbar from "../../components/customer/CustomerNavbar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/customer/ServiceCard";
import FilterSection from "../../components/customer/FilterSection";
import ServiceBookingModal from "../../components/customer/ServiceBookingModal";

import hairImg from "../../assets/images/png/reveue-mens.jpg";
import massageImg from "../../assets/images/png/message-img.jpg";
import nailsImg from "../../assets/images/png/nail-img.jpg";

import barberImg from "../../assets/images/png/barber-service.jpg";
import facialImg from "../../assets/images/png/facial-service.jpg";
import spaImg from "../../assets/images/png/spa-service.jpg";

const ViewServicesDetail = () => {
  const location = useLocation();
  const [showFilters, setShowFilters] = React.useState(false);
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);

  const handleBookClick = (service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const salonName = location.state?.salonName || "Elite Hair Studio";
  const category = location.state?.category || "beauty and wellness";

  // Splits the salon name and renders the last word in peach color for premium style
  const renderSalonName = (name) => {
    const words = name.split(" ");
    if (words.length <= 1) {
      return <span>{name}</span>;
    }
    const lastWord = words.pop();
    const remainingText = words.join(" ");
    return (
      <>
        {remainingText} <span className="text-peach">{lastWord}</span>
      </>
    );
  };

  const getSubheadingText = () => {
    if (salonName === "Elite Hair Studio") {
      return "Browse and book from 12 premium Luxury Haircut & Styling services";
    }
    return `Browse and book from 12 premium ${category === "beauty and wellness" ? "beauty and wellness" : `${category}`} services`;
  };

  const services = [
    {
      image: hairImg,
      category: "Haircuts",
      title: "Luxury Haircut & Styling",
      salon: "Elite Hair Studio",
      location: "Downtown, NY",
      available: true,
      description:
        "Professional haircut with consultation, wash, cut, style, and finishing products. Our expert stylists",
      rating: 4.9,
      reviewCount: 234,
      duration: "60 min",
      price: 85,
    },
    {
      image: massageImg,
      category: "Massage",
      title: "Deep Tissue Massage",
      salon: "Serenity Spa & Wellness",
      location: "Midtown, NY",
      available: true,
      description:
        "Therapeutic deep tissue massage targeting muscle tension and knots. Perfect for stress relief and",
      rating: 4.8,
      reviewCount: 189,
      duration: "90 min",
      price: 120,
    },
    {
      image: nailsImg,
      category: "Nails",
      title: "Gel Manicure & Nail Art",
      salon: "Polished Perfection",
      location: "SoHo, NY",
      available: true,
      description:
        "Premium gel manicure with custom nail art designs. Long-lasting polish with creative designs",
      rating: 4.7,
      reviewCount: 156,
      duration: "75 min",
      price: 65,
    },
    {
      image: barberImg,
      category: "Barber",
      title: "Classic Barber Service",
      salon: "The Gentleman's Cut",
      location: "Brooklyn, NY",
      available: true,
      description:
        "Traditional barber service including haircut, beard trim, and hot towel shave. Experience old-school",
      rating: 4.9,
      reviewCount: 298,
      duration: "45 min",
      price: 45,
    },
    {
      image: facialImg,
      category: "Facial",
      title: "Hydrating Facial Treatment",
      salon: "Glow Skin Bar",
      location: "Chelsea, NY",
      available: true,
      description:
        "Intensive hydrating facial with advanced skincare products. Restores moisture and radiance to dull,",
      rating: 4.8,
      reviewCount: 167,
      duration: "60 min",
      price: 95,
    },
    {
      image: spaImg,
      category: "Spa",
      title: "Full Body Spa Experience",
      salon: "Tranquil Haven",
      location: "Upper East Side, NY",
      available: true,
      description:
        "Complete spa day package including massage, facial, body scrub, and access to relaxation",
      rating: 5.0,
      reviewCount: 421,
      duration: "180 min",
      price: 180,
    },
  ];

  return (
    <div className="customer-home-page bg-black-dark">
      <CustomerNavbar />

      {/* Header Section */}
      <section className="pt-5 pb-4">
        <div className="container text-start">
          <div className="text-48-500 mb-2">
            {renderSalonName(salonName)}
          </div>
          <p className="text-start text-20-400">
            {getSubheadingText()}
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="mb-5">
        <div className="container">
          <div className="search-filter-wrapper d-flex flex-wrap align-items-center">
            {/* Search Services */}
            <div className="filter-search-input position-relative">
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.16545 15.8304C12.8467 15.8304 15.8309 12.8462 15.8309 9.16496C15.8309 5.48373 12.8467 2.49951 9.16545 2.49951C5.48422 2.49951 2.5 5.48373 2.5 9.16496C2.5 12.8462 5.48422 15.8304 9.16545 15.8304Z"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.66636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.4967 17.4967L13.9141 13.9141"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.66636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                className="form-control-custom ps-5"
                placeholder="Search services..."
              />
            </div>

            {/* Location */}
            <div className="location-input-group position-relative">
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M16.6639 8.3317C16.6639 12.4918 12.0489 16.8243 10.4992 18.1624C10.3548 18.271 10.1791 18.3297 9.99845 18.3297C9.81782 18.3297 9.64208 18.271 9.49771 18.1624C7.948 16.8243 3.33301 12.4918 3.33301 8.3317C3.33301 6.56392 4.03526 4.86854 5.28527 3.61852C6.53529 2.36851 8.23067 1.66626 9.99845 1.66626C11.7662 1.66626 13.4616 2.36851 14.7116 3.61852C15.9616 4.86854 16.6639 6.56392 16.6639 8.3317Z"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.66636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99857 10.8314C11.379 10.8314 12.4981 9.71228 12.4981 8.33182C12.4981 6.95136 11.379 5.83228 9.99857 5.83228C8.61811 5.83228 7.49902 6.95136 7.49902 8.33182C7.49902 9.71228 8.61811 10.8314 9.99857 10.8314Z"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.66636"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
              </span>
              <input
                type="text"
                className="form-control-custom ps-5"
                placeholder="Location..."
              />
            </div>

            {/* Filters Button */}
            <button
              className={`btn-outline-custom px-4 py-2 rounded-3 d-flex align-items-center gap-2 ${showFilters ? "active" : ""}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <FilterSection onFilterChange={(filters) => console.log(filters)} />
          )}
        </div>
      </section>

      {/* Grid Header */}
      <section className="mb-4">
        <div className="container">
          <p className="text-16-400">
            Showing {services.length} of 12 services
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <ServiceCard 
                  {...service} 
                  onBookClick={() => handleBookClick(service)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ServiceBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedService}
      />

      <style jsx="true">{`
        .bg-black-dark {
          background-color: #0c0c0c;
        }
        .text-56-700 {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.2;
        }
        .search-filter-wrapper {
          background: #141414;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 12px;
          gap: 12px;
          width: 100%;
        }
        .filter-search-input {
          flex: 2;
          min-width: 250px;
        }
        .location-input-group {
          flex: 1;
          min-width: 200px;
        }
        .filter-search-input .form-control-custom,
        .location-input-group .form-control-custom {
          background: #1a1a1a !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          height: 48px;
        }

        /* Filter Button Styles */
        .btn-outline-custom {
          height: 48px;
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .btn-outline-custom:hover {
          background: #222;
          border-color: rgba(255, 178, 152, 0.5);
        }
        .btn-outline-custom.active {
          background: #ffb298 !important;
          border: none !important;
          color: #121212 !important;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(255, 178, 152, 0.3) !important;
        }

        @media (max-width: 768px) {
          .filter-search-input,
          .location-input-group {
            flex: 1 1 100%;
          }
          .search-filter-wrapper {
            padding: 16px;
          }
        }
        @media (max-width: 768px) {
          .text-56-700 {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewServicesDetail;
