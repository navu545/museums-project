import {useState,React} from 'react';
import {moreimages} from "../../assets/images";
import ImagePreviewOverlay from "../ImagePreview/ImagePreviewOverlay";
import "./TestimonyCard.css";
import { Link } from 'react-router-dom';

const TestimonyCard = (props) => {

    
    const previewImageArray = props.previewImages;
    const [showPreview, setShowPreview] = useState(false);

    const togglePreview = () => {
      
      setShowPreview(!showPreview);
    };
  return (
    <>
      <div className="testimony-card-container">
        <div className="testimony-img-btn">
          <div className="testimony-card-img">
            <img
              loading="lazy"
              src={props.testimonyCardImage}
              alt="msm-test"
            ></img>
          </div>
          <button className="testimony-card-button" onClick={togglePreview}>
            {props.previewImages.length} photos
            <img
              loading="lazy"
              className="testimony-btn-img"
              src={moreimages}
              alt="popup-img"
            ></img>
          </button>
        </div>
        <Link to="/TestimonyDetailPage">
          <div className="testimony-card-text">
            <p className="testimony-card-date">11 April 2022</p>
            <div className="test-head-desc">
              <h1 className="testimony-card-headline">
                Borys Voznytsky Art Gallery <span>(Lviv)</span>
              </h1>
              <p className="testimony-card-description">
                For most entrepreneurs, launching a business starts with an
                idea...
              </p>
            </div>
          </div>
        </Link>
      </div>
      {showPreview && (
        <ImagePreviewOverlay
          togglePreview={togglePreview}
          previewImageArray={previewImageArray}
        />
      )}
    </>
  );
}

export default TestimonyCard
