import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderImageStraight, HeaderImageTilt } from "../../assets/images";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-border-wrapper">
        <div className="header-container">
          <div className="header-headlines-container">
            <h1>Skrynia Cultural Heritage Protection Program</h1>
            <p>
              We protect and preserve Ukrainian cultural heritage from
              destruction by Russian invaders.
            </p>
            <Link to="/bank-information">
              <button className="header-btn">Donate to Skrynia</button>
            </Link>
          </div>
          <div className="header-imgs-container">
            <img src={HeaderImageTilt} alt="ladyArt" className="tilt-img"></img>
            <img
              src={HeaderImageStraight}
              alt="flowerArt"
              className="str-img"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header

