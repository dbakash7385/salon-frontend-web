import React from "react";
import TrendingCard from "./TrendingCard";

const trendingData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "WELLNESS CENTER",
    title: "Noir Barber & Co",
    location: "Downtown",
    reviews: "512",
    rating: "4.9",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "BARBERSHOP",
    title: "Noir Barber & Co",
    location: "West End",
    reviews: "320",
    rating: "4.8",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "HAIR STUDIO",
    title: "Elena's Atelier",
    location: "Uptown",
    reviews: "150",
    rating: "5.0",
  },
];

const TrendingSalons = () => {
  return (
    <section className="trending-section">
      <div className="container-fluid" style={{ padding: " 0px 50px" }}>
        <h2 className="text-42-400 text-center mb-5">Trending Salons</h2>

        <div className="row g-4 justify-content-center">
          {trendingData.map((salon) => (
            <div className="col-12 col-md-6 col-lg-4" key={salon.id}>
              <TrendingCard {...salon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSalons;
