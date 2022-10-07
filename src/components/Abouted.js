import React from 'react'
import { Link } from 'react-router-dom'
import './AboutStyles.css'


function Abouted() {
  return (
    <div className='about'>
        <div className='card-container'>
            <div className='card'>
                <h3> -About Us- </h3>
                <span className='bar'></span>
                <p className='name'>Business Owners</p>
                <p>Whether you are trying to better understand your business, or the world around you, 
                    or more accurately forecast future events, we will put your data to work for you.
                     We recognize the various complexities data may present, working with data from all 
                     different industries and types: clean, noisy, dirty, complex or simple data, small 
                     and big data, incomplete or comprehensive data. Grounded in math and applied statistics, 
                     we analyze the problem and let the data decide the best course of action. </p>
                <Link to='/services' className='aboutBtn'>Services</Link>
            </div>
            
            <div className='card'>
                <h3> -About Us- </h3>
                <span className='bar'></span>
                <p className='name'>Data Analysis</p>
                <p>
                    Our in-house proprietary software allows us to scale up without exponentially 
                    increasing our computing costs. We understand that just because a model worked 
                    great a year ago doesn’t mean it will work a year from now. This is why we believe 
                    in continuously monitoring models to ensure they give valuable insight and allow you 
                    to make changes when they are no longer helpful. Think of us as your in-house data science team.
                </p>
                <Link to='/contact' className='aboutBtn'>Contact Us</Link>
            </div>
            <div className='card'>
                <h3> -About Us- </h3>
                <span className='bar'></span>
                <p className='name'>Personal Relations</p>
                <p>
                    Our objective includes providing excelent customer service, from giving instant updates about your business analytics to explaining the intricacies and logic behind machine learning.
                    The Working Data promices to providing excelent customer service, and even more valuable data that is garunteed to help shape the way you opperate your business.
                </p>
                <Link to='/blog' className='aboutBtn'>Blog Page</Link>
            </div>
        </div>

    </div>
  )
}


function AboutedDemo() {
    return (
    <div className='about'>
        <div className='card-container'>
            <div className='card'>
                <h3> -About Us- </h3>
                <span className='bar'></span>
                <p className='name'>Who Are We</p>
                <p>At The Working Data, we will put the data to work for you. 
                Whether you are trying to better understand your business, or the world around you, or more accurately forecast future events, we will put your data to work for you. We recognize the various complexities data may present, working with data from all different industries and types: clean, noisy, dirty, complex or simple data, small and big data, incomplete or comprehensive data.
                Contact us to learn more about what we can do for you.
 </p>
                
            </div>
        </div>
    </div>)
}

export default AboutedDemo