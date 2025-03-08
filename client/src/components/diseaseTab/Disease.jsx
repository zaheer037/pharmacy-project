import React from 'react';
import DiseaseCard from './DiseaseCard';
import DiseaseInfo from './DiseaseInfo';
import "./Disease.css";

const Disease = () => {
  return (
    <div className="container disease-container">
      {DiseaseInfo.map((category, categoryIndex) => (
        <div key={category.id} className="disease-category">
          <h2>{categoryIndex + 1}. {category.name}</h2>
          {category.diseases.map((disease, diseaseIndex) => (
            <DiseaseCard
              key={disease.id}
              name={`${String.fromCharCode(97 + diseaseIndex)}. ${disease.name}`} // Assign a, b, c... to disease names
              description={disease.Pathophysiology}
              treatment={disease.Treatment_Guidelines}
              symptoms={Object.values(disease.Clinical_Features).flat()}
              complications={disease.Clinical_Features.Complications || []}
              diagnostics={disease.Diagnostic_Approach}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Disease;
