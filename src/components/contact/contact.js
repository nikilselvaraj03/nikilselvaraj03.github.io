import React, { useCallback, useRef } from 'react';
import './contact.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import github from '../../resources/pngwing.com.png'
import phonepng from '../../resources/toppng.com-contact-us-phone-ico-1840x1840.png'
import email from '../../resources/pngfind.com-myspace-logo-png-2457972.png'
import linkednSvg from '../../resources/linkedin.png'
import { Link } from 'react-router-dom'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useSelector } from 'react-redux';
const Contact = () => {
  const formRef = useRef()
  const particlesContainer = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const theme = useSelector(state => state.theme.currentTheme)

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    try {
      // Disable form while processing submission
      setDisabled(true);

      
      debugger
      // Use emailjs to email contact form data
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div id='contact' className='contact' ref={particlesContainer}>
    <div className='social_links'>
      <h2 className='getintouch'>Get in touch</h2>
      <div className='social_links-wrapper'>
       <div><span ><Link className='links' to='/'
            onClick={(e) => {
                window.location.href = `mailto:nikilselvaraj03@gmail.com`;
                e.preventDefault();
            }}><img className='logo' src={email} alt='email'></img><span>nikilselvaraj003@gmail.com</span></Link></span>
        <span ><Link className='links' to='https://www.linkedin.com/in/nikil-nandha-s/' target="_blank"> <img className='logo' src={linkednSvg} alt='linkedin'></img><span>Nikil Nandha S</span></Link></span>
        </div> <div><span><Link className='links'><img className='logo' src={phonepng} alt='phone'></img><span>(469) 487-1321</span></Link></span>
        <span ><Link className='links' to= 'https://github.com/nikilselvaraj03' target="_blank"><img className='logo' src={github} alt='github'></img><span>nikilselvaraj03</span></Link></span>
        </div></div>
    </div>
    <div className='container'>
      <div className='contact-card card shadow-lg'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                ref={formRef}
              >
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && (
                      <span className='errorMessage'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject',
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true,
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && (
                      <span className='errorMessage'>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className='pill border border-1 rounded-pill shadow-sm bg-body fw-light px-3 pill py-2 w-50 submit-btn'
                  disabled={disabled}
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
      </div>
      <div className='social_links-wrapper d-none flex-row justify-content-around'>
       <div className='flex-row justify-content-around'><span ><Link className='links' to='/'
            onClick={(e) => {
                window.location.href = `mailto:nikilselvaraj03@gmail.com`;
                e.preventDefault();
            }}><img className='logo' src={email} alt='email'></img></Link></span>
        <span ><Link className='links' to='https://www.linkedin.com/in/nikil-nandha-s/' target="_blank"> <img className='logo' src={linkednSvg} alt='linkedin'></img></Link></span>
        </div> <div className='flex-row justify-content-around'><span><Link className='links'><img className='logo' src={phonepng} alt='phone'></img></Link></span>
        <span ><Link className='links' to= 'https://github.com/nikilselvaraj03' target="_blank"><img className='logo' src={github} alt='github'></img></Link></span>
        </div></div>
    </div>
    <Particles id="tsparticlescontact" container={particlesContainer} options={{
          fullScreen: { enable: false },
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
              enable: true,
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
  )
}

export default Contact