import React, { useState } from "react";
import axios from "axios";
import { YellowTape2, YellowTape1 } from "../../assets/images";
import "./Form.css";
import ThankYou from "../../components/ThankYou/Thankyou";

const Form = ({scrollTo}) => {
  const [form, setForm] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [spnsrMuseumForm, setSpnsrMuseumForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [requestAssistanceForm, setRequestAssistanceForm] = useState({
    name: "",
    email: "",
    request: "",
  });

  const [thankYou, setThankYou] = useState(false);

  const [error, setError] = useState(null);

  const showThankYou = () => {
    setThankYou(false);
  };

  const toggleForm = (value) => {
    setForm(value);
    setIsActive(value);
  };

  const maxLength = 300;

  const updateSpnsrForm = (e) => {
    const { name, value } = e.target;
    if (value.length < maxLength) {
    setSpnsrMuseumForm((prevData) => ({
      ...prevData,
      id: new Date().getTime().toString(),
      [name]: value,
    }));
  }};

  const updateRequestForm = (e) => {
    const { name, value } = e.target;
    if (value.length < maxLength) {
    setRequestAssistanceForm((prevData) => ({
      ...prevData,
      id: new Date().getTime().toString(),
      [name]: value,
    }));
  }};

  const spsnrFormSubmit = (e) => {
    e.preventDefault();

    if (
      spnsrMuseumForm.name &&
      spnsrMuseumForm.email &&
      spnsrMuseumForm.subject &&
      spnsrMuseumForm.message
    ) {
      const sendSpnsrFormToBackend = async () => {
        try {
          const response = await axios.post(
            "https://museums-project.onrender.com/api/data",
            spnsrMuseumForm
          );
          if (response.status === 200) {
            console.log(response.data);
          } else {
            console.error("Error in response from backend:", response.data);
          }
        } catch (error) {
          console.error("Error sending data to backend:", error);
        }
      };
      sendSpnsrFormToBackend();

      setSpnsrMuseumForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setThankYou(true);
    } else {
      setError("Please fill the complete form");
      setTimeout(() => {
        setError(null);
      }, 1000);
    }
  };

  const requestFormSubmit = (e) => {
    e.preventDefault();

    if (
      requestAssistanceForm.name &&
      requestAssistanceForm.email &&
      requestAssistanceForm.request
    ) {
      const sendRequestFormToBackend = async () => {
        try {
          const response = await axios.post(
            "https://museums-project.onrender.com/api/data/two",
            requestAssistanceForm
          );
          if (response.status === 200) {
            console.log(response.data);
          } else {
            console.error("Error in response from backend:", response.data);
          }
        } catch (error) {
          console.error("Error sending data to backend:", error);
        }
      };
      sendRequestFormToBackend();

      setRequestAssistanceForm({
        name: "",
        email: "",
        request: "",
      });
      setThankYou(true);
    } else {
      setError("Please fill the complete form");
      setTimeout(() => {
        setError(null);
      }, 1200);
    }
  };

  return (
    <>
      <div ref={scrollTo} className="form-container-wrapper">
        <div className="form-container">
          <div className="tape-container">
            <img
              loading="lazy"
              className="tape-down"
              src={YellowTape2}
              alt="downward-tape"
            ></img>
            <img
              loading="lazy"
              className="tape-up"
              src={YellowTape1}
              alt="upward-tape"
            ></img>
          </div>
          <div className="form-headline-div">
            <h1 className="form-headline">
              For museums looking to request supplies, or general inquiries,
              contact us below
            </h1>
          </div>
          {!thankYou && (
            <div className="form-input-section">
              <div className="form-btn-container">
                <button
                  className={`spnsr-msm-btn ${isActive ? "active" : ""}`}
                  onClick={() => toggleForm(true)}
                >
                  Contact Us
                </button>
                {/* <button
                  className={`help-btn ${!isActive ? "active" : ""}`}
                  onClick={() => toggleForm(false)}
                >
                  Request Assistance
                </button> */}
              </div>

              <div className="btn-line"></div>
              {form && (
                <div className="form-inputs-container">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-field-name"
                    value={spnsrMuseumForm.name}
                    name="name"
                    onChange={updateSpnsrForm}
                    autoComplete="name"
                  ></input>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input-field-email"
                    value={spnsrMuseumForm.email}
                    name="email"
                    onChange={updateSpnsrForm}
                    autoComplete="email"
                  ></input>
                  <input
                    type="text"
                    placeholder="Subject: General Inquiry / Museum Support"
                    className="input-field-email"
                    value={spnsrMuseumForm.subject}
                    name="subject"
                    onChange={updateSpnsrForm}
                    autoComplete="subject"
                  ></input>
                  <textarea
                    type="text"
                    placeholder="Your message"
                    className="text-area-message"
                    value={spnsrMuseumForm.message}
                    name="message"
                    onChange={updateSpnsrForm}
                    autoComplete="message"
                  ></textarea>
                  <span className="char-remaining">
                    Char limit: {maxLength - spnsrMuseumForm.message.length - 1}
                  </span>
                </div>
              )}
              {!form && (
                <div className="form-inputs-container">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-field-name"
                    value={requestAssistanceForm.name}
                    name="name"
                    onChange={updateRequestForm}
                    autoComplete="name"
                  ></input>
                  <input
                    type="text"
                    placeholder="Business Email"
                    className="input-field-email"
                    value={requestAssistanceForm.email}
                    name="email"
                    onChange={updateRequestForm}
                    autoComplete="email"
                  ></input>
                  <textarea
                    type="text"
                    placeholder="Your request"
                    className="text-area-message"
                    value={requestAssistanceForm.request}
                    name="request"
                    onChange={updateRequestForm}
                    autoComplete="request"
                  ></textarea>
                  <span className="char-remaining">
                    Char limit:{" "}
                    {maxLength - requestAssistanceForm.request.length - 1}
                  </span>
                </div>
              )}
              {form && (
                <button className="form-submit-btn" onClick={spsnrFormSubmit}>
                  Submit
                </button>
              )}
              {!form && (
                <button className="form-submit-btn" onClick={requestFormSubmit}>
                  Submit
                </button>
              )}
              <div className="error-text">
                {error && <p>Error: {error} </p>}
              </div>
            </div>
          )}
          {thankYou && <ThankYou thankState={showThankYou} />}
        </div>
      </div>
    </>
  );
};

export default Form;
