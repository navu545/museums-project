import { React } from "react";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import { TestimonyCard1, TestimonyCard2 } from "../../assets/images";
import {
  museumexam,
  museumexam2,
  museumexam3,
  museumexam4,
} from "../../assets/images";

import "./testimony.css";

const Testimony = () => {
  const cardImages = [TestimonyCard1, TestimonyCard2];
  const previewImages = [museumexam, museumexam2, museumexam3, museumexam4];
  const previewImagesTwo = [museumexam2, museumexam3, museumexam4];

  return (
    <>
      <div className="testimonies-wrapper">
        <div className="testimonies-container">
          <div className="testimonies-headlines">
            <h1>Testimonies</h1>
            <p>
              Check out our protective equipment in action in museums across the
              country!
            </p>
          </div>
          <div className="multiple-cards-container">
            <div className="row-one">
              <TestimonyCard
                testimonyCardImage={cardImages[1]}
                previewImages={previewImages}
              />
              <div className="testimony-card-spacing"></div>
              <TestimonyCard
                testimonyCardImage={cardImages[0]}
                previewImages={previewImagesTwo}
              />
              <div className="testimony-card-spacing"></div>
              <TestimonyCard
                testimonyCardImage={cardImages[1]}
                previewImages={previewImages}
              />
              <div className="testimony-card-spacing"></div>
              <TestimonyCard
                testimonyCardImage={cardImages[0]}
                previewImages={previewImagesTwo}
              />
              <div className="testimony-card-spacing"></div>
            </div>
            <div className="row-two">
              <TestimonyCard
                testimonyCardImage={cardImages[1]}
                previewImages={previewImages}
              />
              <div className="testimony-card-spacing"></div>
              <TestimonyCard
                testimonyCardImage={cardImages[0]}
                previewImages={previewImagesTwo}
              />
              <div className="testimony-card-spacing"></div>
              <TestimonyCard
                testimonyCardImage={cardImages[1]}
                previewImages={previewImages}
              />
              <div className="testimony-card-spacing"></div>
              <TestimonyCard
                testimonyCardImage={cardImages[0]}
                previewImages={previewImagesTwo}
              />
              <div className="testimony-card-spacing"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
