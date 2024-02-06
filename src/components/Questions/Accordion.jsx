import React from 'react'
import {BsArrowDownCircle , BsArrowUpCircle} from 'react-icons/bs';
import PropTypes from 'prop-types';

import './Questions.scss'

const Accordion = ({title,desc,active,setActive}) => {
  return (

    <div className='accordionContainer'>

        <span className= {(active===title ? 'activeTitle' : "") + " title" + " flex"}>

        {title}
            
            <span onClick={() => setActive(title)}>

              {active === title ? (
                <BsArrowDownCircle className='icon'/>
              ) : (
                <BsArrowUpCircle className='icon'/>
              )}

            </span>
        </span>

        <p className= {(active === title ? "show" : "") + " description"}>
           {desc}
        </p>
    </div>
  )
}


Accordion.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
};

export default Accordion