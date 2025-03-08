import React from "react";
import "./Drugs.css"
//import "bootstrap/dist/css/bootstrap.min.css";

const DrugCard = ({ id, name, classification, mechanism_of_action, uses, side_effects, contraindications, drug_interactions }) => {
  return (
    <div className="card shadow-lg border-0 mb-4 drugs-container">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">{id}. {name}</h5>
      </div>
      <div className="card-body">
        <h6 className="card-subtitle mb-3 text-muted">Classification: <span className="fw-bold">{classification}</span></h6>
        
        <p className="card-text"><strong>🧬 Mechanism:</strong> {mechanism_of_action}</p>

        <div className="mb-2">
          <strong>💊 Uses:</strong>
          <ul className="">
            {uses.map((use, index) => (
              <li key={index} className="list-group-item"><span className="badge bg-success me-2">{index + 1}</span> {use}</li>
            ))}
          </ul>
        </div>

        <div className="mb-2">
          <strong>⚠️ Side Effects:</strong>
          <ul className="">
            {side_effects.map((effect, index) => (
              <li key={index} className="list-group-item"><span className="badge bg-danger me-2">{index + 1}</span> {effect}</li>
            ))}
          </ul>
        </div>

        <div className="mb-2">
          <strong>🚫 Contraindications:</strong>
          <ul className="">
            {contraindications.map((item, index) => (
              <li key={index} className="list-group-item"><span className="badge bg-warning text-dark me-2">{index + 1}</span> {item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-2">
          <strong>🔄 Drug Interactions:</strong>
          <ul className="">
            {drug_interactions.map((interaction, index) => (
              <li key={index} className="list-group-item"><span className="badge bg-info text-dark me-2">{index + 1}</span> {interaction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
