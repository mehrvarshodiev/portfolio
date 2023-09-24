import React from 'react';
import './Projects.css';
import noteApp from '../../assets/note-app.png';
import quizApp from '../../assets/quiz-app.png';
import filterProducts from '../../assets/filter-products.png';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
  return (
    <div id='projects' className='projects-page'>
      <ScrollAnimation animateIn='animate__fadeInDown'>
        <p className='projects-top-text'>Browse my recent</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn='animate__slideInDown'>
        <h1 className='projects-heading'>Projects</h1>
      </ScrollAnimation>
      <div className='carts'>
        <ScrollAnimation animateIn='animate__zoomInLeft'>
          <figure className='cart'>
            <img src={quizApp} alt={quizApp} />
            <figcaption>
              <ScrollAnimation animateIn='animate__shakeY'>
                <h3>Quiz App</h3>
              </ScrollAnimation>
              <a
                className='github-code'
                href='https://github.com/mehrvarshodiev/quizapp'
                target='_blank'
                title='github code'
              >
                Github
              </a>
              <a
                href='https://mehrvarshodiev.github.io/quizapp/'
                className='live-demo'
                target='_blank'
              >
                Live Demo
              </a>
            </figcaption>
          </figure>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__zoomIn'>
          <figure className='cart'>
            <img src={filterProducts} alt={filterProducts} />
            <figcaption>
              <ScrollAnimation animateIn='animate__fadeOut'>
                <h3>Filter Products</h3>
              </ScrollAnimation>
              <a
                className='github-code'
                href='https://github.com/mehrvarshodiev/filter-products-sample/'
                target='_blank'
                title='github code'
              >
                Github
              </a>
              <a
                href='https://mehrvarshodiev.github.io/filter-products-sample/'
                className='live-demo'
                target='_blank'
              >
                Live Demo
              </a>
            </figcaption>
          </figure>
        </ScrollAnimation>

        <ScrollAnimation animateIn='animate__zoomInRight'>
          <figure className='cart'>
            <img src={noteApp} alt={noteApp} />
            <figcaption>
              <ScrollAnimation animateIn='animate__fadeOutUp'>
                <h3>Note App</h3>
              </ScrollAnimation>
              <a
                className='github-code'
                href='https://github.com/mehrvarshodiev/noteapp'
                target='_blank'
                title='github code'
              >
                Github
              </a>
              <a
                href='https://mehrvarshodiev.github.io/noteapp/'
                className='live-demo'
                target='_blank'
              >
                Live Demo
              </a>
            </figcaption>
          </figure>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
