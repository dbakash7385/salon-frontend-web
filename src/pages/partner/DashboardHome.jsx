import React from "react";
import { CalendarCheck, Briefcase } from "lucide-react";
import StatsCard from "../../components/partner/StatsCard";
import RevenueChart from "../../components/partner/RevenueChart";
import RecentBookings from "../../components/partner/RecentBookings";

const DashboardHome = () => {
  const stats = [
    {
      title: "Revenue",
      value: "12,450",
      trendText: "+12% from last week",
      trendColor: "#10b981",
      icon: "₹",
    },
    {
      title: "Total Booking",
      value: "148",
      trendText: "+4% from last week",
      trendColor: "#10b981",
      icon: CalendarCheck,
    },
    {
      title: "Total Services",
      value: "5",
      trendText: "Hot stone - most popular this week",
      trendColor: "#10b981",
      icon: Briefcase,
    },
  ];

  return (
    <div className="partner-home-tab">
      <div className="text-24-500-Poppins mb-2 text-start">Dashboard</div>
      <div className="text-14-400 text-start" style={{ color: "#787878" }}>
        Welcome back, here's what's happening today
      </div>

      {/* Metrics Row */}
      <div className="dashboard-stats-grid">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Chart & Booking split row */}
      <div className="dashboard-charts-grid">
        <RevenueChart />
        <RecentBookings />
      </div>
    </div>
  );
};

export default DashboardHome;
