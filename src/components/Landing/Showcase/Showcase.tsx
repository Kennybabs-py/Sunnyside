import React from "react";
import "./Showcase.scss";
import { showcase } from "data/showcase";

const Showcase: React.FC = () => {
  return (
    <section className="showcase">
      {showcase.map((view) => {
        const { id, image } = view;
        return (
          <div key={id} className="view">
            <img src={image} alt="showcase" />
          </div>
        );
      })}
    </section>
  );
};

export default Showcase;
