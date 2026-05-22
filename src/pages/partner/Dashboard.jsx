import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/partner/Sidebar";
import Header from "../../components/partner/Header";
import Footer from "../../components/partner/Footer";
import DashboardHome from "./DashboardHome";
import Services from "./Services";
import Staff from "./Staff";
import Transactions from "./Transactions";
import Calendar from "./Calendar";
import Bookings from "./Bookings";
import Settings from "./Settings";
import Notifications from "./Notifications";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Derive the active tab identifier from the current path segment
  const getActiveTab = () => {
    const path = location.pathname.split("/").pop();
    if (path === "partner" || path === "") return "home";
    if (path === "dashboard") return "home";
    return path || "home";
  };

  const activeTab = getActiveTab();

  const handleSetActiveTab = (tabId) => {
    if (tabId === "home") {
      navigate("/partner/dashboard");
    } else {
      navigate(`/partner/${tabId}`);
    }
  };

  return (
    <div className="partner-dashboard-layout">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Panel */}
      <div className="partner-main-container">
        <Header onMenuClick={() => setIsSidebarOpen(true)} setActiveTab={handleSetActiveTab} />
        
        <main className="partner-content">
          <Routes>
            <Route index element={<Navigate to="/partner/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="services" element={<Services />} />
            <Route path="staff" element={<Staff />} />
            <Route path="transaction" element={<Transactions />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="*" element={<Navigate to="/partner/dashboard" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
