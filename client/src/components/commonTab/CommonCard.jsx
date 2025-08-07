import React, { useState } from "react";

const CommonCard = ({ title, nonPharma, pharma }) => {
  const [activeTab, setActiveTab] = useState('nonPharma');

  return (
    <div className="card h-100 shadow-sm border-0 mb-3" style={{ 
      borderRadius: '15px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)'
    }}>
      {/* Card Header */}
      <div className="card-header border-0 p-4" style={{ 
        borderRadius: '15px 15px 0 0',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)'
      }}>
        <h5 className="card-title mb-0 fw-bold text-white text-center" style={{
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          fontSize: '1.2rem'
        }}>
          <i className="fa-solid fa-heartbeat me-2"></i>
          {title}
        </h5>
      </div>

      {/* Tab Navigation */}
      <div className="card-body p-0">
        <div className="nav nav-pills nav-fill border-bottom">
          <button
            className={`nav-link py-3 px-4 border-0 fw-semibold ${activeTab === 'nonPharma' ? 'active' : ''}`}
            style={{
              backgroundColor: activeTab === 'nonPharma' ? '#ff6b6b' : 'transparent',
              color: activeTab === 'nonPharma' ? 'white' : '#6c757d',
              borderRadius: '0'
            }}
            onClick={() => setActiveTab('nonPharma')}
          >
            <i className="fa-solid fa-leaf me-2"></i>
            Non-Pharmacological
          </button>
          <button
            className={`nav-link py-3 px-4 border-0 fw-semibold ${activeTab === 'pharma' ? 'active' : ''}`}
            style={{
              backgroundColor: activeTab === 'pharma' ? '#ff6b6b' : 'transparent',
              color: activeTab === 'pharma' ? 'white' : '#6c757d',
              borderRadius: '0'
            }}
            onClick={() => setActiveTab('pharma')}
          >
            <i className="fa-solid fa-pills me-2"></i>
            Pharmacological
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4" style={{ minHeight: '200px' }}>
          {activeTab === 'nonPharma' && (
            <div>
              <div className="d-flex align-items-center mb-3">
                <i className="fa-solid fa-leaf me-2 fs-5" style={{ color: '#4ecdc4' }}></i>
                <h6 className="mb-0 fw-semibold text-dark">Non-Pharmacological Management</h6>
              </div>
              <div className="row g-2">
                {nonPharma && nonPharma.length > 0 ? (
                  nonPharma.map((item, index) => (
                    <div key={index} className="col-12">
                      <div className="d-flex align-items-start p-3 rounded-3" style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef'
                      }}>
                        <span className="badge me-3 mt-1" style={{ 
                          fontSize: '0.7rem',
                          backgroundColor: '#4ecdc4',
                          color: 'white'
                        }}>
                          {index + 1}
                        </span>
                        <span className="flex-grow-1">{item}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <div className="alert alert-info border-0" role="alert">
                      <i className="fa-solid fa-info-circle me-2"></i>
                      No non-pharmacological treatments available
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'pharma' && (
            <div>
              <div className="d-flex align-items-center mb-3">
                <i className="fa-solid fa-pills me-2 fs-5" style={{ color: '#ff6b6b' }}></i>
                <h6 className="mb-0 fw-semibold text-dark">Pharmacological Management</h6>
              </div>
              <div className="row g-2">
                {pharma && pharma.length > 0 ? (
                  pharma.map((item, index) => (
                    <div key={index} className="col-12">
                      <div className="d-flex align-items-start p-3 rounded-3" style={{
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef'
                      }}>
                        <span className="badge me-3 mt-1" style={{ 
                          fontSize: '0.7rem',
                          backgroundColor: '#ff6b6b',
                          color: 'white'
                        }}>
                          {index + 1}
                        </span>
                        <span className="flex-grow-1">{item}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <div className="alert alert-info border-0" role="alert">
                      <i className="fa-solid fa-info-circle me-2"></i>
                      No pharmacological treatments available
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
