import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const RevenueChart = () => {
  const [selectedFilter, setSelectedFilter] = useState("This week");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filterOptions = ["This week", "Last week", "This month", "This year"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Data matching the mockup curves and currency
  const chartData = {
    "This week": [
      { day: "Mon", revenue: 450 },
      { day: "Tue", revenue: 380 },
      { day: "Wed", revenue: 620 },
      { day: "Thu", revenue: 500 },
      { day: "Fri", revenue: 750 },
      { day: "Sat", revenue: 900 },
      { day: "Sun", revenue: 850 },
    ],
    "Last week": [
      { day: "Mon", revenue: 320 },
      { day: "Tue", revenue: 410 },
      { day: "Wed", revenue: 510 },
      { day: "Thu", revenue: 480 },
      { day: "Fri", revenue: 690 },
      { day: "Sat", revenue: 810 },
      { day: "Sun", revenue: 790 },
    ],
    "This month": [
      { day: "Week 1", revenue: 2200 },
      { day: "Week 2", revenue: 2800 },
      { day: "Week 3", revenue: 3400 },
      { day: "Week 4", revenue: 4100 },
    ],
    "This year": [
      { day: "Q1", revenue: 12000 },
      { day: "Q2", revenue: 15400 },
      { day: "Q3", revenue: 18900 },
      { day: "Q4", revenue: 24500 },
    ],
  };

  const currentData = chartData[selectedFilter] || chartData["This week"];

  // Custom tooltips matching dark dashboard theme
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-chart-tooltip"
          style={{
            background: "#1a1a1a",
            border: "1px solid var(--Neutral-900, #505050)",
            padding: "8px 12px",
            borderRadius: "6px",
            color: "#ffffff",
            fontSize: "12px",
            fontFamily: "Poppins, sans-serif",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <p style={{ margin: 0, color: "#ffb298", fontWeight: "600" }}>
            {`₹${payload[0].value.toLocaleString()}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-card">
      <div className="chart-header" style={{ position: "relative" }}>
        <div className="chart-title-group">
          <h2 className="chart-title">Revenue Analytics</h2>
          <span className="chart-subtitle">Weekly performance overview</span>
        </div>
        <div className="chart-filter-container" ref={dropdownRef}>
          <div
            className="chart-filter-select"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedFilter}</span>
            <ChevronDown
              size={14}
              style={{
                color: "#ffb298",
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease"
              }}
            />
          </div>

          {isDropdownOpen && (
            <div className="chart-dropdown-menu">
              {filterOptions.map((option) => (
                <div
                  key={option}
                  className={`chart-dropdown-item ${selectedFilter === option ? "active" : ""}`}
                  onClick={() => {
                    setSelectedFilter(option);
                    setIsDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="svg-chart-container" style={{ marginTop: "24px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffb298" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#ffb298" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="rgba(255, 255, 255, 0.08)"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(255, 255, 255, 0.4)", fontSize: 11, fontFamily: "Poppins" }}
              dy={10}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "rgba(255, 255, 255, 0.4)", fontSize: 11, fontFamily: "Poppins" }}
              dx={-5}
              tickFormatter={(value) => {
                if (value >= 1000) return `₹${(value / 1000).toFixed(1)}k`;
                return `₹${value}`;
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#ffb298"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#chartGradient)"
              activeDot={{ r: 5, fill: "#ffb298", stroke: "#080808", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
