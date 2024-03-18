import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header1 from "../../components/Bank/header1";
import Footer from "../../components/Footer/Footer";
import "./bank-information.css";
const BankInformation = () => {
  return (
    <div className="bank-information-container">
      <Navbar />
      <Header1 />
      <Footer />
    </div>
  );
};
export default BankInformation;
