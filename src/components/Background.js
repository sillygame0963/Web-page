import React from "react";
import Backgroundsettings from "./Backgroundsettings.css";
const Background = () => {
  return (
    <>
      {/* PC */}
      <div className="background">
        <div className="Textbg">
          <b>Your story starts with us.</b>
          <div className="Parabg">
            <br />
            <p>
              This is a simple example of a Landing Page you can build using
              Material Tailwind. It features multiple components based on the
              Tailwind CSS and Material Design by Google.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="background-mobile">
        <div className="Textbg-mobile">
          <b>Your story starts with us.</b>
        </div>
        <div className="Parabg-mobile">
          <br />
          <p>
            This is a simple example of a Landing Page you can build using
            Material Tailwind. It features multiple components based on the
            Tailwind CSS and Material Design by Google.
          </p>
        </div>
      </div>
    </>
  );
};

export default Background;
