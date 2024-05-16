import {React,useState} from "react";
import { logonew } from "../../assets/images";
import "./Navbar.css";
import { Link } from 'react-router-dom';



const Navbar = ({toggleScroll,scrollTo}) => {

  const[openMenu,setOpenMenu] = useState(false);

  return (
    <>
      <div ref={scrollTo} className="navbar-wrapper">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <div className="navbar-logo">
              <Link to="/">
                <img src={logonew} alt="navbar-logo"></img>
              </Link>
            </div>
          </div>
          <div
            className={`menu ${openMenu ? "Open" : ""}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="navbar-links-btn">
            <Link to="/MuseumsListPage">
              <p className="msm-lst-link">List of Museums</p>
            </Link>
            {/* <Link to="/TestimonyPage">
              <p className="test-page-link">Testimonies</p>
            </Link> */}

            {/* <button className="navbar-contact-btn" onClick={toggleScroll}>
              <p>Contacts</p>
            </button> */}

            {/* <Link to="/bank-information">
              <p className="bank-info-lnk">Bank Information</p>
            </Link> */}

            <Link to="/ManifestoPage">
              <p className="Manifesto-link">Manifesto</p>
            </Link>

            <Link to="/bank-information">
              <button className="navbar-btn">Donate to Skrynia</button>
            </Link>
          </div>
        </div>

        {openMenu && (
          <div className="open-menu">
            <Link to="/MuseumsListPage">
              <p className="msm-lst-link">List of Museums</p>
            </Link>
            <Link to="/ManifestoPage">
              <p className="test-page-link">Manifesto</p>
            </Link>
            {/* <button className="navbar-contact-btn" onClick={toggleScroll}>
              <p>Contacts</p>
            </button> */}
            {/* <Link to="/bank-information">
              <p className="bank-info-lnk">Bank Information</p>
            </Link> */}
            <div className="menu-btn-spacing"></div>
            <Link to="/bank-information">
              <button className="navbar-btn">Donate to Skrynia</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};


export default Navbar;

