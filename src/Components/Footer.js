import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container" style={{ height: "430px" }}>
        <div className="ft-info">
          <div className="ft-info-p1">
            {/* <p className="ft-title">
              Health <span className="ft-sign">+</span>
            </p> */}
            <Link to="/">
              <img
                src={require("../Assets/logo-hidoc-footer.png")}
                alt="HealthPlus Logo"
                style={{ width: "200px", height: "50px", paddingTop: "10px" }}
              />
            </Link>
            <p className="ft-description">
              Fastest Growing Medical Platform for Doctors.
            </p>
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff", marginRight: "25px"}} size="2xl" />{"   "}
          
            <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ marginRight: "25px" }}/>
          
            <FontAwesomeIcon icon={faYoutube} size="2xl" style={{ marginRight: "25px" }}/>

            <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ marginRight: "25px" }}/>
          </div>

          {/* <SubscribeNewsletter /> */}
        </div>

        <div className="footer-wrapper" style={{ display: "flex" }}>
          <div className="ft-list">
            <p className="ft-list-title">REACH US</p>
            <p className="ft-description">
              Please contact the below details for any other information
            </p>
            <p className="blue-link">Email:</p>
            <p className="ft-description">info@hidocco </p>
            <p className="blue-link">Address:</p>
            <p className="ft-description">
              Hidoc Dr. Inc. 2055 Limestone Rd. STE 200-C, Wilmington, DE,
              19808, United States
            </p>
          </div>

          <div className="ft-list1" style={{ margin: "12px 8px" }}>
            <p className="ft-list-title">HIDOC DR. FEATURES</p>
            <img
              src={require("../Assets/footer-image.png")}
              alt="footer image"
              style={{ width: "580px", height: "auto" }}
            />
          </div>
        </div>

        <div className="ft-list" id="contact"></div>
      </div>

      <div className="footer-copyright" style={{ background: "#cfd8dc" }}>
        <p>
          © Copyright 2022{" "}
          <span className="inc-text" style={{ text: "bold" }}>
            {" "}
            Hidoc Dr. Inc.
          </span>
        </p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
