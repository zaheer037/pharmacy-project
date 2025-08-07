import React, { useState } from 'react';

const PoisonAntidote = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const poisonAntidoteData = [
    {
      id: 1,
      poison: "Amanitin (Amanita mushroom)",
      source: "Poisonous mushrooms",
      antidote: "Acetylcysteine, Benzyl penicillin",
      mechanism: "Protects against hepatic damage",
      dosage: "Per acetylcysteine protocol; Penicillin G: 300,000-1,000,000 units/kg/day IV",
      symptoms: ["Severe GI distress", "Liver failure", "Kidney damage", "Multi-organ failure"]
    },
    {
      id: 2,
      poison: "Anticholinergics (central)",
      source: "Atropine, scopolamine, antihistamines, tricyclic antidepressants",
      antidote: "Physostigmine",
      mechanism: "Reversible cholinesterase inhibitor, increases acetylcholine levels",
      dosage: "1-2mg IV slowly over 5 minutes, may repeat after 10-15 minutes if needed",
      symptoms: ["Hyperthermia", "Dry skin and mucosa", "Altered mental status", "Urinary retention"]
    },
    {
      id: 3,
      poison: "Anticholinergics (peripheral)",
      source: "Medications with anticholinergic side effects",
      antidote: "Neostigmine",
      mechanism: "Reversible cholinesterase inhibitor",
      dosage: "0.5-2.0mg IV, may repeat every 1-4 hours as needed",
      symptoms: ["Dry mouth", "Urinary retention", "Decreased GI motility", "Mydriasis"]
    },
    {
      id: 4,
      poison: "Arsenic",
      source: "Pesticides, wood preservatives, industrial processes",
      antidote: "Dimercaprol (BAL), DMPS, DMSA",
      mechanism: "Chelating agents that bind to arsenic for excretion",
      dosage: "BAL: 3-5mg/kg IM every 4-6 hours; DMSA: 10mg/kg orally every 8 hours",
      symptoms: ["GI distress", "Garlic odor", "Peripheral neuropathy", "Hyperpigmentation"]
    },
    {
      id: 5,
      poison: "Atropine (toxicity)",
      source: "Medication overdose, plants containing atropine",
      antidote: "Physostigmine",
      mechanism: "Reversible cholinesterase inhibitor, increases acetylcholine levels",
      dosage: "1-2mg IV slowly over 5 minutes, may repeat after 10-15 minutes if needed",
      symptoms: ["Hyperthermia", "Dry skin", "Altered mental status", "Tachycardia"]
    },
    {
      id: 6,
      poison: "Benzodiazepines",
      source: "Diazepam, lorazepam, prescription sedatives",
      antidote: "Flumazenil",
      mechanism: "Competitive GABA receptor antagonist",
      dosage: "0.2mg IV initially, then 0.3mg, then 0.5mg at 1-minute intervals",
      symptoms: ["Sedation", "Confusion", "Respiratory depression", "Ataxia"]
    },
    {
      id: 7,
      poison: "Beta-blockers",
      source: "Medications for hypertension and heart conditions",
      antidote: "Glucagon, Isoprenaline",
      mechanism: "Increases cAMP independently of beta-receptors",
      dosage: "Glucagon: 5-10mg IV bolus, then 1-5mg/hour infusion",
      symptoms: ["Bradycardia", "Hypotension", "Bronchospasm", "Altered mental status"]
    },
    {
      id: 8,
      poison: "Botulism",
      source: "Clostridium botulinum toxin in food, wounds",
      antidote: "Guanidine",
      mechanism: "Enhances release of acetylcholine at nerve terminals",
      dosage: "Guanidine: 15-30mg/kg/day in divided doses",
      symptoms: ["Descending paralysis", "Diplopia", "Dysphagia", "Respiratory failure"]
    },
    {
      id: 9,
      poison: "Carbon monoxide",
      source: "Incomplete combustion, exhaust fumes, smoke inhalation",
      antidote: "100% Oxygen, Hyperbaric oxygen, Tocopherol",
      mechanism: "Displaces CO from hemoglobin, reduces half-life of COHb",
      dosage: "100% oxygen via non-rebreather mask; Hyperbaric oxygen at 2.5-3.0 ATA",
      symptoms: ["Headache", "Confusion", "Cherry-red skin", "Loss of consciousness"]
    },
    {
      id: 10,
      poison: "Calcium channel blockers",
      source: "Cardiovascular medications",
      antidote: "Calcium salts",
      mechanism: "Overcome channel blockade by increasing extracellular calcium",
      dosage: "Calcium chloride: 10-20ml of 10% solution IV; Calcium gluconate: 30-60ml of 10% solution IV",
      symptoms: ["Hypotension", "Bradycardia", "Heart block", "Cardiac arrest"]
    },
    {
      id: 11,
      poison: "Cyanide",
      source: "Industrial chemicals, smoke inhalation, certain plants",
      antidote: "Amyl nitrite, Sodium nitrite, Sodium thiosulfate, Hydroxocobalamin",
      mechanism: "Forms methemoglobin which binds cyanide; converts cyanide to thiocyanate; forms cyanocobalamin",
      dosage: "Hydroxocobalamin: 5g IV over 15 minutes; Sodium thiosulfate: 12.5g IV",
      symptoms: ["Altered consciousness", "Metabolic acidosis", "Bitter almond odor", "Rapid death"]
    },
    {
      id: 12,
      poison: "Digitalis / Digoxin",
      source: "Cardiac glycoside medications, foxglove plant",
      antidote: "Digoxin-specific Fab fragments",
      mechanism: "Binds to digoxin, preventing interaction with Na-K-ATPase",
      dosage: "Based on amount ingested or serum level; typically 10-20 vials IV",
      symptoms: ["Nausea", "Visual disturbances", "Bradyarrhythmias", "Hyperkalemia"]
    },
    {
      id: 13,
      poison: "Disulfiram-like reaction",
      source: "Alcohol consumption while taking disulfiram or similar drugs",
      antidote: "4-Methylpyrazole",
      mechanism: "Inhibits alcohol metabolism, preventing acetaldehyde accumulation",
      dosage: "15mg/kg IV loading dose, then 10mg/kg every 12 hours for 4 doses",
      symptoms: ["Flushing", "Nausea", "Vomiting", "Hypotension"]
    },
    {
      id: 14,
      poison: "Ethylene glycol / Methanol",
      source: "Antifreeze, windshield washer fluid, adulterated alcohol",
      antidote: "Ethanol, Fomepizole, Dialysis, Thiamine + Pyridoxine",
      mechanism: "Competitive inhibition of alcohol dehydrogenase",
      dosage: "Fomepizole: 15mg/kg IV loading dose; Ethanol: maintain blood level 100-150mg/dL",
      symptoms: ["Metabolic acidosis", "Visual disturbances", "CNS depression", "Renal failure"]
    },
    {
      id: 15,
      poison: "Fluorides",
      source: "Industrial chemicals, dental products in high concentration",
      antidote: "Calcium salts",
      mechanism: "Binds free fluoride ions forming insoluble calcium fluoride",
      dosage: "Calcium gluconate: 10% solution IV or topical gel for dermal exposure",
      symptoms: ["Hypocalcemia", "Cardiac arrhythmias", "GI irritation", "Burns on contact"]
    },
    {
      id: 16,
      poison: "Gyromitrin (false morel mushroom)",
      source: "False morel mushrooms",
      antidote: "Pyridoxine (Vitamin B6)",
      mechanism: "Replaces pyridoxine depleted by gyromitrin",
      dosage: "25mg/kg IV slowly",
      symptoms: ["Nausea", "Vomiting", "Seizures", "Hemolysis"]
    },
    {
      id: 17,
      poison: "Heparin",
      source: "Anticoagulant medication",
      antidote: "Protamine sulfate",
      mechanism: "Forms inactive complex with heparin",
      dosage: "1mg protamine per 100 units heparin IV slowly",
      symptoms: ["Bleeding", "Hematomas", "Prolonged clotting time"]
    },
    {
      id: 18,
      poison: "Hydrogen sulfide",
      source: "Industrial exposure, sewage, volcanic gases",
      antidote: "Amyl nitrite, Sodium nitrite, Oxygen, Hydroxocobalamin",
      mechanism: "Forms methemoglobin which binds H2S; hydroxocobalamin binds sulfide",
      dosage: "Hydroxocobalamin: 5g IV; Sodium nitrite: 300mg IV slowly",
      symptoms: ["Rapid loss of consciousness", "Respiratory paralysis", "Pulmonary edema"]
    },
    {
      id: 19,
      poison: "Isoniazid (INH)",
      source: "Tuberculosis medication",
      antidote: "Pyridoxine (Vitamin B6)",
      mechanism: "Replaces pyridoxine depleted by isoniazid",
      dosage: "Gram-for-gram with amount of INH ingested, IV",
      symptoms: ["Seizures", "Metabolic acidosis", "Coma"]
    },
    {
      id: 20,
      poison: "Insulin overdose",
      source: "Diabetic medication",
      antidote: "Glucose",
      mechanism: "Provides substrate to counteract excessive insulin action",
      dosage: "D50W: 50ml IV bolus, followed by D10W infusion as needed",
      symptoms: ["Hypoglycemia", "Altered consciousness", "Diaphoresis", "Tachycardia"]
    },
    {
      id: 21,
      poison: "Lead",
      source: "Old paint, contaminated water, industrial exposure",
      antidote: "Succimer (DMSA), Dimercaprol, EDTA",
      mechanism: "Chelating agents that bind lead for excretion",
      dosage: "Succimer: 10mg/kg orally every 8 hours; EDTA: 1000-1500mg/m²/day",
      symptoms: ["Abdominal pain", "Peripheral neuropathy", "Encephalopathy", "Anemia"]
    },
    {
      id: 22,
      poison: "Malignant hyperthermia",
      source: "Reaction to anesthetic agents in susceptible individuals",
      antidote: "Dantrolene",
      mechanism: "Inhibits calcium release from sarcoplasmic reticulum in muscle",
      dosage: "2.5mg/kg IV initially, repeat until symptoms controlled",
      symptoms: ["Hyperthermia", "Muscle rigidity", "Tachycardia", "Acidosis"]
    },
    {
      id: 23,
      poison: "Mercury",
      source: "Industrial exposure, contaminated fish, broken thermometers",
      antidote: "Dimercaprol, Succimer, N-acetylpenicillamine, Unithiol",
      mechanism: "Chelating agents that bind mercury for excretion",
      dosage: "Succimer: 10mg/kg orally every 8 hours; Dimercaprol: 5mg/kg IM initially",
      symptoms: ["Tremor", "Neurological changes", "Renal damage", "GI symptoms"]
    },
    {
      id: 24,
      poison: "Methemoglobinemia",
      source: "Nitrates, local anesthetics, dapsone, aniline dyes",
      antidote: "Methylene blue",
      mechanism: "Reduces methemoglobin via NADPH-dependent pathway",
      dosage: "1-2mg/kg IV over 5 minutes",
      symptoms: ["Cyanosis unresponsive to oxygen", "Chocolate-brown blood", "Dyspnea"]
    },
    {
      id: 25,
      poison: "Narcotics (e.g., morphine, fentanyl)",
      source: "Prescription painkillers, illicit drugs",
      antidote: "Naloxone",
      mechanism: "Competitive opioid receptor antagonist",
      dosage: "0.4-2mg IV, IM, or intranasal, repeat every 2-3 minutes if needed",
      symptoms: ["Respiratory depression", "Pinpoint pupils", "Altered consciousness"]
    },
    {
      id: 26,
      poison: "Organophosphates",
      source: "Pesticides, insecticides, nerve agents",
      antidote: "Atropine + Pralidoxime",
      mechanism: "Blocks muscarinic effects and reactivates cholinesterase",
      dosage: "Atropine: 2-5mg IV initially, repeat as needed; Pralidoxime: 1-2g IV over 15-30 minutes",
      symptoms: ["Miosis", "Excessive secretions", "Muscle fasciculations", "Respiratory distress"]
    },
    {
      id: 27,
      poison: "Oxalates",
      source: "Certain plants, ethylene glycol metabolism, rhubarb leaves",
      antidote: "Calcium gluconate",
      mechanism: "Binds oxalate to prevent calcium oxalate formation",
      dosage: "10-30ml of 10% calcium gluconate solution IV",
      symptoms: ["Hypocalcemia", "Renal damage", "GI irritation", "Tetany"]
    },
    {
      id: 28,
      poison: "Paracetamol",
      source: "Over-the-counter pain reliever",
      antidote: "Acetylcysteine, Methionine",
      mechanism: "Replenishes glutathione stores and prevents hepatotoxicity",
      dosage: "Loading: 150mg/kg IV over 1 hour, followed by maintenance doses",
      symptoms: ["Initially asymptomatic", "Later hepatotoxicity", "Nausea", "Vomiting"]
    },
    {
      id: 29,
      poison: "Paraquat",
      source: "Herbicide",
      antidote: "Fuller's earth, Desferrioxamine (adjunct)",
      mechanism: "Adsorbs paraquat in GI tract; iron chelation to reduce oxidative damage",
      dosage: "Fuller's earth: 1-2g/kg orally in water or 15% suspension",
      symptoms: ["Oral ulceration", "Progressive pulmonary fibrosis", "Renal failure"]
    },
    {
      id: 30,
      poison: "Phenothiazines",
      source: "Antipsychotic medications",
      antidote: "Diphenhydramine, Benztropine",
      mechanism: "Anticholinergic effect counteracts extrapyramidal symptoms",
      dosage: "Diphenhydramine: 25-50mg IV; Benztropine: 1-2mg IV or IM",
      symptoms: ["Dystonia", "Oculogyric crisis", "Torticollis", "Akathisia"]
    },
    {
      id: 31,
      poison: "Radioactive metals",
      source: "Radiation exposure, nuclear accidents",
      antidote: "Pentetic acid (DTPA)",
      mechanism: "Chelating agent that enhances elimination of radioactive metals",
      dosage: "1g IV over 30 minutes once daily",
      symptoms: ["Radiation sickness", "Nausea", "Bone marrow suppression", "Long-term cancer risk"]
    },
    {
      id: 32,
      poison: "Salicylates",
      source: "Aspirin, oil of wintergreen",
      antidote: "Sodium bicarbonate (urinary alkalinisation)",
      mechanism: "Increases ionization of salicylate, reducing reabsorption in renal tubules",
      dosage: "Sodium bicarbonate IV to maintain urine pH > 7.5",
      symptoms: ["Tinnitus", "Hyperventilation", "Mixed acid-base disturbance", "Hyperthermia"]
    },
    {
      id: 33,
      poison: "Strychnine",
      source: "Rodenticide, contaminated street drugs",
      antidote: "Supportive care, Diazepam or barbiturates",
      mechanism: "Enhances GABA inhibition to counteract glycine antagonism",
      dosage: "Diazepam: 5-10mg IV repeated as needed",
      symptoms: ["Muscle spasms", "Opisthotonus", "Respiratory arrest"]
    },
    {
      id: 34,
      poison: "Thallium",
      source: "Rodenticides, industrial exposure",
      antidote: "Prussian Blue",
      mechanism: "Binds thallium in gut and interrupts enterohepatic circulation",
      dosage: "250mg/kg/day orally in divided doses",
      symptoms: ["Alopecia", "Peripheral neuropathy", "GI symptoms", "Mees lines"]
    },
    {
      id: 35,
      poison: "Theophylline",
      source: "Medication for asthma and COPD",
      antidote: "Hemoperfusion",
      mechanism: "Direct removal of drug from bloodstream",
      dosage: "Hemoperfusion for 4-8 hours or until levels decrease",
      symptoms: ["Tachycardia", "Seizures", "Nausea", "Hyperglycemia"]
    },
    {
      id: 36,
      poison: "Yellow oleander",
      source: "Ornamental plant",
      antidote: "Digoxin-specific Fab fragments",
      mechanism: "Binds cardiac glycosides, preventing interaction with Na-K-ATPase",
      dosage: "Based on clinical severity; typically 10-20 vials IV",
      symptoms: ["Nausea", "Bradycardia", "Heart block", "Hyperkalemia"]
    },
    {
      id: 37,
      poison: "Zinc",
      source: "Industrial exposure, galvanized metal fumes",
      antidote: "EDTA, Succimer",
      mechanism: "Chelating agents that bind zinc for excretion",
      dosage: "EDTA: 1000-1500mg/m²/day IV; Succimer: 10mg/kg orally every 8 hours",
      symptoms: ["Metal fume fever", "GI irritation", "Pancytopenia with chronic exposure"]
    }
  ];

  const filteredData = poisonAntidoteData.filter(item =>
    item.poison.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.antidote.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-vh-100 py-5" style={{
      background: 'linear-gradient(135deg, #e6fffa 0%, #b2f5ea 50%, #81e6d9 100%)',
      paddingTop: '20px',
      paddingBottom: '40px'
    }}>
      <div className="container">
        {/* Header and Search */}
        <div className="text-center mb-5">
          <div className="p-4 rounded-4 mb-4" style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(79, 209, 199, 0.3)',
            boxShadow: '0 8px 32px rgba(79, 209, 199, 0.2)'
          }}>
            <h1 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(135deg, #2c5282, #4fd1c7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              <i className="fa-solid fa-shield-heart me-3" style={{color: '#4fd1c7'}}></i>
              Poison & Antidote Guide
            </h1>
            <p className="lead mb-4 text-dark" style={{ opacity: '0.8' }}>Essential antidotes for common poisonings and overdoses</p>
            
            {/* Search Bar */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <div className="position-relative">
                  <div className="position-absolute" style={{
                    left: '20px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    color: '#4fd1c7'
                  }}>
                    <i className="fa-solid fa-search fs-5"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Search poisons, antidotes, symptoms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '60px',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      padding: '16px 24px 16px 60px',
                      boxShadow: '0 4px 20px rgba(79, 209, 199, 0.3)',
                      border: '2px solid transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      backdropFilter: 'blur(10px)'
                    }}
                    onFocus={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.border = '2px solid #4fd1c7';
                      e.target.style.boxShadow = '0 8px 30px rgba(79, 209, 199, 0.2)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.border = '2px solid transparent';
                      e.target.style.boxShadow = '0 4px 20px rgba(79, 209, 199, 0.3)';
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
                  background: 'linear-gradient(135deg, #2c5282, #4fd1c7)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(79, 209, 199, 0.3)'
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
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(79, 209, 199, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 209, 199, 0.1)';
                  }}>
                    <div className="card-header border-0 rounded-top-4 text-white p-4" style={{
                      background: 'linear-gradient(135deg, #2c5282, #4fd1c7)',
                    }}>
                      <h5 className="card-title mb-2 fw-bold">
                        <i className="fa-solid fa-flask-vial me-2"></i>
                        {item.poison}
                      </h5>
                      <small className="opacity-75">{item.source}</small>
                    </div>
                    
                    <div className="card-body p-4">
                      <div className="mb-4">
                        <h6 className="text-primary fw-bold mb-2">
                          <i className="fa-solid fa-shield-heart me-2" style={{color: '#4fd1c7'}}></i>
                          Antidote
                        </h6>
                        <p className="fw-bold text-dark mb-2">{item.antidote}</p>
                        <p className="text-muted small">{item.mechanism}</p>
                      </div>

                      <div className="mb-4">
                        <h6 className="text-primary fw-bold mb-2">
                          <i className="fa-solid fa-syringe me-2" style={{color: '#4fd1c7'}}></i>
                          Dosage
                        </h6>
                        <p className="small text-dark">{item.dosage}</p>
                      </div>

                      <div>
                        <h6 className="text-primary fw-bold mb-2">
                          <i className="fa-solid fa-heartbeat me-2" style={{color: '#4fd1c7'}}></i>
                          Key Symptoms
                        </h6>
                        <div className="d-flex flex-wrap gap-1">
                          {item.symptoms.map((symptom, index) => (
                            <span 
                              key={index} 
                              className="badge rounded-pill px-2 py-1 small"
                              style={{
                                backgroundColor: 'rgba(79, 209, 199, 0.1)',
                                color: '#2c5282',
                                border: '1px solid rgba(79, 209, 199, 0.2)'
                              }}
                            >
                              {symptom}
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
              border: '1px solid rgba(79, 209, 199, 0.3)',
              boxShadow: '0 8px 32px rgba(79, 209, 199, 0.2)'
            }}>
              <i className="fa-solid fa-search-minus display-1 mb-4" style={{color: '#4fd1c7'}}></i>
              <h3 className="text-muted mb-3">No results found for "{searchTerm}"</h3>
              <p className="text-muted mb-4">Try different keywords or browse all poison-antidote pairs</p>
              <button 
                className="btn btn-lg rounded-pill px-4"
                style={{
                  background: 'linear-gradient(135deg, #2c5282, #4fd1c7)',
                  border: 'none',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(79, 209, 199, 0.3)'
                }}
                onClick={() => setSearchTerm("")}
              >
                <i className="fa-solid fa-arrow-rotate-left me-2"></i>
                Show All Antidotes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoisonAntidote;
