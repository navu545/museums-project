import React from "react";
import { repin } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCardThree = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img src={repin} alt="museum-bw" className="museum-card-img"></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          Ilya Repin Museum <span className="lviv-span">(Kharkiv)</span>
        </p>
        <p className="museum-card-para">
          Ilya Repin Museum is a memorial to the famous 19th century Ukrainian
          Realist painter housing several original works. 
        </p>
      </div>
    </div>
  );
};

export default MuseumCardThree;
