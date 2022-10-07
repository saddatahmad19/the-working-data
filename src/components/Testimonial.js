import React from 'react'
import Slider from 'react-slick'
import { TestCard } from './TestCard'
import './TestimonialsStyles.css'


function Testimonial() {
  return (
    <div className='testWrapper'>
        <div className='testimonial-list'>
            <Slider>
                <TestCard name="Jack" industry="Finance" comment="Lorem ipsum"/>
                <TestCard name="Jack" industry="Finance" comment="Lorem ipsum"/>
                <TestCard name="Jack" industry="Finance" comment="Lorem ipsum"/>
            </Slider>
        </div>
    </div>
  )
}

export default Testimonial