import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Bank from "../../components/Bank/Bank";
import Footer from "../../components/Footer/Footer";
import "./bank-information.css";
const BankInformation = () => {
  return (
    <div className="bank-information-container">
      <Navbar />
      <Bank />
      <Footer />
    </div>
  );
};
export default BankInformation;
