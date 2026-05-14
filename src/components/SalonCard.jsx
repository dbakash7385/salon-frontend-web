import React from 'react';

const SalonCard = ({ image, category, title, rating, location, reviews }) => {
  return (
    <div className="salon-card h-100 flex-column d-flex">
      <div className="salon-card-img-wrapper">
        <img src={image} alt={title} className="salon-card-img" />
        <div className="salon-card-badge">{category}</div>
      </div>
      <div className="salon-card-body d-flex flex-column flex-grow-1">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <h3 className="salon-card-title m-0 pe-2">{title}</h3>
          <div className="salon-card-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" fill="none" className="me-1">
              <path d="M7.99992 12L3.29771 14.8057L4.5463 9.4442L0.392578 5.86111L5.86433 5.40277L7.99992 0.333344L10.1355 5.40277L15.6073 5.86111L11.4535 9.4442L12.7021 14.8057L7.99992 12Z" fill="#F4A261"/>
            </svg>
            {rating}
          </div>
        </div>
        <p className="salon-card-subtitle mb-4 flex-grow-1">{location} • {reviews} reviews</p>
        <button className="salon-card-btn mt-auto">View Services</button>
      </div>
    </div>
  );
};

export default SalonCard;
