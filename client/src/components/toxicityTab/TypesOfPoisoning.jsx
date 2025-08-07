import React, { useState } from 'react';
// Using Bootstrap classes instead of custom CSS

const TypesOfPoisoning = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const poisoningTypes = [
    {
      id: 1,
      category: "Pharmaceutical Poisoning",
      subcategories: ["Analgesics", "Psychotropic drugs", "Cardiovascular drugs", "Antibiotics"],
      commonAgents: [
        "Paracetamol/Acetaminophen",
        "Aspirin and NSAIDs",
        "Benzodiazepines",
        "Tricyclic antidepressants",
        "Digoxin",
        "Beta-blockers"
      ],
      severity: "Variable",
      prevalence: "Very High",
      emergencyLevel: "High",
      characteristics: "Often intentional overdose, multiple drug interactions possible"
    },
    {
      id: 2,
      category: "Household Chemical Poisoning",
      subcategories: ["Cleaning products", "Pesticides", "Cosmetics", "Personal care products"],
      commonAgents: [
        "Bleach and chlorine compounds",
        "Ammonia-based cleaners",
        "Toilet bowl cleaners",
        "Oven cleaners",
        "Insecticides",
        "Rodenticides"
      ],
      severity: "Moderate to Severe",
      prevalence: "High",
      emergencyLevel: "High",
      characteristics: "Often accidental, especially in children, caustic injuries common"
    },
    {
      id: 3,
      category: "Industrial Chemical Poisoning",
      subcategories: ["Solvents", "Heavy metals", "Gases", "Acids and alkalis"],
      commonAgents: [
        "Carbon monoxide",
        "Hydrogen sulfide",
        "Lead compounds",
        "Mercury",
        "Organic solvents",
        "Hydrofluoric acid"
      ],
      severity: "Severe",
      prevalence: "Moderate",
      emergencyLevel: "Critical",
      characteristics: "Occupational exposure, systemic toxicity, long-term effects"
    },
    {
      id: 4,
      category: "Natural Toxins",
      subcategories: ["Plant toxins", "Mushroom poisoning", "Animal venoms", "Marine toxins"],
      commonAgents: [
        "Amanita mushrooms",
        "Oleander",
        "Castor beans",
        "Snake venoms",
        "Spider bites",
        "Shellfish toxins"
      ],
      severity: "Variable to Severe",
      prevalence: "Low to Moderate",
      emergencyLevel: "High",
      characteristics: "Seasonal variation, geographic distribution, delayed onset possible"
    },
    {
      id: 5,
      category: "Food Poisoning",
      subcategories: ["Bacterial toxins", "Chemical contamination", "Natural toxins", "Additives"],
      commonAgents: [
        "Clostridium botulinum",
        "Staphylococcal enterotoxin",
        "Scombrotoxin",
        "Pesticide residues",
        "Heavy metal contamination",
        "Mycotoxins"
      ],
      severity: "Mild to Severe",
      prevalence: "High",
      emergencyLevel: "Moderate",
      characteristics: "Often affects multiple people, gastrointestinal symptoms predominant"
    },
    {
      id: 6,
      category: "Drug Abuse and Recreational Poisoning",
      subcategories: ["Stimulants", "Depressants", "Hallucinogens", "Synthetic drugs"],
      commonAgents: [
        "Cocaine",
        "Amphetamines",
        "Opioids",
        "MDMA/Ecstasy",
        "Synthetic cannabinoids",
        "Bath salts"
      ],
      severity: "Variable to Severe",
      prevalence: "High",
      emergencyLevel: "High",
      characteristics: "Unknown purity/composition, polydrug use common, behavioral changes"
    },
    {
      id: 7,
      category: "Environmental Poisoning",
      subcategories: ["Air pollution", "Water contamination", "Soil contamination", "Radiation"],
      commonAgents: [
        "Particulate matter",
        "Nitrogen oxides",
        "Heavy metals in water",
        "Organic pollutants",
        "Radioactive materials",
        "Asbestos"
      ],
      severity: "Chronic, Low-grade",
      prevalence: "Very High",
      emergencyLevel: "Low",
      characteristics: "Long-term exposure, community-wide effects, prevention-focused"
    },
    {
      id: 8,
      category: "Intentional Poisoning",
      subcategories: ["Suicide attempts", "Homicide", "Child abuse", "Chemical weapons"],
      commonAgents: [
        "Multiple pharmaceuticals",
        "Cyanide compounds",
        "Strychnine",
        "Ricin",
        "Nerve agents",
        "Caustic substances"
      ],
      severity: "Severe to Fatal",
      prevalence: "Moderate",
      emergencyLevel: "Critical",
      characteristics: "High lethality intent, unusual agents, forensic considerations"
    }
  ];

  const filteredData = poisoningTypes.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.commonAgents.some(agent => agent.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.severity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.characteristics.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSeverityColor = (severity) => {
    if (severity.includes('Severe') || severity.includes('Fatal')) return 'severity-severe';
    if (severity.includes('Moderate')) return 'severity-moderate';
    if (severity.includes('Critical')) return 'severity-critical';
    return 'severity-mild';
  };

  const getEmergencyColor = (level) => {
    switch (level) {
      case 'Critical': return 'emergency-critical';
      case 'High': return 'emergency-high';
      case 'Moderate': return 'emergency-moderate';
      default: return 'emergency-low';
    }
  };

  return (
    <div className="min-vh-100 py-5" style={{ 
      background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #dcfce7 100%)'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: '900px' }}>
          <div className="p-4 rounded-4 border" style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(15px)',
            borderColor: 'rgba(34, 197, 94, 0.3)',
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)'
          }}>
            <h1 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(135deg, #059669, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <i className="fa-solid fa-flask me-3"></i>
              Types of Poisoning
            </h1>
            <p className="lead mb-4 text-dark" style={{ opacity: '0.8' }}>
              Classification and characteristics of various poisoning categories
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
                    color: '#22c55e'
                  }}>
                    <i className="fa-solid fa-search fs-5"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Search poison types, agents, symptoms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '60px',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      padding: '16px 24px 16px 60px',
                      boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.border = '2px solid #22c55e';
                      e.target.style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.border = '2px solid transparent';
                      e.target.style.boxShadow = '0 4px 20px rgba(34, 197, 94, 0.3)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredData.length > 0 ? (
          <>
            {searchTerm && (
              <div className="text-center mb-4">
                <span className="badge fs-6 px-4 py-2 fw-semibold rounded-pill d-inline-block" style={{
                  background: 'linear-gradient(135deg, #059669, #22c55e)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
                }}>
                  <i className="fa-solid fa-search me-2"></i>
                  Found {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
            <div className="row g-4">
              {filteredData.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-12">
                  <div className="card h-100 shadow-sm border-0" style={{ 
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.1)';
                  }}>
                    {/* Card Header */}
                    <div className="card-header border-0 p-4" style={{ 
                      borderRadius: '15px 15px 0 0',
                      background: 'linear-gradient(135deg, #059669, #22c55e)'
                    }}>
                      <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title mb-2 fw-bold text-white" style={{ fontSize: '1.2rem' }}>
                          <i className="fa-solid fa-flask me-2"></i>
                          {item.category}
                        </h5>
                      </div>
                      <div className="d-flex gap-2 flex-wrap">
                        <span className="badge px-2 py-1 rounded-pill" style={{
                          backgroundColor: item.severity.includes('Severe') ? '#dc2626' : 
                                         item.severity.includes('Moderate') ? '#ea580c' : '#16a34a',
                          color: 'white',
                          fontSize: '0.7rem'
                        }}>
                          <i className="fa-solid fa-exclamation-triangle me-1"></i>
                          {item.severity}
                        </span>
                        <span className="badge px-2 py-1 rounded-pill" style={{
                          backgroundColor: item.emergencyLevel === 'Critical' ? '#dc2626' : 
                                         item.emergencyLevel === 'High' ? '#ea580c' : '#16a34a',
                          color: 'white',
                          fontSize: '0.7rem'
                        }}>
                          <i className="fa-solid fa-ambulance me-1"></i>
                          {item.emergencyLevel}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="card-body p-4">
                      {/* Subcategories */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fa-solid fa-sitemap text-primary me-2"></i>
                          <h6 className="mb-0 fw-semibold text-dark">Subcategories</h6>
                        </div>
                        <div className="d-flex flex-wrap gap-1">
                          {item.subcategories.map((sub, index) => (
                            <span key={index} className="badge text-dark px-2 py-1 rounded-pill" style={{
                              backgroundColor: '#dcfce7',
                              border: '1px solid #bbf7d0',
                              fontSize: '0.7rem'
                            }}>
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Common Agents */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fa-solid fa-vial text-warning me-2"></i>
                          <h6 className="mb-0 fw-semibold text-dark">Common Agents</h6>
                        </div>
                        <div style={{ maxHeight: '120px', overflowY: 'auto' }}>
                          <ul className="list-group list-group-flush">
                            {item.commonAgents.map((agent, index) => (
                              <li key={index} className="list-group-item border-0 px-0 py-1 small">{agent}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Prevalence */}
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between p-2 rounded" style={{
                          backgroundColor: '#f0fdf4'
                        }}>
                          <span className="small fw-semibold text-dark">
                            <i className="fa-solid fa-chart-line me-1 text-success"></i>
                            Prevalence:
                          </span>
                          <span className="small text-success fw-bold">{item.prevalence}</span>
                        </div>
                      </div>

                      {/* Characteristics */}
                      <div>
                        <div className="d-flex align-items-center mb-2">
                          <i className="fa-solid fa-info-circle text-info me-2"></i>
                          <h6 className="mb-0 fw-semibold text-dark">Key Characteristics</h6>
                        </div>
                        <p className="small text-muted mb-0">{item.characteristics}</p>
                      </div>
                    </div>
                  </div>
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
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.15)'
            }}>
              <div className="card-body p-5">
                <div className="mb-4">
                  <i className="fa-solid fa-search-minus" style={{ 
                    fontSize: '4rem',
                    background: 'linear-gradient(135deg, #059669, #22c55e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}></i>
                </div>
                <h4 className="text-dark mb-3">No results found for "{searchTerm}"</h4>
                <p className="text-muted mb-4">Try different keywords or browse all poisoning types</p>
                <button 
                  className="btn btn-lg rounded-pill px-4"
                  style={{
                    background: 'linear-gradient(135deg, #059669, #22c55e)',
                    border: 'none',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
                  }}
                  onClick={() => setSearchTerm("")}
                >
                  <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                  Show All Types
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypesOfPoisoning;
