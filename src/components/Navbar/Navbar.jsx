import React, { useState } from 'react'
import './Navbar.scss'
import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {

  const [navbar , setNavBar] = useState('menu');

  // function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  }

  // function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  }


  return (
    <div className='navBar'>
      <div className="logoDiv">
        <BiLogoMediumOld className='icon'/>
        <span>Ou-Trips</span>
      </div>

      <div className={navbar}>
        <ul>
            <li className='navList'>
              Destination
            </li>
            <li className='navList'>
              About Us
            </li>
            <li className='navList'>
              Testimonial
            </li>
            <li className='navList'>
              Gallary
            </li>
        </ul>

        {/* Icon to remove navbar */}
        <AiFillCloseCircle className='icon closeIcon' 
          onClick={removeNavBar}
        />
      </div>

      <button className="signUpBtn btn">Sign Up</button>

      {/* Icon to Toggle navbar */}
      <PiDotsNineBold className='icon menuIcon' 
        onClick={showNavBar}
      />
    </div>
  )
}

export default Navbar