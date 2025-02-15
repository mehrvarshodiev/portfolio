import ".//Projects.css";
import noteApp from "../../../assets/note-app.png";
import quizApp from "../../../assets/quiz-app.png";
import countryGuideApp from "../../../assets/country-guide-app.png";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useSelector } from "react-redux";
import { Tilt } from "react-tilt";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const theme = useSelector((state) => state.theme.isDarkMode);
  const [t] = useTranslation();
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <div id="projects" className="projects-page">
      <ScrollAnimation animateIn="animate__fadeInDown">
        <p className={`projects-top-text ${theme ? "dark" : "light"}`}>
          {t("projects.t1")}
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__slideInDown">
        <h1 className={`projects-heading ${theme ? "dark" : "light"}`}>
          {t("projects.t2")}
        </h1>
      </ScrollAnimation>
      <div className="cards">
        <ScrollAnimation animateIn="animate__zoomInLeft">
          <Tilt options={defaultOptions}>
            <figure className={`card ${theme ? "dark" : "light"}`}>
              <img loading="lazy" src={quizApp} alt={quizApp} />
              <figcaption>
                <ScrollAnimation animateIn="animate__shakeY">
                  <h3 className={`${theme ? "dark" : "light"}`}>
                    {/* Quiz App */}
                    {t("projects.first-project.t1")}
                  </h3>
                </ScrollAnimation>
                <a
                  className={`github-code ${theme ? "dark" : "light"}`}
                  href="https://github.com/mehrvarshodiev/quizapp"
                  target="_blank"
                  title="github code"
                  rel="noreferrer noopener"
                >
                  {t("projects.t3")}
                </a>
                <a
                  href="https://mehrvarshodiev.github.io/quizapp/"
                  className={`live-demo ${theme ? "dark" : "light"}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("projects.t4")}
                </a>
              </figcaption>
            </figure>
          </Tilt>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__zoomIn">
          <Tilt options={defaultOptions}>
            <figure className={`card ${theme ? "dark" : "light"}`}>
              <img loading="lazy" src={countryGuideApp} alt={countryGuideApp} />
              <figcaption>
                <ScrollAnimation animateIn="animate__fadeOut">
                  <h3 className={`${theme ? "dark" : "light"}`}>
                    {t("projects.second-project.t1")}
                  </h3>
                </ScrollAnimation>
                <a
                  className={`github-code ${theme ? "dark" : "light"}`}
                  href="https://github.com/mehrvarshodiev/country-guide-app"
                  target="_blank"
                  title="github code"
                  rel="noreferrer noopener"
                >
                  {t("projects.t3")}
                </a>
                <a
                  href="https://mehrvarshodiev.github.io/country-guide-app/"
                  className={`live-demo ${theme ? "dark" : "light"}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("projects.t4")}
                </a>
              </figcaption>
            </figure>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__zoomInRight">
          <Tilt options={defaultOptions}>
            <figure className={`card ${theme ? "dark" : "light"}`}>
              <img loading="lazy" src={noteApp} alt={noteApp} />
              <figcaption>
                <ScrollAnimation animateIn="animate__fadeOutUp">
                  <h3>{t("projects.third-project.t1")}</h3>
                </ScrollAnimation>
                <a
                  className={`github-code ${theme ? "dark" : "light"}`}
                  href="https://github.com/mehrvarshodiev/noteapp"
                  target="_blank"
                  title="github code"
                  rel="noreferrer noopener"
                >
                  {t("projects.t3")}
                </a>
                <a
                  href="https://mehrvarshodiev.github.io/noteapp/"
                  className={`live-demo ${theme ? "dark" : "light"}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("projects.t4")}
                </a>
              </figcaption>
            </figure>
          </Tilt>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Projects;
