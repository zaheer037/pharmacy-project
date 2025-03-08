const DrugsInfo = [
    {
        id: 1,
        name: "Adrenergic_Agonists",
        Adrenergic_Agonists: {
            Classification: {
                Direct_acting: {
                    Description: "Act directly on adrenergic receptors",
                    Examples: ["Epinephrine", "Norepinephrine", "Dopamine", "Dobutamine", "Salbutamol", "Phenylephrine"]
                },
                Indirect_acting: {
                    Description: "Increase release or inhibit reuptake of norepinephrine",
                    Examples: ["Amphetamine", "Tyramine"]
                },
                Mixed_acting: {
                    Description: "Both direct and indirect actions",
                    Examples: ["Ephedrine", "Pseudoephedrine"]
                }
            },
            Mechanism_of_Action: "Stimulate adrenergic receptors (α1, α2, β1, β2) to mimic the effects of sympathetic nervous system activation",
            Uses: {
                Epinephrine: "Anaphylaxis, cardiac arrest",
                Norepinephrine: "Hypotensive states",
                Dobutamine: "Heart failure",
                Salbutamol: "Bronchospasm in asthma and COPD"
            },
            Side_Effects: ["Tachycardia", "Hypertension", "Tremors", "Insomnia", "Arrhythmias"],
            Contraindications: ["Hypertension", "Hyperthyroidism", "Severe heart disease"],
            Drug_Interactions: ["Beta-blockers", "MAO inhibitors", "Tricyclic antidepressants"]
        }
    },
    {
        id: 2,
        name: "Adrenergic_Antagonists",
        Adrenergic_Antagonists: {
            Classification: {
                Alpha_blockers: {
                    Description: "Block α1 or α2 receptors",
                    Examples: ["Prazosin", "Doxazosin", "Phentolamine"]
                },
                Beta_blockers: {
                    Description: "Block β1 or β2 receptors",
                    Examples: ["Propranolol (non-selective)", "Atenolol (β1-selective)", "Metoprolol (β1-selective)"]
                },
                Mixed_blockers: {
                    Description: "Block both α and β receptors",
                    Examples: ["Carvedilol", "Labetalol"]
                }
            },
            Mechanism_of_Action: "Block adrenergic receptors to inhibit sympathetic effects",
            Uses: {
                Prazosin: "Hypertension, benign prostatic hyperplasia (BPH)",
                Propranolol: "Hypertension, angina, arrhythmias, anxiety",
                Carvedilol: "Heart failure, hypertension"
            },
            Side_Effects: ["Bradycardia", "Hypotension", "Fatigue", "Bronchospasm (with non-selective β-blockers)"],
            Contraindications: ["Asthma (non-selective β-blockers)", "Bradycardia", "Heart block"],
            Drug_Interactions: ["Calcium channel blockers", "Digoxin", "Insulin"]
        }
    },
    {
        id: 3,
        name: "Aminoglycosides",
        Aminoglycosides: {
            Classification: {
                Antibiotics: {
                    Description: "Bactericidal",
                    Examples: ["Gentamicin", "Amikacin", "Tobramycin", "Streptomycin", "Neomycin"]
                }
            },
            Mechanism_of_Action: "Inhibit bacterial protein synthesis by binding to the 30S ribosomal subunit",
            Uses: {
                Gentamicin: "Severe Gram-negative infections",
                Streptomycin: "Tuberculosis",
                Neomycin: "Bowel sterilization"
            },
            Side_Effects: ["Nephrotoxicity", "Ototoxicity", "Neuromuscular blockade"],
            Contraindications: ["Renal impairment", "Myasthenia gravis"],
            Drug_Interactions: ["Loop diuretics (increase ototoxicity)", "Nephrotoxic drugs (like vancomycin)"]
        }
    },
    {
        id: 4,
        name: "ACE_Inhibitors",
        ACE_Inhibitors: {
            Classification: {
                Antihypertensive_drugs: {
                    Description: "Used to lower blood pressure",
                    Examples: ["Enalapril", "Lisinopril", "Ramipril", "Captopril"]
                }
            },
            Mechanism_of_Action: "Inhibit conversion of angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone release",
            Uses: {
                Enalapril: "Hypertension, heart failure, diabetic nephropathy",
                Lisinopril: "Hypertension, heart failure",
                Ramipril: "Hypertension, heart failure",
                Captopril: "Hypertension, heart failure"
            },
            Side_Effects: ["Cough", "Hyperkalemia", "Hypotension", "Angioedema"],
            Contraindications: ["Pregnancy", "Bilateral renal artery stenosis"],
            Drug_Interactions: ["Potassium-sparing diuretics", "NSAIDs"]
        }
    },
    {
        id: 5,
        name: "Angiotensin_II_Receptor_Blockers",
        Angiotensin_II_Receptor_Blockers: {
            Classification: {
                Antihypertensive_drugs: {
                    Description: "Used to lower blood pressure by blocking angiotensin II receptors",
                    Examples: ["Losartan", "Valsartan", "Telmisartan", "Olmesartan"]
                }
            },
            Mechanism_of_Action: "Block angiotensin II receptors, preventing vasoconstriction and aldosterone secretion",
            Uses: {
                Losartan: "Hypertension, heart failure, diabetic nephropathy",
                Valsartan: "Hypertension, heart failure",
                Telmisartan: "Hypertension, heart failure",
                Olmesartan: "Hypertension"
            },
            Side_Effects: ["Hyperkalemia", "Hypotension", "Dizziness"],
            Contraindications: ["Pregnancy", "Bilateral renal artery stenosis"],
            Drug_Interactions: ["Potassium-sparing diuretics", "NSAIDs"]
        }
    }, {
        id: 6,
        name: "Antiarrhythmic_Drugs",
        Antiarrhythmic_Drugs: {
            Classification: {
                Class_I: {
                    Description: "Sodium channel blockers",
                    Examples: ["Lidocaine", "Procainamide"]
                },
                Class_II: {
                    Description: "Beta-blockers",
                    Examples: ["Propranolol", "Metoprolol"]
                },
                Class_III: {
                    Description: "Potassium channel blockers",
                    Examples: ["Amiodarone", "Sotalol"]
                },
                Class_IV: {
                    Description: "Calcium channel blockers",
                    Examples: ["Verapamil", "Diltiazem"]
                }
            },
            Mechanism_of_Action: "Stabilize heart rhythm by modifying ion flow in cardiac cells",
            Uses: {
                Atrial_fibrillation: "Management of irregular heartbeats",
                Ventricular_arrhythmias: "Management of ventricular rhythm disturbances",
                Supraventricular_tachycardia: "Management of rapid heart rate"
            },
            Side_Effects: ["Bradycardia", "Hypotension", "QT prolongation (Class III)", "Heart block"],
            Contraindications: ["Severe heart failure", "Advanced AV block"],
            Drug_Interactions: ["Digoxin", "Other antiarrhythmics", "Macrolide antibiotics"]
        }
    },
    {
        id: 7,
        name: "Anticoagulants",
        Anticoagulants: {
            Classification: {
                Blood_thinners: {
                    Description: "Used to prevent blood clot formation",
                    Examples: ["Heparin", "Enoxaparin", "Warfarin", "Dabigatran", "Apixaban"]
                }
            },
            Mechanism_of_Action: "Inhibit clotting factors to prevent thrombosis",
            Uses: {
                Heparin: "Deep vein thrombosis (DVT), pulmonary embolism",
                Warfarin: "Atrial fibrillation",
                Dabigatran: "Pulmonary embolism",
                Apixaban: "Atrial fibrillation"
            },
            Side_Effects: ["Bleeding", "Heparin-induced thrombocytopenia (HIT)", "Bruising"],
            Contraindications: ["Active bleeding", "Severe liver disease"],
            Drug_Interactions: ["Antiplatelets", "NSAIDs", "Other anticoagulants"]
        }
    },
    {
        id: 8,
        name: "Antidepressants",
        Antidepressants: {
            Classification: {
                SSRIs: {
                    Description: "Selective serotonin reuptake inhibitors",
                    Examples: ["Fluoxetine", "Sertraline", "Escitalopram"]
                },
                SNRIs: {
                    Description: "Serotonin-norepinephrine reuptake inhibitors",
                    Examples: ["Venlafaxine", "Duloxetine"]
                },
                TCAs: {
                    Description: "Tricyclic antidepressants",
                    Examples: ["Amitriptyline", "Imipramine"]
                },
                MAOIs: {
                    Description: "Monoamine oxidase inhibitors",
                    Examples: ["Phenelzine", "Tranylcypromine"]
                },
                Atypical: {
                    Description: "Various mechanisms of action",
                    Examples: ["Bupropion", "Mirtazapine"]
                }
            },
            Mechanism_of_Action: "Increase neurotransmitter levels (serotonin, norepinephrine, dopamine) in the brain",
            Uses: {
                Fluoxetine: "Depression, anxiety disorders, OCD",
                Venlafaxine: "Depression, anxiety",
                Amitriptyline: "Chronic pain"
            },
            Side_Effects: ["Nausea", "Insomnia", "Sexual dysfunction (SSRIs)", "Weight gain (Mirtazapine)", "Hypertension (SNRIs)"],
            Contraindications: ["MAOIs with SSRIs (risk of serotonin syndrome)", "Severe cardiac disease (TCAs)"],
            Drug_Interactions: ["SSRIs + NSAIDs (bleeding risk)", "MAOIs + tyramine (hypertensive crisis)"]
        }
    },
    {
        id: 9,
        name: "Antidiabetic_Drugs",
        Antidiabetic_Drugs: {
            Classification: {
                Insulin: {
                    Description: "Hormone therapy to control blood sugar",
                    Examples: ["Regular insulin", "Insulin glargine", "Insulin lispro"]
                },
                Biguanides: {
                    Description: "Reduce glucose production in liver",
                    Examples: ["Metformin"]
                },
                Sulfonylureas: {
                    Description: "Increase insulin release from pancreas",
                    Examples: ["Glimepiride", "Glyburide"]
                },
                DPP_4_inhibitors: {
                    Description: "Inhibit DPP-4 enzyme to increase incretin hormones",
                    Examples: ["Sitagliptin", "Vildagliptin"]
                },
                GLP_1_agonists: {
                    Description: "Mimic GLP-1 to increase insulin secretion",
                    Examples: ["Liraglutide", "Semaglutide"]
                }
            },
            Mechanism_of_Action: "Lower blood glucose by increasing insulin or reducing glucose production/absorption",
            Uses: {
                Type_1_diabetes: "Insulin therapy",
                Type_2_diabetes: "Metformin, sulfonylureas, GLP-1 agonists"
            },
            Side_Effects: ["Hypoglycemia (insulin, sulfonylureas)", "GI upset (Metformin)", "Weight gain (Sulfonylureas)"],
            Contraindications: ["Severe renal impairment (Metformin)", "Pancreatitis (GLP-1 agonists)"],
            Drug_Interactions: ["Beta-blockers (mask hypoglycemia)", "Corticosteroids (increase glucose)"]
        }
    },
    {
        id: 10,
        name: "Antiemetics",
        Antiemetics: {
          Classification: {
            Dopamine_antagonists: {
              Description: "Block dopamine receptors",
              Examples: [
                "Metoclopramide",
                "Domperidone"
              ]
            },
        HT3_antagonists: {
  
          Description: "Block serotonin receptors",
  
              Examples: [
            "Ondansetron",
  
            "Granisetron"
  
              ]
            },
            H1_antihistamines: {
              Description: "Block histamine receptors",
              Examples: [
                "Promethazine",
                "Cyclizine"
              ]
            },
            Anticholinergics: {
              Description: "Block acetylcholine receptors",
              Examples: [
                "Scopolamine"
              ]
            }
          },
          Mechanism_of_Action: "Block receptors in the vomiting center and chemoreceptor trigger zone",
  
          Uses: {
  
            Chemotherapy: "Prevent nausea and vomiting",
  
            Surgery: "Prevent postoperative nausea",
  
            Motion_sickness: "Prevent motion-induced nausea"
  
          },
  
          Side_Effects: [
  
            "Drowsiness",
  
            "Dry mouth",
  
            "Extrapyramidal symptoms (Metoclopramide)"
  
          ],
          Contraindications: [
  
            "GI obstruction (Metoclopramide)",
  
            "Narrow-angle glaucoma (anticholinergics)"
  
          ],
  
          Drug_Interactions: [
  
            "CNS depressants (increased sedation)",
  
            "Antipsychotics (EPS risk)"
  
          ]
        }
      }
];

export default DrugsInfo;
