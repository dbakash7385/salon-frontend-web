import React from "react";

const StatsCard = ({ title, value, trendText, trendColor, icon: Icon }) => {
  return (
    <div className="dashboard-stat-card">
      <div className="stat-card-left">
        <span className="stat-card-label">{title}</span>
        <span className="stat-card-value">{value}</span>
        <span className="stat-card-trend" style={{ color: trendColor }}>
          {trendText}
        </span>
      </div>
      <div className="stat-card-icon-wrapper">
        {typeof Icon === "string" ? (
          <span style={{ fontSize: "20px", fontWeight: "600", fontFamily: "Poppins" }}>
            {Icon}
          </span>
        ) : (
          <Icon size={20} />
        )}
      </div>
    </div>
  );
};

export default StatsCard;
