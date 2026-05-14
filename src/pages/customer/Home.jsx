import React from "react";
import CustomerNavbar from "../../components/customer/CustomerNavbar";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/customer/ServiceCard";

// Placeholder images for services
import hairImg from "../../assets/images/png/reveue-mens.jpg"; 
// I'll use the same image for others as a placeholder or generic URL if not available
const massageImg = "https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?auto=format&fit=crop&q=80&w=1000";
const nailsImg = "https://images.unsplash.com/photo-1604654894610-df490682160d?auto=format&fit=crop&q=80&w=1000";

const CustomerHome = () => {
  const services = [
    {
      image: hairImg,
      category: "Haircuts",
      title: "Luxury Haircut & Styling",
      salon: "Elite Hair Studio",
      location: "Downtown, NY",
      available: true
    },
    {
      image: massageImg,
      category: "Massage",
      title: "Deep Tissue Massage",
      salon: "Serenity Spa & Wellness",
      location: "Midtown, NY",
      available: true
    },
    {
      image: nailsImg,
      category: "Nails",
      title: "Gel Manicure & Nail Art",
      salon: "Polished Perfection",
      location: "SoHo, NY",
      available: true
    }
  ];

  return (
    <div className="customer-home-page bg-black-dark">
      <CustomerNavbar />
      
      {/* Header Section */}
      <section className="pt-5 pb-4">
        <div className="container text-start">
          <h1 className="text-white text-56-700 mb-2">
            Discover <span className="text-peach">Services</span>
          </h1>
          <p className="text-muted text-20-400">
            Browse and book from 12 premium beauty and wellness services
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="mb-5">
        <div className="container">
          <div className="search-filter-wrapper bg-dark-soft p-3 rounded-4 border-1-white-10 d-flex flex-wrap align-items-center gap-3">
            {/* Search Services */}
            <div className="search-input-group flex-grow-1 position-relative">
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input 
                type="text" 
                className="form-control-custom ps-5" 
                placeholder="Search services..." 
              />
            </div>

            {/* Location */}
            <div className="location-input-group flex-grow-1 position-relative">
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <input 
                type="text" 
                className="form-control-custom ps-5" 
                placeholder="Location..." 
              />
            </div>

            {/* Filters Button */}
            <button className="btn-outline-custom px-4 py-2 rounded-3 d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
              <span>Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grid Header */}
      <section className="mb-4">
        <div className="container">
          <p className="text-muted text-16-400">Showing 12 of 12 services</p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <ServiceCard {...service} />
              </div>
            ))}
            {/* Repeat for demonstration */}
            {services.map((service, idx) => (
              <div key={`dup-${idx}`} className="col-12 col-md-6 col-lg-4">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx="true">{`
        .bg-black-dark {
          background-color: #0c0c0c;
        }
        .text-56-700 {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.2;
        }
        .btn-outline-custom {
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          transition: all 0.3s ease;
        }
        .btn-outline-custom:hover {
          background: #222;
          border-color: rgba(255, 178, 152, 0.5);
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

export default CustomerHome;

