import React from 'react';
// import {Helmet} from "../../assets/images";
import "./Manifesto.css";
import { Link } from "react-router-dom";

const Manifesto = ({toggleScroll}) => {
  return (
    <div className="Manifesto-wrapper">
      <div className="Manifesto-container">
        <div className="section-one">
          <div className="Manifesto-headlines">
            <h1 className="section-one-headline">
              The
              <br /> Shadows Project
            </h1>
            <p>
              The Shadows Project is a cultural NGO and creative consultancy
              that works on projects with brands, companies, and organizations
              to infuse culture in unintuitive places.
              <br />
              <br />
              We believe that cultural development is critical to long-term
              resilience within societies. A population confident and educated
              in its culture is more resilient to information warfare,
              propaganda, and adversary narratives. By creating more spaces for
              people to interact with their culture in their daily lives, we are
              helping strengthen civil society and secure our nationhood. 
              <br />
              <br /> We protect our culture. Then, we popularize it. 
            </p>
          </div>
          <div className="Manifesto-image">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/Helmet.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="section-two">
          <h1>Skrynia Cultural Heritage Protection Program</h1>
          <p>
            Skrynia is our cultural heritage protection program, safeguards
            Ukrainian identity from russian attacks. Through Shadows, we supply
            museums and institutions with essential materials, preserving our
            heritage.
          </p>
          <Link to="/bank-information">
            <button>Donate to Skrynia</button>
          </Link>
        </div>
        <div className="section-three">
          <h1>Cultural Consultancy</h1>
          <p>
            We see culture as a product, and our mission is to help brands,
            organizations, and companies see missed cultural opportunities by
            finding ways to integrate culture into their products, campaigns,
            and brand identity.
            <br />
            <br />
            We also seek to empower cultural creators and protectors by helping
            them find new audiences, product opportunities, and channels of
            communication. 
          </p>
          <Link>
            <button onClick={toggleScroll}>Work with us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Manifesto
