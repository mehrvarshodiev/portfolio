import { React, useState } from 'react';
import './About.css';
import {
  FaUserGraduate,
  FaCogs,
  FaInfoCircle,
  FaGraduationCap,
  FaHtml5,
  FaCalendarAlt,
  FaUniversity,
  FaGithub,
  FaBootstrap,
  FaSass,
  FaDatabase,
  FaCss3Alt,
  FaGitAlt,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutMePic from '../../assets/about-me.jpg';

const About = () => {
  let [infoTab, setInfoTab] = useState(true);
  let [skillsTab, setSkillsTab] = useState(false);
  let [educationTab, setEducationTab] = useState(false);

  return (
    <div id='about' className='about-page'>
      <ScrollAnimation animateIn='animate__zoomIn'>
        <p className='about-top-text'>Get to know more</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn='animate__fadeInUp'>
        <h1 className='about-heading'>About Me</h1>
      </ScrollAnimation>

      <div className='row'>
        <div className='about-img'>
          <ScrollAnimation animateIn='animate__slideInUp'>
            <img loading='lazy' src={AboutMePic} alt={AboutMePic} />
          </ScrollAnimation>
        </div>

        <div className='tabs'>
          <ScrollAnimation animateIn='animate__zoomIn'>
            <div className='tab-btns'>
              <button
                className={`${infoTab == true ? 'active' : ''}`}
                onClick={() => (
                  setSkillsTab(false), setInfoTab(true), setEducationTab(false)
                )}
              >
                Info <FaInfoCircle />
              </button>
              <button
                className={`${skillsTab == true ? 'active' : ''}`}
                onClick={() => (
                  setSkillsTab(true), setInfoTab(false), setEducationTab(false)
                )}
              >
                Skills <FaCogs />
              </button>
              <button
                className={`${educationTab == true ? 'active' : ''}`}
                onClick={() => (
                  setSkillsTab(false), setInfoTab(false), setEducationTab(true)
                )}
              >
                Education <FaGraduationCap />
              </button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn='animate__jackInTheBox'>
            <div
              className={`info-content ${
                infoTab == true && educationTab == false && skillsTab == false
                  ? ''
                  : 'hide'
              }`}
            >
              <p>
                My name is <strong>Mehrvar</strong>. I was born in 2002, so I'm
                twenty one years old. I am a <u>frontend developer</u> from
                Tajikistan. I am a student and have learned various technologies
                in the field of web development. In my free time I open my
                laptop and write some code and go to the gym. I am looking for a
                job. If you have different projects in this area, you can add me
                to your team.
              </p>
            </div>

            <div
              className={`skills-content ${
                infoTab == false && educationTab == false && skillsTab == true
                  ? ''
                  : 'hide'
              }`}
            >
              <FaHtml5 style={{ color: '#E85F28' }} />
              <FaCss3Alt style={{ color: '#30A1D2' }} />
              <FontAwesomeIcon
                icon={faJsSquare}
                style={{ color: '#CEB330' }}
                shake
              />
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: '#2ED9F0' }}
                spin
              />
              <FaGitAlt style={{ color: '#BA3128' }} />
              <FaGithub style={{ color: '#020202' }} />
              <FaBootstrap style={{ color: '#7C13F6' }} />
              <FaSass style={{ color: '#D26594' }} />
              <FaDatabase style={{ color: '#367298' }} />
            </div>

            <div
              className={`education-content ${
                infoTab == false && educationTab == true && skillsTab == false
                  ? ''
                  : 'hide'
              }`}
            >
              <p>
                <FaUserGraduate /> Bachelor of Science (B.S.) in Computer
                Science
              </p>
              <p>
                <FaUniversity /> Tajik Technical University (TTU) named after
                academician M. Osimi{' '}
              </p>
              <p>
                <FaCalendarAlt /> Expected Graduation Date: May 2024
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Dushanbe, Tajikistan
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default About;
