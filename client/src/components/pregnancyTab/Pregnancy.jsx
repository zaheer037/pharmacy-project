import React, { useState } from "react";
import PregnancyCard from "./PregnancyCard";
import {pregnancyInfo} from "./pregnancyInfo";
import "./pregnancy.css";

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
    <div className="pregnancy-page-container">
      <div className="container mx-auto p-4" id="card-pg">
        {/* Header and Search */}
        <div className="pregnancy-header">
          <h1 className="pregnancy-title">Pregnancy & Drug Safety</h1>
          <p className="pregnancy-subtitle">Safe medication guidelines for pregnancy and breastfeeding</p>
          
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input-modern"
              placeholder="🔍 Search drug categories, safety info..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-search search-icon"></i>
          </div>
        </div>

        {/* Results */}
        {filteredPregnancyInfo.length > 0 ? (
          <>
            {searchTerm && (
              <div className="search-results-header">
                <h3>
                  <i className="fa-solid fa-search me-2"></i>
                  Found {filteredPregnancyInfo.length} result{filteredPregnancyInfo.length !== 1 ? 's' : ''}
                </h3>
              </div>
            )}
            <div className="pregnancy-grid">
              {filteredPregnancyInfo.map((item, index) => (
                <PregnancyCard 
                  key={index} 
                  title={item.title} 
                  description={item.description} 
                  examples={item.examples} 
                />
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <i className="fa-solid fa-search-minus"></i>
            <h3>No results found for "{searchTerm}"</h3>
            <p>Try different keywords or browse all pregnancy safety categories</p>
            <button 
              className="btn btn-primary mt-3"
              onClick={() => setSearchTerm("")}
            >
              <i className="fa-solid fa-arrow-rotate-left me-2"></i>
              Show All Categories
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pregnancy;
