/* eslint-disable */

import React from "react";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <div className="info-div">
          <p className="info-description">
            Dailymed Drug Database : The DailyMed database contains J43072
            labeling submitted to the Food and Drug Administration (FDA) by
            companies. DalyMed does not contain a complete listing ot bbeling
            for FDA-reguloted gyoducts (eg labeling that is not subrnitted to
            the FDA).
          </p>
        </div>
        <div>
          <button className="Subscribe-button" type="button">
            Anesthesia
          </button>{" "}
          <button className="Subscribe-button" type="button">
            Cardiology
          </button>{" "}
          <button className="Subscribe-buttons" type="button">
            Critical Care
          </button>{" "}
        </div>
        <div className="row2">
          <button className="Subscribe-button" type="button">
            Dentistry
          </button>{" "}
          <button className="Subscribe-button" type="button">
            Dermatology
          </button>{" "}
          <button className="Subscribe-button" type="button">
            Diabetology
          </button>{" "}
        </div>
      </div>

      <div className="container">
        <div className="InformationCard">
          <p className="card-title">Drug Data</p>
          <div className="horizontal-line"></div>
          <p className="card-description">
            Allegtra
            <br />
            Calpol
            <br />
            Paracetamol
            <br />
            <span className="highlight">FERRUM OXYDATUM PELLET</span>
          </p>
        </div>

        <div className="InformationCard">
          <p className="card-title">Drug Details</p>
          <div className="horizontal-line"></div>
          <p className="card-description">
            <span style={{ color: "#56c5db" }}>FERRUM OXYDATUM PELLET</span>
            <br />
          </p>
          <div className="para">
            <p>
              gelatin, glycerin, polyethylene glycol, povidone, propylene
              glycol, purified water, sorbitol-sorbitan solution, titanium
              dioxide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
