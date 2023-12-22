import React from 'react'
import Paper from '@mui/material/Paper';
import './experience.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompanySelection } from '../../reducers/experienceSlice';
const Experience = ({company}) => {
  const dispatch = useDispatch()
  const selectedCompany = useSelector(state => state.experience.selectedCompany);
  const toggleExpand= (company) => {
    if(selectedCompany==company) {
      dispatch(toggleCompanySelection(null));
      return;
    }
    dispatch(toggleCompanySelection(company.toString()))
  }
  return (
    <>
    {company == 'amazon' && <Paper onClick={()=>{toggleExpand('amazon');}} className={'paper exp '+ (selectedCompany == 'amazon' ? 'expand' : '')} elevation={6} square={false}><p><b>Software Development Engineer Intern :</b> 5 months</p>
    <p className='company'><b>Amazon</b>, Seattle, WA - United States<span className='d_time d-none'><br/>Aug 2022 - Dec 2022</span></p><div className='description'>Duties: Implemented error logging for Amazon's switch devices. Streamlined identification, triage, and remediation for 10,000+ devices. Analyzed Linux OS boot in a debugging-limited environment and with the inherent risk of bricking routing switch devices. Integrated changes during hardware initialization for reliability. Regularly presented project updates to stakeholders. Received positive feedback on effectiveness and scalability.</div></Paper>}

    {company == 'ducen' && <Paper onClick={()=>{toggleExpand('ducen');}} className={'paper exp '+ (selectedCompany == 'ducen' ? 'expand':'')} elevation={6} square={false}><p><b>Associate Software Developer :</b> 2 years 6 months</p>
    <p className='company'><b>Ducen IT</b>, Chennai - India<span className='d_time d-none'><br/>Feb 2019 - July 2021</span></p><div className='description'>Duties:  played a key role in revamping the User Interface, Backend services, and API endpoints of the Business Intelligence application "Analance." Leveraging Angular, C#, .NET, and MongoDB. Optimized data visualization by lazy loading of charts, reducing page latency by 28%. Introducing new themes and chart types significantly improved the user experience, contributing to the acquisition of two major clients, including "Bell" Canada. Achieved 40% reduction in received application size by
employing Brotli .NET compression for swifter build file transfers.





</div></Paper>}

    {company == 'uta' && <Paper onClick={()=>{toggleExpand('uta');}} className={'paper exp '+(selectedCompany == 'uta' ? 'expand' : '')} elevation={6} square={false}><p><b>Graduate Teaching Assistant :</b> 1year 5 months</p>
    <p className='company'><b>University of Texas at Arlington</b>, Tx -United States<span className='d_time d-none'><br/>Jan 2022 - Dec 2023</span></p><div className='description'>In my role as a Graduate Teaching Assistant for the Marketing and Management Department, I actively contributed to the enhancement of their website by reducing technical errors and improving content consistency.  I supported a Ph.D. research project by developing a user interface and backend using React.js and PHP, utilizing Open AI's chat completion API to analyze demographics and generative AI usage. Additionally, I managed exam creation, proctoring in Canvas, and grade uploads for professors.</div></Paper>}
    </>
  )
}

export default Experience