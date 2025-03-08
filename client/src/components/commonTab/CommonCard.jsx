import React from "react";

const CommonCard = ({ title, nonPharma, pharma }) => {
  return (
    <div className="card shadow-sm border-0 mb-3">
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <h6 className="card-subtitle mb-2 text-primary-emphasis ">Non-Pharmacological Management</h6>
        <ul className="list-group list-group-flush mb-2">
          {nonPharma.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>
        <h6 className="card-subtitle mb-2 text-primary-emphasis">Pharmacological Management</h6>
        <ul className="list-group list-group-flush">
          {pharma.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommonCard;
