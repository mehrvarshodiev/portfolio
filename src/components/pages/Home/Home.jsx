import "./Home.css";
import {
  FaGithub,
  FaDownload,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaArrowDown,
  FaArrowCircleUp,
} from "react-icons/fa";
import { animateScroll as scroll, Link } from "react-scroll";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import mehrvarCV from "../../../assets/mehrvar-cv.pdf";
import mehrvarProfilePic from "../../../assets/my-picture.png";
import { useSelector } from "react-redux";
import Orb from "../../Orb/Orb";
import TrueFocusText from "../../TrueFocusText/TrueFocusText";
import { useTranslation } from "react-i18next";

const Home = () => {
  const theme = useSelector((state) => state.theme.isDarkMode);
  const [t] = useTranslation();
  return (
    <div id="home" className="home-page">
      <div className="bubbles">
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
        <span className={`bubble ${theme ? "dark" : "light"}`}></span>
      </div>
      <ScrollAnimation animateIn="animate__fadeInLeft">
        <div className="left-side">
          <div className={`img ${theme ? "dark" : "light"}`}></div>

          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />

          <img loading="lazy" src={mehrvarProfilePic} alt={mehrvarProfilePic} />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__zoomIn">
        <div className="right-side">
          <ScrollAnimation animateIn="animate__bounceIn">
            <p className={`top-text ${theme ? "dark" : "light"}`}>
              {t("home.t1")}
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInUp">
            <h1 className={`title-text ${theme ? "dark" : "light"}`}>
              {t("home.t2")}
            </h1>
          </ScrollAnimation>
          <div className={`job-text ${theme ? "dark" : "light"}`}>
            {/* <strong>F</strong> */}
            <TrueFocusText
              sentence={`${t("home.t3")}`}
              manualMode={false}
              blurAmount={5}
              borderColor="#17b1b9"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>

          <ScrollAnimation animateIn="animate__shakeX">
            <div className="btns">
              <a
                href={mehrvarCV}
                download="mehrvar-cv"
                className={`download-btn ${theme ? "dark" : "light"}`}
              >
                {t("home.t4")} &nbsp;
                <FaDownload />
              </a>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={1200}
                className={`contact-info ${theme ? "dark" : "light"}`}
              >
                {t("home.t5")}&nbsp;
                <FaPhoneSquareAlt />
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__flipInX">
            <div className={`social-links ${theme ? "dark" : "light"}`}>
              <a
                target="_blank"
                href="https://rb.gy/00tnp"
                className="github-link"
                title="github"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mehrvarshodiev/"
                target="_blank"
                className="linkedin-link"
                title="linkedin"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      <div className={`arrow-down hide ${theme ? "dark" : "light"}`}>
        <Link to="about" spy={true} smooth={true} offset={0} duration={900}>
          <FaArrowDown />
        </Link>
      </div>
      <div
        className="arrow-up hide"
        onClick={() =>
          scroll.scrollToTop({
            activeClass: "active",
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
