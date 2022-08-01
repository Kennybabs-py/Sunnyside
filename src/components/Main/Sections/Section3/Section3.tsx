import React from "react";
import "./Section3.scss";

const Section3: React.FC = () => {
  return (
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
            Increase your credibility by getting the most stunning, high quality
            photos that improve your business image.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section3;
