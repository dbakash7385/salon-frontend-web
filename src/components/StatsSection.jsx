import React from "react";

const statsData = [
  {
    id: 1,
    number: "1 Million+",
    label: "APPOINTMENTS BOOKED",
  },
  {
    id: 2,
    number: "130,000+",
    label: "PARTNER BUSINESSES",
  },
  {
    id: 3,
    number: "45,000+",
    label: "STYLISTS & PROFESSIONALS",
  },
  {
    id: 4,
    number: "4.9",
    label: "AVERAGE RATING",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container-fluid" style={{ padding: " 0px 50px" }}>
        <div className="row justify-content-center text-center g-4 align-items-center">
          {statsData.map((stat) => (
            <div className="col-6 col-md-3" key={stat.id}>
              <div className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
