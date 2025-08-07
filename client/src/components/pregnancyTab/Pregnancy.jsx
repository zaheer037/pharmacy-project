import React, { useState } from "react";
import PregnancyCard from "./PregnancyCard";
import {pregnancyInfo} from "./pregnancyInfo";
// Using Bootstrap classes instead of custom CSS

const Pregnancy = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter pregnancy info based on search term
  const filteredPregnancyInfo = pregnancyInfo.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.examples.some(example => 
      example.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-vh-100 py-5" style={{ 
      background: 'linear-gradient(135deg, #ffe5e5 0%, #fff0f5 50%, #fdf2f8 100%)'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
          <div className="p-4 rounded-4 border" style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(15px)',
            borderColor: 'rgba(255, 182, 193, 0.3)',
            boxShadow: '0 8px 32px rgba(255, 182, 193, 0.2)'
          }}>
            <h1 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(135deg, #ff69b4, #ffc0cb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <i className="fa-solid fa-baby me-3"></i>
              Pregnancy & Drug Safety
            </h1>
            <p className="lead mb-4 text-dark" style={{ opacity: '0.8' }}>
              Safe medication guidelines for pregnancy and breastfeeding
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
                    color: '#ff69b4'
                  }}>
                    <i className="fa-solid fa-search fs-5"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Search drug categories, safety info..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '60px',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      padding: '16px 24px 16px 60px',
                      boxShadow: '0 4px 20px rgba(255, 182, 193, 0.3)',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.border = '2px solid #ff69b4';
                      e.target.style.boxShadow = '0 8px 30px rgba(255, 105, 180, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.border = '2px solid transparent';
                      e.target.style.boxShadow = '0 4px 20px rgba(255, 182, 193, 0.3)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredPregnancyInfo.length > 0 ? (
          <>
            {searchTerm && (
              <div className="text-center mb-4">
                <span className="badge fs-6 px-4 py-2 fw-semibold rounded-pill d-inline-block" style={{
                  background: 'linear-gradient(135deg, #ff69b4, #ffc0cb)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
                }}>
                  <i className="fa-solid fa-search me-2"></i>
                  Found {filteredPregnancyInfo.length} result{filteredPregnancyInfo.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
            <div className="row g-4">
              {filteredPregnancyInfo.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <PregnancyCard 
                    title={item.title} 
                    description={item.description} 
                    examples={item.examples} 
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
              boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)'
            }}>
              <div className="card-body p-5">
                <div className="mb-4">
                  <i className="fa-solid fa-search-minus" style={{ 
                    fontSize: '4rem',
                    background: 'linear-gradient(135deg, #ff69b4, #ffc0cb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}></i>
                </div>
                <h4 className="text-dark mb-3">No results found for "{searchTerm}"</h4>
                <p className="text-muted mb-4">Try different keywords or browse all pregnancy safety categories</p>
                <button 
                  className="btn btn-lg rounded-pill px-4"
                  style={{
                    background: 'linear-gradient(135deg, #ff69b4, #ffc0cb)',
                    border: 'none',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)'
                  }}
                  onClick={() => setSearchTerm("")}
                >
                  <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                  Show All Categories
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pregnancy;
