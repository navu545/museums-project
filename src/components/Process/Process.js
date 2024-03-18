import React from 'react';
import { howitworks1, howitworks2, howitworks3 } from "../../assets/images";
import "./Process.css";

const Process = () => {
  return (
    <>
      <div className="process-container-wrapper">
        <div className="process-container">
          <div className="process-headline">
            <h1>How it works</h1>
          </div>
          <div className="process-steps-container">
            <div className="image-text-container">
              <img src={howitworks1} alt="egg-shape"></img>
              <p className="overlay-text">1</p>
              <p className="steps">Fill out the form below</p>
            </div>
            <div className="image-text-container">
              <img src={howitworks2} alt="triangle"></img>
              <p className="overlay-text">2</p>
              <p className="steps">
                Indicate whether you need help or want to provide help yourself
              </p>
            </div>
            <div className="image-text-container">
              <img src={howitworks3} alt="square"></img>
              <p className="overlay-text">3</p>
              <p className="steps">Wait for an answer from our team</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process
