import React, {useRef} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Museum from "../../components/Museums/Museums";
import Process from "../../components/Process/Process";
import About from "../../components/About/About";
import Art from "../../components/Art/Art";
import Form from "../../components/Form/Form";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import TabComponentsFrame from "../../components/TabComponentsFrame/TabComponentsFrame";


import "./Home.css";


const Home = () => {

 const scrollToContacts = useRef(null);
 const scrollToSponsor = useRef(null);

 const toggleScroll = () => {
   scrollToContacts.current?.scrollIntoView({ behavior: "smooth" });
   scrollToSponsor.current?.scrollIntoView({ behavior: "smooth" });
 };

  return (
    <div className="home-page">
      <Navbar toggleScroll={toggleScroll} />
      <div className="component-spacing-1"></div>

      <Header toggleScroll={toggleScroll} />
      <div className="component-spacing-2"></div>

      <TabComponentsFrame />
      <div className="component-spacing-3"></div>

      <Info />
      <div className="component-spacing-4"></div>

      <Museum />
      <div className="component-spacing-5"></div>

      <Process />
      <div className="component-spacing-6"></div>

      <About />
      <div className="component-spacing-7"></div>

      <Art />
      <div className="component-spacing-8"></div>

      <Form scrollTo={scrollToSponsor} />
      <div className="component-spacing-9"></div>

      <Contacts scrollTo={scrollToContacts} />
      <div className="component-spacing-10"></div>

      <Footer />
    </div>
  );
};

export default Home;
