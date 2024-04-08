import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MuseumsListHolder from "../../components/MuseumsListHolder/MuseumsListHolder";
import Process from "../../components/Process/Process";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "./MuseumsListPage.css";
const MuseumsListPage = () => {
  return (
    <div className="museums-list-page-container">
      <Navbar />
      <div className="museums-list-spacing-1"></div>
      <MuseumsListHolder />
      <div className="museums-list-spacing-2"></div>
      <div className="process-museumslistpage">
        <Process />
      </div>
      <div className="museums-list-spacing-3"></div>
      <div className="form-museumslistpage">
        <Form />
      </div>
      <div className="museums-list-spacing-4"></div>
      <Footer />
    </div>
  );
};
export default MuseumsListPage;
