import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h3>About Me</h3>
      <div className='row1'>
        <img src='https://wildlandtrekking.com/content/uploads/2020/09/ROCKY-MOUNTAINS.jpg' alt='Colorado Mountains'></img>
        <p>Hi, my name is Tyler and I'm a 24 year old software developer based in Denver, Colorado. Though I've always had an interest, I started coding consistently in July of 2022. Since then, I have learned many new technologies, and continue to expand my knowledge of programming languages.</p>
      </div>
      <div className='row2'>
        <p>I have spent most of my professional career working in the service industry, and I am now looking to make the jump into Software Development</p>
        <img src='https://avatars.githubusercontent.com/u/109873828?v=4' alt='github profile'></img>
      </div>
      <div className='row1'>
        <img src='https://i0.wp.com/letsgodu.com/wp-content/uploads/2022/06/image.png?resize=300%2C249&ssl=1' alt='University of Denver'></img>
        <p>In October of 2022, I completed a full-stack coding bootcamp through the University of Denver. I'm very excited to apply the things I've learned so far in a work environment, and to continue to grow as a software engineer.</p>
      </div>
    </div>
  )
}

export default About