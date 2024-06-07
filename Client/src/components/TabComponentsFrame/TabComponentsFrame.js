import React, { useState } from "react";
import { Microphone } from "../../assets/images";
import "./TabComponentsFrame.css";

const TabComponentsFrame = () => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="content-container-wrapper">
        <div className={`content-container ${expanded ? "expanded" : ""}`}>
          <div className={`microphone-container ${expanded ? "expanded" : ""}`}>
            <img  src={Microphone} alt="microphone"></img>
          </div>
          <div className={`tab-component-text ${expanded ? "expanded" : ""}`}>
            {!expanded && (
              <p className="content">
                On February 24th, russia launched an unprovoked, brutal war on
                Ukraine. Since the beginning of the invasion, the Russian bombs
                have not spared anyone — we’ve seen hospitals, residential
                buildings, schools...{" "}
                <span className="tab-component-span" onClick={toggleExpansion}>
                  read more
                </span>
              </p>
            )}
            {expanded && (
              <p className="content-expanded">
                On February 24th, russia launched an unprovoked, brutal
                full-scale invasion of Ukraine. Since the beginning of the
                invasion, the Russian bombs have not spared anyone — we’ve seen
                hospitals, residential buildings, schools, and countless other
                civilian targets fall victim to Russia’s merciless attacks. Our
                cultural heritage sites and museums are no different. <br />
                <br />
                Skrynia is an initiative launched by the Shadows Project, with
                the aim of providing direct support to museums and cultural
                institutions across Ukraine by supplying them with materials and
                supplies needed to protect our rich, centuries-old cultural
                heritage.
                <br />
                <br />
                "Skrynia" is the Ukrainian word for chest trunk. It is also the
                name of an underground dissident literary and art magazine
                published in Lviv in 1971. Our culture was under attack then,
                and forced to exist only in the shadows. Decades later, we are
                still fighting – but we refuse to exist in the shadows once
                again. We chose the name Skrynia as a tribute to our cultural
                leaders who fought before us, and as a hope that we can preserve
                our art, artifacts, and archives in safe chests to be protected
                forever. Thanks for your support.{" "}
                <span className="tab-component-span" onClick={toggleExpansion}>
                  read less
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TabComponentsFrame;
