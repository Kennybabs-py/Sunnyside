import React from "react";

import "./Landing.scss";
import iconDown from "assets/icons/icon-arrow-down.svg";

import Section1 from "components/Main/Sections/Section1/Section1";
import Section2 from "components/Main/Sections/Section2/Section2";
import Section3 from "components/Main/Sections/Section3/Section3";
import Review from "components/Main/Review/Review";
import Showcase from "components/Main/Showcase/Showcase";

const Landing: React.FC = () => {
  return (
    <main className="landing">
      <section className="hero">
        <img src={iconDown} alt="arrow" className="arrow" />
        <div className="text">WE ARE CREATIVES</div>
      </section>

      <Section1 />
      <Section2 />
      <Section3 />
      <Review />
      <Showcase />
    </main>
  );
};

export default Landing;
