import React from "react";
import { MusuemLviv } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCardOne = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img src={MusuemLviv} alt="museum-bw" className="museum-card-img"></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          National Museum in Lviv <span className="lviv-span">(Lviv)</span>
        </p>
        <p className="museum-card-para">
          The largest art museum in Ukraine housing over 175,000 exhibits
          displaying Ukrainian culture from the 12th-21st century. 
        </p>
      </div>
    </div>
  );
};

export default MuseumCardOne;
