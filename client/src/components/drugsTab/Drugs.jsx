import React, { useState } from 'react';
import DrugCard from './DrugCard.jsx';
import { drugs as DrugsInfo } from './CorrectedFullDrugsData.jsx';
// Using Bootstrap classes instead of custom CSS

const Drugs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering Drugs based on search input (matches drug name, uses, class, or moa)
  const filteredDrugs = DrugsInfo.filter((drug) => {
    const searchTermLower = searchTerm.toLowerCase();
    
    // Check if search term matches drug name
    const nameMatch = drug.name.toLowerCase().includes(searchTermLower);
    
    // Check if search term matches any uses
    const usesMatch = drug.uses && drug.uses.some(use => 
      use.toLowerCase().includes(searchTermLower)
    );
    
    // Check if search term matches drug class
    const classMatch = drug.class && drug.class.toLowerCase().includes(searchTermLower);
    
    // Check if search term matches mechanism of action
    const moaMatch = drug.moa && drug.moa.toLowerCase().includes(searchTermLower);
    
    // Return true if any field matches
    return nameMatch || usesMatch || classMatch || moaMatch;
  });

  return (
    <div className="min-vh-100 py-5" style={{ 
      background: 'linear-gradient(135deg, #f7fbff 80%, #e6f0fa 100%)'
    }}>
      <div className='container'>
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ 
            background: 'linear-gradient(135deg, #2c5282, #4fd1c7)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>
            Drugs Information
          </h1>
          <p className="lead text-muted">Comprehensive drug database with detailed information</p>
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
                placeholder="Search by name, uses, class, or mechanism..."
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

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-4">
            <span className="badge bg-primary fs-6 px-3 py-2">
              {filteredDrugs.length} drug{filteredDrugs.length !== 1 ? 's' : ''} found
            </span>
          </div>
        )}

        {/* Display Filtered Drug Cards */}
        <div className="row">
          {filteredDrugs.length > 0 ? (
            filteredDrugs.map((drug, index) => (
              <div key={index} className="col-lg-6 col-xl-4 mb-4">
                <DrugCard
                  id={index + 1}
                  name={drug.name}
                  classification={drug.class || "N/A"}
                  mechanism_of_action={drug.moa || "N/A"}
                  uses={drug.uses || []}
                  side_effects={drug.adrs || []}
                  contraindications={drug.cis || []}
                  drug_interactions={drug.interactions || []}
                />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="text-center py-5">
                <div className="mb-4">
                  <i className="fa-solid fa-search-minus text-muted" style={{ fontSize: '4rem' }}></i>
                </div>
                <h4 className="text-muted">No matching drugs found</h4>
                <p className="text-muted">
                  {searchTerm ? `No results match "${searchTerm}"` : 'Try searching with different keywords'}
                </p>
                {searchTerm && (
                  <button 
                    className="btn btn-outline-primary mt-3" 
                    onClick={() => setSearchTerm('')}
                  >
                    <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drugs;
