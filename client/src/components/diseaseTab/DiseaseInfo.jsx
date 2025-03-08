const DiseaseInfo =[
    {
      "id": 1,
      "name": "Cardiovascular Diseases",
      "diseases": [
        {
          "id": 1,
          "name": "Hypertension",
          "Pathophysiology": {
            "Increased_Systemic_Vascular_Resistance_and_Cardiac_Output": "Lead to elevated blood pressure.",
            "Key_Factors": [
              "Dysregulation of the renin-angiotensin-aldosterone system (RAAS)",
              "Sympathetic overactivity",
              "Endothelial dysfunction"
            ]
          },
          "Clinical_Features": {
            "Asymptomatic_early_stages": "Often asymptomatic in early stages.",
            "Symptoms": [
              "Headache",
              "Dizziness",
              "Palpitations",
              "Blurred vision",
              "Chest pain"
            ],
            "Complications": [
              "Hypertensive heart disease",
              "Stroke",
              "Chronic kidney disease"
            ]
          },
          "Diagnostic_Approach": {
            "Blood_Pressure_Measurement": "Blood pressure measurement on multiple occasions.",
            "Laboratory_Tests": [
              "CBC",
              "Renal function",
              "Lipid profile",
              "Fasting glucose"
            ],
            "Imaging_and_Studies": [
              "ECG",
              "Echocardiography for end-organ damage assessment"
            ]
          },
          "Treatment_Guidelines": {
            "Lifestyle_Modifications": [
              "Low-sodium diet",
              "Weight loss",
              "Regular exercise"
            ],
            "Pharmacotherapy": [
              "ACE inhibitors",
              "ARBs",
              "Calcium channel blockers",
              "Thiazide diuretics"
            ],
            "Resistant_Hypertension": [
              "Consider adding beta-blockers",
              "Aldosterone antagonists"
            ]
          }
        },
        {
          "id": 2,
          "name": "Coronary Artery Disease (CAD)",
          "Pathophysiology": {
            "Atherosclerosis": "Leads to narrowing of coronary arteries, reducing blood flow to the heart muscle.",
            "Plaque_Rupture_and_Thrombosis": "Can cause acute coronary syndromes like myocardial infarction."
          },
          "Clinical_Features": {
            "Stable_Angina": "Chest pain on exertion, relieved by rest or nitrates.",
            "Acute_Coronary_Syndrome": "Severe chest pain, radiating to the arm or jaw, shortness of breath, sweating.",
            "Silent_Ischemia": "Asymptomatic, often detected on ECG or stress testing."
          },
          "Diagnostic_Approach": {
            "ECG": "ST changes, T-wave inversion, Q waves.",
            "Cardiac_Enzymes": "Troponins, CK-MB for myocardial injury.",
            "Other_Tests": "Stress testing, coronary angiography for definitive diagnosis."
          },
          "Treatment_Guidelines": {
            "Acute_Management": [
              "MONA (morphine, oxygen, nitrates, aspirin)",
              "Beta-blockers",
              "Antiplatelets",
              "Anticoagulants"
            ],
            "Long_Term": [
              "Statins",
              "ACE inhibitors",
              "Lifestyle changes",
              "Revascularization (PCI, CABG) when needed"
            ]
          }
        },
        {
          "id": 3,
          "name": "Heart Failure (HF)",
          "Pathophysiology": {
            "Systolic_Failure": "Inability of the heart to pump blood effectively due to impaired contractility.",
            "Diastolic_Failure": "Inability of the heart to fill properly, leading to poor filling.",
            "Compensatory_Mechanisms": "RAAS activation, sympathetic stimulation lead to fluid overload and cardiac remodeling."
          },
          "Clinical_Features": {
            "Left_Sided_HF": "Dyspnea, orthopnea, paroxysmal nocturnal dyspnea, pulmonary edema.",
            "Right_Sided_HF": "Peripheral edema, ascites, hepatomegaly, jugular venous distension.",
            "Other_Symptoms": "Fatigue, reduced exercise tolerance."
          },
          "Diagnostic_Approach": {
            "BNP_or_NT-proBNP": "Levels for diagnosis and prognosis.",
            "Chest_X-ray": "Pulmonary congestion, cardiomegaly.",
            "Echocardiography": "Ejection fraction, valvular function, chamber size."
          },
          "Treatment_Guidelines": {
            "Lifestyle": [
              "Sodium restriction",
              "Fluid management",
              "Daily weight monitoring"
            ],
            "Medications": [
              "ACE inhibitors/ARBs",
              "Beta-blockers",
              "Diuretics",
              "Aldosterone antagonists"
            ],
            "Advanced_Therapy": [
              "Digoxin",
              "Sacubitril/valsartan",
              "Cardiac resynchronization",
              "LVADs",
              "Transplant"
            ]
          }
        },
        {
          "id": 4,
          "name": "Arrhythmias",
          "Pathophysiology": {
            "Abnormal_Impulse_Generation_or_Conduction": "Leads to irregular heart rhythms.",
            "Origin": "Can originate from atria (supraventricular) or ventricles."
          },
          "Clinical_Features": {
            "Palpitations": "Feeling of irregular heartbeats.",
            "Dizziness": "Due to poor circulation.",
            "Syncope": "Fainting or near-fainting episodes.",
            "Chest_Pain": "May be present with arrhythmias.",
            "Bradyarrhythmias": "Fatigue, hypotension.",
            "Tachyarrhythmias": "Shortness of breath, anxiety."
          },
          "Diagnostic_Approach": {
            "ECG": "Rate, rhythm, QRS morphology.",
            "Holter_Monitor": "For intermittent arrhythmias.",
            "Electrophysiological_Studies": "If invasive evaluation needed."
          },
          "Treatment_Guidelines": {
            "Supraventricular_Arrhythmias": [
              "Beta-blockers",
              "Calcium channel blockers",
              "Antiarrhythmics"
            ],
            "Ventricular_Arrhythmias": [
              "Amiodarone",
              "Lidocaine",
              "Defibrillation for life-threatening cases"
            ],
            "Bradyarrhythmias": [
              "Pacemaker implantation"
            ]
          }
        },
        {
          "id": 5,
          "name": "Valvular Heart Disease",
          "Pathophysiology": {
            "Stenosis_or_Regurgitation": "Structural or functional abnormalities of heart valves leading to narrowing (stenosis) or backflow (regurgitation).",
            "Common_Causes": [
              "Rheumatic heart disease",
              "Degenerative changes",
              "Infective endocarditis"
            ]
          },
          "Clinical_Features": {
            "Aortic_Stenosis": "Exertional dyspnea, angina, syncope.",
            "Mitral_Regurgitation": "Palpitations, pulmonary congestion, fatigue.",
            "Valve_Murmurs": "Can be heard on auscultation.",
            "Arrhythmias": "May develop due to abnormal heart structure."
          },
          "Diagnostic_Approach": {
            "Echocardiography": "Gold standard for assessing valve structure and function.",
            "ECG": "Signs of chamber enlargement, atrial fibrillation.",
            "Chest_X-ray": "Cardiomegaly, pulmonary congestion."
          },
          "Treatment_Guidelines": {
            "Medical": [
              "Diuretics",
              "Beta-blockers",
              "Anticoagulants (for atrial fibrillation)"
            ],
            "Surgical": [
              "Valve repair",
              "Valve replacement (mechanical or bioprosthetic)"
            ],
            "Transcatheter_Interventions": "For high-risk surgical patients."
          }
        },
        {
          "id": 6,
          "name": "Peripheral Artery Disease (PAD)",
          "Pathophysiology": {
            "Atherosclerotic_Narrowing": "Atherosclerotic narrowing of peripheral arteries, leading to reduced blood supply to limbs.",
            "Risk_Factors": [
              "Smoking",
              "Diabetes",
              "Hyperlipidemia",
              "Hypertension"
            ]
          },
          "Clinical_Features": {
            "Intermittent_Claudication": "Pain in legs during exertion.",
            "Rest_Pain": "In advanced stages.",
            "Non_Healing_Ulcers": "Cold extremities, diminished pulses."
          },
          "Diagnostic_Approach": {
            "ABI": "Ankle-brachial index (ABI) <0.9 confirms diagnosis.",
            "Doppler_Ultrasound": "Assess blood flow and stenosis.",
            "CT_or_MR_Angiography": "For detailed vascular imaging."
          },
          "Treatment_Guidelines": {
            "Lifestyle": [
              "Smoking cessation",
              "Exercise therapy"
            ],
            "Medications": [
              "Antiplatelets (aspirin, clopidogrel)",
              "Statins",
              "Vasodilators"
            ],
            "Revascularization": [
              "Angioplasty",
              "Stenting",
              "Bypass surgery in severe cases"
            ]
          }
        }
      ]
    },
    {
      "id": 2,
      "name": "Respiratory Diseases",
      "diseases": [
        {
          "id": 1,
          "name": "Chronic Obstructive Pulmonary Disease (COPD)",
          "Pathophysiology": "Airflow limitation due to chronic inflammation, mucus hypersecretion, and airflow obstruction.",
          "Clinical_Features": [
            "Dyspnea",
            "Cough",
            "Sputum production",
            "Wheezing"
          ],
          "Diagnostic_Approach": [
            "Spirometry",
            "Chest X-ray",
            "CT scan for emphysema"
          ],
          "Treatment": [
            "Inhaled bronchodilators",
            "Corticosteroids",
            "Oxygen therapy",
            "Pulmonary rehabilitation"
          ]
        },
        {
          "id": 2,
          "name": "Asthma",
          "Pathophysiology": "Chronic inflammation and bronchoconstriction due to hyperresponsiveness of the airways.",
          "Clinical_Features": [
            "Wheezing",
            "Cough",
            "Shortness of breath",
            "Chest tightness"
          ],
          "Diagnostic_Approach": [
            "Spirometry",
            "Peak flow measurement",
            "Methacholine challenge test"
          ],
          "Treatment": [
            "Inhaled corticosteroids",
            "Beta-agonists (short-acting and long-acting)",
            "Leukotriene modifiers"
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Endocrine Diseases",
      "diseases": [
        {
          "id": 1,
          "name": "Diabetes Mellitus (Type 1 & 2)",
          "Pathophysiology": {
            "Type_1": "Autoimmune destruction of beta cells.",
            "Type_2": "Insulin resistance and relative insulin deficiency."
          },
          "Clinical_Features": [
            "Polyuria",
            "Polydipsia",
            "Weight loss (Type 1)",
            "Obesity (Type 2)"
          ],
          "Diagnostic_Approach": [
            "Fasting glucose",
            "HbA1c",
            "Oral glucose tolerance test"
          ],
          "Treatment": [
            "Insulin for Type 1",
            "Metformin, SGLT2 inhibitors, GLP-1 agonists for Type 2"
          ]
        },
        {
          "id": 2,
          "name": "Hypothyroidism",
          "Pathophysiology": "Deficiency of thyroid hormones leading to slowed metabolism.",
          "Clinical_Features": [
            "Fatigue",
            "Weight gain",
            "Cold intolerance",
            "Bradycardia"
          ],
          "Diagnostic_Approach": [
            "Elevated TSH",
            "Low T3/T4 levels"
          ],
          "Treatment": [
            "Levothyroxine"
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Gastrointestinal Diseases",
      "diseases": [
        {
          "id": 1,
          "name": "Gastroesophageal Reflux Disease (GERD)",
          "Pathophysiology": "Weakening of the lower esophageal sphincter leading to acid reflux into the esophagus.",
          "Clinical_Features": [
            "Heartburn",
            "Regurgitation",
            "Chest pain",
            "Chronic cough"
          ],
          "Diagnostic_Approach": [
            "Clinical diagnosis",
            "Endoscopy for persistent symptoms",
            "24-hour pH monitoring"
          ],
          "Treatment": [
            "Proton pump inhibitors",
            "H2 blockers",
            "Antacids",
            "Lifestyle changes (elevate head, avoid triggers)"
          ]
        },
        {
          "id": 2,
          "name": "Peptic Ulcer Disease (PUD)",
          "Pathophysiology": "Mucosal erosion due to H. pylori infection or NSAID use.",
          "Clinical_Features": [
            "Epigastric pain (worse on an empty stomach)",
            "Nausea",
            "Bloating"
          ],
          "Diagnostic_Approach": [
            "Endoscopy",
            "H. pylori testing (urea breath test, stool antigen)"
          ],
          "Treatment": [
            "PPIs",
            "H. pylori eradication (triple therapy)",
            "Avoid NSAIDs"
          ]
        }
      ]
    },
    {
      "id": 5,
      "name": "Neurological Diseases",
      "diseases": [
        {
          "id": 1,
          "name": "Epilepsy",
          "Pathophysiology": "Abnormal neuronal firing leading to recurrent seizures.",
          "Clinical_Features": [
            "Generalized seizures (tonic-clonic, absence)",
            "Focal seizures (motor, sensory)"
          ],
          "Diagnostic_Approach": [
            "EEG",
            "MRI brain for structural causes",
            "Metabolic panel"
          ],
          "Treatment": [
            "Antiepileptics (valproate, carbamazepine, levetiracetam)",
            "Ketogenic diet",
            "Surgery for refractory cases"
          ]
        },
        {
          "id": 2,
          "name": "Parkinson’s Disease",
          "Pathophysiology": "Dopamine deficiency due to degeneration of the substantia nigra.",
          "Clinical_Features": [
            "Bradykinesia",
            "Resting tremor",
            "Rigidity",
            "Postural instability"
          ],
          "Diagnostic_Approach": [
            "Clinical diagnosis",
            "Response to dopaminergic therapy"
          ],
          "Treatment": [
            "Levodopa",
            "Dopamine agonists",
            "MAO-B inhibitors",
            "Deep brain stimulation"
          ]
        }
      ]
    },
    {
        "id": 6,
        "name": "Renal Diseases",
        "diseases": [
          {
            "id": 1,
            "name": "Chronic Kidney Disease (CKD)",
            "Pathophysiology": "Progressive loss of kidney function due to diabetes, hypertension, or glomerulonephritis.",
            "Clinical_Features": [
              "Fatigue",
              "Edema",
              "Decreased urine output",
              "Uremic symptoms (nausea, confusion)"
            ],
            "Diagnostic_Approach": [
              "eGFR <60 ml/min/1.73m² for >3 months",
              "Elevated creatinine",
              "Proteinuria"
            ],
            "Treatment": [
              "ACE inhibitors",
              "ARBs",
              "Diuretics",
              "Dietary sodium and potassium restriction",
              "Dialysis for end-stage"
            ]
          },
          {
            "id": 2,
            "name": "Nephrotic Syndrome",
            "Pathophysiology": "Glomerular damage causing massive protein loss in urine.",
            "Clinical_Features": [
              "Edema",
              "Proteinuria (>3.5g/day)",
              "Hypoalbuminemia",
              "Hyperlipidemia"
            ],
            "Diagnostic_Approach": [
              "Urine protein/creatinine ratio",
              "Renal biopsy if unclear cause"
            ],
            "Treatment": [
              "Corticosteroids",
              "ACE inhibitors",
              "Diuretics",
              "Statins"
            ]
          }
        ]
    },
    {
        "id": 7,
        "name": "Hematologic Diseases",
        "diseases": [
          {
            "id": 1,
            "name": "Iron Deficiency Anemia",
            "Pathophysiology": "Decreased iron availability leading to reduced hemoglobin production.",
            "Clinical_Features": [
              "Fatigue",
              "Pallor",
              "Shortness of breath",
              "Pica (craving non-food items)"
            ],
            "Diagnostic_Approach": [
              "Low hemoglobin",
              "Low serum ferritin",
              "High TIBC"
            ],
            "Treatment": [
              "Oral iron supplementation",
              "Dietary counseling",
              "Treat underlying cause (e.g., GI bleeding)"
            ]
          },
          {
            "id": 2,
            "name": "Sickle Cell Disease",
            "Pathophysiology": "Mutation in the beta-globin gene causing sickle-shaped red blood cells and vaso-occlusion.",
            "Clinical_Features": [
              "Pain crises",
              "Anemia",
              "Jaundice",
              "Splenomegaly"
            ],
            "Diagnostic_Approach": [
              "Hemoglobin electrophoresis",
              "Peripheral smear (sickle cells)"
            ],
            "Treatment": [
              "Hydroxyurea",
              "Pain management",
              "Blood transfusions for severe crises"
            ]
          }
        ]
    },
    {
        "id": 8,
        "name": "Rheumatologic Diseases",
        "diseases": [
          {
            "id": 1,
            "name": "Rheumatoid Arthritis (RA)",
            "Pathophysiology": "Autoimmune attack on synovial joints causing chronic inflammation and joint destruction.",
            "Clinical_Features": [
              "Symmetrical joint pain",
              "Morning stiffness >1 hour",
              "Swelling",
              "Rheumatoid nodules"
            ],
            "Diagnostic_Approach": [
              "Rheumatoid factor (RF)",
              "Anti-CCP antibodies",
              "Elevated ESR/CRP",
              "X-ray showing joint erosion"
            ],
            "Treatment": [
              "DMARDs (methotrexate, leflunomide)",
              "Biologics (TNF inhibitors)",
              "NSAIDs",
              "Corticosteroids for flares"
            ]
          },
          {
            "id": 2,
            "name": "Systemic Lupus Erythematosus (SLE)",
            "Pathophysiology": "Autoimmune disease with multi-organ involvement due to immune complex deposition.",
            "Clinical_Features": [
              "Malar rash",
              "Photosensitivity",
              "Arthritis",
              "Nephritis",
              "Serositis"
            ],
            "Diagnostic_Approach": [
              "ANA (antinuclear antibodies)",
              "Anti-dsDNA",
              "Anti-Sm",
              "Low complement levels"
            ],
            "Treatment": [
              "Hydroxychloroquine",
              "Corticosteroids",
              "Immunosuppressants (azathioprine, mycophenolate)"
            ]
          }
        ]
    },  
    {
        "id": 9,
        "name": "Infectious Diseases",
        "diseases": [
          {
            "id": 1,
            "name": "Tuberculosis (TB)",
            "Pathophysiology": "Mycobacterium tuberculosis infection causing granulomatous inflammation.",
            "Clinical_Features": [
              "Chronic cough",
              "Night sweats",
              "Weight loss",
              "Hemoptysis"
            ],
            "Diagnostic_Approach": [
              "Chest X-ray",
              "Sputum acid-fast bacilli (AFB) stain",
              "GeneXpert",
              "TB culture"
            ],
            "Treatment": [
              "RIPE regimen (Rifampin, Isoniazid, Pyrazinamide, Ethambutol) for 6 months"
            ]
          },
          {
            "id": 2,
            "name": "HIV/AIDS",
            "Pathophysiology": "Retrovirus attacking CD4 T-cells, leading to immunosuppression.",
            "Clinical_Features": [
              "Chronic fever",
              "Weight loss",
              "Opportunistic infections (PJP, CMV)",
              "Lymphadenopathy"
            ],
            "Diagnostic_Approach": [
              "HIV ELISA",
              "Western blot",
              "Viral load",
              "CD4 count"
            ],
            "Treatment": [
              "HAART (2 NRTIs + 1 NNRTI/PI/INSTI)",
              "Opportunistic infection prophylaxis"
            ]
          }
        ]
    },
    {
        "id": 10,
        "name": "Dermatological Diseases",
        "diseases": [
          {
            "id": 1,
            "name": "Psoriasis",
            "Pathophysiology": "Autoimmune disorder leading to hyperproliferation of keratinocytes and chronic inflammation.",
            "Clinical_Features": [
              "Well-demarcated, erythematous plaques with silvery scales",
              "Nail pitting",
              "Arthritis"
            ],
            "Diagnostic_Approach": [
              "Clinical diagnosis",
              "Skin biopsy in atypical cases"
            ],
            "Treatment": [
              "Topical steroids",
              "Vitamin D analogs",
              "Phototherapy",
              "Biologics (TNF inhibitors, IL-17 inhibitors)"
            ]
          },
          {
            "id": 2,
            "name": "Eczema (Atopic Dermatitis)",
            "Pathophysiology": "Dysfunction in skin barrier and immune dysregulation leading to chronic inflammation.",
            "Clinical_Features": [
              "Pruritus",
              "Erythematous, dry, and scaly skin",
              "Flexural involvement"
            ],
            "Diagnostic_Approach": [
              "Clinical diagnosis",
              "Elevated IgE levels in allergic cases"
            ],
            "Treatment": [
              "Emollients",
              "Topical corticosteroids",
              "Antihistamines",
              "Immunomodulators (tacrolimus)"
            ]
          }
        ]
    }       
]
  
export default DiseaseInfo;