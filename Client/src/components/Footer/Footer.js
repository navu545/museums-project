import React from "react";
import { FooterShadowProject, instagram, linkdin } from "../../assets/images";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = ({toggleScroll}) => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/" onClick={toggleScroll}>
              <img
                
                src={FooterShadowProject}
                alt="footer-logo"
              ></img>
            </Link>
          </div>
          <div className="footer-links-btn">
            <div className="footer-para-div">
              <div className="msm-ftr">
                <Link to="/MuseumsListPage" onClick={toggleScroll}>
                  <p>List of Museums</p>
                </Link>
              </div>
              <Link to="/ManifestoPage" onClick={toggleScroll}>
                <p>Manifesto</p>
              </Link>
            </div>
          </div>
          <div className="small-footer">
            <a
              href="https://www.instagram.com/shadows.project/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="ftr-insta-btn">
                <img  src={instagram} alt=""></img>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/the-shadows-project/?trk=companies_directory"
              target="_blank"
              rel="noreferrer"
            >
              <button className="ftr-linkdin-btn">
                <img  src={linkdin} alt=""></img>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
