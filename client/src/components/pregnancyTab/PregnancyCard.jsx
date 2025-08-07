// PregnancyCard.jsx
import React, { useState } from "react";

const PregnancyCard = ({ title, description, examples }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card h-100 shadow-sm border-0 mb-3" style={{ 
      borderRadius: '15px',
      background: 'linear-gradient(145deg, #fff5f5 0%, #fef5e7 100%)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 182, 193, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 182, 193, 0.2)';
    }}>
      {/* Card Header */}
      <div className="card-header border-0 p-4" style={{ 
        borderRadius: '15px 15px 0 0',
        background: 'linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 50%, #ffe4e1 100%)'
      }}>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="card-title mb-0 fw-bold text-white" style={{
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '1.2rem'
          }}>
            <i className="fa-solid fa-baby me-2"></i>
            {title}
          </h5>
          <button 
            className="btn btn-sm border-0" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              borderRadius: '50%',
              width: '35px',
              height: '35px'
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Description */}
        <div className="mb-3">
          <div className="d-flex align-items-center mb-2">
            <i className="fa-solid fa-info-circle text-info me-2"></i>
            <h6 className="mb-0 fw-semibold text-dark">Description</h6>
          </div>
          <p className="text-muted mb-0" style={{ 
            fontSize: '0.95rem',
            lineHeight: '1.5'
          }}>
            {description}
          </p>
        </div>

        {/* Examples Section */}
        <div className={`${isExpanded ? '' : 'd-none'}`}>
          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-list-ul me-2" style={{ color: '#ff69b4' }}></i>
            <h6 className="mb-0 fw-semibold text-dark">Examples</h6>
          </div>
          <div className="row g-2">
            {examples && examples.length > 0 ? (
              examples.map((example, index) => (
                <div key={index} className="col-12">
                  <div className="d-flex align-items-start p-3 rounded-3" style={{
                    backgroundColor: 'rgba(255, 182, 193, 0.1)',
                    border: '1px solid rgba(255, 182, 193, 0.2)'
                  }}>
                    <span className="badge me-3 mt-1" style={{ 
                      fontSize: '0.7rem',
                      backgroundColor: '#ff69b4',
                      color: 'white'
                    }}>
                      {index + 1}
                    </span>
                    <span className="flex-grow-1 text-dark">{example}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-info border-0" role="alert" style={{
                  backgroundColor: 'rgba(23, 162, 184, 0.1)',
                  color: '#17a2b8'
                }}>
                  <i className="fa-solid fa-info-circle me-2"></i>
                  No examples available
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Show Examples Button */}
        <div className={`text-center mt-3 ${isExpanded ? 'd-none' : ''}`}>
          <button 
            className="btn btn-sm rounded-pill px-3"
            style={{
              background: 'linear-gradient(135deg, #ff69b4, #ffc0cb)',
              border: 'none',
              color: 'white',
              fontSize: '0.85rem'
            }}
            onClick={() => setIsExpanded(true)}
          >
            <i className="fa-solid fa-eye me-2"></i>
            View Examples ({examples?.length || 0})
          </button>
        </div>
      </div>
    </div>
  );
};

export default PregnancyCard;