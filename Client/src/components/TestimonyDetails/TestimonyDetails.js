import {React,useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import {
  museumexam2,
  museumexam3,
  museumexam4,
  instagram,
  Twitter,
  leftbutton,
  rightbutton,
  back,
  TestimonyDetailLarge,
} from "../../assets/images";
import "./TestimonyDetails.css";

const TestimonyDetails = () => {

const museumImages = [
  TestimonyDetailLarge,
  museumexam2,
  museumexam3,
  museumexam4,
];

const [detailIndex,setDetailIndex] = useState(0);
const detailImage = museumImages[detailIndex];


const leftToggle = () => {
  if(detailIndex!==0){
  setDetailIndex(detailIndex-1);}
};
const rightToggle = () => {
    if(detailIndex<museumImages.length-1){
    setDetailIndex(detailIndex+1);}
  
};
useEffect(() => {

}, [detailIndex]);

  return (
    <>
      <div className="testimony-detail-wrapper">
        <div className="testimony-detail-container">
          <div className="testimony-detail-back">
            <Link to="/TestimonyPage">
              <button>
                <img  src={back} alt="back-btn"></img>
                Back
              </button>
            </Link>
          </div>
          <div className="testimony-detail-img-btn">
            <div className="testimony-detail-imgs">
              <img
                
                src={detailImage}
                alt="testimony-detail-imgs"
              ></img>
            </div>
            <div className="testimony-detail-img-toggle">
              <button
                className={`detail-left-btn ${detailIndex === 0 ? "end" : ""}`}
                onClick={leftToggle}
              >
                <img  src={leftbutton} alt="left-arrow"></img>
              </button>
              <p>
                {" "}
                {detailIndex + 1} of {museumImages.length}{" "}
              </p>
              <button
                className={`detail-right-btn ${
                  detailIndex === museumImages.length - 1 ? "end" : ""
                }`}
                onClick={rightToggle}
              >
                <img  src={rightbutton} alt="right-arrow"></img>
              </button>
            </div>
          </div>
          <div className="testimony-detail-text">
            <div className="detail-date">
              <p>14 March 2022</p>
            </div>

            <h1>
              Borys Voznytsky Art Gallery <span>(Lviv)</span>
            </h1>
            <p>
              For most entrepreneurs, launching a business starts with an idea:
              A TikTok profile becomes a career in content creation. A
              candle-making hobby becomes an online storefront. A weekend photo
              shoot becomes a stunning portfolio. We wanted to learn more about
              our customers’ processes, and how they turn those ideas into
              thriving businesses. That’s why we launched Making It, a new
              original audio series about starting and sustaining a small
              business today.{" "}
            </p>
            <div className="example-list">
              <ul>
                <li>1963 THE FREEWHEELIN BOB DYLAN</li>{" "}
                <li>1963 THE TIMES THEY ARE A-CHANGIN</li>{" "}
                <li>1964 ANOTHER SIDE OF BOB DYLAN</li>{" "}
                <li>1965 BRINGING IT ALL BACK HOME</li>{" "}
                <li>1965 HIGHWAY 61 REVISITED</li>
                <li>1966 BLONDE ON BLONDE</li>
                <li>1967 GREATEST HITS</li> <li>1967 GREATEST HITS (Gold)</li>
              </ul>
            </div>
            <p>
              Our host, Alex Wolf, launched her first internet company when she
              was 22-years-old. “Starting my business didn’t just change my life
              professionally,” she says, “it reshaped who I am.” Today, Alex is
              a creative executive producer who creates meaningful content about
              technology, culture, innovation, and economics. As an entrepreneur
              herself, she constantly finds herself in conversation with people
              on the brink of launching their next big thing. “Everyone has a
              different definition of success,” she explains. “‘Making it’ to me
              means you are living life in a way that directs you towards that
              definition.” On the Making It audio series, Alex sits down with
              creators and entrepreneurs to learn more about their journeys and
              backstories, what motivated them to pursue their businesses, and
              the setbacks they've overcome along the way. If you’re looking to
              start a new idea—or take your work to the next level—this audio
              series is for you. In the first episode, Alex sits down with
              director and photographer Joshua Kissi. Together they explore
              where our ideas come from, and how to channel them into a creative
              career. You’ll also hear from Brandon Stosuy, Editor-in-Chief of
              the Creative Independent, on what business owners can take away
              from a more artistic perspective. Listen to it below.
            </p>
          </div>
          <div className="testimony-detail-socials">
            <h1>Share with social media</h1>
            <Link to="https://instagram.com">
              <button>
                <img
                  
                  className="testimony-insta-img"
                  src={instagram}
                  alt="insta-logo"
                ></img>
              </button>
            </Link>
            <Link to="https://twitter.com">
              <button>
                <img
                  
                  className="testimony-twitter-img"
                  src={Twitter}
                  alt="Twitter-logo"
                ></img>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonyDetails
