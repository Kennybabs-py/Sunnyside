import React from "react";

import "./Landing.scss";
import Review from "components/Landing/Review/Review";
import Showcase from "components/Landing/Showcase/Showcase";
import Footer from "components/Footer/Footer";

const Landing: React.FC = () => {
  return (
    <main className="landing">
      <section className="hero">
        <div className="text">WE ARE CREATIVES</div>
      </section>

      <section className="transform">
        <div className="text">
          <span>
            Transform your <br /> brand.
          </span>
          <span>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </span>
          <span>Learn more.</span>
        </div>
        <div className="image"></div>
      </section>

      <section className="standout">
        <div className="image"></div>
        <div className="text">
          <span>Standout to the right audience.</span>
          <span>
            Using a collaborative fomula of designers, researchers,
            photographers, videoggraphers and copywriters, we will build and
            extend your brand digital places.
          </span>
          <span>Learn more.</span>
        </div>
      </section>

      <section className="graphic-graphy">
        <div className="design">
          <div className="text">
            <span>Graphic Design</span>
            <span>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client
              attention.
            </span>
          </div>
        </div>
        <div className="photo">
          <div className="text">
            <span>Photography</span>
            <span>
              Increase your credibility by getting the most stunning, high
              quality photos that improve your business image.
            </span>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <span className="header">CLIENT TESTIMONIALS</span>
        <Review />
      </section>

      <Showcase />
      <Footer />
    </main>
  );
};

export default Landing;
