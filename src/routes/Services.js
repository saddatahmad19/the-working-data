import React from 'react'
import Footer from '../components/Footer'

import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Service from '../components/Service'

function Services() {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Our Services" text="Data is what we do"/>
        <Service/>
        <Footer />
    </div>
  )
}

export default Services