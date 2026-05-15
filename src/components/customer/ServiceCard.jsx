import React from "react";
import { MapPin, Star, Clock, Calendar } from "lucide-react";

const ServiceCard = ({
  image,
  category,
  title,
  salon,
  location,
  available,
  description,
  rating,
  reviewCount,
  duration,
  price,
}) => {
  return (
    <div className="service-card bg-dark-card rounded-4 overflow-hidden  border-1-white-10 transition-300">
      <div className="position-relative">
        <img
          src={image}
          alt={title}
          className="w-100 object-fit-cover"
          style={{ height: "220px" }}
        />

        {/* Category Badge */}
        <div className="position-absolute top-0 start-0 m-3">
          <span className="category-badge">{category}</span>
        </div>

        {/* Availability Badge */}
        {available && (
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge-availables">
              <span className="dot-greens me-2"></span> Available
            </span>
          </div>
        )}
      </div>

      <div className="p-4 d-flex flex-column h-100">
        <div className="flex-grow-1">
          <h5 className="text-white text-20-500 mb-1 truncate-single">{title}</h5>
          <p className="text-14-400 mb-2 truncate-single">{salon}</p>

          <div className="d-flex align-items-center gap-2  mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_835_10756)">
                <path
                  d="M11.6511 5.82554C11.6511 8.73427 8.42427 11.7636 7.3407 12.6992C7.23975 12.7751 7.11688 12.8161 6.99058 12.8161C6.86428 12.8161 6.7414 12.7751 6.64046 12.6992C5.55689 11.7636 2.33008 8.73427 2.33008 5.82554C2.33008 4.5895 2.82109 3.40408 3.69511 2.53007C4.56912 1.65605 5.75454 1.16504 6.99058 1.16504C8.22662 1.16504 9.41204 1.65605 10.2861 2.53007C11.1601 3.40408 11.6511 4.5895 11.6511 5.82554Z"
                  stroke="white"
                  stroke-opacity="0.6"
                  stroke-width="1.16513"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99085 7.57326C7.95607 7.57326 8.73854 6.79079 8.73854 5.82557C8.73854 4.86035 7.95607 4.07788 6.99085 4.07788C6.02563 4.07788 5.24316 4.86035 5.24316 5.82557C5.24316 6.79079 6.02563 7.57326 6.99085 7.57326Z"
                  stroke="white"
                  stroke-opacity="0.6"
                  stroke-width="1.16513"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_835_10756">
                  <rect width="13.9815" height="13.9815" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            <span className="text-14-400">{location}</span>
          </div>

          <p className="text-14-400 mb-3 description-text">{description}</p>

          <div className="d-flex align-items-center gap-4 mb-3">
            <div className="d-flex align-items-center">
              <Star size={16} fill="#ffb298" className="text-peach me-1" />
              <span className="text-white font-medium">{rating}</span>
              <span className=" text-14-400 ms-1" style={{ marginTop: "5px" }}>
                ({reviewCount})
              </span>
            </div>
            <div className="d-flex align-items-start gap-2 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_835_10772)">
                  <path
                    d="M6.99066 12.8163C10.2081 12.8163 12.8163 10.2081 12.8163 6.99066C12.8163 3.77326 10.2081 1.16504 6.99066 1.16504C3.77326 1.16504 1.16504 3.77326 1.16504 6.99066C1.16504 10.2081 3.77326 12.8163 6.99066 12.8163Z"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="1.16513"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.99121 3.49536V6.99074L9.32146 8.15586"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="1.16513"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_835_10772">
                    <rect width="13.9815" height="13.9815" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              <span className="text-14-400">{duration}</span>
            </div>
          </div>
        </div>

        <div className="border-top-white-10 pt-3 mt-auto py-1">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className=" text-12-400 mb-0">Starting from</p>
              <h4 className="text-peach mb-0 font-bold">${price}</h4>
            </div>
            <button className="partner-btn d-flex align-items-center gap-2">
              <Calendar size={18} />
              <span>Book</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .bg-dark-card {
          background: #141414;
        }
        .badge-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .badge-available {
          background: rgba(39, 174, 96, 0.2);
          border: 1px solid rgba(39, 174, 96, 0.3);
          color: #2ecc71;
        }
        .dot-green {
          width: 8px;
          height: 8px;
          background-color: #2ecc71;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #2ecc71;
        }
        .description-text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.5;
        }
        .truncate-single {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .border-top-white-10 {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .btn-book {
          background: #ffb298;
          color: #121212;
          border: none;
          padding: 8px 24px;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-book:hover {
          background: #ffa07a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 178, 152, 0.3);
        }
        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 178, 152, 0.4) !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
        }
        .transition-300 {
          transition: all 0.3s ease;
        }
        .text-peach {
          color: #ffb298;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
