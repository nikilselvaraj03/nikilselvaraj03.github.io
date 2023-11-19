import React from 'react';
import Card from '../card/Card';
import './Projects.css'
const Projects = () => {
  return (
    <div className='project' id='projects'>
      <h2 className='project__title'>Noteworthy Projects</h2>
        <div className='projects'>
          <div className='seperators'>
          <div className='inline_seperator'><Card></Card></div>
          <div className='inline_seperator'><Card></Card></div>
           <div className='inline_seperator'><Card></Card></div>
          </div>
        </div>
    </div>
  )
}

export default Projects