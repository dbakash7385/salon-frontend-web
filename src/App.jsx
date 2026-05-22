import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CustomerHome from './pages/customer/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import CustomerAccount from './pages/customer/Account'
import ViewServicesDetail from './pages/customer/ViewServicesDetail'
import Salons from './components/Salons'
import PartnerSignupPage from './pages/partner/Signup'
import PartnerDashboard from './pages/partner/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/salons" element={<Salons />} />

        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Customer Routes */}
        <Route path="/customer/home" element={<CustomerHome />} />
        <Route path="/customer/account" element={<CustomerAccount />} />
        <Route path="/customer/services-detail" element={<ViewServicesDetail />} />
        <Route path="/customer/about" element={<AboutUs isCustomer={true} />} />
        <Route path="/customer/contact-us" element={<ContactUs isCustomer={true} />} />

        {/* Partner Routes */}
        <Route path="/partner-signup" element={<PartnerSignupPage />} />
        <Route path="/partner/*" element={<PartnerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
