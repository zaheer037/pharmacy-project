import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faDownload, 
  faSearch, 
  faCalendarAlt, 
  faUser, 
  faMapMarkerAlt, 
  faHeartbeat, 
  faPills, 
  faVial 
} from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(
  faDownload,
  faSearch,
  faCalendarAlt,
  faUser,
  faMapMarkerAlt,
  faHeartbeat,
  faPills,
  faVial
);

const ClinicalAccess = () => {
  const [clinicalData, setClinicalData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch clinical data
    const fetchClinicalData = async () => {
      setLoading(true);
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        try {
          const response = await axios.get(`https://pharmacy-project-1.onrender.com/api/clinical/user/${userInfo._id}`, {
            headers: {
              Authorization: `Bearer ${userInfo.token}`, // Ensure token is included
            },
          });
          setClinicalData(response.data);
        } catch (error) {
          console.error("Error fetching clinical data:", error);
        } finally {
          setLoading(false);
        }
      };
    }
    fetchClinicalData();
  }, []);

  // Filter clinical data based on search term and category
  const filteredData = clinicalData.filter((entry) => {
    const matchesSearch = JSON.stringify(entry).toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === "all") {
      return matchesSearch;
    } else {
      // Category-specific filtering
      switch(activeCategory) {
        case "family-history":
          return matchesSearch && entry.familyHistory && entry.familyHistory.trim() !== "";
        case "drug-induced":
          return matchesSearch && entry.pastMedicalHistory && entry.pastMedicalHistory.length > 0;
        case "biological-markers":
          return matchesSearch && entry.labProfile && entry.labProfile.length > 0;
        case "gender-age":
          return matchesSearch && entry.age && entry.sex;
        case "regional":
          return matchesSearch && entry.placeOfLiving && entry.placeOfLiving.trim() !== "";
        case "adr":
          return matchesSearch && entry.personalHistory && entry.personalHistory.allergies && 
                entry.personalHistory.allergies !== "no";
        default:
          return matchesSearch;
      }
    }
  });

  // Function to handle downloading entry as JSON
  const handleDownload = (entry) => {
    const dataStr = JSON.stringify(entry, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `clinical-data-${entry._id || Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Format date string
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Function to open the modal with selected record
  const openDetailModal = (entry) => {
    setSelectedRecord(entry);
    setShowModal(true);
  };

  // Function to close the modal
  const closeDetailModal = () => {
    setShowModal(false);
    setSelectedRecord(null);
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="display-6 fw-bold text-primary text-center">
          <FontAwesomeIcon icon={faHeartbeat} className="me-2" />
          Clinical Data Access
        </h1>
        <p className="text-muted text-center">Access and analyze patient clinical records</p>
      </header>
      
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-8">
              {/* Search Bar */}
              <div className="search-container position-relative">
                <span className="search-icon-wrapper">
                  <FontAwesomeIcon icon={faSearch} className="position-absolute" 
                                style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#4a6cf7' }}/>
                </span>
                <input 
                  placeholder="Search clinical data..." 
                  type="text" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="form-control"
                  style={{ borderRadius: '50px', padding: '0.75rem 1rem 0.75rem 3.5rem' }}
                />
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-end">
              <span className="badge bg-primary rounded-pill px-3 py-2">
                {filteredData.length} record(s) found
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categorized Data Section */}
      <div className="filter-container mb-4">
        <div className="card shadow-sm border-0">
          <div className="card-body py-3">
            <h5 className="mb-3 border-start border-primary border-4 ps-2">Filter by Category</h5>
            <div className="d-flex flex-wrap gap-2">
              <button 
                className={`btn rounded-pill px-3 ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory('all')}
              >
                All Records
              </button>
              <button 
                className={`btn rounded-pill px-3 ${activeCategory === 'family-history' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory('family-history')}
              >
                <FontAwesomeIcon icon={faHeartbeat} className="me-1" /> 
                Family History
              </button>
              <button 
                className={`btn rounded-pill px-3 ${activeCategory === 'drug-induced' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory('drug-induced')}
              >
                <FontAwesomeIcon icon={faPills} className="me-1" /> 
                Drug Induced
              </button>
              <button 
                className={`btn rounded-pill px-3 ${activeCategory === 'biological-markers' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory('biological-markers')}
              >
                <FontAwesomeIcon icon={faVial} className="me-1" /> 
                Biological Markers
              </button>
              <button 
                className={`btn rounded-pill px-3 ${activeCategory === 'gender-age' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory('gender-age')}
              >
                <FontAwesomeIcon icon={faUser} className="me-1" /> 
                Gender/Age
              </button>
              <button 
                className={`btn rounded-pill px-3 ${activeCategory === 'adr' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory('adr')}
              >
                ADR Identification
              </button>
              <button 
                className={`btn rounded-pill px-3 ${activeCategory === 'regional' ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setActiveCategory('regional')}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> 
                Regional
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Display Clinical Data Results */}
      <div className="mb-4">
        <h4 className="mb-3 d-flex align-items-center">
          <div className="me-2 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
               style={{width: "30px", height: "30px", fontSize: "14px"}}>
            <FontAwesomeIcon icon={
              activeCategory === 'family-history' ? faHeartbeat :
              activeCategory === 'drug-induced' ? faPills :
              activeCategory === 'biological-markers' ? faVial :
              activeCategory === 'gender-age' ? faUser :
              activeCategory === 'regional' ? faMapMarkerAlt :
              faHeartbeat
            } />
          </div>
          {activeCategory === 'all' ? 'All Clinical Records' : 
           activeCategory === 'family-history' ? 'Family History Based Records' :
           activeCategory === 'drug-induced' ? 'Drug Induced Disease Records' :
           activeCategory === 'biological-markers' ? 'Biological Markers Records' :
           activeCategory === 'gender-age' ? 'Gender/Age Prevalence Records' :
           activeCategory === 'adr' ? 'ADR Identification Records' :
           'Regional Prevalence Records'}
        </h4>
        <hr className="mb-4" />
      </div>
      
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-grow text-primary" role="status" style={{width: "3rem", height: "3rem"}}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-primary">Loading clinical records...</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
          {filteredData.length > 0 ? (
            filteredData.map((entry, index) => (
              <div key={index} className="col mb-4">
                <div className="card h-100 shadow-sm border-0 hover-shadow">
                  <div className="card-header bg-gradient-primary text-white d-flex justify-content-between align-items-center" 
                       style={{background: "linear-gradient(135deg, #0d6efd, #0a58ca)"}}>
                    <h5 className="mb-0 fs-6">Patient Record</h5>
                    <button 
                      className="btn btn-sm btn-light rounded-circle" 
                      onClick={() => handleDownload(entry)}
                      title="Download data"
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3 pb-2 border-bottom">
                      <div className="rounded-circle bg-light me-3 d-flex align-items-center justify-content-center" 
                           style={{width: "40px", height: "40px"}}>
                        <FontAwesomeIcon icon={faUser} className="text-primary" />
                      </div>
                      <div>
                        <h6 className="mb-0">{entry.sex}, {entry.age} years</h6>
                        <small className="text-muted">
                          <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                          {formatDate(entry.createdAt)}
                        </small>
                      </div>
                    </div>
                    
                    {entry.placeOfLiving && (
                      <p className="text-secondary mb-2 small">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                        {entry.placeOfLiving}
                      </p>
                    )}
                    
                    {entry.diseaseDiagnosed && (
                      <div className="alert alert-info py-2">
                        <strong>Diagnosis:</strong> {entry.diseaseDiagnosed}
                      </div>
                    )}
                    
                    <div className="mb-2">
                      <strong>Complaints:</strong>
                      <p className="mb-2">{entry.complaints || "None recorded"}</p>
                    </div>
                    
                    {entry.familyHistory && (
                      <div className="mb-2">
                        <strong>Family History:</strong>
                        <p className="mb-2">{entry.familyHistory}</p>
                      </div>
                    )}
                    
                    {entry.pastMedicalHistory && entry.pastMedicalHistory.length > 0 && (
                      <div className="mb-2">
                        <strong>Medication:</strong> {entry.pastMedicalHistory.length} recorded
                      </div>
                    )}
                    
                    {entry.labProfile && entry.labProfile.length > 0 && (
                      <div className="mb-2">
                        <strong>Lab Tests:</strong> {entry.labProfile.length} recorded
                      </div>
                    )}
                  </div>
                  <div className="card-footer bg-white">
                    <button 
                      className="btn btn-primary btn-sm w-100 d-flex align-items-center justify-content-center"
                      onClick={() => openDetailModal(entry)}
                      style={{borderRadius: "50px"}}
                    >
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      View Full Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <div className="empty-state-container">
                <div className="mb-3" style={{fontSize: '4rem', color: '#6c757d'}}>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <h4 className="mt-3">No matching records found</h4>
                <p className="text-muted">
                  {searchTerm ? `No results match "${searchTerm}"` : 'No records available in this category'}
                </p>
                {searchTerm && (
                  <button className="btn btn-outline-primary mt-2" onClick={() => setSearchTerm('')}>
                    <FontAwesomeIcon icon={faSearch} className="me-2" />Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Details Modal */}
      {showModal && selectedRecord && (
        <div className="modal-custom-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1050,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto'
        }}>
          <div className="modal-custom-container" style={{
            backgroundColor: 'white',
            borderRadius: '5px',
            width: '90%',
            maxWidth: '800px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            <div className="modal-custom-header" style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #0d6efd, #0a58ca)',
              color: 'white',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h5 className="m-0 d-flex align-items-center">
                <span className="me-2 bg-white text-primary rounded-circle d-flex align-items-center justify-content-center" 
                      style={{width: "32px", height: "32px"}}>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Clinical Record: {selectedRecord.sex}, {selectedRecord.age} years
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={closeDetailModal} 
                aria-label="Close"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
              >×</button>
            </div>
            <div className="modal-custom-body" style={{
              padding: '1rem',
              overflowY: 'auto',
              flex: 1
            }}>
                <div className="row mb-4">
                  <div className="col-md-6">
                    <h6 className="text-primary">Patient Information</h6>
                    <table className="table table-sm table-borderless">
                      <tbody>
                        <tr>
                          <td className="fw-bold">Age:</td>
                          <td>{selectedRecord.age} years</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Sex:</td>
                          <td>{selectedRecord.sex}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Height:</td>
                          <td>{selectedRecord.height || 'Not recorded'}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Weight:</td>
                          <td>{selectedRecord.weight || 'Not recorded'}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Location:</td>
                          <td>{selectedRecord.placeOfLiving || 'Not recorded'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-primary">Clinical Information</h6>
                    <table className="table table-sm table-borderless">
                      <tbody>
                        <tr>
                          <td className="fw-bold">Diagnosis:</td>
                          <td>{selectedRecord.diseaseDiagnosed || 'Not recorded'}</td>
                        </tr>
                        <tr>
                          <td className="fw-bold">Submitted On:</td>
                          <td>{formatDate(selectedRecord.createdAt)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-header bg-light">
                    <h6 className="mb-0">Complaints</h6>
                  </div>
                  <div className="card-body">
                    {selectedRecord.complaints || 'No complaints recorded'}
                  </div>
                </div>

                {selectedRecord.familyHistory && (
                  <div className="card mb-3">
                    <div className="card-header bg-light">
                      <h6 className="mb-0">Family History</h6>
                    </div>
                    <div className="card-body">
                      {selectedRecord.familyHistory}
                    </div>
                  </div>
                )}

                {selectedRecord.surgicalHistory && (
                  <div className="card mb-3">
                    <div className="card-header bg-light">
                      <h6 className="mb-0">Surgical History</h6>
                    </div>
                    <div className="card-body">
                      {selectedRecord.surgicalHistory}
                    </div>
                  </div>
                )}

                {selectedRecord.personalHistory && (
                  <div className="card mb-3">
                    <div className="card-header bg-light">
                      <h6 className="mb-0">Personal History</h6>
                    </div>
                    <div className="card-body">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td className="fw-bold">Occupation:</td>
                            <td>{selectedRecord.personalHistory.occupation || 'Not recorded'}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Alcohol:</td>
                            <td>{selectedRecord.personalHistory.alcohol || 'No'}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Smoking:</td>
                            <td>{selectedRecord.personalHistory.smoking || 'No'}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Substance Abuse:</td>
                            <td>{selectedRecord.personalHistory.substanceAbuse || 'No'}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Allergies:</td>
                            <td>{selectedRecord.personalHistory.allergies || 'None'}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Appetite:</td>
                            <td>{selectedRecord.personalHistory.appetite || 'Not recorded'}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Sleep:</td>
                            <td>{selectedRecord.personalHistory.sleep || 'Not recorded'}</td>
                          </tr>
                          <tr>
                            <td className="fw-bold">Bowel Habits:</td>
                            <td>{selectedRecord.personalHistory.bowelHabits || 'Not recorded'}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {selectedRecord.pastMedicalHistory && selectedRecord.pastMedicalHistory.length > 0 && (
                  <div className="card mb-3">
                    <div className="card-header bg-light">
                      <h6 className="mb-0">Medication History</h6>
                    </div>
                    <div className="card-body">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Drug</th>
                            <th>Dose</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedRecord.pastMedicalHistory.map((med, idx) => (
                            <tr key={idx}>
                              <td>{med.drug}</td>
                              <td>{med.dose}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {selectedRecord.labProfile && selectedRecord.labProfile.length > 0 && (
                  <div className="card mb-3">
                    <div className="card-header bg-light">
                      <h6 className="mb-0">Laboratory Results</h6>
                    </div>
                    <div className="card-body">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Parameter</th>
                            <th>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedRecord.labProfile.map((lab, idx) => (
                            <tr key={idx}>
                              <td>{lab.parameter}</td>
                              <td>{lab.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
            </div>
            <div className="modal-custom-footer" style={{
              padding: '1rem',
              borderTop: '1px solid #dee2e6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span className="text-muted small">Record ID: {selectedRecord._id?.substring(0, 8) || "Unknown"}</span>
              </div>
              <div className="d-flex gap-2">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary rounded-pill px-4" 
                  onClick={closeDetailModal}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary rounded-pill px-4" 
                  onClick={() => handleDownload(selectedRecord)}
                >
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicalAccess;
