import { useRef, useState } from "react";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import "./Header.css";
import { FaHome, FaUser, FaBriefcase, FaAward } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";
import { MdContactSupport } from "react-icons/md";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ruFlag from "../../../assets/ru-flag.svg";
import usFlag from "../../../assets/us-flag.svg";
import { useTranslation } from "react-i18next";

// import SplashCursor from "../SplachCursor/SplashCursor";
const Header = () => {
  const [isBurgerBtnOpen, setIsBurgerBtnOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const theme = useSelector((state) => state.theme.isDarkMode);

  let lastScrollTop = useRef(0);
  const handleBurgerBtn = () => {
    setIsBurgerBtnOpen(!isBurgerBtnOpen);
    isBurgerBtnOpen;
  };

  window.onscroll = () => {
    let { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Horizontal Scroll Indicator
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const horizontalScrollLine = document.querySelector(".horizontal_scroll");
    horizontalScrollLine.style.width = `${scrolled}%`;

    // Sticky Header Navbar
    const header = document.querySelector(".header");
    const arrowDown = document.querySelector(".arrow-down");

    if (scrollTop > 20) {
      header.classList.add("active");
      arrowDown.classList.remove("hide");
    } else {
      header.classList.remove("active");
      setIsBurgerBtnOpen(false);
      arrowDown.classList.add("hide");
    }
    if (isBurgerBtnOpen == true) {
      setIsBurgerBtnOpen(false);
    }

    if (scrollTop > lastScrollTop) {
      header.style.top = "-100%";
    } else {
      header.style.top = "0%";
    }
    lastScrollTop = scrollTop;

    const arrowUp = document.querySelector(".arrow-up");
    if (scrollTop > 800) {
      arrowUp.classList.remove("hide");
    } else {
      arrowUp.classList.add("hide");
    }
  };

  const handleOpenSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  // Multi language functionality
  const { t, i18n } = useTranslation();

  const changeLanguages = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {/* <SplashCursor /> */}
      <header
        className={`header p-20 ${theme ? "dark" : "light"} ${
          isBurgerBtnOpen && document.documentElement.scrollTop < 20
            ? "active"
            : ""
        }`}
      >
        <div className={`header__effect ${theme ? "dark" : "light"}`}></div>
        <div className={`horizontal_scroll ${theme ? "dark" : "light"}`}></div>
        <div className="logo">
          <button
            className={`${theme ? "dark" : "light"}`}
            onClick={() => (
              scroll.scrollToTop({
                activeClass: "active",
                smooth: true,
                duration: 400,
              }),
              setIsBurgerBtnOpen(false)
            )}
          >
            <FontAwesomeIcon icon={faM} flip />
          </button>
        </div>
        {/* Desktop navigation start */}
        <nav
          className={`open ${isBurgerBtnOpen ? "open" : ""} ${
            theme ? "dark" : "light"
          }`}
        >
          <ul onClick={(evt) => evt.stopPropagation()}>
            <li>
              <Link
                className={`${theme ? "dark" : "light"}`}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <span>
                  <FaHome />
                </span>
                <span>{t("header.t1")}</span>
              </Link>
            </li>
            <li>
              <Link
                className={`${theme ? "dark" : "light"}`}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <span>
                  <FaUser />
                </span>
                <span>{t("header.t2")}</span>
              </Link>
            </li>{" "}
            <li>
              <Link
                className={`${theme ? "dark" : "light"}`}
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <span>
                  <FaBriefcase />
                </span>
                <span>{t("header.t3")}</span>
              </Link>
            </li>{" "}
            <li>
              <Link
                className={`${theme ? "dark" : "light"}`}
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onClick={() => setIsBurgerBtnOpen(false)}
              >
                <span>
                  <FaAward />
                </span>
                <span>{t("header.t4")}</span>
              </Link>
            </li>
          </ul>
          <button
            className={`contact-btn ${theme ? "dark" : "light"}`}
            onClick={() =>
              scroller.scrollTo("contacts", {
                duration: 800,
                smooth: "easeInOutQuart",
              })
            }
          >
            {t("header.t5")}
          </button>
        </nav>
        {/* Desktop navigation end */}
        <div
          className={`burger-btn ${isBurgerBtnOpen ? "close" : ""}`}
          onClick={handleBurgerBtn}
        >
          <span
            className={`bento-menu  ${isBurgerBtnOpen ? "close" : ""} ${
              theme ? "dark" : "light"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="bento-menu"
            >
              <path
                strokeWidth="60.235"
                d="M286.117 256C286.117 272.634 272.633 286.118 256 286.118C239.366 286.118 225.882 272.634 225.882 256C225.882 239.367 239.366 225.882 256 225.882C272.633 225.882 286.117 239.367 286.117 256ZM120.475 256C120.475 272.634 106.991 286.118 90.3574 286.118C73.7238 286.118 60.2397 272.634 60.2397 256C60.2397 239.367 73.7238 225.882 90.3574 225.882C106.991 225.882 120.475 239.367 120.475 256ZM451.765 256C451.765 272.634 438.28 286.118 421.647 286.118C405.013 286.118 391.529 272.634 391.529 256C391.529 239.367 405.013 225.882 421.647 225.882C438.28 225.882 451.765 239.367 451.765 256ZM286.117 90.353C286.117 106.986 272.633 120.471 256 120.471C239.366 120.471 225.882 106.986 225.882 90.353C225.882 73.7194 239.366 60.2353 256 60.2353C272.633 60.2353 286.117 73.7195 286.117 90.353ZM120.475 90.353C120.475 106.986 106.991 120.471 90.3574 120.471C73.7238 120.471 60.2397 106.986 60.2397 90.353C60.2397 73.7195 73.7238 60.2353 90.3574 60.2353C106.991 60.2353 120.475 73.7195 120.475 90.353ZM451.765 90.353C451.765 106.986 438.28 120.471 421.647 120.471C405.013 120.471 391.529 106.986 391.529 90.353C391.529 73.7195 405.013 60.2353 421.647 60.2353C438.28 60.2353 451.765 73.7195 451.765 90.353ZM286.117 421.647C286.117 438.281 272.633 451.765 256 451.765C239.366 451.765 225.882 438.281 225.882 421.647C225.882 405.014 239.366 391.529 256 391.529C272.633 391.529 286.117 405.014 286.117 421.647ZM120.475 421.647C120.475 438.281 106.991 451.765 90.3574 451.765C73.7238 451.765 60.2397 438.281 60.2397 421.647C60.2397 405.014 73.7238 391.529 90.3574 391.529C106.991 391.529 120.475 405.014 120.475 421.647ZM451.765 421.647C451.765 438.281 438.28 451.765 421.647 451.765C405.013 451.765 391.529 438.281 391.529 421.647C391.529 405.014 405.013 391.529 421.647 391.529C438.28 391.529 451.765 405.014 451.765 421.647Z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="header-shapes">
          <div
            className={`shape shape-circle ${theme ? "dark" : "light"}`}
          ></div>
          <div
            className={`shape shape-triangle ${theme ? "dark" : "light"}`}
          ></div>
          <div
            className={`shape shape-rectangle ${theme ? "dark" : "light"}`}
          ></div>
        </div>
      </header>
      {/* Mobile navigation start */}

      {/* Sidebar fixed menu start*/}
      <div className={`side-menu ${theme ? "dark" : "light"}`}>
        <div className={`fixed-menu ${isSideMenuOpen ? "show" : ""}`}>
          {/* Changing language block start */}
          <div
            className="country-flags"
            onClick={() => {
              changeLanguages("en"), handleOpenSideMenu();
            }}
          >
            <img src={usFlag} alt="us-flag" />
          </div>
          <div
            className="country-flags"
            onClick={() => {
              changeLanguages("ru"), handleOpenSideMenu();
            }}
          >
            <img src={ruFlag} alt="ru-flag" />
          </div>
          {/* Changing language block end */}

          {/* ThemeSwitcher start */}
          <div onClick={handleOpenSideMenu}>
            <ThemeSwitcher themeSwitcher="theme_switcher" />
          </div>
          {/* ThemeSwitcher end */}
        </div>
        <span
          className={`arrow-btn ${isSideMenuOpen ? "show" : ""}`}
          onClick={handleOpenSideMenu}
        >
          {isSideMenuOpen ? <SlArrowLeft /> : <SlArrowRight />}
        </span>
      </div>
      {/* Sidebar fixed menu end*/}

      <nav
        className={`mobile_nav ${isBurgerBtnOpen ? "open" : ""} ${
          theme ? "dark" : "light"
        }`}
      >
        <ul onClick={(evt) => evt.stopPropagation()}>
          <li>
            <Link
              className={`${theme ? "dark" : "light"}`}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={() => setIsBurgerBtnOpen(false)}
            >
              <span>
                <FaHome />
              </span>
              <span>{t("header.t1")}</span>
            </Link>
          </li>
          <li>
            <Link
              className={`${theme ? "dark" : "light"}`}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={() => setIsBurgerBtnOpen(false)}
            >
              <span>
                <FaUser />
              </span>
              <span>{t("header.t2")}</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              className={`${theme ? "dark" : "light"}`}
              activeClass="active"
              to="certificates"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={() => setIsBurgerBtnOpen(false)}
            >
              <span>
                <FaBriefcase />
              </span>
              <span>{t("header.t3")}</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              className={`${theme ? "dark" : "light"}`}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={() => setIsBurgerBtnOpen(false)}
            >
              <span>
                <FaAward />
              </span>
              <span>{t("header.t4")}</span>
            </Link>
          </li>
          <li>
            <Link
              className={`${theme ? "dark" : "light"}`}
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              onClick={() => setIsBurgerBtnOpen(false)}
            >
              <span>
                <MdContactSupport />
              </span>
              <span>{t("header.t5")}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation end */}
    </>
  );
};

export default Header;
