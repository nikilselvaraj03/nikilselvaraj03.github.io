import React from 'react'
import './footer.css'
import github from '../../resources/pngwing.com.png'
import phonepng from '../../resources/toppng.com-contact-us-phone-ico-1840x1840.png'
import email from '../../resources/pngfind.com-myspace-logo-png-2457972.png'
import { Link } from 'react-router-dom'
const FooterComp = () => {
  return (
   <footer className='footerWrapper'>
    <span className='copyrights'>
    Designed & built by NIKIL NANDHA SELVARAJ (2023). <br/> <br/>
    Made with React.js, HTML,CSS, Javascript.
    </span>
    <span>Social Links</span>
    <div className='socialLinksWrapper'>
        <span ><Link className='links' to='/'
            onClick={(e) => {
                window.location.href = `mailto:nikilselvaraj03@gmail.com`;
                e.preventDefault();
            }}><img className='logo' src={email} alt='email'></img><span>nikilselvaraj003@gmail.com</span></Link></span>
        <span ><Link className='links' to='https://www.linkedin.com/in/nikil-nandha-s/' target="_blank"> <img className='logo' src='https://blog.waalaxy.com/wp-content/uploads/2021/01/linkedin-7-300x300.png' alt='linkedin'></img><span>NIKIL NANDHA S</span></Link></span>
        <span  className='links'><img className='logo' src={phonepng} alt='phone'></img><span>(469) 487-1321</span></span>
        <span ><Link className='links' to= 'https://github.com/nikilselvaraj03' target="_blank"><img className='logo' src={github} alt='github'></img><span>nikilselvaraj03</span></Link></span>
    </div>
   </footer>
  )
}

export default FooterComp