import React from "react";
import ReactDOM from "react-dom";
import Containersetting from "./Containersetting.css";

const Container = () => {
  return (
    <>
      <div className="containbox">
        <div className="contain-item">
          <h1 style={{ fontSize: 50 }}>
            <b>Here are our heroes</b>
          </h1>
          <br />
          <p style={{ fontSize: 20 }}>
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </p>
        </div>
      </div>

      <div className="contain-info">
        <div className="contain-item1">
          <div className="contain-image1" />
          <h2>
            <b>NAME OF SOMEONE</b>
          </h2>
          <p>Web Developer</p>
        </div>
        <div className="contain-item1">
          <div className="contain-image2" />
          <h2>
            <b>NAME OF SOMEONE</b>
          </h2>
          <p>UI/UX Designer</p>
        </div>
        <div className="contain-item1">
          <div className="contain-image3" />
          <h2>
            <b>NAME OF SOMEONE</b>
          </h2>
          <p>Founder and CEO</p>
        </div>
      </div>
    </>
  );
};

export default Container;
