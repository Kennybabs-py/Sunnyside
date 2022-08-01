import React, { useState } from "react";
import "./Header.scss";
import hamburger from "assets/icons/icon-hamburger.svg";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev): boolean => !prev);
  };

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

        <img
          src={hamburger}
          alt="icon"
          className="hamburger-icon"
          onClick={handleOpen}
        />

        <div className={`mobile-menu ${open ? "open" : ""}`}>
          <a href="#id">About</a>
          <a href="#id">Services</a>
          <a href="#id">Project</a>
          <a href="#id">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
