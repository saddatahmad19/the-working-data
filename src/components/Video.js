import React from 'react'
import "./VideoStyles.css"
import {Link} from 'react-router-dom'
import background from '../assets/background.jpg'

function Video() {
  return (
    <div className='hero' id='image' style={{backgroundImage:`url(${background})`}}>
        
        <div className='content'>
          <div className='borderContent'>
            <h1>The Working Data</h1>
            <p>Finding Solutions by putting your data to work</p>
            <div>
                <Link to='/services' className='btn'>Our Services</Link>
                <Link to='/contact' className='btn btn-light'>Free Consultation</Link>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Video