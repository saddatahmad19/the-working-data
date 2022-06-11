import React from 'react'
import BlogPage1 from '../routes/BlogPages/BlogPage1'
import BlogCard from './BlogCard'

function Blogged() {
  return (
    <div className='blog'>
      <div className='blog-list'>
        <BlogCard 
          title="IMPROVING RESTAURANT LABOR MANAGEMENT THROUGH MACHINE LEARNING" 
          date="September 3, 2021" 
          text1="In the restaurant industry margins are thin and success or failure can come down to how accurate you forecast sales. Everything about your business is based upon the predictions you make for what menu items and how many..." 
          link="/page1"
          />
        <BlogCard title="Card Name" text1="Lorem"/>
        <BlogCard title="Card Name" text1="Lorem"/>
      </div>
    </div>
  )
}

export default Blogged