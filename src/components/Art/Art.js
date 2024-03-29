import React from 'react';
import {
  Slider10,
  Slider1,
  Slider4,
  Slider2,
  Slider3,
  Slider5,
  Slider6,
  Slider7,
  Slider8,
  Slider9,
  Slider11,
} from "../../assets/images";
import "./Art.css";

const Art = () => {
  return (
    <>
      <div className="slider-container-wrapper">
        <div className="slider-container">
          <div className="slider-imgs">
            <div className="slider-imgs-container">
              <img src={Slider1} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider2} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider3} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider4} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider5} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider6} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider7} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider8} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider9} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider10} alt=""></img>
            </div>

            <div className="slider-imgs-container">
              <img src={Slider11} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Art
