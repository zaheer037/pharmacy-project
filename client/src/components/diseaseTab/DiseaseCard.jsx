import React from 'react';

const DiseaseCard = ({ name, description, treatment, symptoms, complications, diagnostics }) => {
  console.log(name, description, treatment, symptoms, complications, diagnostics);

  const formatObjectData = (data, title) => (
    typeof data === 'object' && data !== null ? (
      <div className="card p-3 mt-2 bg-light border-left">  
        <ul className="list-group list-group-flush">
          {Object.entries(data).map(([key, value], index) => (
            <li key={key} className="list-group-item">
            <strong>{String.fromCharCode(97 + index)}) {key.replace(/_/g, ' ')}:</strong>
              {Array.isArray(value) ? (
                <ul className="list-unstyled mt-1">
                  {value.map((item, idx) => (
                    <li key={idx}><span className="badge bg-primary me-2">{idx + 1}</span> {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-0">{value}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    ) : <p>No items listed</p>

  );

  return (
    <div className="card shadow-sm p-3 mb-4">
      <h2 className="card-title text-primary">{name}</h2>
      <div><strong>1) Description </strong> {formatObjectData(description, )}</div>
      <div><strong>2) Treatment:</strong> {formatObjectData(treatment, )}</div>

      <div><strong>3) Diagnostics:</strong> {formatObjectData(diagnostics, )}</div>

      <div><strong>4) Symptoms:</strong> 

        <ul className="list-group">
          {Array.isArray(symptoms) && symptoms.length > 0 ? symptoms.map((symptom, index) => (

            <li key={index} className="list-group-item">
              <span className="badge bg-success me-2">{index + 1}</span> {symptom}
            </li>
          )) : <li className="list-group-item">No symptoms listed</li>}

        </ul>
      </div>
      <div><strong>5) Complications:</strong> 

        <ul className="list-group">
          {Array.isArray(complications) && complications.length > 0 ? complications.map((complication, index) => (

            <li key={index} className="list-group-item">
              <span className="badge bg-danger me-2">{index + 1}</span> {complication}
            </li>
          )) : <li className="list-group-item">No complications listed</li>}
        </ul>
      </div>
    </div>
  );
};

export default DiseaseCard;
