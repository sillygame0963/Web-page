import React, { useState } from "react";
import Navigationsettings from "./Navigationsettings.css";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  const handleToggleOpen = () => {
    setToggle(true);
    console.log(toggle);
  };

  const handleToggleClose = () => {
    setToggle(false);
    console.log(toggle);
  };

  return (
    <nav>
      {/* PC */}
      <div className="nav scroll-smooth md:scroll-auto">
        <ul className="nav-list">
          <li className="nav-item1">
            <b style={{ fontSize: 20 }}>Material Tailwind React</b>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item" id="active" style={{ fontSize: 20 }}>
            <a href="/">
              <i className="fa fa-fw fa-home"></i> Home
            </a>
          </li>
          <li className="nav-item" style={{ fontSize: 20 }}>
            <a href="/profile">
              <i className="fa fa-fw fa-user"></i> Profile
            </a>
          </li>
          <li className="nav-item" style={{ fontSize: 20 }}>
            <a href="/Sign in">
              <i className="fa fa-sign-in"></i> Sign in
            </a>
          </li>
          <li className="nav-item" style={{ fontSize: 20 }}>
            <a href="/Sign up">
              <i className="fa fa-fw fa-user-plus"></i> Sign up
            </a>
          </li>
          <li className="nav-item" style={{ fontSize: 20 }}>
            <a href="/Docs">
              <i className="fa fa-fw fa-file"></i> Docs
            </a>
          </li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/version">
              <button type="button" className="button1">
                <i className="fa fa-trophy"></i>
                <b> PRO VERSION</b>
              </button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/download">
              <button type="button" className="button2">
                <b>FREE DOWNLOAD</b>
              </button>
            </a>
          </li>
        </ul>

        {/* ICON */}

        <label htmlFor="nav-input" className="Icon" onClick={handleToggleOpen}>
          <i className="fa fa-bars"></i>
        </label>

        <input
          type="checkbox"
          name=""
          className="nav-mobile-input"
          id="nav-input"
        />

        <label
          htmlFor="nav-input"
          className="nav-overlay"
          onClick={handleToggle}
        ></label>
      </div>

      {/* MOBILE */}

      <div className={`nav-mobile ${toggle ? "active" : ""}`}>
        <label
          htmlFor="nav-input"
          className="Icon1"
          onClick={handleToggleClose}
        >
          <i className="fa fa-times"></i>
        </label>
        <ul className="nav-list-mobile">
          <li className="nav-item-mobile" style={{ fontSize: 30 }}>
            <a href="/">
              <i className="fa fa-fw fa-home"></i> Home
            </a>
          </li>
          <li className="nav-item-mobile" style={{ fontSize: 30 }}>
            <a href="/profile">
              <i className="fa fa-fw fa-user"></i> Profile
            </a>
          </li>
          <li className="nav-item-mobile" style={{ fontSize: 30 }}>
            <a href="/Sign in">
              <i className="fa fa-sign-in"></i> Sign in
            </a>
          </li>
          <li className="nav-item-mobile" style={{ fontSize: 30 }}>
            <a href="/Sign up">
              <i className="fa fa-fw fa-user-plus"></i> Sign up
            </a>
          </li>
          <li className="nav-item-mobile" style={{ fontSize: 30 }}>
            <a href="/Docs">
              <i className="fa fa-fw fa-file"></i> Docs
            </a>
          </li>
        </ul>
        <ul className="nav-list-mobile">
          <li className="nav-item-mobile">
            <a href="/version">
              <button type="button" className="button-3">
                <i className="fa fa-trophy"></i>
                <b> PRO VERSION</b>
              </button>
            </a>
          </li>
          <li className="nav-item-mobile">
            <a href="/download">
              <button type="button" className="button4">
                <b>FREE DOWNLOAD</b>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
