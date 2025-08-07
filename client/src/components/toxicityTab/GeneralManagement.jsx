import React, { useState } from 'react';
// Using Bootstrap classes instead of custom CSS

const GeneralManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const managementData = [
    {
      id: 1,
      category: "Stabilization",
      priority: "Immediate",
      steps: [
        "Assess airway, breathing, circulation (ABCs)",
        "Evaluate CNS depression, seizures, cardiac arrhythmias",
        "Provide oxygenation and IV fluids",
        "Perform intubation and ventilation if needed",
        "Treat seizures with diazepam or phenobarbitone",
        "Monitor ECG and treat arrhythmias with antiarrhythmics"
      ],
      timeframe: "0-15 minutes",
      equipment: ["Oxygen", "IV fluids", "Intubation kit", "Diazepam", "Phenobarbitone", "ECG monitor", "Antiarrhythmics"]
    },
    {
      id: 2,
      category: "Evaluation",
      priority: "Immediate",
      steps: [
        "Manage hypothermia or hyperthermia",
        "Assess and correct acid-base imbalances",
        "Evaluate and treat convulsions and movement disorders",
        "Monitor and correct electrolyte disturbances",
        "Complete neurological assessment",
        "Monitor vital signs continuously"
      ],
      timeframe: "15-30 minutes",
      equipment: ["Temperature monitoring", "ABG analyzer", "Electrolyte panels", "Cooling/warming devices", "Neurological assessment tools"]
    },
    {
      id: 3,
      category: "Decontamination - Eye and Skin",
      priority: "Immediate for exposure",
      steps: [
        "Perform copious washing of eyes with normal saline",
        "Remove contaminated clothing immediately",
        "Wash skin thoroughly with soap and water",
        "Continue irrigation for 15-20 minutes minimum",
        "Assess for chemical burns or irritation",
        "Apply appropriate topical treatments if needed"
      ],
      timeframe: "Immediately upon exposure",
      equipment: ["Normal saline", "Eye irrigation kit", "Soap and water", "Clean towels", "Protective equipment"]
    },
    {
      id: 4,
      category: "Decontamination - Gut",
      priority: "Within 1-2 hours",
      steps: [
        "Consider emesis (rarely used due to complications)",
        "Perform gastric lavage within 1-2 hours if indicated",
        "Administer catharsis with magnesium sulfate",
        "Give activated charcoal (single or multiple doses)",
        "Consider whole bowel irrigation especially for body packers",
        "Monitor for complications during procedures"
      ],
      timeframe: "1-2 hours post-ingestion",
      equipment: ["Gastric tube", "Activated charcoal", "Magnesium sulfate", "PEG solution", "Suction device"]
    },
    {
      id: 5,
      category: "Elimination Enhancement",
      priority: "Case-specific",
      steps: [
        "Assess need for forced diuresis (now mostly obsolete)",
        "Consider hemodialysis for methanol, ethylene glycol, salicylates, lithium",
        "Use hemoperfusion for theophylline, carbamazepine, barbiturates",
        "Monitor fluid balance during extracorporeal removal",
        "Coordinate with nephrology for dialysis procedures",
        "Monitor for complications of elimination procedures"
      ],
      timeframe: "2-6 hours depending on toxin",
      equipment: ["Hemodialysis machine", "Hemoperfusion equipment", "Dialysis catheters", "Monitoring devices"]
    },
    {
      id: 6,
      category: "Antidote Use",
      priority: "Toxin-specific",
      steps: [
        "Administer specific antidotes only when clearly indicated",
        "Use naloxone for opioid poisoning",
        "Give atropine for organophosphate poisoning",
        "Administer N-acetylcysteine for paracetamol overdose",
        "Use digoxin Fab fragments for digoxin toxicity",
        "Calculate appropriate dosages based on patient weight and toxin level",
        "Monitor for antidote-specific adverse effects"
      ],
      timeframe: "As soon as indicated",
      equipment: ["Naloxone", "Atropine", "N-acetylcysteine", "Digoxin Fab", "Other specific antidotes", "Infusion pumps"]
    },
    {
      id: 7,
      category: "Nursing & Psychiatric Care",
      priority: "Continuous",
      steps: [
        "Maintain constant monitoring of vital signs",
        "Perform regular neurological assessments",
        "Document all changes in patient condition",
        "Conduct psychiatric evaluation for suicidal intent",
        "Assess for substance abuse history",
        "Provide emotional support to patient and family",
        "Coordinate with mental health professionals",
        "Plan appropriate follow-up care"
      ],
      timeframe: "Throughout hospitalization",
      equipment: ["Monitoring devices", "Documentation tools", "Psychiatric assessment forms", "Contact information for mental health services"]
    }
  ];

  const filteredData = managementData.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.priority.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.steps.some(step => step.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.equipment.some(eq => eq.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-vh-100 py-5" style={{ 
      background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 50%, #e6f3ff 100%)'
    }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: '900px' }}>
          <div className="p-4 rounded-4 border" style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(15px)',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)'
          }}>
            <h1 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <i className="fa-solid fa-shield-heart me-3"></i>
              General Management of Poisoning
            </h1>
            <p className="lead mb-4 text-dark" style={{ opacity: '0.8' }}>
              Systematic approach to managing poisoned patients
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
                    color: '#3b82f6'
                  }}>
                    <i className="fa-solid fa-search fs-5"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Search management steps, equipment, procedures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '60px',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      padding: '16px 24px 16px 60px',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.border = '2px solid #3b82f6';
                      e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.border = '2px solid transparent';
                      e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
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
                  background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
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
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.1)';
                  }}>
                    {/* Card Header */}
                    <div className="card-header border-0 p-4" style={{ 
                      borderRadius: '15px 15px 0 0',
                      background: 'linear-gradient(135deg, #1e40af, #3b82f6)'
                    }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0 fw-bold text-white" style={{ fontSize: '1.2rem' }}>
                          <i className="fa-solid fa-user-doctor me-2"></i>
                          {item.category}
                        </h5>
                        <span className="badge px-3 py-2 rounded-pill" style={{
                          backgroundColor: item.priority === 'Immediate' ? '#dc2626' : 
                                         item.priority === 'Immediate for exposure' ? '#ea580c' :
                                         item.priority === 'Within 1-2 hours' ? '#d97706' :
                                         item.priority === 'Case-specific' ? '#7c3aed' :
                                         item.priority === 'Toxin-specific' ? '#059669' : '#4f46e5',
                          color: 'white'
                        }}>
                          <i className="fa-solid fa-clock me-1"></i>
                          {item.priority}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="card-body p-4">
                      {/* Timeframe */}
                      <div className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fa-solid fa-stopwatch text-primary me-2"></i>
                          <h6 className="mb-0 fw-semibold text-dark">Timeframe</h6>
                        </div>
                        <p className="mb-0 text-muted small bg-light p-2 rounded">{item.timeframe}</p>
                      </div>

                      {/* Management Steps */}
                      <div className="mb-4">
                        <div className="d-flex align-items-center mb-2">
                          <i className="fa-solid fa-list-check text-success me-2"></i>
                          <h6 className="mb-0 fw-semibold text-dark">Management Steps</h6>
                        </div>
                        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                          <ol className="list-group list-group-numbered list-group-flush">
                            {item.steps.map((step, index) => (
                              <li key={index} className="list-group-item border-0 px-0 py-2 small">{step}</li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {/* Equipment */}
                      <div>
                        <div className="d-flex align-items-center mb-2">
                          <i className="fa-solid fa-toolbox text-warning me-2"></i>
                          <h6 className="mb-0 fw-semibold text-dark">Required Equipment</h6>
                        </div>
                        <div className="d-flex flex-wrap gap-1">
                          {item.equipment.map((eq, index) => (
                            <span key={index} className="badge text-dark px-2 py-1 rounded-pill" style={{
                              backgroundColor: '#e5f3ff',
                              border: '1px solid #bfdbfe',
                              fontSize: '0.7rem'
                            }}>
                              {eq}
                            </span>
                          ))}
                        </div>
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
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
            }}>
              <div className="card-body p-5">
                <div className="mb-4">
                  <i className="fa-solid fa-search-minus" style={{ 
                    fontSize: '4rem',
                    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}></i>
                </div>
                <h4 className="text-dark mb-3">No results found for "{searchTerm}"</h4>
                <p className="text-muted mb-4">Try different keywords or browse all management procedures</p>
                <button 
                  className="btn btn-lg rounded-pill px-4"
                  style={{
                    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                    border: 'none',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                  }}
                  onClick={() => setSearchTerm("")}
                >
                  <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                  Show All Procedures
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralManagement;