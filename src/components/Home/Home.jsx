import React , {useEffect} from "react";
import "./Home.scss"

import Video from '../../Assets/video.mp4'
import {AiOutlineSwapRight} from 'react-icons/ai'

import popular1 from '../../Assets/popular1.jpg'
import popular2 from '../../Assets/popular2.jpg'
import popular3 from '../../Assets/popular3.jpg'
import popular4 from '../../Assets/popular4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {


  useEffect(() => {

    Aos.init({duration: 2000})


  },[])

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">

        <h1 data-aos='fade-up'>Unlock Your Travel Dreams With Us!</h1>
        <p data-aos='fade-up'>
          Discover the worlds most adventurous nature,
          life is short for a trip.
        </p>

        <button className='btn' data-aos='fade-up'>GET STARTED <AiOutlineSwapRight className='icon'/> </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
            <h3 data-aos='fade-up' >Popular Places</h3>
            <div className="images flex" data-aos='fade-up'>
              <img src={popular1} alt="" />
              <img src={popular2} alt="" />
              <img src={popular3} alt="" />
              <img src={popular4} alt="" />
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home