import {React} from "react";
import { NavbarShadowProject } from "../../assets/images";
import "./Navbar.css";
import { Link } from 'react-router-dom';



const Navbar = ({toggleScroll}) => {
  return (
    <>
      <div className="navbar-border">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <img src={NavbarShadowProject} alt="navbar-logo"></img>
            </Link>
          </div>
          <div className="navbar-links-btn">
            <div className="navbar-para-div">
              <Link to="/MuseumsListPage">
                <p>List of Museums</p>
              </Link>
              <Link to="/TestimonyPage">
                <p>Testimonies</p>
              </Link>
              <button className="navbar-contact-btn" onClick={toggleScroll}>
                <p>Contacts</p>
              </button>
              <Link to="/bank-information">
                <p>Bank Information</p>
              </Link>
            </div>
            <button className="navbar-btn">Sponsor museum</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

