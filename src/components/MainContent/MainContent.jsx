import { React, useRef, useState } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import './MainContent.css';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Certificates from '../Certificates/Certificates';
import Contacts from '../Contacts/Contacts';
import { FaHome, FaUser, FaBriefcase, FaAward } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faM } from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  const [isBurgerBtnOpen, setIsBurgerBtnOpen] = useState(false);

  let lastScrollTop = useRef(0);
  const handleBurgerBtn = () => {
    setIsBurgerBtnOpen(!isBurgerBtnOpen);
  };

  window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
    const header = document.querySelector('.header');
    const arrowDown = document.querySelector('.arrow-down');

    if (scrollTop > 20) {
      header.classList.add('active');
      arrowDown.classList.remove('hide');
    } else {
      header.classList.remove('active');
      setIsBurgerBtnOpen(false);
      arrowDown.classList.add('hide');
    }
    if (isBurgerBtnOpen == true) {
      setIsBurgerBtnOpen(false);
    }

    if (scrollTop > lastScrollTop) {
      header.style.top = '-100%';
    } else {
      header.style.top = '0%';
    }
    lastScrollTop = scrollTop;

    const arrowUp = document.querySelector('.arrow-up');
    if (scrollTop > 800) {
      arrowUp.classList.remove('hide');
    } else {
      arrowUp.classList.add('hide');
    }
  };

  return (
    <>
      <header
        className={`header p-20    ${
          isBurgerBtnOpen && document.documentElement.scrollTop < 20
            ? 'active'
            : ''
        }`}
      >
        <div className='logo'>
          <button
            onClick={() => (
              scroll.scrollToTop({
                duration: 500,
                activeClass: 'active',
                smooth: true,
                duration: 400,
              }),
              setIsBurgerBtnOpen(false)
            )}
          >
            <FontAwesomeIcon icon={faM} flip />
          </button>
        </div>
        <nav className={`${isBurgerBtnOpen ? 'open' : ''}`}>
          <ul onClick={(evt) => evt.stopPropagation()}>
            <li>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <FaHome />
                &nbsp; Home
              </Link>
            </li>

            <li>
              <Link
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <FaUser />
                &nbsp; About
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='certificates'
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <FaAward />
                &nbsp;Certificates
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <FaBriefcase />
                &nbsp; Projects
              </Link>
            </li>
          </ul>
          <button
            className='contact-btn'
            onClick={() =>
              scroller.scrollTo('contact', {
                duration: 800,
                smooth: 'easeInOutQuart',
              })
            }
          >
            Contact
          </button>
        </nav>

        <div className='burger-btn' onClick={handleBurgerBtn}>
          <span
            className={`burger-line  ${isBurgerBtnOpen ? 'close' : ''}`}
          ></span>
        </div>
      </header>
      <Home />
      <About />
      <Certificates />
      <Projects />
      <Contacts />
    </>
  );
};

export default MainContent;