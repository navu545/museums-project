import React from 'react'
import { aboutusnew } from "../../assets/images";
import "./About.css";
const About = () => {
  return (
    <div className='about-us-wrapper'>
      <div className="about-us-container">
        <div className="about-us-img">
          <img src={aboutusnew} alt="about-us-img"></img>
        </div>
        <div className="about-us-text">
          <h1>About us</h1>
          <p>
            Skrynia is an initiative launched by the Shadows Project, with the
            aim of providing direct support to museums and cultural institutions
            across Ukraine by supplying them with materials and supplies needed
            to protect our rich, centuries-old cultural heritage.
            <br />
            <br /> "Skrynia" is the Ukrainian word for chest trunk. It is also
            the name of an underground dissident literary and art magazine
            published in Lviv in 1971. Our culture was under attack then, and
            forced to exist only in the shadows. Decades later, we are still
            fighting – but we refuse to exist in the shadows once again. We
            chose the name Skrynia as a tribute to our cultural leaders who
            fought before us, and as a hope that we can preserve our art,
            artifacts, and archives in safe chests to be protected forever.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About

