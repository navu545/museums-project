import React from "react";
// import { kherson } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCardFour = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img
          src="https://ik.imagekit.io/shadows/Shadows-project/kherson.png"
          alt="museum-bw"
          className="museum-card-img"
        ></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          Kherson Regional Art Museum{" "}
          <span className="lviv-span">(Kherson)</span>
        </p>
        <p className="museum-card-para">
          Housed more than 14,000 works of art until part of its collection was
          stolen by russian forces, and moved to Simferopol Russian-occupied
          Crimea.
        </p>
      </div>
    </div>
  );
};

export default MuseumCardFour;
