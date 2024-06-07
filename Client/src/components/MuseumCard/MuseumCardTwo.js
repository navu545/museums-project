import React from "react";
import { holdomor } from "../../assets/images";
import "./MuseumCard.css";

const MuseumCardTwo = () => {
  return (
    <div className="museum-card">
      <div className="museum-card-img-div">
        <img
          loading="lazy"
          src={holdomor}
          alt="museum-bw"
          className="museum-card-img"
        ></img>
      </div>
      <div className="museum-card-text">
        <p className="museum-card-headline">
          National Museum of the Holodomor-Genocide{" "}
          <span className="lviv-span">(Kyiv)</span>
        </p>
        <p className="museum-card-para">
          Genocide works to warn society about the crime of genocide by
          collecting and distributing knowledge on the Holodomor.
        </p>
      </div>
    </div>
  );
};

export default MuseumCardTwo;
