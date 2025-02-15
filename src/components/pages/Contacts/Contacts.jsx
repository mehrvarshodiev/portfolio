import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Contacts = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [successTextValue, setSuccessTextValue] = useState("");
  const [errorTextValue, setErrorTextValue] = useState("");
  const form = useRef();
  const [hours, setHours] = useState(0);

  const theme = useSelector((state) => state.theme.isDarkMode);
  const [t] = useTranslation();
  const getHours = () => {
    setInterval(() => {
      const d = new Date();
      let h = d.getHours();
      let ampm = h >= 12 ? "PM" : "AM";
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

    if (nameValue == "" && emailValue == "" && messageValue == "") {
      nameInput.focus();
      setErrorTextValue(t("contacts.validation.t1"));
      setTimeout(() => {
        setErrorTextValue("");
      }, 2000);
      return;
    }

    if (nameValue == "") {
      nameInput.focus();
      setErrorTextValue(t("contacts.validation.t2"));
      setTimeout(() => {
        setErrorTextValue("");
      }, 2000);
      return;
    } else if (emailValue == "") {
      emailInput.focus();
      setErrorTextValue(t("contacts.validation.t3"));
      setTimeout(() => {
        setErrorTextValue("");
      }, 2000);
      return;
    } else if (messageValue == "") {
      messageInput.focus();
      setErrorTextValue(t("contacts.validation.t4"));
      setTimeout(() => {
        setErrorTextValue("");
      }, 2000);
      return;
    }

    submitBtn.textContent = t("contacts.validation.t5");
    submitBtn.classList.add("btn-success");

    try {
      const result = await emailjs.sendForm(
        "service_y8pc4xn",
        "template_femj9ro",
        form.current,
        "AVk9t8q9zEeu5tlVz"
      );

      if (result.status === 200 && result.text === "OK") {
        setSuccessTextValue(t("contacts.validation.t6"));
        setNameValue("");
        setEmailValue("");
        setMessageValue("");
        submitBtn.textContent = t("contacts.form.t4");
        submitBtn.classList.remove("btn-success");
        setTimeout(() => {
          setSuccessTextValue("");
        }, 2000);
      }
    } catch (error) {
      if (error.text === "" && error.status === 0) {
        setErrorTextValue(t("contacts.validation.t7"));
        submitBtn.textContent = t("contacts.form.t4");
        submitBtn.classList.remove("btn-success");
        setTimeout(() => {
          setErrorTextValue("");
        }, 2000);
      }
    }
  };

  const handleShare = (e) => {
    e.preventDefault();
    if (!navigator.share) return;
    navigator
      .share({
        title: "MEHRVAR SHODIEV",
        text: "Checkout my portfolio",
        url: "https://mehrvarshodiev.github.io/portfolio",
      })
      .catch((error) => ("Error sharing!", error));
  };

  return (
    <div id="contacts" className="contact-page">
      <ScrollAnimation animateIn="animate__slideInUp">
        <p className={`contact-top-text ${theme ? "dark" : "light"}`}>
          {t("contacts.t1")}
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp">
        <h1 className={`contact-heading ${theme ? "dark" : "light"}`}>
          {t("contacts.t2")}
        </h1>
      </ScrollAnimation>
      <div className="contact-content">
        <ScrollAnimation animateIn="animate__fadeInLeft">
          <div className={`social-media ${theme ? "dark" : "light"}`}>
            <a
              href="tel:+992111220032"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faPhone} bounce className="phone-icon" />
              (992) 111-220-032
            </a>

            <a
              href="mailto:mehrvarshodiev2406@mail.ru"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
              {t("contacts.social-medias.t1")}
            </a>

            <a
              href="https://www.facebook.com/mehrvar.shodiev/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="facebook-icon"
                beat
              />
              {t("contacts.social-medias.t2")}
            </a>

            <a
              href="https://www.instagram.com/mehrvar___/?utm_source=qr&igsh=Mmc5ZWdvYWhlMDd4#"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                fade
                className="instagram-icon"
              />
              {t("contacts.social-medias.t3")}
            </a>

            <a
              href="https://wa.link/diwvol"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
              {t("contacts.social-medias.t4")}
            </a>

            <a
              href="https://www.t.me/mehrvar_02"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faTelegram} className="telegram-icon" />
              {t("contacts.social-medias.t5")}
            </a>
          </div>
        </ScrollAnimation>

        <div className={`form-content ${theme ? "dark" : "light"}`}>
          <ScrollAnimation animateIn="animate__headShake">
            <form ref={form} onSubmit={sendEmail}>
              <input
                value={nameValue}
                type="text"
                name="user_name"
                placeholder={t("contacts.form.t1")}
                autoComplete="off"
                onChange={(e) => setNameValue(e.target.value)}
              />
              <input
                value={emailValue}
                type="email"
                name="user_email"
                placeholder={t("contacts.form.t2")}
                autoComplete="off"
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <textarea
                value={messageValue}
                placeholder={t("contacts.form.t3")}
                name="message"
                autoComplete="off"
                onChange={(e) => setMessageValue(e.target.value)}
              ></textarea>
              <button type="submit">{t("contacts.form.t4")}</button>
              <p
                className={`result-text ${
                  successTextValue !== ""
                    ? "success"
                    : errorTextValue !== ""
                    ? "error"
                    : ""
                }`}
              >
                {successTextValue !== "" ? successTextValue : errorTextValue}
              </p>
            </form>
          </ScrollAnimation>
        </div>
      </div>
      <div className={`footer-content ${theme ? "dark" : "light"}`}>
        <p className="hours">{hours}</p>
        <p className="copy-right">
          {t("footer.t1")} &copy; {new Date().getFullYear()}. {t("footer.t2")}
          <span className="share-btn" onClick={handleShare}>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
