import React from 'react'
import "./VideoStyles.css"
import {Link} from 'react-router-dom'
import background from '../assets/background.jpg'

function Video() {
  return (
    <div className='hero' style={{backgroundImage:`url(${background})`}}>
        <video autoPlay loop muted id='video'>
            <source></source>
        </video>
        <div className='content'>
            <h1>The Working Data</h1>
            <p>Finding Solutions by putitng your data to work</p>
            <div>
                <Link to='/services' className='btn'>Our Services</Link>
                <Link to='/services' className='btn btn-light'>Free Consultation</Link>
            </div>
        </div>
    </div>

  )
}

export default Video