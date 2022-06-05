import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                
                    <h4><FaSearchLocation size={20} style={{color:'#ffffff', marginRight:'2rem'}} />Chicago, IL</h4>
                    
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#ffffff', marginRight:'2rem'}} />1-800-123-4567</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight:'2rem'}}/>theworkingdata@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
               <h4>About The Company</h4>
               <p>
                   ajksnhsadivinsaviviasnvjasnv asviasj vj  nne
                    j fuew wjfbewufweb fiewfbewjfwj fwe hf\
                </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:'#ffffff', marginRight:'1rem'}} />
                    <FaTwitter size={30} style={{color:'#ffffff', marginRight:'1rem'}} />
                    <FaLinkedin size={30} style={{color:'#ffffff', marginRight:'1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer