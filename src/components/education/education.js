import React from 'react'
import Paper from '@mui/material/Paper';
import './education.css'

const Education = ({level}) => {
  return (
    <>
    {level == 'masters' && <Paper className='paper' elevation={6} square={false}><p>Master of Science :<b> Computer Science</b></p>
    <p>University of Texas at Arlington, Tx - United States</p></Paper>}

    {level == 'bachelors' && <Paper className='paper' elevation={6} square={false}><p>Bachelor of Engineering :<b> Computer Science & Engineering</b></p>
    <p>Anna University, Chennai - India</p></Paper>}
    </>
  )
}

export default Education;