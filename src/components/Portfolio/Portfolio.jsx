import './Portfolio.scss'
import React , {useEffect} from "react";
// import assets
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {

useEffect(() => {

    Aos.init({duration: 2000})

  },[])

  return (
    <div className='portfolio section container'>

        <div className="secContainer">

        <div className="secHeading">
                  <h3 data-aos='fade-up'>Why should you choose us </h3>
                  <p data-aos='fade-up'>
                    We have extensive knowledge and experience in the travel industry.
                  </p>
        </div>

              <div className="grid">
                <div className="singlePortfolio flex">
                    <div className="iconDiv" data-aos='fade-up'>
                      <img src={icon1} alt="" height={2}/>
                    </div>

                    <div className="infor"  data-aos='fade-up'>
                      <h4 data-aos='fade-up'>Safety and Support</h4>
                      <p data-aos='fade-up'>
                        Our top priority is the safety and well-being of our clients.
                        We maintain high safety standards and have emergency support available
                        during the trip.
                      </p>
                    </div>
                </div>

                <div className="singlePortfolio flex" data-aos='fade-up'>
                    <div className="iconDiv">
                      <img src={icon2} alt="" height={2}/>
                    </div>

                    <div className="infor" data-aos='fade-up'>
                      <h4 data-aos='fade-up'>Diverse Range of Destinations</h4>
                      <p data-aos='fade-up'>
                        Weather its a domestic tour or an international adventure, we cover a wide range of destinations to
                        cater to different interests and preferences.
                      </p>
                    </div>
                </div>

                <div className="singlePortfolio flex" data-aos='fade-up'>
                    <div className="iconDiv">
                      <img src={icon3} alt="" height={2}/>
                    </div>

                    <div className="infor">
                      <h4>Customer Support</h4>
                      <p>
                        Our dedicated customer support eam is available round the clock to address
                        any queries or concerns before, during, and after the trip.
                      </p>
                    </div>
                </div>
              </div>

        </div>
    </div>
  )
}

export default Portfolio