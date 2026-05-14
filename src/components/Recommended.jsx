import React from 'react';
import SalonCard from './SalonCard';

const recommendedData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'HAIR SALON',
    title: 'Elite Hair Studio',
    rating: '4.9',
    location: 'Kensington, London',
    reviews: '128'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'SPA & WELLNESS',
    title: 'Serenity Spa & Wellness',
    rating: '5.0',
    location: 'SoHo, NY',
    reviews: '84'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'NAIL SALON',
    title: 'Premium Nail Artistry',
    rating: '4.8',
    location: 'Le Marais, Paris',
    reviews: '215'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'BARBER SHOP',
    title: "Gentleman's Grooming",
    rating: '4.9',
    location: 'Shibuya, Tokyo',
    reviews: '342'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'SKINCARE',
    title: 'Glow Skin Bar',
    rating: '4.7',
    location: 'Beverly Hills, LA',
    reviews: '56'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'MAKEUP ARTIST',
    title: 'Bridal Makeup Excellence',
    rating: '5.0',
    location: 'Dubai Marina, Dubai',
    reviews: '19'
  }
];

const Recommended = () => {
  return (
    <section className="recommended-section">
      <div className="container-fluid" style={{padding: " 0px 50px"}}>
        <div className="row align-items-end mb-5">
          <div className="col-md-8">
            <h2 className="text-42-400">Recommended for You</h2>
            <p className="text-14-400 mb-0">
              Handpicked salons and treatments rated highly by our community of beauty enthusiasts.
            </p>
          </div>
          <div className="col-md-4 text-md-start text-lg-end mt-3 mt-md-0">
            <div className="view-all-link d-inline-flex align-items-center">
              View Salon 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {recommendedData.map((salon) => (
            <div className="col-12 col-md-6 col-lg-4" key={salon.id}>
              <SalonCard {...salon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommended;
