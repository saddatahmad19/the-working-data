import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Abouted from '../components/Abouted'

function About() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='About Us' text='Who are we'/>
        <Abouted />
        <Footer />
    </div>
  )
}

export default About