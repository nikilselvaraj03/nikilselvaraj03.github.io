import React, { useEffect, useState } from 'react';
import { CCardBody } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCard } from '@coreui/react'
import Carousel from 'react-simply-carousel'
import reactfirebase from '../../resources/reactfirebase.png';
import android from '../../resources/android.webp';
import androidFirebase from '../../resources/androidFirebase.jpeg';
import reactspring from '../../resources/reactspring.jpg';
import leftBlack from '../../resources/1608508_angle_left_icon.png';
import rightBlack from '../../resources/1608509_angle_right_icon.png';
import './Projects.css'
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import linkPng from '../../resources/Daco_5096184.png'
const Projects = () => {
  useEffect(()=>{
    setActiveSlide(0)
  },[])
  const [activeSlide, setActiveSlide] = useState(1);
  const projectDesc=[{
    title: 'Real-time File Sharing and Synchronization Platform',
    imgSrc: reactspring,
    desc: 'Multithreaded file sharing platform with real-time synchronization, and collaborative file editing. Used “file.WatchService” API to keep changes in sync with cloud and on-device files. Implemented a user-friendly React.js frontend to facilitate seamless file operations, collaboration, and management.',
    link:'https://github.com/nikilselvaraj03/Synchronous-File-Server',
    techStack:['React.js',' Java','Spring Boot', 'Maven']
  },{
    title: 'SecureGroup Chat App',
    imgSrc: reactfirebase,
    desc: 'Cross-platform group messaging app for iOS and Android with privacy, decluttering options, end-to-end encryption, and file sharing.',
    link:'https://github.com/nikilselvaraj03/SecureGroup-Chat-App',
    techStack:['React Native',' Redux', ' Firebase', ' Google Fused Location Provider API']
  },{
    title: 'Audio fingerprinting based Intelligent Media Content Identifier',
    imgSrc: android,
    desc: 'Android application that accurately recognizes media content from audio sources and displays metadata using efficient audio processing and fingerprinting algorithm.',
    link:'https://github.com/nikilselvaraj03/Audio-Content-Recognition',
    techStack:['Java',' XML','  ACR Cloud']
  },{
    title: 'Career Fair Recruitment App',
    imgSrc: androidFirebase,
    desc: 'Android app to streamline career fair and recruitment processes for an educational institution with a user-friendly dashboard for recruiters with Integrated video interview scheduling, resulting in an overall increase in candidate engagement.',
    link:'https://github.com/nikilselvaraj03/Career-Fair-Recruitment-Application',
    techStack:[' Java', ' XML', ' Firebase cloud storage', ' Firebase Realtime Database', ' Google youtube provider api']
  }]
  return (
    <div className='project' id='projects'>
      <h2 className='project__title'>Noteworthy Projects</h2>
        <div className='projects'>
        <Carousel
        infinite={true}
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
            transition: 'all .7s ease',
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            transform:'scale(1.1)',
            backgroundColor:grey[800],
            color:'white'
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: (<img style={{width: 20,
            height: 20}}   src={rightBlack}/>),
          style: {
            width: 40,
            height: 40,
            minWidth: 40,
            backgroundColor:'#ffffff90',
            borderRadius:40,
            border:0,
            alignSelf: "center",
            boxShadow:'0 1px 2px #00000070',
            margin:'0 2rem',
            justifyContent:'center',
            // position:'absolute',
            zIndex:10,
            right:'2rem',
            backdropFilter:'blur(2px)'
          }
        }}
        backwardBtnProps={{
          children: (<img style={{width: 20,
            height: 20}}  src={leftBlack}/>),
          style: {
            width: 40,
            height: 40,
            minWidth: 40,
            backgroundColor:'#ffffff90',
            borderRadius:40,
            border:0,
            alignSelf: "center",
            boxShadow:'0 1px 2px #00000070',
            margin:'0 2rem',
            justifyContent:'center',
            // position:'absolute',
            zIndex:10,
            left:'2rem',
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              marginTop:'3rem',
              height: 1,
              width: 16,
              marginLeft:'2px',
              marginRight:'2px',
              border: 0,
              backgroundColor:grey[400]
            }
          },
          activeItemBtnProps: {
            style: {
              marginTop:'3rem',
              zIndex: 100,
              height: 2,
              width: 16,
              marginLeft:'2px',
              marginRight:'2px',
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToScroll={1}
        itemsToShow={3}
        speed={600}
        centerMode
      >
        {projectDesc.map((project, idx) => (
          <CCard className='project_card'>
            <CCardImage orientation="top" src={project.imgSrc} className='card_img' />
            <CCardBody>
              <CCardTitle>{project.title}</CCardTitle>
              <CCardText>
                {project.desc}<br/><br/>
                <span className='d-flex justify-content-between'><span>Tech Stack: {project.techStack.toString()} </span>
                <Link to={project.link} target="_blank"><img src={linkPng} className='linkLogo'></img></Link></span>
              </CCardText>
            </CCardBody>
          </CCard>
      ) )}
      </Carousel>
        </div>
        
    </div>
  )
}

export default Projects