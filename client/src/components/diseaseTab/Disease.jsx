import React, { useState } from 'react';
import DiseaseCard from './DiseaseCard';
import DiseaseInfo from './DiseaseInfo';
import "./Disease.css";

const Disease = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Add some console logs to debug
  console.log("DiseaseInfo:", DiseaseInfo);
  console.log("DiseaseInfo length:", DiseaseInfo?.length);

  // Check if DiseaseInfo is loaded properly
  if (!DiseaseInfo || DiseaseInfo.length === 0) {
    return (
      <div className="disease-page-container">
        <div className="container disease-container">
          <div className="disease-header">
            <h1 className="disease-title">Disease & Treatment Guidelines</h1>
            <p className="disease-subtitle">Loading disease information...</p>
          </div>
        </div>
      </div>
    );
  }

  // Flatten all diseases from all categories for easier searching
  const allDiseases = DiseaseInfo.flatMap(category => 
    category.diseases?.map(disease => ({
      ...disease,
      categoryName: category.name,
      categoryId: category.id
    })) || []
  );

  // Filter diseases based on search term
  const filteredDiseases = allDiseases.filter(disease => {
    if (!searchTerm) return true;
    
    const name = disease.name?.toLowerCase() || '';
    const pathophysiology = typeof disease.Pathophysiology === 'object' 
      ? JSON.stringify(disease.Pathophysiology).toLowerCase() 
      : (disease.Pathophysiology?.toLowerCase() || '');
    const treatment = typeof disease.Treatment_Guidelines === 'object'
      ? JSON.stringify(disease.Treatment_Guidelines).toLowerCase()
      : (disease.Treatment_Guidelines?.toLowerCase() || '');
    
    // Handle Clinical_Features which can be an object with arrays
    const clinicalFeatures = disease.Clinical_Features || {};
    const allSymptoms = Object.values(clinicalFeatures)
      .flat()
      .filter(item => typeof item === 'string')
      .join(' ')
      .toLowerCase();
    
    const searchLower = searchTerm.toLowerCase();
    
    return name.includes(searchLower) ||
           pathophysiology.includes(searchLower) ||
           treatment.includes(searchLower) ||
           allSymptoms.includes(searchLower);
  });

  // Group filtered diseases back by category if no search term
  const displayData = searchTerm && searchTerm.trim() !== ''
    ? [{ name: "Search Results", diseases: filteredDiseases, id: "search" }]
    : DiseaseInfo;

  return (
    <div className="disease-page-container">
      <div className="container disease-container">
        {/* Header and Search */}
        <div className="disease-header">
          <h1 className="disease-title">Disease & Treatment Guidelines</h1>
          <p className="disease-subtitle">Comprehensive medical information for healthcare professionals</p>
          
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input-modern"
              placeholder="🔍 Search diseases, symptoms, treatments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-search search-icon"></i>
          </div>
        </div>

        {/* Disease Categories/Results */}
        {displayData && displayData.length > 0 ? (
          displayData.map((category, categoryIndex) => (
            <div key={category.id || categoryIndex} className="disease-category">
              <h2 className="category-title">
                {searchTerm && searchTerm.trim() !== '' ? (
                  <>
                    <i className="fa-solid fa-search me-2"></i>
                    {category.name} ({filteredDiseases.length} results)
                  </>
                ) : (
                  `${categoryIndex + 1}. ${category.name}`
                )}
              </h2>
              
              {category.diseases && category.diseases.length > 0 ? (
                <div className="diseases-grid">
                  {category.diseases.map((disease, diseaseIndex) => (
                    <DiseaseCard
                      key={disease.id || diseaseIndex}
                      name={searchTerm && searchTerm.trim() !== ''
                        ? `${disease.name} (${disease.categoryName})`
                        : `${String.fromCharCode(97 + diseaseIndex)}. ${disease.name}`
                      }
                      description={disease.Pathophysiology}
                      treatment={disease.Treatment_Guidelines}
                      symptoms={disease.Clinical_Features}
                      complications={disease.Clinical_Features?.Complications || []}
                      diagnostics={disease.Diagnostic_Approach}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <i className="fa-solid fa-search-minus"></i>
                  <h3>No diseases found in this category</h3>
                  <p>Try browsing other categories or adjust your search terms</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-results">
            <i className="fa-solid fa-search-minus"></i>
            <h3>No results found{searchTerm ? ` for "${searchTerm}"` : ''}</h3>
            <p>Try different keywords or check spelling</p>
            {searchTerm && (
              <button 
                className="btn btn-primary mt-3"
                onClick={() => setSearchTerm("")}
              >
                <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                Show All Categories
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Disease;
