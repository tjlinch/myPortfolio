import React from 'react';
import './Footer.css';
import icons8github from '../assets/icons8-github-50.png';
import icons8linkedin from '../assets/icons8-linkedin-circled-48.png';

function Footer() {
  return (
    <div className='footer'>
      <a href='https://github.com/tjlinch' target='_blank' rel='noreferrer'>
        <img src={icons8github} alt='github logo'></img>
      </a>
      <a href='https://www.linkedin.com/in/tjlinch47/' target='_blank' rel='noreferrer'>
        <img id='linkedin' src={icons8linkedin} alt='linkedin logo'></img>
      </a>
      <p className='iconDisclaimer'>*Icons by<a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></p>
    </div>
  )
}

export default Footer