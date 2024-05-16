import React from 'react';
import { Link } from "react-router-dom";
import MuseumCardOne from '../MuseumCard/MuseumCardOne';
import MuseumCardTwo from '../MuseumCard/MuseumCardTwo';
import MuseumCardThree from '../MuseumCard/MuseumCardThree';
import MuseumCardFour from '../MuseumCard/MuseumCardFour';
import "./Museums.css";

const Museums = () => {
  return (
    <div className="musuems-container-wrapper">
      <div className="museums-container">
        <h1 className="Museums-headline">Museums we are working with</h1>

        <div className="Museums-cards-holder">
          <MuseumCardOne />
          <div className="museum-card-spacing-main"></div>
          <MuseumCardTwo />
          <div className="museum-card-spacing-main"></div>
          <MuseumCardThree />
          <div className="museum-card-spacing-main"></div>
          <MuseumCardFour />
        </div>
        <div className="museums-btn-container">
          {/* <Link to="/MuseumsListPage">
            <button className="museums-btn-one">
              List of supplies
              <img
                src={listSuppliesOpen}
                alt="supplies"
                className="museum-btn-img"
              />
            </button>
          </Link> */}
          <Link to="/MuseumsListPage">
            <button className="museums-btn-two">List of museums</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Museums;
