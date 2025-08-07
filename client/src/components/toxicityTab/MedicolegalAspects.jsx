import React, { useState } from 'react';

const MedicolegalAspects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardExpansion = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Function to truncate long text
  const truncateText = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const medicolegalData = [
    {
      id: 1,
      category: "Documentation Requirements",
      importance: "Critical",
      aspects: [
        "Detailed medical history and examination findings",
        "Time of ingestion/exposure and circumstances",
        "Treatment provided and patient response",
        "Informed consent for procedures",
        "Chain of custody for biological samples"
      ],
      legalImplications: "Poor documentation can lead to medical malpractice claims",
      bestPractices: ["Use standardized forms", "Document chronologically", "Avoid assumptions", "Include witness statements"]
    },
    {
      id: 2,
      category: "Consent and Capacity",
      importance: "High",
      aspects: [
        "Assessment of mental capacity for consent",
        "Emergency treatment without consent provisions",
        "Consent for blood/urine sampling",
        "Psychiatric evaluation consent",
        "Disclosure to family members"
      ],
      legalImplications: "Treatment without proper consent may constitute assault",
      bestPractices: ["Document capacity assessment", "Use emergency provisions when appropriate", "Involve next of kin", "Consider advance directives"]
    },
    {
      id: 3,
      category: "Mandatory Reporting",
      importance: "Critical",
      aspects: [
        "Suspected child abuse or neglect",
        "Occupational poisoning incidents",
        "Communicable disease exposure",
        "Criminal poisoning cases",
        "Public health hazards"
      ],
      legalImplications: "Failure to report may result in professional sanctions",
      bestPractices: ["Know local reporting requirements", "Report promptly", "Maintain confidentiality", "Follow institutional protocols"]
    },
    {
      id: 4,
      category: "Forensic Considerations",
      importance: "High",
      aspects: [
        "Collection and preservation of evidence",
        "Biological sample collection for toxicology",
        "Photography of injuries or evidence",
        "Witness identification and statements",
        "Potential criminal investigation cooperation"
      ],
      legalImplications: "Improper evidence handling may compromise legal proceedings",
      bestPractices: ["Use proper collection techniques", "Maintain chain of custody", "Document everything", "Coordinate with law enforcement"]
    },
    {
      id: 5,
      category: "Confidentiality and Privacy",
      importance: "High",
      aspects: [
        "Patient confidentiality obligations",
        "Disclosure to law enforcement",
        "Insurance company requests",
        "Workplace injury reporting",
        "Media and family inquiries"
      ],
      legalImplications: "Unauthorized disclosure may violate privacy laws",
      bestPractices: ["Follow HIPAA guidelines", "Get written consent for disclosure", "Limit information shared", "Document all disclosures"]
    },
    {
      id: 6,
      category: "Professional Liability",
      importance: "Critical",
      aspects: [
        "Standard of care in poisoning cases",
        "Duty to provide appropriate treatment",
        "Referral obligations and timing",
        "Informed consent for experimental treatments",
        "Follow-up care responsibilities"
      ],
      legalImplications: "Deviation from standard care may result in malpractice claims",
      bestPractices: ["Follow established guidelines", "Consult specialists early", "Document decision-making process", "Maintain competency"]
    },
    {
      id: 7,
      category: "Mental Health and Suicide",
      importance: "Critical",
      aspects: [
        "Psychiatric evaluation for intentional poisoning",
        "Involuntary commitment procedures",
        "Risk assessment and safety planning",
        "Discharge planning and follow-up",
        "Family notification and involvement"
      ],
      legalImplications: "Failure to assess suicide risk may result in liability",
      bestPractices: ["Use validated assessment tools", "Involve psychiatrist", "Consider safety precautions", "Plan appropriate discharge"]
    },
    {
      id: 8,
      category: "Medicolegal Duties of a Doctor",
      importance: "Critical",
      aspects: [
        "Intimate police in all suspected poisoning cases",
        "Maintain proper medicolegal records",
        "Handle consent issues especially with mentally unsound patients or minors",
        "Treat even if patient refuses under emergency doctrine",
        "Ensure proper documentation of all medicolegal aspects"
      ],
      legalImplications: "Failure to perform medicolegal duties may result in legal action and professional sanctions",
      bestPractices: ["Report to authorities immediately", "Document all decisions", "Follow emergency treatment protocols", "Maintain detailed records"]
    },
    {
      id: 9,
      category: "Relevant Legal Sections (IPC)",
      importance: "Critical",
      aspects: [
        "Section 284 – Negligent conduct with poison",
        "Section 324/326/328 – Voluntarily causing hurt using poison",
        "Section 299/300 – Culpable homicide, murder",
        "Section 304A – Death due to negligence",
        "Understanding criminal liability in poisoning cases"
      ],
      legalImplications: "Knowledge of IPC sections essential for proper legal handling of cases",
      bestPractices: ["Familiarize with relevant sections", "Consult legal experts when needed", "Document circumstances clearly", "Cooperate with investigations"]
    },
    {
      id: 10,
      category: "Postmortem Examination",
      importance: "Critical",
      aspects: [
        "Collect and preserve viscera properly",
        "Obtain blood, urine, and gastric contents samples",
        "Send samples to forensic lab for toxicological analysis",
        "Maintain proper chain of custody",
        "Document collection procedures thoroughly"
      ],
      legalImplications: "Improper collection or handling may compromise forensic evidence in legal proceedings",
      bestPractices: ["Follow standard collection protocols", "Use appropriate containers", "Label samples correctly", "Maintain cold chain when required"]
    }
  ];

  const filteredData = medicolegalData.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.importance.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.aspects.some(aspect => aspect.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.legalImplications.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.bestPractices.some(practice => practice.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-vh-100 py-5" style={{
      background: 'linear-gradient(135deg, #f0e7ff 0%, #e9d5ff 50%, #ddd6fe 100%)',
      paddingTop: '20px',
      paddingBottom: '40px'
    }}>
      <div className="container">
        {/* Header and Search */}
        <div className="text-center mb-5">
          <div className="p-4 rounded-4 mb-4" style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(76, 29, 149, 0.3)',
            boxShadow: '0 8px 32px rgba(76, 29, 149, 0.2)'
          }}>
            <h1 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              <i className="fa-solid fa-scale-balanced me-3" style={{color: '#7c3aed'}}></i>
              Medicolegal Aspects of Poisoning
            </h1>
            <p className="lead mb-4 text-dark" style={{ opacity: '0.8' }}>Legal considerations and best practices in toxicology cases</p>
            
            {/* Search Bar */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="position-relative">
                  <div className="position-absolute" style={{
                    left: '20px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    color: '#7c3aed'
                  }}>
                    <i className="fa-solid fa-search fs-5"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Search legal aspects, documentation, reporting..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '60px',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      padding: '16px 24px 16px 60px',
                      boxShadow: '0 4px 20px rgba(76, 29, 149, 0.3)',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.border = '2px solid #7c3aed';
                      e.target.style.boxShadow = '0 8px 30px rgba(76, 29, 149, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.border = '2px solid transparent';
                      e.target.style.boxShadow = '0 4px 20px rgba(76, 29, 149, 0.3)';
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
                  background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(76, 29, 149, 0.3)'
                }}>
                  <i className="fa-solid fa-search me-2"></i>
                  Found {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
                </span>
              </div>
            )}
            <div className="row g-4">
              {filteredData.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="card h-100 border-0 rounded-4 shadow-sm" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(76, 29, 149, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(76, 29, 149, 0.1)';
                  }}>
                    <div className="card-header border-0 rounded-top-4 text-white p-4" style={{
                      background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
                    }}>
                      <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title mb-2 fw-bold">
                          <i className="fa-solid fa-scale-balanced me-2"></i>
                          {item.category}
                        </h5>
                        <span className="badge px-3 py-2 rounded-pill" style={{
                          backgroundColor: item.importance === 'Critical' ? '#dc2626' : 
                                           item.importance === 'High' ? '#d97706' :
                                           '#3b82f6',
                          color: 'white'
                        }}>
                          <i className="fa-solid fa-exclamation-triangle me-1"></i>
                          {item.importance}
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body p-4">
                      <div className="mb-4">
                        <h6 className="text-primary fw-bold mb-2">
                          <i className="fa-solid fa-gavel me-2" style={{color: '#7c3aed'}}></i>
                          Key Aspects
                        </h6>
                        <div className="d-flex flex-wrap gap-1 mb-2">
                          {(expandedCards[item.id] ? item.aspects : item.aspects.slice(0, 3)).map((aspect, index) => (
                            <span 
                              key={index} 
                              className="badge rounded-pill px-2 py-1 small"
                              style={{
                                backgroundColor: 'rgba(76, 29, 149, 0.1)',
                                color: '#4c1d95',
                                border: '1px solid rgba(76, 29, 149, 0.2)',
                                maxWidth: '100%',
                                wordBreak: 'break-word',
                                display: 'inline-block',
                                lineHeight: '1.2'
                              }}
                              title={aspect.length > 50 ? aspect : undefined}
                            >
                              {truncateText(aspect)}
                            </span>
                          ))}
                        </div>
                        {item.aspects.length > 3 && (
                          <button
                            className="btn btn-link p-0 text-decoration-none small"
                            style={{ color: '#7c3aed' }}
                            onClick={() => toggleCardExpansion(item.id)}
                          >
                            {expandedCards[item.id] ? (
                              <>
                                <i className="fa-solid fa-chevron-up me-1"></i>
                                Show less
                              </>
                            ) : (
                              <>
                                <i className="fa-solid fa-chevron-down me-1"></i>
                                +{item.aspects.length - 3} more aspects
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      <div className="mb-4">
                        <h6 className="text-primary fw-bold mb-2">
                          <i className="fa-solid fa-exclamation-triangle me-2" style={{color: '#7c3aed'}}></i>
                          Legal Implications
                        </h6>
                        <p className="small text-dark mb-0">{item.legalImplications}</p>
                      </div>

                      <div>
                        <h6 className="text-primary fw-bold mb-2">
                          <i className="fa-solid fa-lightbulb me-2" style={{color: '#7c3aed'}}></i>
                          Best Practices
                        </h6>
                        <div className="d-flex flex-wrap gap-1">
                          {item.bestPractices.map((practice, index) => (
                            <span 
                              key={index} 
                              className="badge rounded-pill px-2 py-1 small"
                              style={{
                                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                                color: '#7c3aed',
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                maxWidth: '100%',
                                wordBreak: 'break-word',
                                display: 'inline-block',
                                lineHeight: '1.2'
                              }}
                              title={practice.length > 50 ? practice : undefined}
                            >
                              {truncateText(practice)}
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
            <div className="p-5 rounded-4" style={{
              background: 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(76, 29, 149, 0.3)',
              boxShadow: '0 8px 32px rgba(76, 29, 149, 0.2)'
            }}>
              <i className="fa-solid fa-search-minus display-1 mb-4" style={{color: '#7c3aed'}}></i>
              <h3 className="text-muted mb-3">No results found for "{searchTerm}"</h3>
              <p className="text-muted mb-4">Try different keywords or browse all medicolegal aspects</p>
              <button 
                className="btn btn-lg rounded-pill px-4"
                style={{
                  background: 'linear-gradient(135deg, #4c1d95, #7c3aed)',
                  border: 'none',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(76, 29, 149, 0.3)'
                }}
                onClick={() => setSearchTerm("")}
              >
                <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                Show All Aspects
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicolegalAspects;
