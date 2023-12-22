import React from 'react';
import utaPng from '../../resources/uta.png';
import annaUniv from '../../resources/Anna University.png';
import './education.css';

const Education = () => {
  return (
    <div className='d-flex w-100 education align-items-center justify-content-center flex-direction-column' id='education'> 
    <div className='h-25 d-flex align-items-end'><h1>Education</h1> </div>
    <div className='d-flex w-100 justify-content-around h-75 education_wrapper'>
    <div className='d-flex flex-column w-50 align-items-start'>
    <p> <img  src={utaPng} style={{width:'5rem', height:'4rem', marginRight:'1rem'}}></img><h2 style={{display:'inline'}}>University of Texas at Arlington</h2></p>
    <p>Master of Science :<b> Computer Science</b></p>
    <p>Specializing in Software Engineering and Database Systems</p>
    <p>Tx - United States, Aug 2021 - Dec 2023</p>
    <p>GPA 4.0 / 4.0</p>
    </div>

    <div className='d-flex flex-column w-50 align-items-start'>
    <p> <img style={{width:'6rem', height:'5rem', marginRight:'1rem'}} src={annaUniv}></img><h2 style={{display:'inline'}}>Anna University</h2></p>
    <p>Bachelor of Engineering :<b> Computer Science & Engineering</b></p>
    <p>Chennai - India, Aug 2015 - May 2019</p>
    <p>GPA 7.0 / 10</p>
    <br/>
    <br/>
    </div>
    </div>
    </div>
  )
}

export default Education;