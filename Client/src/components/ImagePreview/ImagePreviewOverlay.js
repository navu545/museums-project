import { useState, React } from "react";
import previousImage from "../../assets/images/previousImage.png";
import "./ImagePreviewOverlay.css";

const ImagePreviewOverlay = (props) => {
  const previewImageArray = { ...props.previewImageArray };
  const count = 0;
  const [imageIndex, setImageIndex] = useState(count);
  const overlayImageState = previewImageArray[imageIndex];
  const [cantGoBack, setCantGoBack] = useState(true);
  const [cantGoAhead, setCantGoAhead] = useState(false);

  const previousPreviewImage = () => {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
    if (imageIndex === 1) {
      setCantGoBack(true);
    }
    if (imageIndex !== Object.keys(previewImageArray).length - 2) {
      setCantGoAhead(false);
    }
  };
  console.log(cantGoBack);
  const nextPreviewImage = () => {
    if (imageIndex < Object.keys(previewImageArray).length - 1) {
      setImageIndex(imageIndex + 1);
    }

    if (imageIndex !== 1) {
      setCantGoBack(false);
    }

    if (imageIndex === Object.keys(previewImageArray).length - 2) {
      setCantGoAhead(true);
    }
  };
 

  return (
    <>
      <div className="image-preview-wrapper">
        <span
          className="preview-close-btn"
          onClick={props.togglePreview}
        ></span>
        <div className="image-preview-container">
          <button
            className={`previous-img-btn ${cantGoBack ? "final" : ""}`}
            onClick={previousPreviewImage}
          >
            <img
              
              className="previous-img-img"
              src={previousImage}
              alt="prev-img"
            ></img>
          </button>
          <img
            
            className="preview-images"
            src={overlayImageState}
            alt="preview-pic"
          ></img>
          <button
            className={`next-img-btn ${cantGoAhead ? "final" : ""}`}
            onClick={nextPreviewImage}
          >
            <img
              
              className="next-img-img"
              src={previousImage}
              alt="prev-img"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default ImagePreviewOverlay;
