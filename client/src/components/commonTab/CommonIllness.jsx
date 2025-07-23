import React, { useState } from "react";
import commonIllnessInfo from "./commonData";
import CommonCard from "./CommonCard";
import "./CommonIllness.css";

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
    <div className="common-illness-page-container">
      <div className="container mt-4" id="card-pg">
        {/* Header and Search */}
        <div className="common-illness-header">
          <h1 className="common-illness-title">Common Health Conditions</h1>
          <p className="common-illness-subtitle">Comprehensive treatment options for everyday health issues</p>
          
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input-modern"
              placeholder="🔍 Search conditions, treatments, medications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-search search-icon"></i>
          </div>
        </div>

        {/* Results */}
        {filteredCommonData.length > 0 ? (
          <>
            {searchTerm && (
              <div className="search-results-header">
                <h3>
                  <i className="fa-solid fa-search me-2"></i>
                  Found {filteredCommonData.length} result{filteredCommonData.length !== 1 ? 's' : ''}
                </h3>
              </div>
            )}
            <div className="d-flex flex-column align-items-center">
              {filteredCommonData.map((item, index) => (
                <div key={index} className="w-100 mb-3 common-card-wrapper">
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
          <div className="no-results">
            <i className="fa-solid fa-search-minus"></i>
            <h3>No results found for "{searchTerm}"</h3>
            <p>Try different keywords or browse all health conditions</p>
            <button 
              className="btn btn-primary mt-3"
              onClick={() => setSearchTerm("")}
            >
              <i className="fa-solid fa-arrow-rotate-left me-2"></i>
              Show All Conditions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default commonIllness;
