import React from "react";
import Graph from "../Assets/graph.png";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img
          src={Graph}
          alt="Doctor Group"
          className="ba-image1"
          style={{ height: "320px", width: "260px" }}
        />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Explore more on Hidoc Dr.</span>
        </h3>
        <p className="ba-description">News</p>
        <p className="ba-checks ba-check-first">
          Education: Diabetes and tooth loss together cause cognitive
          impairment.
        </p>
        <p className="ba-description">
          Diabetes and tooth loss both contribute to cognitive impairment and
          cognitive decline in older adults, according to new research published
          in a special issue of the Journal of Dental Research.
        </p>
      </div>
      <div className="ba-text-content">
        <p className="ba-description">CRITICAL CARE • 10 Mar 2023</p>

        <p className="ba-checks ba-check-first">
          Discovering Arthrogryposis: Understanding The Causes, Symptoms and
          Diagnosis
        </p>
        <p className="ba-description">
          Arthrogryposis, also known as Curvature of the Joints, is a rare
          condition that affects the joints in the body.
        </p>
      </div>
      <div className="ba-text-content">
        <p className="ba-description">CRITICAL CARE • 28 Mar 2023</p>
        <div className="ba-checks ba-check-first">
          <p>
            The Science Behind Crest Disease: Exploring the underlying
            mechanisms
          </p>
        </div>
        <div className="horizontal-line"></div>

        <p className="ba-description">CRITICAL CARE • 22 Feb 2023</p>

        <p className="ba-checks ba-check-first">
          A Comprehensive Guide To Apache Scoring: How It Works And Why You
          Should Use It
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;
