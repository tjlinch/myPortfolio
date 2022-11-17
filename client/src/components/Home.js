import React from 'react';
import './Home.css';
import technologies from '../assets/json_files/technologies.json';


function Home() {
  return (
    <div className='home'>
      <h3>Welcome to my Portfolio!</h3>
      <div className='photoContainer'>
        <img className='homePhoto' src='https://media-exp1.licdn.com/dms/image/C5603AQG8BqXAiDV_OQ/profile-displayphoto-shrink_800_800/0/1517229610292?e=1671062400&v=beta&t=XBeXkSlJJikmLAmAMYbFf3mpAXnZtKqaitoJ4Wub_sE' alt='LinkedIn profile'></img>
      </div>
      <p className='homeParagraph'>Thanks for visiting my portfolio site. This application will serve as a place to present my current and future projects in software development.</p>
      <p className='homeParagraph'>You can also find links to my other online profiles in the footer, as well as contact me directly through the Contact page.</p>
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