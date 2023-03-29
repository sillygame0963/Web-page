import React from "react";
import ReactDOM from "react-dom";
import Footersetting from "./Footersetting.css";

const Footer = () => {
  return (
    <>
      <div className="bg">
        <div className="footer">
          <div className="footer-item">
            <h1 style={{ fontSize: 30 }}>
              <b>Material Tailwind</b>
            </h1>
            <p>
              Easy to use React components for Tailwind CSS and Material Design.
            </p>
          </div>

          <div className="footer-item1">
            <ul className="list-item">
              <li className="item">
                <h2>
                  <b>USEFUL LINKS</b>
                </h2>
                <br />
              </li>
              <li className="item">
                <a href="/about us">About us</a>
              </li>
              <li className="item">
                <a href="/blog">Blog</a>
              </li>
              <li className="item">
                <a href="/github">Github</a>
              </li>
              <li className="item">
                <a href="/product">Free Products</a>
              </li>
            </ul>
          </div>

          <div className="footer-item2">
            <ul className="list-item">
              <li className="item">
                <h2>
                  <b>OTHER RESOURCES</b>
                </h2>
                <br />
              </li>
              <li className="item">
                <a href="/license">MIT License</a>
              </li>
              <li className="item">
                <a href="/contribute">Contribute</a>
              </li>
              <li className="item">
                <a href="/Log">Change Log</a>
              </li>
              <li className="item">
                <a href="/Contact Us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
