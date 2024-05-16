import React,{useRef} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Manifesto from "../../components/Manifesto/Manifesto";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

import "./ManifestoPage.css";

const ManifestoPage = () => {
    
    const scrollToSponsor = useRef(null);
    const scrollToTop = useRef(null);

    const toggleScroll = () => {
      
      scrollToSponsor.current?.scrollIntoView({ behavior: "smooth" });
      

      
    };

    const toggleScrollTwo = () => {
      scrollToTop.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className="Manifesto-Page-Container">
        <Navbar scrollTo={scrollToTop} />
        <Manifesto toggleScroll={toggleScroll} />
        <div className="mani-spacing-one"></div>
        <Form scrollTo={scrollToSponsor} />
        <div className="mani-spacing-two"></div>
        <Contacts />
        <Footer toggleScroll={toggleScrollTwo} />
      </div>
    );
};
export default ManifestoPage