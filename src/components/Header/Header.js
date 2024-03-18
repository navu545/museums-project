import React from 'react';
import { HeaderImageStraight, HeaderImageTilt } from "../../assets/images";
import "./Header.css";

const Header = ({toggleScroll}) => {
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
            <button className="header-btn" onClick={toggleScroll}>
              Sponsor museum
            </button>
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

