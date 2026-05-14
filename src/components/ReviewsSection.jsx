import React from "react";
import ReviewCard from "./ReviewCard";

const reviewData = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    review:
      "Finally a platform that curates high-end services. My go-to for spa days.",
    name: "Olivia Davis",
    role: "SPA DAY",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    review:
      "The best booking experience I've ever had. Found an amazing stylist in minutes.",
    name: "Sarah Jenkins",
    role: "HAIR STYLING",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    review:
      "Noir Barber & Co is top tier. LuxeSalon made it easy to find them.",
    name: "Michael Chen",
    role: "BARBER",
  },
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="container-fluid" style={{ padding: " 0px 50px" }}>
        <h2 className="text-42-400 mb-5 text-center">What Our Clients Say</h2>

        <div className="row g-4 justify-content-center">
          {reviewData.map((review) => (
            <div className="col-12 col-md-6 col-lg-4" key={review.id}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
