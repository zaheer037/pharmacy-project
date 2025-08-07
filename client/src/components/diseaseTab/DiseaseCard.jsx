import React, { useState } from 'react';

const DiseaseCard = ({ name, description, treatment, symptoms, diagnostics }) => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = (data) => {
    if (!data) return <p className="text-muted">No information available</p>;
    
    // Debug: Log the data to see what we're working with
    console.log('Rendering data:', data, 'Type:', typeof data, 'Is Array:', Array.isArray(data));
    
    // Check if data is an array first (before checking if it's an object)
    if (Array.isArray(data)) {
      return (
        <ul className="list-unstyled">
          {data.map((item, idx) => (
            <li key={idx} className="mb-2 d-flex align-items-start">
              <i className="fa-solid fa-circle-dot text-primary me-2 mt-1" style={{fontSize: '0.75rem'}}></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    
    if (typeof data === 'object' && data !== null) {
      return (
        <div>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="mb-3">
              <strong className="text-primary d-block mb-2">{key.replace(/_/g, ' ')}:</strong>
              {Array.isArray(value) ? (
                <ul className="list-unstyled ms-3">
                  {value.map((item, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start">
                      <i className="fa-solid fa-circle-check text-success me-2 mt-1" style={{fontSize: '0.75rem'}}></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mb-0 ms-3 text-muted">{value}</p>
              )}
            </div>
          ))}
        </div>
      );
    }
    
    return <p className="mb-0">{data}</p>;
  };

  const tabs = [
    { id: 'description', label: 'Description', icon: 'fa-file-medical', data: description },
    { id: 'treatment', label: 'Treatment', icon: 'fa-pills', data: treatment },
    { id: 'symptoms', label: 'Symptoms', icon: 'fa-thermometer', data: symptoms },
    { id: 'diagnostics', label: 'Diagnostics', icon: 'fa-stethoscope', data: diagnostics }
  ];

  return (
    <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '12px' }}>
      {/* Card Header */}
      <div className="card-header bg-white border-0 p-3" style={{ borderRadius: '12px 12px 0 0' }}>
        <h5 className="card-title mb-0 fw-bold text-truncate" title={name} style={{ 
          color: '#2c5282',
          fontSize: '1.1rem'
        }}>
          {name}
        </h5>
      </div>

      {/* Tab Navigation */}
      <div className="card-body p-0">
        <div className="nav nav-pills nav-fill border-bottom" style={{ padding: '0 1rem' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-link py-2 px-1 border-0 ${activeTab === tab.id ? 'active' : ''}`}
              style={{
                fontSize: '0.75rem',
                backgroundColor: activeTab === tab.id ? '#4fd1c7' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#6c757d',
                borderRadius: '8px 8px 0 0'
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fa-solid ${tab.icon} me-1`}></i>
              <span className="d-none d-md-inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-3" style={{ minHeight: '200px', maxHeight: '300px', overflowY: 'auto' }}>
          {tabs.map((tab) => (
            activeTab === tab.id && (
              <div key={tab.id} className="tab-content">
                <div className="d-flex align-items-center mb-2">
                  <i className={`fa-solid ${tab.icon} text-primary me-2`}></i>
                  <h6 className="mb-0 fw-semibold text-dark">{tab.label}</h6>
                </div>
                {renderContent(tab.data)}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiseaseCard;
