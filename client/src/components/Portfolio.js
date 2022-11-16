import React from 'react';
import './Portfolio.css';
import projects from '../assets/json_files/projects.json';

function Portfolio() {
  return (
    <div>
      <h3>Portfolio</h3>
      <div className='container'>
        {projects.map((project) => (
          <div className='card'>
            <h4 className='cardHeader'>{project.name}</h4>
            <img className='image' src={project.image} alt='application screenshot'></img>
            <a href={project.deployed} target='_blank' rel='noreferrer'>
              <button type='button' className='btn btn-primary'>Deployed App</button>
            </a>
            <a href={project.github} target='_blank' rel='noreferrer'>
              <button type='button' className='btn btn-secondary'>GitHub Repository</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio