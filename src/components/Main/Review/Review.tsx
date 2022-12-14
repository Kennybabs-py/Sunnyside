import React from "react";

import "./Review.scss";
import { review } from "data/review";

const Review: React.FC = () => {
  return (
    <section className="testimonials">
      <span className="header">CLIENT TESTIMONIALS</span>

      <div className="review">
        {review.map((client) => {
          const { id, name, image, text, job } = client;
          return (
            <div key={id} className="client">
              <img src={image} alt={name} />
              <span className="testimony-text">{text}</span>
              <div className="name-job">
                <span>{name}</span>
                <span>{job}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
