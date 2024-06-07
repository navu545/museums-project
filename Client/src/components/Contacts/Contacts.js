import React from 'react';
import { instagram, linkdin } from "../../assets/images";
import "./Contacts.css";

const Contacts = ({scrollTo}) => {

  return (
    <>
      <div ref={scrollTo} className="contacts-wrapper">
        <div className="contacts-container">
          <h1 className="contacts-headline">Contacts</h1>

          <p className="contacts-email">shadows.ukraine@gmail.com</p>

          <div className="contacts-buttons-container">
            <a
              href="https://www.instagram.com/shadows.project/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contacts-insta-button">
                <div className="contacts-insta-img-container">
                  <img
                    loading="lazy"
                    className="contacts-insta-img"
                    src={instagram}
                    alt="insta-logo"
                  ></img>
                </div>
                Instagram
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/the-shadows-project/?trk=companies_directory"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contacts-twitter-button">
                <div className="contacts-twitter-img-container">
                  <img
                    loading="lazy"
                    className="contacts-twitter-img"
                    src={linkdin}
                    alt="Twitter-logo"
                  ></img>
                </div>
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts
