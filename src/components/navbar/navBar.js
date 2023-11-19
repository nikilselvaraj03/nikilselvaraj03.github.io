import React, { useCallback, useEffect, useRef } from 'react';
import "./navBar.css";
import learnMore from '../../resources/image-from-rawpixel-id-6514508-original.png'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../reducers/themeSlice';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import profilePhoto from "../../resources/1246e80465c910f706fea53355ae15fb-sticker.png"
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 55,
    height: 30,
    padding: 3,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(3px)',
      transform:'translateY(1px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(26px) translateY(1px)',
        '& .MuiSwitch-thumb:before': {
          backgroundColor: theme.palette.mode === 'dark' ? '#e2a307' : '#3a3939' ,
          width: 25,
          height: 25,
          borderRadius:20,
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8f8f8f9' : '#8f8f8f',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'light' ? '#e2a307' : '#3a3939' ,
      width: 25,
      height: 25,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
      borderRadius: 30 / 2,
    },
  }));
  
export const NavBar = () => {
  const  particlesContainer= useRef(null);
  const theme = useSelector(state => state.theme.currentTheme)
  useEffect(()=>{ 
    return(()=>{
      window.scrollTo(0, 0);
    })
  },[])
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
    const scrollto = (ref) => {
        document.getElementById(ref).scrollIntoView(false)
    } 
    const dispatch = useDispatch()
    return (
        <nav>
            <div className='navHeader'>
                <span className='title'><Link to="/"> NIKIL SELVARAJ</Link></span>

                <ul>
                    <li onClick={()=>scrollto('about')}>About</li>
                    <li onClick={()=>scrollto('skills')}>Skills</li>
                    <li onClick={()=>scrollto('timeline_wrapper')}>Experience</li>
                    <li><span onClick={()=> dispatch(toggleTheme())}><MaterialUISwitch/> </span></li>
                </ul>
            </div>
            
            <div className='tagLineWrapper' ref={particlesContainer} id="particles-js">
            <span className='profile_background'>
              <img src={profilePhoto} style={{height:'14rem',width:'14rem', position:'relative', top:'-4rem'}}alt='Display Picture for Nikil'></img>
            </span>
            <span className='tagline'>
              <div>
                <h2>Hello, I'm Nikil Nandha Selvaraj.</h2>
                <p>I'm a Full-stack Web and Mobile Development Engineer!</p>
                </div>
                <span className='next'>About me <img className='linkToLearnMore' src={learnMore} alt='linkToLearnMore' onClick={()=>scrollto('about')}></img></span>
                </span>
                <Particles  id="tsparticles" container= {particlesContainer} options={{
                fullScreen:{enable:false},
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: theme == 'light-css' ? "rgb(55, 55, 55)" : "#ffffff",
                    },
                    links: {
                        color: theme == 'light-css' ? "rgb(55, 55, 55)" : "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 950,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} init={particlesInit} loaded={particlesLoaded}>
            </Particles>
            </div>
            
        </nav>
    )
}
