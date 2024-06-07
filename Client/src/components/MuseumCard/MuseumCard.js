import React from 'react';
import { image2x, comingsoon } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCard = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img
          loading="lazy"
          src={image2x}
          alt="museum-bw"
          className="museum-card-img"
        ></img>
        <img
          loading="lazy"
          src={comingsoon}
          alt="museum-ribbon"
          className="coming-soon"
        ></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          Borys Voznytsky Art Gallery <span className="lviv-span">(Lviv)</span>
        </p>
        <p className="museum-card-para">
          Borys Voznytsky Lviv National Art Gallery is the largest art museum in
          Ukraine, with over 62,000 artworks in its collection.
        </p>
      </div>
    </div>
  );
}

export default MuseumCard

