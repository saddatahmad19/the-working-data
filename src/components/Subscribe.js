import React from 'react'
import './SubscribeStyles.css'


function Subscribe() {
  return (
    <div className='sub-bar'>
        <h1 className='sub-heading'>Subscribe to our newsletter</h1>
        <div className='sub-form'>
        
            <form>
               
                <input type='sub-email' placeholder='Email'></input>
                <button className='sub-btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe