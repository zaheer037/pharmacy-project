import React from "react";
// Using Bootstrap classes instead of custom CSS

const DrugCard = ({ id, name, classification, mechanism_of_action, uses, side_effects, contraindications, drug_interactions }) => {
  return (
    <div className="card shadow-lg border-0 mb-4 h-100">
      <div className="card-header text-white" style={{ background: 'linear-gradient(to right, #4390e1, #30adbc)' }}>
        <h5 className="mb-0 fw-bold">{id}. {name}</h5>
      </div>
      <div className="card-body p-4">
        <h6 className="card-subtitle mb-3" style={{ color: '#3196ba' }}>
          <strong>Classification:</strong> <span className="fw-bold">{classification}</span>
        </h6>
        
        <div className="mb-3">
          <p className="card-text mb-2" style={{ fontSize: '1.05rem' }}>
            <strong className="text-primary">🧬 Mechanism:</strong> {mechanism_of_action}
          </p>
        </div>

        <div className="mb-3">
          <h6 className="fw-bold text-dark mb-2">💊 Uses:</h6>
          <ul className="list-unstyled">
            {uses.map((use, index) => (
              <li key={index} className="d-flex align-items-start mb-2 p-2 rounded" style={{ backgroundColor: '#eef4fb' }}>
                <span className="badge bg-success me-2 mt-1">{index + 1}</span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <h6 className="fw-bold text-dark mb-2">⚠️ Side Effects:</h6>
          <ul className="list-unstyled">
            {side_effects.map((effect, index) => (
              <li key={index} className="d-flex align-items-start mb-2 p-2 rounded" style={{ backgroundColor: '#eef4fb' }}>
                <span className="badge bg-danger me-2 mt-1">{index + 1}</span>
                <span>{effect}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3">
          <h6 className="fw-bold text-dark mb-2">🚫 Contraindications:</h6>
          <ul className="list-unstyled">
            {contraindications.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2 p-2 rounded" style={{ backgroundColor: '#eef4fb' }}>
                <span className="badge bg-warning text-dark me-2 mt-1">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-2">
          <h6 className="fw-bold text-dark mb-2">🔄 Drug Interactions:</h6>
          <ul className="list-unstyled">
            {drug_interactions.map((interaction, index) => (
              <li key={index} className="d-flex align-items-start mb-2 p-2 rounded" style={{ backgroundColor: '#eef4fb' }}>
                <span className="badge bg-info text-dark me-2 mt-1">{index + 1}</span>
                <span>{interaction}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;
