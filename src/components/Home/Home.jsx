import React from 'react';
import './Home.css';
import {
  FaGithub,
  FaDownload,
  FaLinkedin,
  FaUser,
  FaPhoneSquareAlt,
  FaArrowDown,
  FaArrowCircleUp,
} from 'react-icons/fa';
import { animateScroll as scroll, Link, scroller } from 'react-scroll';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import mehrvarCV from '../../assets/mehrvar-cv.pdf';
import mehrvarProfilePic from '../../assets/profile-circle-pic.jpg';

const Home = () => {
  return (
    <div id='home' className='home-page'>
      <ScrollAnimation animateIn='animate__fadeInLeft'>
        <div className='left-side'>
          <div className='img'></div>
          <img loading='lazy' src={mehrvarProfilePic} alt={mehrvarProfilePic} />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn='animate__zoomIn'>
        <div className='right-side'>
          <ScrollAnimation animateIn='animate__bounceIn'>
            <p className='top-text'>Hello, I'm</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn='animate__fadeInUp'>
            <h1 className='title-text'>Mehrvar Shodiev</h1>
          </ScrollAnimation>
          <p className='bottom-text'>
            <strong>F</strong>rontend Developer
          </p>

          <ScrollAnimation animateIn='animate__shakeX'>
            <div className='btns'>
              <a
                href={mehrvarCV}
                download='mehrvar-cv'
                className='download-btn'
              >
                Download CV &nbsp;
                <FaDownload />
              </a>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={1200}
                className='contact-info'
              >
                Contact Info &nbsp;
                <FaPhoneSquareAlt />
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='animate__flipInX'>
            <div className='social-links'>
              <a
                href='https://rb.gy/00tnp'
                target='_blank'
                className='github-link'
                title='github'
              >
                <FaGithub />
              </a>
              <a
                href='#'
                target='_blank'
                className='linkedin-link'
                title='linkedin'
              >
                <FaLinkedin />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      <div className='arrow-down hide'>
        <Link to='about' spy={true} smooth={true} offset={0} duration={900}>
          <FaArrowDown />
        </Link>
      </div>
      <div
        className='arrow-up hide'
        onClick={() =>
          scroll.scrollToTop({
            duration: 500,
            activeClass: 'active',
            smooth: true,
            duration: 600,
          })
        }
      >
        <FaArrowCircleUp />
      </div>
    </div>
  );
};

export default Home;
