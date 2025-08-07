import React, { useState } from 'react';
import DiseaseCard from './DiseaseCard';
import DiseaseInfo from './DiseaseInfo';
// Using Bootstrap classes instead of custom CSS

const Disease = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Check if DiseaseInfo is loaded properly
  if (!DiseaseInfo || DiseaseInfo.length === 0) {
    return (
      <div className="min-vh-100 py-5" style={{ 
        background: 'linear-gradient(135deg, #f7fbff 80%, #e6f0fa 100%)'
      }}>
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-3" style={{ 
              background: 'linear-gradient(135deg, #2c5282, #4fd1c7)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>
              Disease & Treatment Guidelines
            </h1>
            <p className="lead text-muted">Loading disease information...</p>
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
    <div className="min-vh-100 py-5" style={{ 
      background: 'linear-gradient(135deg, #f7fbff 80%, #e6f0fa 100%)'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ 
            background: 'linear-gradient(135deg, #2c5282, #4fd1c7)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Disease & Treatment Guidelines
          </h1>
          <p className="lead text-muted">Comprehensive medical information for healthcare professionals</p>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-lg-6">
            <div className="position-relative">
              <div className="position-absolute" style={{
                left: '20px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                zIndex: 2,
                color: '#4fd1c7'
              }}>
                <i className="fa-solid fa-search fs-5"></i>
              </div>
              <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                placeholder="Search diseases, symptoms, treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  paddingLeft: '60px',
                  borderRadius: '50px',
                  backgroundColor: 'white',
                  fontSize: '1.1rem',
                  padding: '16px 24px 16px 60px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: '2px solid transparent',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.border = '2px solid #4fd1c7';
                  e.target.style.boxShadow = '0 0 0 0.2rem rgba(79, 209, 199, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.border = '2px solid transparent';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                }}
              />
            </div>
          </div>
        </div>

        {/* Disease Categories/Results */}
        {displayData && displayData.length > 0 ? (
          displayData.map((category, categoryIndex) => (
            <div key={category.id || categoryIndex} className="mb-5">
              {/* Category Header */}
              <div className="text-center mb-4">
                <div className="d-inline-block px-4 py-3 rounded-4" style={{
                  background: 'linear-gradient(135deg, #2c5282, #4fd1c7)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(79, 209, 199, 0.3)'
                }}>
                  <h2 className="h3 mb-0 fw-bold">
                    {searchTerm && searchTerm.trim() !== '' ? (
                      <>
                        <i className="fa-solid fa-search me-2"></i>
                        Search Results ({filteredDiseases.length})
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-notes-medical me-2"></i>
                        {category.name}
                      </>
                    )}
                  </h2>
                  {!searchTerm && (
                    <small className="opacity-75">
                      {category.diseases?.length || 0} condition{(category.diseases?.length || 0) !== 1 ? 's' : ''}
                    </small>
                  )}
                </div>
              </div>
              
              {category.diseases && category.diseases.length > 0 ? (
                <div className="row g-4">
                  {category.diseases.map((disease, diseaseIndex) => (
                    <div key={disease.id || diseaseIndex} className="col-lg-4 col-md-6 col-12">
                      <DiseaseCard
                        name={searchTerm && searchTerm.trim() !== ''
                          ? `${disease.name}`
                          : `${String.fromCharCode(97 + diseaseIndex)}. ${disease.name}`
                        }
                        description={disease.Pathophysiology}
                        treatment={disease.Treatment_Guidelines || disease.Treatment}
                        symptoms={disease.Clinical_Features}
                        diagnostics={disease.Diagnostic_Approach}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-5">
                  <div className="card shadow-sm border-0 mx-auto" style={{ 
                    maxWidth: '400px', 
                    borderRadius: '15px' 
                  }}>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <i className="fa-solid fa-search-minus text-muted" style={{ fontSize: '3rem' }}></i>
                      </div>
                      <h5 className="text-muted mb-2">No diseases found</h5>
                      <p className="text-muted small mb-0">
                        Try browsing other categories or adjust your search terms
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <div className="card shadow-sm border-0 mx-auto" style={{ 
              maxWidth: '500px', 
              borderRadius: '20px' 
            }}>
              <div className="card-body p-5">
                <div className="mb-4">
                  <i className="fa-solid fa-search-minus text-primary" style={{ fontSize: '4rem' }}></i>
                </div>
                <h4 className="text-muted mb-3">
                  No results found{searchTerm ? ` for "${searchTerm}"` : ''}
                </h4>
                <p className="text-muted mb-4">Try different keywords or check spelling</p>
                {searchTerm && (
                  <button 
                    className="btn btn-primary btn-lg rounded-pill px-4"
                    onClick={() => setSearchTerm("")}
                  >
                    <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                    Show All Categories
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Disease;
