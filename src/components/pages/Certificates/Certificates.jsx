import { useState } from "react";
import "./Certificates.css";
import freeCodeCampWebDesignCertificate from "../../../assets/freecodecamp-web-design-certificate.png";
import jsSololearnCertificate from "../../../assets/JSBySololearn.png";
import certificateFromCursa from "../../../assets/certificateFromCursa.png";
import certificateFromWayUp from "../../../assets/WayUp_Certificate_en.png";
import { FaTimes } from "react-icons/fa";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const [openCertificateModal, setOpenCertificateModal] = useState(false);

  const theme = useSelector((state) => state.theme.isDarkMode);

  const handleOpenCertificate = (imageAction) => {
    setOpenCertificateModal(true);
    imageAction;
    document.body.style.overflow = "hidden";
    const modalImg = document.querySelector(".certificate-modal img");
    modalImg.src = `${
      imageAction == "first"
        ? freeCodeCampWebDesignCertificate
        : imageAction == "second"
        ? jsSololearnCertificate
        : imageAction == "third"
        ? certificateFromCursa
        : certificateFromWayUp
    }`;
  };

  const [t] = useTranslation();
  return (
    <div id="certificates">
      <div
        className={`overlay ${openCertificateModal == true ? "" : "hide"}`}
        onClick={() => (
          setOpenCertificateModal(false),
          (document.body.style.overflow = "auto")
        )}
      >
        <div
          className={`certificate-modal`}
          onClick={(evt) => evt.stopPropagation()}
        >
          <FaTimes
            onClick={() => (
              setOpenCertificateModal(false),
              (document.body.style.overflow = "auto")
            )}
          />
          <img
            loading="lazy"
            src={freeCodeCampWebDesignCertificate}
            alt={freeCodeCampWebDesignCertificate}
          />
        </div>
      </div>
      <ScrollAnimation animateIn="animate__fadeIn">
        <p className={`certificate-top-text ${theme ? "dark" : "light"}`}>
          {t("certificates.t1")}
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp">
        <h1 className={`certificates-title ${theme ? "dark" : "light"}`}>
          {t("certificates.t2")}
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeOut">
        <div className="certificates-content">
          <div
            className="freecodecamp-certificate certificate"
            data-image="first"
            onClick={(evt) =>
              handleOpenCertificate(evt.currentTarget.dataset.image)
            }
          >
            <img
              loading="lazy"
              src={freeCodeCampWebDesignCertificate}
              alt={freeCodeCampWebDesignCertificate}
            />
          </div>

          <div
            className="js-sololearn-certificate certificate"
            data-image="second"
            onClick={(evt) =>
              handleOpenCertificate(evt.currentTarget.dataset.image)
            }
          >
            <img
              loading="lazy"
              src={jsSololearnCertificate}
              alt={jsSololearnCertificate}
            />
          </div>
          <div
            className="cursa-certificate certificate"
            data-image="third"
            onClick={(evt) =>
              handleOpenCertificate(evt.currentTarget.dataset.image)
            }
          >
            <img
              loading="lazy"
              src={certificateFromCursa}
              alt={certificateFromCursa}
            />
          </div>
          <div
            className="wayup-certificate certificate"
            data-image="fourth"
            onClick={(evt) =>
              handleOpenCertificate(evt.currentTarget.dataset.image)
            }
          >
            <img
              loading="lazy"
              src={certificateFromWayUp}
              alt={certificateFromWayUp}
            />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Certificates;
