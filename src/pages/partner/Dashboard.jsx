import React, { useState } from "react";
import Sidebar from "../../components/partner/Sidebar";
import Header from "../../components/partner/Header";
import Footer from "../../components/partner/Footer";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome />;
      case "services":
      case "staff":
      case "calendar":
      case "bookings":
      case "transaction":
      case "settings":
        return (
          <div className="text-start">
            <h1 className="text-30-700 mb-2 text-white capitalize">
              {activeTab}
            </h1>
            <p className="text-16-400-inter" style={{ color: "#a1a1a1" }}>
              Management interface for {activeTab} coming soon.
            </p>
          </div>
        );
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="partner-dashboard-layout">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Panel */}
      <div className="partner-main-container">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="partner-content">
          {renderContent()}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
