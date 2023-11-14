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
import memoji2 from '../../resources/ee6f84215771afc9503050699b0f837d-sticker.png'
import './home.css'
import Experience from '../experience/experience';
import angularPng from '../../resources/angular.png'
import reactPng from '../../resources/React-icon.svg.png'
import nodePng from '../../resources/1280px-Node.js_logo.svg.png'
import pythonPng from '../../resources/Python-logo-notext.svg.png'
import { Carousel } from 'react-responsive-carousel';
import Projects from '../projects/Projects';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { cyan, green, red, yellow } from '@mui/material/colors';
const Home = () => {
  const [isHidden1, setIsHidden1] = useState(false);
  const [isHidden2, setIsHidden2] = useState(false);
  useEffect(()=>{
    const handleScroll1 = () => {
      const stickyElement = document.querySelector('#homeContent');
      const nextElement = document.querySelector('#homeContent2');

      const stickyRect = stickyElement.getBoundingClientRect();
      const nextRect = nextElement.getBoundingClientRect();

      setIsHidden1(nextRect.top < stickyRect.height -280);
    };

    const handleScroll2 = () => {
      const stickyElement = document.querySelector('#homeContent2');
      const nextElement = document.querySelector('#experience');

      const stickyRect = stickyElement.getBoundingClientRect();
      const nextRect = nextElement.getBoundingClientRect();

      setIsHidden2(nextRect.top < stickyRect.height - 200 );
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
      <div className={'homeContent '+ (isHidden1 && 'hidden')} id='homeContent'>
        <div className='about'>
        <h2><i>Who am I?</i></h2>
        <p> Hello, I'm <span className='highlight'>Nikil</span>, a <span className='highlight'>software engineer</span> based in Arlington, TX, who is experienced in taking fullstack applications from scratch to production.</p>
        <p>I'm currently attending <span className='highlight'>University of Texas at Arlington</span> and will graduate in Dec 2023. With over <span className='highlight'>3 years of professional software development expertise</span>, I seek roles where I can leverage my problem-solving and communication skills to deliver high-quality software with the potential to impact millions of users. </p>
      </div>
      <img src={memoji} className='memoji' alt="I'm Nikil"/>
      </div>

      <div className={'homeContent '+(isHidden2 && 'hidden') } id='homeContent2'>
        <div className='slider'>
        <Carousel emulateTouch={true} autoPlay={true} interval={1000} showThumbs={false} showIndicators={false} infiniteLoop={true}>
          <div><img className='sliderIcon' src={angularPng} /></div>
          <div><img className='sliderIcon' src={pythonPng} /></div>
          <div><img className='sliderIcon' src={reactPng} /></div>
          <div><img className='sliderIcon' src={nodePng} /></div>
          </Carousel>
        <img src={memoji2} className='memoji' alt="I'm Nikil"/>
        </div>
        <div className='about'>
        <h2><i>What do i do?</i></h2>
        <p>I'm a skilled front-end and backend developer with proficiency in <span style={{color:cyan[400], fontWeight:400}}>React.js</span>, <span style={{color:red.A200, fontWeight:400}}>Angular</span>, <span style={{color:green[800], fontWeight:400}}>Node.js</span>, <span style={{color:'#6a1677', fontWeight:400}}>C#</span>, <span style={{color:'#7377ae', fontWeight:400}}>PHP</span>, and <span style={{color:yellow[700], fontWeight:400}}>Python</span>. Specialized in MERN and MEAN stack projects, with a track record of developing successful native mobile applications using React Native.</p></div>
      </div>

    <div className={'timelineWrapper ' + (!isHidden2 && 'hidden')} id='experience'> Education and Experience Timeline
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

    <Projects/>
    </div>
  );
}

export default Home