import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faBars,
  faXmark,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img
            src={require("../Assets/logo-navbar.png")}
            alt="HealthPlus Logo"
            style={{ width: "200px", height: "50px", paddingTop: "10px" }}
          />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Drugs |
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Calculators |
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            Articles |
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            News |
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Quizzes |
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Surveys |
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Webinars |
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Guidelines
          </a>
        </li>
      </ul>

      <div className="nav1">
        <FontAwesomeIcon icon={faBars} size="1.5x" />
      </div>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <div>
          <FontAwesomeIcon
            icon={faTrophy}
            beatFade
            style={{ color: "#000000" }}
          />{" "}
          <span style={{ color: "orange" }}>274</span>
        </div>
      </button>

      <div>
        <FontAwesomeIcon icon={faCircleUser} size="2x" />
      </div>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Drugs
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Calculators
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              Articles
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              News
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Quizzes
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Surveys
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Webinars
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Guidelines
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
