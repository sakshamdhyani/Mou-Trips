import React , {useEffect} from "react";
import './Footer.scss'
import {BiLogoMediumOld} from 'react-icons/bi'
import {ImFacebook} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

useEffect(() => {

    Aos.init({duration: 500})

  },[]);

  return (
    <div className='footer-parent'>
    
      <div className="footer">

          <div className="part1" data-aos='fade-up'>

              <h4>
                <BiLogoMediumOld/>
                <span>Ou-Trips</span>
              </h4>

              <div className='icons' data-aos='fade-up'>
                <ImFacebook className='icon'/>
                <AiFillInstagram className='icon'/>
                <BsTwitter className='icon'/>
              </div>

          </div>

          <div className="part2" data-aos='fade-up'>

            <h4>Helpful Links</h4>

          
              <li>Home</li>
              <li>Explore</li>
              <li>Travel</li>
              <li>Blog</li>
            

          </div>

          <div className="part3" data-aos='fade-up'>

            <h4>Information</h4>

          
              <li>Destination</li>
              <li>Support</li>
              <li>Travel & Condition</li>
              <li>Privacy</li>
            

          </div>


          <div className="part4" data-aos='fade-up'>

            <h4>Contact Details</h4>

          
              <li>+651 125 658</li>
              <li>moutravels@someting.com</li>
              
            

          </div>

          

      </div>
    </div>
  )
}

export default Footer