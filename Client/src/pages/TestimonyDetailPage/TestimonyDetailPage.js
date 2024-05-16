import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TestimonyDetails from "../../components/TestimonyDetails/TestimonyDetails";
import Footer from "../../components/Footer/Footer";
import "./TestimonyDetailPage.css";
const TestimonyDetailPage = () => {
  return (
    <div className="testimony-details-container">
      <Navbar />
      <TestimonyDetails />
      <Footer />
    </div>
  );
};
export default TestimonyDetailPage;
