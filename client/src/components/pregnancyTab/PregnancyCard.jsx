// PregnancyCard.jsx
import React from "react";
//import "./pregnancy.css";
const PregnancyCard = ({ title, description, examples }) => {
  return (
    <div className="card shadow-sm border-0 mb-3 image-container" >
      <div className="card-body">
        <h2 className="card-title h5 text-primary">{title}</h2>
        <p className="card-text text-muted">{description}</p>
        <ul className="list-group list-group-flush">
          {examples.map((example, index) => (
            <li key={index} className="list-group-item bg-light text-dark">
              {example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PregnancyCard;