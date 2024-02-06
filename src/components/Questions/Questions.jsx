import React, { useState ,useEffect} from 'react'
import './Questions.scss'
import Accordion from './Accordion'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Questions = () => {

  const [active , setActive] = useState("How do I choose the right travel destination for me?");

  useEffect(() => {

    Aos.init({duration: 2000})


  },[])

  return (

    <div className='questions section container'>
      <div className='secHeading'>
        <h3 data-aos = 'fade-up'>Frequently Asked Questions</h3>
      </div>

      <div className="secContainer grid" data-aos = 'fade-up'>

        {/* we will import a component from a different file*/}

        <div className="accordion grid">
          <Accordion
            title= "How do I choose the right travel destination for me?"
            desc= {`Consider your interests, budget, desired 
            experiences, and the type of environment your enjoy.
            Research destinations that align with your preferences and
            offer attractions or activities you find appealing.`}

            active={active}
            setActive={setActive}
          />
          
          <Accordion
            title= "What are the best times to visit specific destinations?"
            desc= {`Research the climate, weather patterns, and peak tourist seasons of the
            destination you're interested in. Opt for the shoulder season when the weather
            is pleasant, and crowds are fewer, if possible`}

            active={active}
            setActive={setActive}
          />

        </div>

        <div className="form">
          <div className='secHeading'>
            <h4>Do you have any specific question?</h4>
            <p>
              Please fill the form below and our dedicated team will 
              get intouch with your as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address'/>
            <textarea placeholder='Enter your question here'></textarea>
            <button className='btn'>Submit Inquiry</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Questions