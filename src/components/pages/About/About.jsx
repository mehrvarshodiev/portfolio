import { useState } from "react";
import "./About.css";
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
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import AboutMePic from "../../../assets/about-me.jpg";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const About = () => {
  let [infoTab, setInfoTab] = useState(true);
  let [skillsTab, setSkillsTab] = useState(false);
  let [educationTab, setEducationTab] = useState(false);

  const theme = useSelector((state) => state.theme.isDarkMode);
  const [t] = useTranslation();
  return (
    <div id="about" className="about-page">
      <ScrollAnimation animateIn="animate__zoomIn">
        <p className={`about-top-text ${theme ? "dark" : "light"}`}>
          {t("about.t1")}
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp">
        <h1 className={`about-heading ${theme ? "dark" : "light"}`}>
          {t("about.t2")}
        </h1>
      </ScrollAnimation>

      <div className="row">
        <figure className="about-img">
          <ScrollAnimation animateIn="animate__slideInUp">
            <img loading="lazy" src={AboutMePic} alt={AboutMePic} />
          </ScrollAnimation>
        </figure>

        <div className="tabs">
          <ScrollAnimation animateIn="animate__zoomIn">
            <div className="tab-btns">
              <button
                className={`${infoTab == true ? "active" : ""} ${
                  theme ? "dark" : "light"
                }`}
                onClick={() => (
                  setSkillsTab(false), setInfoTab(true), setEducationTab(false)
                )}
              >
                {t("about.s1.t1")}
                <FaInfoCircle />
              </button>
              <button
                className={`${skillsTab == true ? "active" : ""}  ${
                  theme ? "dark" : "light"
                }`}
                onClick={() => (
                  setSkillsTab(true), setInfoTab(false), setEducationTab(false)
                )}
              >
                {t("about.s2.t1")} <FaCogs />
              </button>
              <button
                className={`${educationTab == true ? "active" : ""} ${
                  theme ? "dark" : "light"
                } `}
                onClick={() => (
                  setSkillsTab(false), setInfoTab(false), setEducationTab(true)
                )}
              >
                {t("about.s3.t1")} <FaGraduationCap />
              </button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__jackInTheBox">
            <div
              className={`info-content ${
                infoTab == true && educationTab == false && skillsTab == false
                  ? ""
                  : "hide"
              } ${theme ? "dark" : "light"}`}
            >
              <p>
                {/* My name is <strong>Mehrvar</strong>. I was born in 2002, so
                I&apos;m
                {` ${new Date().getFullYear() - 2002}`} years old. I am a
                <u> &ldquo;frontend developer&rdquo;</u> from Tajikistan. I have
                learned various technologies in the field of web development.
                I&apos;m passionate about building intuitive and beautiful web
                interfaces. I&apos;m a continuous learner, always exploring new
                technologies and best practices. I&apos;m now looking for
                opportunities to contribute to innovative projects and
                collaborate with talented teams. */}

                {t("about.s1.t2")}
              </p>
            </div>

            <div
              className={`skills-content ${
                infoTab == false && educationTab == false && skillsTab == true
                  ? ""
                  : "hide"
              } ${theme ? "dark" : "light"}`}
            >
              <FaHtml5 style={{ color: "#E85F28" }} />
              <FaCss3Alt style={{ color: "#30A1D2" }} />
              <FontAwesomeIcon
                icon={faJsSquare}
                style={{ color: "#CEB330" }}
                shake
              />
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: "#2ED9F0" }}
                spin
              />
              <FaGitAlt style={{ color: "#BA3128" }} />
              <FaGithub style={{ color: "#020202" }} />
              <FaBootstrap style={{ color: "#7C13F6" }} />
              <FaSass style={{ color: "#D26594" }} />
              <FaDatabase style={{ color: "#367298" }} />
            </div>

            <div
              className={`education-content ${
                infoTab == false && educationTab == true && skillsTab == false
                  ? ""
                  : "hide"
              } ${theme ? "dark" : "light"}`}
            >
              <p>
                <FaUserGraduate /> {t("about.s3.t2")}
              </p>
              <p>
                <FaUniversity /> {t("about.s3.t3")}
              </p>
              <p>
                <FaCalendarAlt /> {t("about.s3.t4")}
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> {t("about.s3.t5")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default About;
