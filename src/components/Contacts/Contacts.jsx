import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Contacts = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [successTextValue, setSuccessTextValue] = useState('');
  const [errorTextValue, setErrorTextValue] = useState('');
  const form = useRef();
  const [hours, setHours] = useState(0);

  const getHours = () => {
    const interval = setInterval(() => {
      const d = new Date();
      let h = d.getHours();
      let ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12;
      h = h ? h : 12;
      h = h < 10 ? `0${h}` : h;
      let m = d.getMinutes();
      m = m < 10 ? `0${m}` : m;
      let s = d.getSeconds();
      s = s < 10 ? `0${s}` : s;
      setHours(`${h}:${m}:${s} ${ampm}`);
    }, 1000);
  };
  getHours();

  const sendEmail = async (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector('button[type="submit"]');
    const nameInput = document.querySelector('input[name="user_name"]');
    const emailInput = document.querySelector('input[name="user_email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    if (nameValue == '' && emailValue == '' && messageValue == '') {
      nameInput.focus();
      setErrorTextValue('Please fill out all required fields!');
      setTimeout(() => {
        setErrorTextValue('');
      }, 2000);
      return;
    }

    if (nameValue == '') {
      nameInput.focus();
      setErrorTextValue('Please fill out name field!');
      setTimeout(() => {
        setErrorTextValue('');
      }, 2000);
      return;
    } else if (emailValue == '') {
      emailInput.focus();
      setErrorTextValue('Please fill out email field!');
      setTimeout(() => {
        setErrorTextValue('');
      }, 2000);
      return;
    } else if (messageValue == '') {
      messageInput.focus();
      setErrorTextValue('Please fill out message field!');
      setTimeout(() => {
        setErrorTextValue('');
      }, 2000);
      return;
    }

    submitBtn.textContent = 'Sending...';
    submitBtn.classList.add('btn-success');

    try {
      const result = await emailjs.sendForm(
        'service_y8pc4xn',
        'template_femj9ro',
        form.current,
        'AVk9t8q9zEeu5tlVz'
      );

      if (result.status === 200 && result.text === 'OK') {
        setSuccessTextValue('Data sent successfully!');
        setNameValue('');
        setEmailValue('');
        setMessageValue('');
        submitBtn.textContent = 'Send data';
        submitBtn.classList.remove('btn-success');
        setTimeout(() => {
          setSuccessTextValue('');
        }, 2000);
      }
    } catch (error) {
      if (error.text === '' && error.status === 0) {
        setErrorTextValue('Please check your internet connection!');
        submitBtn.textContent = 'Send data';
        submitBtn.classList.remove('btn-success');
        setTimeout(() => {
          setErrorTextValue('');
        }, 2000);
      }
    }
  };

  return (
    <div id='contact' className='contact-page'>
      <ScrollAnimation animateIn='animate__slideInUp'>
        <p className='contact-top-text'>Get in touch</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn='animate__fadeInUp'>
        <h1 className='contact-heading'>Contact Me</h1>
      </ScrollAnimation>
      <div className='contact-content'>
        <ScrollAnimation animateIn='animate__fadeInLeft'>
          <div className='social-media'>
            <a href='tel:+99211220032' target='_blank'>
              <FontAwesomeIcon icon={faPhone} bounce className='phone-icon' />
              (992) 111-220-032
            </a>

            <a href='mailto:mehrvarshodiev2406@mail.ru' target='_blank'>
              <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
              Email
            </a>

            <a href='https://www.facebook.com/mehrvar.shodiev/' target='_blank'>
              <FontAwesomeIcon
                icon={faFacebook}
                className='facebook-icon'
                beat
              />
              Facebook
            </a>

            <a href='https://twitter.com/shod1ev_' target='_blank'>
              <FontAwesomeIcon icon={faTwitter} fade className='twitter-icon' />
              Twitter
            </a>

            <a href='https://wa.link/diwvol' target='_blank'>
              <FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' />
              Whatsapp
            </a>

            <a href='https://www.t.me/mehrvar_02' target='_blank'>
              <FontAwesomeIcon icon={faTelegram} className='telegram-icon' />
              Telegram
            </a>
          </div>
        </ScrollAnimation>

        <div className='form-content'>
          <ScrollAnimation animateIn='animate__headShake'>
            <form ref={form} onSubmit={sendEmail}>
              <input
                value={nameValue}
                type='text'
                name='user_name'
                placeholder='Your name'
                autoComplete='off'
                onChange={(e) => setNameValue(e.target.value)}
              />
              <input
                value={emailValue}
                type='email'
                name='user_email'
                placeholder='Your email'
                autoComplete='off'
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <textarea
                value={messageValue}
                placeholder='Your message'
                name='message'
                autoComplete='off'
                onChange={(e) => setMessageValue(e.target.value)}
              ></textarea>
              <button type='submit'>Send data</button>
              <p
                className={`result-text ${
                  successTextValue !== ''
                    ? 'success'
                    : errorTextValue !== ''
                    ? 'error'
                    : ''
                }`}
              >
                {successTextValue !== '' ? successTextValue : errorTextValue}
              </p>
            </form>
          </ScrollAnimation>
        </div>
      </div>
      <div className='footer-content'>
        <p className='hours'>{hours}</p>
        <p className='copy-right'>
          Mehrvar &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
