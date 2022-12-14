import React from 'react';
import './Home.css';
import technologies from '../assets/json_files/technologies.json';
import homePhoto from '../assets/images/IMG_2335.jpg';


function Home() {
  return (
    <div className='home'>
      <h3>Welcome to my Portfolio!</h3>
      <div className='photoContainer'>
        <img className='homePhoto' src={homePhoto} alt='Tyler Linch'></img>
      </div>
      <div className='paragraphContainer'>
        <p className='homeParagraph'>Thanks for visiting my portfolio site. This application will serve as a place to present my current and future projects in software development.</p>
        <p className='homeParagraph'>You can also find links to my other online profiles in the footer, as well as contact me directly through the Contact page.</p>
      </div>
      <div className='technologiesContainer'>
        {technologies.map((technology) => (
          <div className='techCard'>
            <p>{technology.name}</p>
            <img className ='techImage' src={technology.image} alt={technology.name}></img>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home