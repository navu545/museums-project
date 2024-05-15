import React from 'react';
import {
  BankClover,
  PayPal,
  CloverQR,
  PayPalQR,
  paypalTwo,
} from "../../assets/images";
import "./Bank.css";
import { Link } from "react-router-dom";

const Bank = () => {
  return (
    <>
      <div className="Bank-info-wrapper">
        <div className="Bank-info-container">
          <div className="Bank-info-headline">
            <h1>Sponsor a museum</h1>
          </div>
          <div className="QR-container">
            <div className="clover-QR">
              <div className="clover-qr-img">
                <img src={CloverQR} alt=""></img>
              </div>
              <div className="clover-info">
                <div className="bank-clover">
                  <img src={BankClover} alt=""></img>
                </div>
                <p>Support our project by donating via QR-code.</p>
              </div>
            </div>
            <div className="PayPal-QR">
              <div className="paypal-qr-img">
                <img src={PayPalQR} alt=""></img>
              </div>

              <div className="paypal-info">
                <div className="paypal-one">
                  <img src={PayPal} alt=""></img>
                </div>
                <p>Payment of donations directly to the PayPal account.</p>
                <Link to="https://paypal.com/qrcodes/managed/9a084d4b-a535-4f6e-869b-d0329c36a2f6?utm_source=payandgetpaid" target="_blank" rel="noreferrer">
                  <img src={paypalTwo} alt=""></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bank

