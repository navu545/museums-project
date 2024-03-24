import React from "react";
import { FooterShadowProject } from "../../assets/images";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-logo">
              <Link to="/">
                <img src={FooterShadowProject} alt="footer-logo"></img>
              </Link>
            </div>
            <div className="footer-links-btn">
              <div className="footer-para-div">
                <Link to="/MuseumsListPage">
                  <p>List of Museums</p>
                </Link>
                <Link to="/TestimonyPage">
                  <p>Testimonies</p>
                </Link>
              </div>
            </div>
          </div>

      </div>
    </>
  );
};

export default Footer;
