import React from 'react'
import Footer from '../components/Footer'

import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

function Services() {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Our Services" text="Data is what we do"/>
        <Footer />
    </div>
  )
}

export default Services