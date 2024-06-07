import React from "react";
import { SaveUkranianArt } from "../../assets/images";
import "./Info.css";

const Info = () => {
  return (
    <>
      <div className="save-ukr-wrapper">
        <div className="save-ukr-container">
          <div className="save-ukr-img">
            <img
              src="https://ik.imagekit.io/shadows/Shadows-project/SaveUkranianArt.png"
              alt="burning-art"
            ></img>
          </div>
          <div className="save-ukr-text-box">
            <div className="save-ukr-text">
              <h1>Save Ukrainian Art</h1>
              <p>
                This is a war on the very essence and existence of Ukraine.
                Along with our people and our infrastructure, our heritage and
                our identity are under attack. Putin has continuously challenged
                the notion of a historically sovereign and distinct Ukrainian
                state, often employing colonial rhetoric to justify the Russian
                repression of Ukrainians.
                <br />
                <br /> “With each invasion, some loss of culture is inevitable,”
                says Taras Voznyak, director of the Lviv National Gallery.
                “Putin knows that without art, without our history, Ukraine will
                have a weaker identity. That is the whole point of his war - to
                erase us and assimilate us into his population of cryptofascist
                zombies.”{" "}
              </p>
            </div>

            <div className="save-ukr-box">
              <div className="save-ukr-box-one">
                <h1 className="left-box">250+</h1>
                <p className="left-box">Works of Art destroyed</p>
              </div>
              <div className="save-ukr-box-one">
                <h1 className="middle-box">24+</h1>
                <p className="middle-box-p">Museums damaged</p>
              </div>
              <div className="save-ukr-box-one">
                <h1 className="right-box">500+</h1>
                <p className="right-box-p">Paintings lost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
