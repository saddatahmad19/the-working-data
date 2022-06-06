import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
function Contact() {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT' text='Contact Us for all your business needs'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact