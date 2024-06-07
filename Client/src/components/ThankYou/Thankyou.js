import React from 'react';
import { thankYou } from "../../assets/images";
import './Thankyou.css';

const ThankYou = (props) => {
  return (
    <>
      <div className="thank-you-container">
        <img
          
          className="thank-you-img"
          src={thankYou}
          alt="tick-mark"
        ></img>
        <h1 className="thank-you-headline">Thank you for your request</h1>
        <p className="thank-you-message">
          Thank you for your interest in our project. Our team will contact you
          in a short time for details.
        </p>
        <button className="thank-you-button" onClick={props.thankState}>
          Got it
        </button>
      </div>
    </>
  );
};

export default ThankYou;
