import React from "react";
import { MuseumKyiv } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCardFive = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img src={MuseumKyiv} alt="museum-bw" className="museum-card-img"></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          Museum of History of Kyiv <span className="lviv-span">(Kyiv)</span>
        </p>
        <p className="museum-card-para">
          The museum, and its 8 branches, include collections on the history,
          literature, science, art and socio-political life of the capital. 
        </p>
      </div>
    </div>
  );
};

export default MuseumCardFive;
