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
    <p><b>Amazon</b>, Seattle, WA - United States</p><div className='description'>Hi</div></Paper>}

    {company == 'ducen' && <Paper onClick={()=>{toggleExpand('ducen');}} className={'paper exp '+ (selectedCompany == 'ducen' ? 'expand':'')} elevation={6} square={false}><p><b>Associate Software Developer :</b> 2 years 6 months</p>
    <p><b>Ducen IT</b>, Chennai - India</p><div className='description'>Hi</div></Paper>}

    {company == 'uta' && <Paper onClick={()=>{toggleExpand('uta');}} className={'paper exp '+(selectedCompany == 'uta' ? 'expand' : '')} elevation={6} square={false}><p><b>Graduate Teaching Assistant :</b> 1year 5 months</p>
    <p><b>University of Texas at Arlington</b>, Tx -United States</p><div className='description'>Hi</div></Paper>}
    </>
  )
}

export default Experience