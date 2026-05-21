import React, { useState } from "react";
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

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome />;
      case "services":
        return <Services />;
      case "staff":
        return <Staff />;
      case "transaction":
        return <Transactions />;
      case "calendar":
        return <Calendar />;
      case "bookings":
        return <Bookings />;
      case "settings":
        return <Settings />;
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
