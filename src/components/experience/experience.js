import React from 'react'
import Paper from '@mui/material/Paper';
import './experience.css'
const Experience = ({company}) => {
  return (
    <>
    {company == 'amazon' && <Paper className='paper' elevation={6} square={false}><p>Software Development Engineer Intern <b>5 months</b></p>
    <p><b>Amazon</b>, Seattle, WA - United States</p></Paper>}

    {company == 'ducen' && <Paper className='paper' elevation={6} square={false}><p>Associate Software Developer :<b> 2 years 6 months</b></p>
    <p><b>Ducen IT</b>, Chennai - India</p></Paper>}
    </>
  )
}

export default Experience