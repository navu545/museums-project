import {useState,React} from 'react';
import "./ImagePreviewOverlay.css";

const ImagePreviewOverlay = (props) => {
  
  const previewImageArray = { ...props.previewImageArray };
  const count = 0;
  const [imageIndex,setImageIndex] = useState(count);
  const overlayImageState=previewImageArray[imageIndex];
  
  const previousPreviewImage = () => {
    if (imageIndex!==0) {
    setImageIndex(imageIndex - 1);
    }
  };
  const nextPreviewImage = () => {
      if (imageIndex < Object.keys(previewImageArray).length-1) {
        setImageIndex(imageIndex + 1);
      }
  };

  return (
    <>
      <div className="image-preview-wrapper">
        <div className="image-preview-container">
          <span className="preview-close-btn" onClick={props.togglePreview}>
            CLOSE
          </span>
          <button onClick={previousPreviewImage}>previous</button>
          <img
            className="preview-images"
            src={overlayImageState}
            alt="preview-pic"
          ></img>
          <button onClick={nextPreviewImage}>Next</button>
        </div>
      </div>
    </>
  );
}

export default ImagePreviewOverlay
