import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TestimonyContainer from "../../components/Testimonies/testimony";
import Footer from "../../components/Footer/Footer";
import "./TestimoneyPage.css";
const TestimonyPage = () => {
  return (
    <div className="testimony-page-container">
      <Navbar />
      <TestimonyContainer />
      {/* <Footer /> */}
    </div>
  );
};
export default TestimonyPage;
