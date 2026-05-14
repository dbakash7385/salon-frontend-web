import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Recommended from './components/Recommended'
import TrendingSalons from './components/TrendingSalons'
import AppPromo from './components/AppPromo'
import ReviewsSection from './components/ReviewsSection'
import StatsSection from './components/StatsSection'
import PartnersSection from './components/PartnersSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Recommended />
      <TrendingSalons />
      <AppPromo />
      <ReviewsSection />
      <StatsSection />
      <PartnersSection />
      <Footer />
    </>
  )
}

export default App
