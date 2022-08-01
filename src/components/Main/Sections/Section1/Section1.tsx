import React from "react";
import "./Section1.scss";

const Section1: React.FC = () => {
  return (
    <section className="transform">
      <div className="text">
        <span>
          Transform your <br /> brand.
        </span>
        <span>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </span>
        <span>Learn more.</span>
      </div>
      <div className="image"></div>
    </section>
  );
};

export default Section1;
