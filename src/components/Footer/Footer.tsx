import React from "react";
import "./Footer.scss";

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
          Facebook
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Pinterest
        </a>
      </div>
    </footer>
  );
};

export default Footer;
