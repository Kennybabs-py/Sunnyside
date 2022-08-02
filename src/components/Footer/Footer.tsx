import React from "react";
import "./Footer.scss";
import fb from "assets/icons/icon-facebook.svg";
import ig from "assets/icons/icon-instagram.svg";
import tw from "assets/icons/icon-twitter.svg";
import pi from "assets/icons/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <span>sunnyside</span>
      <div className="nav">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          About
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Services
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Projects
        </a>
      </div>

      <div className="sm-links">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="facebook" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="intagram" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={tw} alt="twitter" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={pi} alt="pinterest" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
