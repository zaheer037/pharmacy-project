import React, { useState } from 'react';
import DrugCard from './DrugCard.jsx';
import DrugsInfo from './DrugsInfo.jsx';
import "./Drugs"

const Drugs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering Drugs based on search input (matches drug name)
  const filteredDrugs = DrugsInfo.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid drugs-container">
      <div className='container '>
        <h1 className="text-center my-4">Drugs Info</h1>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control w-50"
            placeholder="🔍 Search for a drug..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Display Filtered Drug Cards */}
        {filteredDrugs.length > 0 ? (
          filteredDrugs.map((drug) => (
            <DrugCard
              key={drug.id}
              id={drug.id}
              name={drug.name}
              classification={Object.keys(drug).find(key => key !== 'id' && key !== 'name')}
              mechanism_of_action={drug[Object.keys(drug).find(key => key !== 'id' && key !== 'name')].Mechanism_of_Action}
              uses={Object.keys(drug[Object.keys(drug).find(key => key !== 'id' && key !== 'name')].Uses)}
              side_effects={drug[Object.keys(drug).find(key => key !== 'id' && key !== 'name')].Side_Effects}
              contraindications={drug[Object.keys(drug).find(key => key !== 'id' && key !== 'name')].Contraindications}
              drug_interactions={drug[Object.keys(drug).find(key => key !== 'id' && key !== 'name')].Drug_Interactions}
            />
          ))
        ) : (
          <p className="text-center text-danger">No matching drugs found.</p>
        )}
      </div>
    </div>
  );
};

export default Drugs;
