import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="logo">sunnyside</div>
        <div className="links">
          <a href="//">About</a>
          <a href="//">Services</a>
          <a href="//">Project</a>
          <a href="//">Contact</a>
        </div>
      </div>
      <div className="hamburger"></div>
      <div className="mobile-menu"></div>
    </header>
  );
};

export default Header;
