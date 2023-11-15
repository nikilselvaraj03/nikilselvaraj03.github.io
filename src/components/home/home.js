import React,{useEffect, useState} from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AmazonIcon from '../../resources/kisspng-amazon-com-amazon-marketplace-online-shopping-amaz-amazon-5adb6f1aa70e84.4953461215243302666843.png'
import SdeIcon from '../../resources/software-engineer.png' 
import Education from '../education/education';
import GraduateStudent from '../../resources/graduate-student (1).png'
import BachelorStudent from '../../resources/graduating-student.png'
import memoji from '../../resources/ce35d5e35d6789d1ab941604673d622c-sticker.png'
import './home.css'
import Experience from '../experience/experience';
import angularPng from '../../resources/angular.png'
import reactPng from '../../resources/React-icon.svg.png'
import nodePng from '../../resources/1280px-Node.js_logo.svg.png'
import pythonPng from '../../resources/Python-logo-notext.svg.png'
import Projects from '../projects/Projects';
import htmlPng from '../../resources/html-5.png'
import cssPng from '../../resources/css-icon.png'
import { cyan, green, grey, red, yellow } from '@mui/material/colors';
import mongodbPng from '../../resources/mongodb.png'
import csharppng from '../../resources/c-sharp-c.svg'
import mySqlPng from '../../resources/mysql.png'
import { Link } from 'react-router-dom';
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHidden1, setIsHidden1] = useState(false);
  const [isHidden2, setIsHidden2] = useState(false);
  useEffect(()=>{
    const handleScroll1 = () => {
      const stickyElement = document.querySelector('#about');
      const nextElement = document.querySelector('#skills');
      const stickyRect = stickyElement.getBoundingClientRect();
      const nextRect = nextElement.getBoundingClientRect();
      setIsHidden1(nextRect.top < stickyRect.height -280);
    };

    const handleScroll2 = () => {
      const stickyElement = document.querySelector('#skills');
      const nextElement = document.querySelector('#timeline_wrapper');

      const stickyRect = stickyElement.getBoundingClientRect();
      const nextRect = nextElement.getBoundingClientRect();
      setIsHidden2(nextRect.top < stickyRect.height - 280 );
    };

    window.addEventListener('scroll', handleScroll1);
    window.addEventListener('scroll', handleScroll2);

    return () => {
      window.removeEventListener('scroll', handleScroll1);
      window.removeEventListener('scroll', handleScroll2);
    };
  },[])
  return (
    <div className='homeWrapper'>
      <div className={'homeContent '+ (isHidden1 && 'hidden')} id='about'>
        <div className='about'>
        <h2><i>Who am I?</i></h2>
        <p style={{marginTop:'25px', textOverflow:'ellipses', maxHeight:'90%', overflow:'auto'}}> I'm a software engineer based in Arlington, TX, with a proficiency in taking <span className='highlight'>full-stack</span> applications, from scratch to production. I'm all about building applications that are not just functional but are also <span className='highlight'>scalable, efficient, and seamlessly intuitive</span>. Currently, I'm balancing my coding adventures with studies at the University of Texas at Arlington, set to graduate in Dec 2023.<br/><br/>With over <span className='highlight'>3 years of professional software development experience</span>, I'm on the lookout for roles where I can leverage my problem-solving and communication skills. I thrive on delivering high-quality software that has the potential to make a real impact on the experiences of millions of users.
        <br/> <span className='highlight'>Let's code something great together!</span></p>
      </div>
      <div className='d-flex flex-column align-items-center justify-content-around h-50'>
      <img src={memoji} className='memoji' alt="I'm Nikil"/>
      <div className='d-flex justify-content-around w-100'>
      <Link to={{pathname:'/static/media/Nikil Nandha_Selvaraj_Resume.pdf'}} target="_blank">
        <span className='border border-1 rounded-pill shadow-sm bg-body fw-light px-3 pill py-1'>Resume</span></Link>
        <Link to="https://www.linkedin.com/in/nikil-nandha-s/" target="_blank">
         <span className='border border-1 bg-body fw-light  px-3 pill py-1 rounded-pill shadow-sm'>LinkedIn</span></Link></div>
      </div>
      
      </div>

      <div className={'homeContent '+(isHidden2 && 'hidden') } id='skills'>
        
      <div className='carousel_wrapper'>
      <span style={{fontSize:'22px', fontWeight:'300', textAlign:'center', letterSpacing:'1.5px', marginBottom:'10%'}}>Technologies i have worked on</span>
      <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div style={{display:'flex', justifyContent:'space-around', width:'90%'}}>
          <div key='slide1'><img className='sliderIconLarge'  src={htmlPng} /></div>
          <div key='slide2'><img className='sliderIconLarge'  src={cssPng} /></div>
          <div key='slide3'><img className='sliderIcon' src={angularPng} /></div>
          <div key='slide4'><img className='sliderIcon' src={reactPng} /></div>
          <div key='slide5'><img className='sliderIcon' src={nodePng} /></div>
      </div>
        <div style={{display:'flex', justifyContent:'space-between',width:'70%', marginTop:'10%'}}>
          <div key='slide1'><img className='sliderIcon' src={pythonPng} /></div>
          <div key='slide2'><img className='sliderIcon' src={csharppng} /></div>
          <div key='slide3'><img className='sliderIcon' src={mongodbPng} /></div>
          <div key='slide4'><img className='sliderIcon' src={mySqlPng} /></div>
      </div>
      </div>
        </div>
        <div className='about'>
        <h2><i>What do i do?</i></h2>
        <p>I'm a skilled front-end and backend developer with proficiency in <span style={{color:cyan[400], fontWeight:400}}>React.js</span>, <span style={{color:red.A200, fontWeight:400}}>Angular</span>, <span style={{color:green[800], fontWeight:400}}>Node.js</span>, <span style={{color:'#6a1677', fontWeight:400}}>C#</span>, <span style={{color:'#7377ae', fontWeight:400}}>PHP</span>, and <span style={{color:yellow[700], fontWeight:400}}>Python</span>. Specialized in MERN and MEAN stack projects, with a track record of developing successful native mobile applications using React Native.</p>
        <p> I have experience working with workflow tools such as Git, Jira, Jenkins, Docker and Kubernetes. I've also worked at Amazon, where i was working with AWS tools and Linux OS.
        </p></div>
      </div>

    <div className={'timelineWrapper ' + (!isHidden2 && 'hidden')} id='timeline_wrapper'> <div style={{marginBottom:'3rem'}}>Education and Experience Timeline</div> 
    <div >
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Aug 2021 - Dec 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img className='icon' src={GraduateStudent} ></img>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Education level='masters'></Education>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Aug 2022 - Dec 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot>
            <img className='icon'  src={AmazonIcon}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Experience company='amazon'/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Feb 2019 - July 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
          <TimelineDot>
            <img src={SdeIcon} className='icon'></img>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Experience company='ducen'/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Aug 2015 - May 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot>
          <img className='icon' src={BachelorStudent} ></img>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Education level='bachelors'></Education>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </div>

    <Projects/>
    </div>
  );
}

export default Home