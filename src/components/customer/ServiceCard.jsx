import React from "react";

const ServiceCard = ({ image, category, title, salon, location, available }) => {
  return (
    <div className="service-card bg-dark-soft rounded-4 overflow-hidden h-100 transition-300 border-1-white-10">
      <div className="position-relative">
        <img src={image} alt={title} className="w-100 object-fit-cover" style={{ height: '220px' }} />
        
        {/* Category Badge */}
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge bg-blur text-white rounded-pill px-3 py-2 text-12-400 border-1-white-10">
            {category}
          </span>
        </div>

        {/* Availability Badge */}
        {available && (
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-green-light text-white rounded-pill px-3 py-2 text-12-400 d-flex align-items-center">
              <span className="dot me-2"></span> Available
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h5 className="text-white text-20-500 mb-2">{title}</h5>
        <p className="text-muted text-14-400 mb-3">{salon}</p>
        
        <div className="d-flex align-items-center text-muted">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="text-14-400">{location}</span>
        </div>
      </div>

      <style jsx="true">{`
        .bg-blur {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        .bg-green-light {
          background: rgba(39, 174, 96, 0.2);
          border: 1px solid rgba(39, 174, 96, 0.3);
        }
        .dot {
          width: 8px;
          height: 8px;
          background-color: #27ae60;
          border-radius: 50%;
          display: inline-block;
        }
        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 178, 152, 0.4) !important;
        }
        .transition-300 {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
