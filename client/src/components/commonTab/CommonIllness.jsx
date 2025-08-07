import React, { useState } from "react";
import commonIllnessInfo from "./commonData";
import CommonCard from "./CommonCard";
// Using Bootstrap classes instead of custom CSS

const commonIllness = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter common illness data based on search term
  const filteredCommonData = commonIllnessInfo.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.nonPharmacological.some(treatment => 
      treatment.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    item.pharmacological.some(treatment => 
      treatment.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-vh-100 py-5" style={{ 
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
          <div className="p-4 rounded-4 border" style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(15px)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(252, 182, 159, 0.2)'
          }}>
            <h1 className="display-4 fw-bold mb-3 text-white" style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
              Common Health Conditions
            </h1>
            <p className="lead mb-4" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Comprehensive treatment options for everyday health issues
            </p>
            
            {/* Search Bar */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="position-relative">
                  <div className="position-absolute" style={{
                    left: '20px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    color: '#ff6b6b'
                  }}>
                    <i className="fa-solid fa-search fs-5"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Search conditions, treatments, medications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '60px',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      padding: '16px 24px 16px 60px',
                      boxShadow: '0 4px 20px rgba(252, 182, 159, 0.3)',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.border = '2px solid #ff6b6b';
                      e.target.style.boxShadow = '0 8px 30px rgba(255, 107, 107, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.border = '2px solid transparent';
                      e.target.style.boxShadow = '0 4px 20px rgba(252, 182, 159, 0.3)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredCommonData.length > 0 ? (
          <>
            {searchTerm && (
              <div className="text-center mb-4">
                <span className="badge fs-6 px-4 py-2 text-white fw-semibold rounded-pill d-inline-block" style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.2)'
                }}>
                  <i className="fa-solid fa-search me-2"></i>
                  Found {filteredCommonData.length} result{filteredCommonData.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
            <div className="d-flex flex-column align-items-center">
              {filteredCommonData.map((item, index) => (
                <div key={index} className="w-100 mb-3" style={{ 
                  maxWidth: '800px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <CommonCard
                    title={item.title}
                    nonPharma={item.nonPharmacological}
                    pharma={item.pharmacological}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-5">
            <div className="card shadow-sm border-0 mx-auto" style={{ 
              maxWidth: '500px', 
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 8px 32px rgba(255, 107, 107, 0.15)'
            }}>
              <div className="card-body p-5">
                <div className="mb-4">
                  <i className="fa-solid fa-search-minus" style={{ 
                    fontSize: '4rem',
                    background: 'linear-gradient(135deg, #ff6b6b, #ffa500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}></i>
                </div>
                <h4 className="text-dark mb-3">No results found for "{searchTerm}"</h4>
                <p className="text-muted mb-4">Try different keywords or browse all health conditions</p>
                <button 
                  className="btn btn-lg rounded-pill px-4"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b6b, #ffa500)',
                    border: 'none',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
                  }}
                  onClick={() => setSearchTerm("")}
                >
                  <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                  Show All Conditions
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default commonIllness;
