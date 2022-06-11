import React from 'react'
import './ServiceStyles.css'
import Data from '../assets/data.jpg'

function Service() {
  return (
    <div className='wrapper'>
      <div className='service-list'>

        <div className='service'>
          <div className='service-image'>
            <img src={Data}></img>
          </div>
          <div className='service-article'>
            <h1>What We Do</h1>
            <p>Lorem</p>
          </div>
        </div>

        <div className='service'>
          <div className='service-image'>
            <img src={Data}></img>
          </div>
          <div className='service-article'>
            <h1>What We Do</h1>
            <p>Lorem</p>
          </div>
        </div>

        <div className='service'>
          <div className='service-image'>
            <img src={Data}></img>
          </div>
          <div className='service-article'>
            <h1>What We Do</h1>
            <p>Lorem</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Service