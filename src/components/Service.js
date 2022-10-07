import React from 'react'
import './ServiceStyles.css'
import Data from '../assets/data.jpg'
import Analysis from '../assets/dataanalysis.jpg'
import Machine from '../assets/machinelearning.jpg'

import Testimonial from './Testimonial'

function Service() {
  return (
    <div className='wrapper'>
      <div className='service-list'>

        <div className='service'>
          <div className='service-image'>
            <img src={Machine}></img>
          </div>
          <div className='service-article'>
            <h1>Machine Learning</h1>
            <p>There are some patterns that humans cannot notice with the naked eye. With modern machine learning, we use all of the data available from your business to formulate the best course of actions for you to take </p>
          </div>
        </div>

        <div className='service'>
          <div className='service-image'>
            <img src={Analysis}></img>
          </div>
          <div className='service-article'>
            <h1>Data Analysis</h1>
            <p>The role of data and subsequently data analysis is an important one when considereing how to grow, manage, and optimize how you run your business. Companies can reduce costs by implementing effective data analysis into their business models by identifying more efficient ways of doing business and storing large amounts of data. Companies can also use optimize their business performance by identifying trends and strategies.</p>
          </div>
        </div>

        <div className='service'>
          <div className='service-image'>
            <img src={Data}></img>
          </div>
          <div className='service-article'>
            <h1>Artificial Intelligence</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

     

      </div>
    </div>
  )
}


function ServiceDemo(){
  return(
    <div className='wrapper'>
      <div className='service-list'>

        <div className='service'>
          <div className='service-image'>
            <img src={Machine}></img>
          </div>
          <div className='service-article'>
            <h1>Our Services</h1>
            <p>There are some patterns that humans cannot notice with the naked eye. With modern machine learning, we use all of the data available from your business to formulate the best course of actions for you to take </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDemo