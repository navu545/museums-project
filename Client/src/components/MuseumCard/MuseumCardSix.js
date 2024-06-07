import React from "react";
import { maksrym } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCardSix = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img
          loading="lazy"
          src={maksrym}
          alt="museum-bw"
          className="museum-card-img"
        ></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          Maksrym Rylsky Museum <span className="lviv-span">(Kyiv)</span>
        </p>
        <p className="museum-card-para">
          Dedicated to the famous Ukrainian poet, artist and publicist,
          containing his manuscripts, books and art.  
        </p>
      </div>
    </div>
  );
};

export default MuseumCardSix;
