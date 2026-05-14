import React from 'react';

const TrendingCard = ({ image, category, title, location, reviews, rating }) => {
  return (
    <div className="trending-card h-100 d-flex flex-column">
      <div className="trending-card-img-wrapper">
        <img src={image} alt={title} className="trending-card-img" />
        <div className="trending-card-rating shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
             <path d="M7.99992 12L3.29771 14.8057L4.5463 9.4442L0.392578 5.86111L5.86433 5.40277L7.99992 0.333344L10.1355 5.40277L15.6073 5.86111L11.4535 9.4442L12.7021 14.8057L7.99992 12Z" fill="#F4A261"/>
          </svg>
          <span className="text-dark fw-bold ms-1">{rating}</span>
        </div>
      </div>
      <div className="trending-card-body d-flex flex-column flex-grow-1">
        <div className="trending-card-category mb-2">{category}</div>
        <h3 className="trending-card-title mb-2">{title}</h3>
        <div className="trending-card-subtitle mb-4 flex-grow-1 d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          {location} ({reviews} reviews)
        </div>
        <button className="trending-card-btn mt-auto">View Availability</button>
      </div>
    </div>
  );
};

export default TrendingCard;
