import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CustomerHome from './pages/customer/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'

// Placeholder for Partner Dashboard
const PartnerDashboard = () => (
  <div className="bg-black min-vh-100 d-flex align-items-center justify-content-center text-white">
    <h1>Partner Dashboard Coming Soon</h1>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Customer Routes */}
        <Route path="/customer/home" element={<CustomerHome />} />

        {/* Partner Routes */}
        <Route path="/partner/dashboard" element={<PartnerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
