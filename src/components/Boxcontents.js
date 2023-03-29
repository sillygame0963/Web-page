import React from "react";
import Boxcontentssettings from "./Boxcontentssettings.css";

const Boxcontents = () => {
  return (
    <>
      <div className="Box">
        <div className="Box-item">
          <h2 style={{ fontSize: 20 }}>
            <b>Awarded Agency</b>
          </h2>
          <br />
          <p>
            Divide details your product or agency work into parts. A paragraph
            describing a feature will be enough.
          </p>
        </div>
        <div className="Box-item">
          <h2 style={{ fontSize: 20 }}>
            <b>Free Revision</b>
          </h2>
          <br />
          <p>
            Keep your user engaged by providing meaningful information. Remember
            that by this time, the user is curious.
          </p>
        </div>
        <div className="Box-item">
          <h2 style={{ fontSize: 20 }}>
            <b>Verified Company</b>
          </h2>
          <br />
          <p>
            Write a few about each one. A paragraph describing a feature will be
            enough. Keep you user engaged.
          </p>
        </div>
      </div>
    </>
  );
};

export default Boxcontents;
