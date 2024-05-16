import { useState, React, useEffect } from "react";
import { arrowselectright, arrowselectleft } from "../../assets/images";
import MuseumCard from "../MuseumCard/MuseumCard";
import MuseumCardOne from "../MuseumCard/MuseumCardOne";
import MuseumCardTwo from "../MuseumCard/MuseumCardTwo";
import MuseumCardThree from "../MuseumCard/MuseumCardThree";
import MuseumCardFour from "../MuseumCard/MuseumCardFour";
import MuseumCardFive from "../MuseumCard/MuseumCardFive";
import MuseumCardSix from "../MuseumCard/MuseumCardSix";
import MuseumCardSeven from "../MuseumCard/MuseumCardSeven";
import "./MuseumsListHolder.css";

const cardsArray = [
  <MuseumCardOne />,
  <MuseumCardTwo />,
  <MuseumCardThree />,
  <MuseumCardFour />,
  <MuseumCardFive />,
  <MuseumCardSix />,
  <MuseumCardSeven />,
  <MuseumCard />,
];

const MuseumsListHolder = () => {
  const [lowerIndex, setLowerIndex] = useState(0);
  const [upperIndex, setUpperIndex] = useState(12);
  const [updatedArray, setUpdatedArray] = useState(
    cardsArray.slice(lowerIndex, upperIndex)
  );
  const [startPage, setStartPage] = useState(false);
  const [endPage, setEndPage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const previousArray = () => {
    if (lowerIndex !== 0) {
      setLowerIndex(lowerIndex - 12);
      setUpperIndex(upperIndex - 12);
    }
    if (activeIndex !== 1) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const nextArray = () => {
    if (lowerIndex < cardsArray.length && upperIndex < cardsArray.length) {
      setLowerIndex(lowerIndex + 12);
      setUpperIndex(upperIndex + 12);
    }
    if (activeIndex < cardsArray.length / 12) {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    setUpdatedArray(cardsArray.slice(lowerIndex, upperIndex));
    if (lowerIndex === 0) {
      setStartPage(true);
    } else {
      setStartPage(false);
    }
    if (lowerIndex < cardsArray.length && upperIndex >= cardsArray.length) {
      setEndPage(true);
    } else {
      setEndPage(false);
    }
  }, [lowerIndex, upperIndex]);

  const maxRowCards = 12;
  const rowSpacing = [];
  const cardRows = [];

  for (let i = 0; i < updatedArray.length; i++) {
    rowSpacing.push(updatedArray[i]);
    rowSpacing.push(<div className="museum-card-spacing"></div>);
  }

  const assignIds = rowSpacing.map((elements, index) => (
    <div key={index}>{elements}</div>
  ));

  for (let j = 0; j < assignIds.length; j += maxRowCards * 2) {
    const group = rowSpacing.slice(j, j + maxRowCards * 2);
    cardRows.push(group);
  }
  const cardRow = cardRows.map((element, index) => (
    <div className="Museums-list-cards-holder" key={index}>
      {element}
    </div>
  ));

  const loadPage = (e) => {
    setActiveIndex(parseInt(e.target.value, 10));
    setUpperIndex(12 * e.target.value);
    if (e.target.value === 1) {
      setLowerIndex(0);
    } else {
      setLowerIndex(12 * e.target.value - 12);
    }
  };

  const n = cardsArray.length / 12;

  const indexes = [];
  for (let i = 0; i < n; i++) {
    indexes.push(i + 1);
  }

  const indexButtons = indexes.map((indices, index) => (
    <button
      value={indices}
      key={index}
      className={`index-btns ${indices === activeIndex ? "active" : ""}`}
      onClick={(e) => {
        loadPage(e);
      }}
    >
      {indices < 10 ? "0" + indices : indices}
    </button>
  ));

  return (
    <>
      <div className="museum-list-wrapper">
        <div className="museum-list-container">
          <div className="musuem-list-headlines">
            <h1>Museums we are working with</h1>
            <p>
              This is a war on the very essence and existence of Ukraine. Putin
              has continuously challenged the notion of a historically sovereign
              and distinct Ukrainian state.
            </p>
          </div>
          <div className="cardRow-container">{cardRow}</div>

          <div className="museum-list-buttons">
            <button
              className={`left-msm-btn ${startPage ? "final" : ""}`}
              onClick={previousArray}
            >
              <img src={arrowselectleft} alt="left-arrow"></img>
            </button>

            {indexButtons}
            <button
              className={`right-msm-btn ${endPage ? "final" : ""}`}
              onClick={nextArray}
            >
              <img src={arrowselectright} alt="right-arrow"></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MuseumsListHolder;
