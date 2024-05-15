import React, {useRef} from "react";
import Navbar from "../../components/Navbar/Navbar";
import MuseumsListHolder from "../../components/MuseumsListHolder/MuseumsListHolder";
import Process from "../../components/Process/Process";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import "./MuseumsListPage.css";
const MuseumsListPage = () => {
  
    
    const scrollToTop = useRef(null);

    const toggleScroll = () => {
      scrollToTop.current?.scrollIntoView({ behavior: "smooth" });
    }
      
    
  return (
    <div className="museums-list-page-container">
      <Navbar scrollTo={scrollToTop}/>
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
      <Footer toggleScroll={toggleScroll} />
    </div>
  );
};
export default MuseumsListPage;
