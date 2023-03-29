import React from "react";
import Missionsetting from "./Missionsetting.css";

const Mission = () => {
  return (
    <>
      {/*Content box*/}
      <div className="box">
        <div className="box-content">
          <h2 style={{ fontSize: 40 }}>
            <b>Working with us is a pleasure</b>
          </h2>
          <br />
          <p>
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
            <br />
            <br />
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <br />
          
          {/*Button*/}
          <button type="button" className="button">
            <h3 style={{ fontSize: 12 }}>
              <b>READ MORE</b>
            </h3>
          </button>
        </div>

        <div className="box-content">
          <div className="content-image" />
          <h2 style={{ fontSize: 25 }}>
            <b>Top Notch Services</b>
          </h2>
          <br />
          <p>
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
