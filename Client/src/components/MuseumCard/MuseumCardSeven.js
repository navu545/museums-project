import React from "react";
// import { TheatreMusic } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCardSeven = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img
          src="https://ik.imagekit.io/shadows/Shadows-project/TheatreMusicCinema.png"
          alt="museum-bw"
          className="museum-card-img"
        ></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          Museum of History of Theatre, Music, and Cinema{" "}
          <span className="lviv-span">(Kyiv)</span>
        </p>
        <p className="museum-card-para">
          The only museum of its kind in Ukraine and is deservedly known for its
          uniqueness and diversity.
        </p>
      </div>
    </div>
  );
};

export default MuseumCardSeven;
