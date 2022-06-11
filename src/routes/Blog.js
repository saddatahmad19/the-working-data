import React from 'react'
import Blogged from '../components/Blogged'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

function Blog() {
  return (
    <div>
        <Navbar />
        <HeroImage heading="The Working Blog" text="Hear what we have to say" />
        <Blogged/>
        <Footer />
    </div>
  )
}

export default Blog