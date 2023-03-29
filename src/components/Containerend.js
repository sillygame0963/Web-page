import React from "react";
import ReactDOM from "react-dom";
import Containerendsetting from "./Containerendsetting.css";

const Containerend = () => {
  return (
    <>
      <div className="bg">
        <div className="obj-content">
          <h1 style={{ fontSize: 40 }}>
            <b>
              <br />
              <br />
              Build something
            </b>
          </h1>
          <br />
          <p style={{ fontSize: 20 }}>
            Put the potentially record low maximum sea ice extent this year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </p>
        </div>

        <div className="obj">
          <div className="obj-item">
            <h1>
              <b>Excellent Services</b>
            </h1>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="obj-item">
            <h1>
              <b>Grow Your Market</b>
            </h1>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="obj-item">
            <h1>
              <b>Launch Time</b>
            </h1>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="feedback-content">
          <h1 style={{ fontSize: 40 }}>
            <b>Want to work with us?</b>
          </h1>
          <p style={{ fontSize: 20 }}>
            Complete this form and we will get back to you in 24 hours.
          </p>
        </div>

        <div className="feedback-form">
          <form className="form-item">
            <label htmlFor="fname">Full Name: </label>
            <br />
            <input type="text" name="fname" id="fname" />
            <br />
            <label htmlFor="email">Email Address: </label>
            <br />
            <input type="email" name="email" id="email" />
            <br />
          </form>
        </div>

        <div className="feedback-form2">
          <form className="form-item2">
            <label htmlFor="message">Message: </label>
            <br />
            <textarea name="message" id="message"></textarea>
          </form>
        </div>

        <div className="Button">
          <button type="submit">
            <b>SEND MESSAGE</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Containerend;
