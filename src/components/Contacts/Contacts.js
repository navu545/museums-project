import React from 'react';
import { instagram, Twitter } from "../../assets/images";
import "./Contacts.css";

const Contacts = ({scrollTo}) => {

  return (
    <>
      <div ref={scrollTo} className="contacts-wrapper">
        <div className="contacts-container">
          <h1 className="contacts-headline">Contacts</h1>
          <a href="https://gmail.com" className="email-link">
            <p className="contacts-email">shadows.ukraine@gmail.com</p>
          </a>
          <div className="contacts-buttons-container">
            <a href="https://instagram.com">
              <button className="contacts-insta-button">
                <div className="contacts-insta-img-container">
                  <img
                    className="contacts-insta-img"
                    src={instagram}
                    alt="insta-logo"
                  ></img>
                </div>
                Instagram
              </button>
            </a>
            <a href="https://twitter.com">
              <button className="contacts-twitter-button">
                <div className="contacts-twitter-img-container">
                  <img
                    className="contacts-twitter-img"
                    src={Twitter}
                    alt="Twitter-logo"
                  ></img>
                </div>
                Twitter
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts
