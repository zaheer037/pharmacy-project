export const drugs = [
  {
    name: "Acyclovir",
    class: "Antiviral (Anti-Herpes)",
    moa: "Inhibits viral DNA polymerase, preventing viral replication.",
    uses: ["Herpes simplex infections", "Herpes zoster (shingles)", "Varicella (chickenpox)"],
    adrs: ["Nephrotoxicity (especially with IV use)", "Nausea", "Headache"],
    cis: ["Severe renal impairment without dose adjustment"],
    interactions: ["Nephrotoxic drugs (e.g., aminoglycosides)"]
  },
  {
    name: "Albendazole",
    class: "Anthelmintic (Anti-nematode)",
    moa: "Inhibits microtubule polymerization in parasites, leading to their immobilization and death.",
    uses: ["Roundworm", "Hookworm", "Pinworm", "Hydatid disease"],
    adrs: ["GI upset", "Dizziness", "Liver enzyme elevation"],
    cis: ["Pregnancy", "Liver disease"],
    interactions: ["Anticonvulsants (reduce efficacy)", "Corticosteroids (increase absorption)"]
  },
  {
    name: "Alendronate",
    class: "Bisphosphonate",
    moa: "Inhibits osteoclast-mediated bone resorption.",
    uses: ["Osteoporosis", "Paget's disease"],
    adrs: ["Esophagitis", "Musculoskeletal pain", "Hypocalcemia"],
    cis: ["Esophageal abnormalities", "Inability to stand or sit upright for 30 minutes"],
    interactions: ["Calcium supplements", "NSAIDs"]
  },
  {
    name: "Allopurinol",
    class: "Xanthine Oxidase Inhibitor",
    moa: "Inhibits xanthine oxidase, reducing uric acid production.",
    uses: ["Gout", "Hyperuricemia due to chemotherapy"],
    adrs: ["Skin rash", "GI upset", "Hepatotoxicity"],
    cis: ["Hypersensitivity", "Severe renal impairment"],
    interactions: ["Azathioprine (increased toxicity)", "Diuretics (increase uric acid)"]
  },
  {
    name: "Alprazolam",
    class: "Benzodiazepine",
    moa: "Enhances GABA-A receptor activity, producing anxiolytic and sedative effects.",
    uses: ["Anxiety", "Panic disorder"],
    adrs: ["Drowsiness", "Dependence", "Memory impairment"],
    cis: ["Severe respiratory depression", "Substance abuse history"],
    interactions: ["Alcohol", "Opioids"]
  },
  {
    name: "Aminophylline",
    class: "Methylxanthine (Bronchodilator)",
    moa: "Inhibits phosphodiesterase, increasing cAMP and causing bronchodilation.",
    uses: ["Asthma", "COPD"],
    adrs: ["Tremors", "Palpitations", "Insomnia"],
    cis: ["Uncontrolled arrhythmias", "Peptic ulcer"],
    interactions: ["Beta-blockers", "Macrolide antibiotics"]
  },
  {
    name: "Amiodarone",
    class: "Class III Antiarrhythmic",
    moa: "Blocks potassium channels, prolonging repolarization.",
    uses: ["Ventricular and supraventricular arrhythmias"],
    adrs: ["Pulmonary fibrosis", "Thyroid dysfunction", "Corneal deposits", "Liver toxicity"],
    cis: ["Severe sinus node dysfunction", "Second/third-degree AV block"],
    interactions: ["Digoxin", "Warfarin", "QT-prolonging drugs"]
  },
  {
    name: "Amlodipine",
    class: "Calcium Channel Blocker (Dihydropyridine)",
    moa: "Inhibits calcium influx into vascular smooth muscle, causing vasodilation.",
    uses: ["Hypertension", "Angina"],
    adrs: ["Peripheral edema", "Headache", "Flushing"],
    cis: ["Severe hypotension", "Cardiogenic shock"],
    interactions: ["Beta-blockers", "Other antihypertensives"]
  },
  {
    name: "Amoxicillin",
    class: "Beta-lactam Antibiotic (Penicillin group)",
    moa: "Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs).",
    uses: ["Respiratory tract infections", "Urinary tract infections", "Otitis media"],
    adrs: ["Diarrhea", "Allergic reactions", "Rash"],
    cis: ["Penicillin allergy"],
    interactions: ["Warfarin (increased bleeding risk)", "Oral contraceptives"]
  },
  {
    name: "Amphotericin B",
    class: "Polyene Antifungal",
    moa: "Binds to ergosterol in fungal cell membranes, forming pores that cause leakage and cell death.",
    uses: ["Severe systemic fungal infections"],
    adrs: ["Nephrotoxicity", "Fever", "Chills", "Electrolyte imbalances"],
    cis: ["Renal impairment without monitoring"],
    interactions: ["Nephrotoxic agents (e.g., aminoglycosides)"]
  },
  {
    name: "Aspirin",
    class: "NSAID; Antiplatelet Agent",
    moa: "Irreversibly inhibits cyclooxygenase (COX-1 and COX-2), reducing prostaglandins and thromboxane A2 synthesis.",
    uses: ["Pain", "Fever", "Inflammation", "Acute coronary syndrome", "Stroke and MI prevention", "Rheumatic fever"],
    adrs: ["Gastric irritation", "Ulcers", "Bleeding", "Tinnitus", "Reye's syndrome (in children)"],
    cis: ["Active peptic ulcer", "Bleeding disorders", "Children with viral infections"],
    interactions: ["Warfarin", "Other NSAIDs"]
  },
  {
    name: "Atenolol",
    class: "Beta-1 Selective Adrenergic Blocker",
    moa: "Blocks beta-1 receptors in the heart, reducing heart rate, contractility, and cardiac output.",
    uses: ["Hypertension", "Angina", "Post-myocardial infarction", "Arrhythmias"],
    adrs: ["Bradycardia", "Fatigue", "Hypotension", "Cold extremities"],
    cis: ["Sinus bradycardia", "Heart block > first degree", "Cardiogenic shock", "Severe asthma"],
    interactions: ["Calcium channel blockers", "Insulin"]
  },
  {
    name: "Atorvastatin",
    class: "HMG-CoA Reductase Inhibitor (Statin)",
    moa: "Inhibits HMG-CoA reductase, increasing LDL receptor expression.",
    uses: ["Hyperlipidemia", "Cardiovascular risk reduction", "Familial hypercholesterolemia"],
    adrs: ["Myopathy", "Rhabdomyolysis", "Hepatotoxicity", "GI disturbances"],
    cis: ["Active liver disease", "Pregnancy"],
    interactions: ["CYP3A4 inhibitors (e.g., grapefruit juice)", "Fibrates"]
  },
  {
    name: "Aztreonam",
    class: "Monobactam Antibiotic",
    moa: "Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs).",
    uses: ["Gram-negative bacterial infections (especially in penicillin-allergic patients)", "Urinary tract infections", "Lower respiratory tract infections"],
    adrs: ["Rash", "Nausea", "Vomiting", "Elevated liver enzymes", "Phlebitis at injection site"],
    cis: ["Hypersensitivity to aztreonam"],
    interactions: ["None significant"]
  },
  {
    name: "Baclofen",
    class: "GABA-B Receptor Agonist (Centrally Acting Muscle Relaxant)",
    moa: "Inhibits reflex transmission, reducing spasticity.",
    uses: ["Spasticity due to multiple sclerosis or spinal cord injury", "Cerebral palsy"],
    adrs: ["Drowsiness", "Muscle weakness", "Dizziness", "Hypotension"],
    cis: ["Hypersensitivity", "Abrupt withdrawal (risk of seizures, hallucinations)"],
    interactions: ["CNS depressants"]
  },
  {
    name: "Beclomethasone",
    class: "Inhaled Corticosteroid",
    moa: "Anti-inflammatory action by inhibiting multiple cell types and mediators involved in inflammation.",
    uses: ["Asthma maintenance therapy", "Allergic rhinitis (nasal spray)"],
    adrs: ["Oral thrush (candidiasis)", "Hoarseness", "Cough", "Adrenal suppression (at high doses)"],
    cis: ["Hypersensitivity", "Acute asthma attacks (not for acute relief)"],
    interactions: ["None significant"]
  },
  {
    name: "Bendroflumethiazide",
    class: "Thiazide Diuretic",
    moa: "Inhibits Na+/Cl- reabsorption in the distal convoluted tubule, increasing diuresis.",
    uses: ["Hypertension", "Edema associated with heart failure or renal disease"],
    adrs: ["Hypokalemia", "Hyperuricemia (may precipitate gout)", "Hyperglycemia", "Photosensitivity"],
    cis: ["Anuria", "Hypersensitivity to sulfonamide-derived drugs", "Severe renal or hepatic impairment"],
    interactions: ["NSAIDs", "Lithium"]
  },
  {
    name: "Bisoprolol",
    class: "Beta-1 Selective Adrenergic Blocker",
    moa: "Selectively blocks beta-1 adrenergic receptors, reducing heart rate and cardiac output.",
    uses: ["Hypertension", "Heart failure"],
    adrs: ["Bradycardia", "Fatigue", "Hypotension"],
    cis: ["Severe bradycardia", "Heart block", "Cardiogenic shock", "Decompensated heart failure"],
    interactions: ["Calcium channel blockers", "Insulin"]
  },
  {
    name: "Carbamazepine",
    class: "Anticonvulsant; Mood Stabilizer",
    moa: "Blocks voltage-gated sodium channels, reducing neuronal excitability.",
    uses: ["Epilepsy (partial and generalized tonic-clonic seizures)", "Trigeminal neuralgia", "Bipolar disorder (mania)"],
    adrs: ["Drowsiness", "Dizziness"],
    cis: ["Hypersensitivity", "Bone marrow depression"],
    interactions: ["CYP3A4 inducers/inhibitors", "Warfarin"]
  },
  {
    name: "Carvedilol",
    class: "Non-selective Beta Blocker with Alpha-1 Blocking Activity",
    moa: "Blocks beta-1, beta-2, and alpha-1 adrenergic receptors; decreases heart rate and vasodilation.",
    uses: ["Hypertension", "Heart failure", "Left ventricular dysfunction post-MI"],
    adrs: ["Dizziness", "Fatigue", "Bradycardia", "Hypotension", "Hyperglycemia"],
    cis: ["Severe bradycardia", "Asthma", "Second or third-degree AV block", "Cardiogenic shock"],
    interactions: ["Antihypertensives", "Digoxin"]
  },
  {
    name: "Cefotaxime",
    class: "Third-Generation Cephalosporin Antibiotic",
    moa: "Inhibits bacterial cell wall synthesis by binding to PBPs.",
    uses: ["Severe infections: septicemia, pneumonia, meningitis", "Genitourinary infections", "Skin and soft tissue infections"],
    adrs: ["Diarrhea", "Rash", "Injection site reactions", "Hypersensitivity"],
    cis: ["Hypersensitivity to cephalosporins or beta-lactams"],
    interactions: ["None significant"]
  },
  {
    name: "Cefpodoxime",
    class: "Third-Generation Cephalosporin (Oral)",
    moa: "Inhibits bacterial cell wall synthesis by binding to PBPs.",
    uses: ["Respiratory tract infections", "Urinary tract infections", "Skin infections", "Gonorrhea"],
    adrs: ["GI upset", "Rash", "Superinfection"],
    cis: ["Hypersensitivity to cephalosporins"],
    interactions: ["None significant"]
  },
  {
    name: "Ceftriaxone",
    class: "Third-Generation Cephalosporin",
    moa: "Inhibits bacterial cell wall synthesis by binding to PBPs.",
    uses: ["Meningitis", "Typhoid fever", "Gonorrhea", "Pneumonia", "Septicemia"],
    adrs: ["Biliary sludge", "Hypersensitivity", "Diarrhea", "Injection site pain"],
    cis: ["Neonates with hyperbilirubinemia", "Hypersensitivity to cephalosporins"],
    interactions: ["Calcium-containing solutions"]
  },
  {
    name: "Ciprofloxacin",
    class: "Fluoroquinolone Antibiotic",
    moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication.",
    uses: ["Urinary tract infections", "Respiratory tract infections", "Gastrointestinal infections", "Anthrax exposure"],
    adrs: ["Tendon rupture", "QT prolongation", "GI disturbances", "Photosensitivity"],
    cis: ["Children and adolescents (except in specific cases)", "Myasthenia gravis", "Hypersensitivity to fluoroquinolones"],
    interactions: ["Antacids", "Warfarin"]
  },
  {
    name: "Clindamycin",
    class: "Lincosamide Antibiotic",
    moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
    uses: ["Anaerobic infections", "Skin and soft tissue infections", "Bone infections"],
    adrs: ["Pseudomembranous colitis", "Diarrhea", "Rash", "Hepatotoxicity"],
    cis: ["History of Clostridium difficile-associated diarrhea", "Hypersensitivity"],
    interactions: ["Erythromycin", "Neuromuscular blockers"]
  },
  {
    name: "Clonazepam",
    class: "Benzodiazepine",
    moa: "Enhances GABA-A receptor activity, increasing chloride influx and causing neuronal inhibition.",
    uses: ["Seizures", "Panic disorder"],
    adrs: ["Drowsiness", "Dependence", "Respiratory depression"],
    cis: ["History of benzodiazepine dependence", "Severe respiratory insufficiency"],
    interactions: ["CNS depressants", "Alcohol"]
  },
  {
    name: "Clopidogrel",
    class: "Antiplatelet Agent (Thienopyridine)",
    moa: "Irreversibly inhibits ADP receptors (P2Y12) on platelets, preventing aggregation.",
    uses: ["Prevention of atherothrombotic events (MI, stroke)", "Post-coronary stent placement"],
    adrs: ["Bleeding", "GI upset", "Thrombocytopenic purpura"],
    cis: ["Active bleeding", "Hypersensitivity"],
    interactions: ["PPIs (e.g., omeprazole)", "NSAIDs"]
  },
  {
    name: "Cyclophosphamide",
    class: "Alkylating Agent (Nitrogen Mustard)",
    moa: "Cross-links DNA strands, inhibiting DNA replication and causing cell death.",
    uses: ["Cancers (leukemia, lymphoma, breast cancer)", "Autoimmune diseases (lupus nephritis)"],
    adrs: ["Hemorrhagic cystitis", "Bone marrow suppression", "Nausea", "Vomiting", "Alopecia"],
    cis: ["Severe bone marrow depression", "Urinary outflow obstruction", "Pregnancy (Category D)"],
    interactions: ["Allopurinol", "CYP2B6 inhibitors"]
  },
  {
    name: "Cyclosporine",
    class: "Calcineurin Inhibitor, Immunosuppressant",
    moa: "Inhibits calcineurin, blocking IL-2 production and T-cell activation.",
    uses: ["Organ transplantation (to prevent rejection)", "Autoimmune diseases (e.g., rheumatoid arthritis, psoriasis)"],
    adrs: ["Nephrotoxicity", "Hypertension", "Hirsutism", "Tremor"],
    cis: ["Uncontrolled hypertension", "Malignancies", "Hypersensitivity"],
    interactions: ["CYP3A4 inhibitors/inducers", "NSAIDs"]
  },
  {
    name: "Dexamethasone",
    class: "Corticosteroid (Glucocorticoid)",
    moa: "Binds to intracellular glucocorticoid receptors, suppresses inflammation and immune responses by altering gene transcription.",
    uses: ["Inflammatory and autoimmune conditions", "Cerebral edema", "COVID-19 (severe cases)", "Allergic reactions", "Chemotherapy-induced nausea"],
    adrs: ["Hyperglycemia", "Osteoporosis", "Cushingoid appearance", "Immunosuppression"],
    cis: ["Systemic fungal infections", "Live vaccines", "Hypersensitivity"],
    interactions: ["NSAIDs", "Antidiabetic drugs"]
  },
  {
    name: "Diazepam",
    class: "Benzodiazepine",
    moa: "Enhances GABAergic transmission by increasing the frequency of chloride channel opening via GABA-A receptors.",
    uses: ["Anxiety disorders", "Status epilepticus", "Muscle spasms", "Alcohol withdrawal"],
    adrs: ["Drowsiness", "Dependence", "Respiratory depression (high doses)"],
    cis: ["Severe hepatic impairment", "Myasthenia gravis", "Respiratory insufficiency"],
    interactions: ["CNS depressants", "Alcohol"]
  },
  {
    name: "Digoxin",
    class: "Cardiac Glycoside",
    moa: "Inhibits Na+/K+ ATPase, increasing intracellular Ca2+, enhancing cardiac contractility; also reduces AV conduction.",
    uses: ["Heart failure", "Atrial fibrillation"],
    adrs: ["Nausea", "Vomiting", "Arrhythmias", "Visual disturbances (yellow vision)"],
    cis: ["Ventricular fibrillation", "AV block without pacemaker", "Hypokalemia (predisposes to toxicity)"],
    interactions: ["Amiodarone", "Verapamil"]
  },
  {
    name: "Diltiazem",
    class: "Calcium Channel Blocker (Non-Dihydropyridine)",
    moa: "Inhibits calcium influx in cardiac and smooth muscle, reducing heart rate and myocardial oxygen demand.",
    uses: ["Hypertension", "Angina", "Atrial arrhythmias (e.g., AFib)"],
    adrs: ["Bradycardia", "Hypotension", "Peripheral edema"],
    cis: ["Severe hypotension", "Second/third-degree AV block", "Sick sinus syndrome"],
    interactions: ["Beta-blockers", "CYP3A4 inhibitors"]
  },
  {
    name: "Diphenhydramine",
    class: "First-Generation Antihistamine (H1 Blocker)",
    moa: "Blocks H1 receptors; also has anticholinergic effects.",
    uses: ["Allergic reactions", "Motion sickness", "Insomnia", "Parkinsonism"],
    adrs: ["Sedation", "Dry mouth", "Dizziness", "Urinary retention"],
    cis: ["Neonates or premature infants", "Narrow-angle glaucoma", "Asthma (caution due to thickened secretions)"],
    interactions: ["CNS depressants", "Alcohol"]
  },
  {
    name: "Dobutamine",
    class: "Beta-1 Adrenergic Agonist",
    moa: "Stimulates beta-1 receptors, increasing myocardial contractility and cardiac output.",
    uses: ["Acute heart failure", "Cardiogenic shock", "Cardiac stress testing"],
    adrs: ["Tachycardia", "Hypertension", "Arrhythmias"],
    cis: ["Idiopathic hypertrophic subaortic stenosis", "Hypersensitivity to dobutamine or sulfites"],
    interactions: ["Beta-blockers"]
  },
  {
    name: "Domperidone",
    class: "Dopamine D2 Receptor Antagonist",
    moa: "Blocks D2 receptors in the chemoreceptor trigger zone (CTZ) and GI tract, enhancing gastric motility and reducing nausea.",
    uses: ["Gastroparesis", "Nausea and vomiting", "GERD (adjunctive)"],
    adrs: ["QT prolongation", "Galactorrhea", "Gynecomastia"],
    cis: ["Prolonged QT interval", "Moderate to severe hepatic impairment", "Concomitant QT-prolonging drugs"],
    interactions: ["CYP3A4 inhibitors"]
  },
  {
    name: "Dopamine",
    class: "Adrenergic and Dopaminergic Agonist",
    moa: "Dose-dependent stimulation: Low dose: Dopamine receptors (renal vasodilation), Medium dose: Beta-1 receptors (increased heart rate and contractility), High dose: Alpha-1 receptors (vasoconstriction).",
    uses: ["Shock", "Heart failure", "Hypotension"],
    adrs: ["Tachycardia", "Arrhythmias", "Tissue necrosis if extravasated"],
    cis: ["Pheochromocytoma", "Tachyarrhythmias"],
    interactions: ["MAO inhibitors", "Beta-blockers"]
  },
  {
    name: "Doxycycline",
    class: "Tetracycline Antibiotic",
    moa: "Binds to the 30S ribosomal subunit, inhibiting protein synthesis.",
    uses: ["Acne", "Malaria prophylaxis", "Respiratory tract infections", "Rickettsial infections", "Lyme disease"],
    adrs: ["Photosensitivity", "GI upset", "Tooth discoloration (children)"],
    cis: ["Pregnancy", "Children under 8 years", "Hypersensitivity"],
    interactions: ["Antacids", "Warfarin"]
  },
  {
    name: "Enalapril",
    class: "ACE Inhibitor",
    moa: "Inhibits ACE, reducing angiotensin II production, resulting in vasodilation and decreased blood pressure.",
    uses: ["Hypertension", "Heart failure", "Post-myocardial infarction", "Chronic kidney disease"],
    adrs: ["Angioedema", "Hypotension", "Hyperkalemia", "Cough", "Dizziness", "Renal dysfunction"],
    cis: ["Pregnancy", "Bilateral renal artery stenosis", "History of angioedema"],
    interactions: ["Potassium-sparing diuretics", "NSAIDs"]
  },
  {
    name: "Epinephrine",
    class: "Adrenergic Agonist",
    moa: "Stimulates alpha-1, alpha-2, beta-1, and beta-2 receptors causing vasoconstriction, increased heart rate, bronchodilation.",
    uses: ["Anaphylaxis", "Cardiac arrest", "Asthma (severe cases)", "Added to local anesthetics to prolong effect"],
    adrs: ["Hypertension", "Tachycardia", "Arrhythmias", "Anxiety"],
    cis: ["None in life-threatening situations", "Use with caution in hypertension, arrhythmias"],
    interactions: ["Beta-blockers", "MAO inhibitors"]
  },
  {
    name: "Erythromycin",
    class: "Macrolide Antibiotic",
    moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
    uses: ["Respiratory tract infections", "Skin infections", "Sexually transmitted infections"],
    adrs: ["Gastrointestinal upset", "Liver enzyme elevation", "Allergic reactions", "QT prolongation", "Cholestatic hepatitis"],
    cis: ["Hypersensitivity to macrolides", "Severe hepatic dysfunction"],
    interactions: ["CYP3A4 inhibitors", "QT-prolonging drugs"]
  },
  {
    name: "Estradiol",
    class: "Estrogen",
    moa: "Binds to estrogen receptors and regulates gene expression affecting reproductive tissues.",
    uses: ["Hormone replacement therapy (HRT)", "Menopausal symptoms", "Hypoestrogenism"],
    adrs: ["Breast tenderness", "Nausea", "Thromboembolism", "Endometrial hyperplasia (if unopposed by progestin)"],
    cis: ["Estrogen-dependent tumors", "History of thromboembolic disorders", "Liver disease"],
    interactions: ["CYP3A4 inducers/inhibitors"]
  },
  {
    name: "Ethambutol",
    class: "Antitubercular Agent",
    moa: "Inhibits arabinosyl transferase, impairing mycobacterial cell wall synthesis.",
    uses: ["Tuberculosis (in combination therapy)"],
    adrs: ["Optic neuritis (red-green color blindness)", "Rash", "Joint pain"],
    cis: ["Optic neuritis", "Inability to report visual changes (e.g., very young children)"],
    interactions: ["Antacids"]
  },
  {
    name: "Ethinyl Estradiol",
    class: "Synthetic Estrogen",
    moa: "Mimics endogenous estrogen; suppresses LH and FSH via negative feedback.",
    uses: ["Combined oral contraceptives", "Menstrual disorders"],
    adrs: ["Thromboembolism", "Breast tenderness", "Nausea"],
    cis: ["Thromboembolic disorders", "Estrogen-dependent cancers", "Liver disease"],
    interactions: ["CYP3A4 inducers"]
  },
  {
    name: "Famotidine",
    class: "H2 Receptor Antagonist",
    moa: "Blocks histamine H2 receptors on gastric parietal cells, reducing gastric acid secretion.",
    uses: ["Peptic ulcers", "Zollinger-Ellison syndrome"],
    adrs: ["Headache", "Dizziness", "Rarely gynecomastia"],
    cis: ["Hypersensitivity"],
    interactions: ["None significant"]
  },
  {
    name: "Fentanyl",
    class: "Opioid Analgesic",
    moa: "Binds to mu-opioid receptors in CNS, altering pain perception.",
    uses: ["Severe pain", "Anesthesia adjunct", "Chronic pain (transdermal patch)"],
    adrs: ["Respiratory depression", "Constipation", "Sedation"],
    cis: ["Respiratory depression", "Acute/severe asthma"],
    interactions: ["CNS depressants", "CYP3A4 inhibitors"]
  },
  {
    name: "Ferrous Sulfate",
    class: "Iron Supplement",
    moa: "Provides elemental iron for hemoglobin synthesis.",
    uses: ["Iron-deficiency anemia"],
    adrs: ["Constipation", "GI upset", "Black stools"],
    cis: ["Hemochromatosis", "Hemolytic anemia"],
    interactions: ["Antacids", "Tetracyclines"]
  },
  {
    name: "Fluconazole",
    class: "Triazole Antifungal",
    moa: "Inhibits fungal cytochrome P450 enzyme, impairing ergosterol synthesis.",
    uses: ["Candidiasis", "Cryptococcal meningitis", "Fungal prophylaxis in immunocompromised"],
    adrs: ["Hepatotoxicity", "GI upset", "QT prolongation"],
    cis: ["Concurrent QT-prolonging agents", "Hypersensitivity"],
    interactions: ["Warfarin", "CYP2C9 inhibitors"]
  },
  {
    name: "Furosemide",
    class: "Loop Diuretic",
    moa: "Inhibits Na+/K+/2Cl- cotransporter in thick ascending limb of Henle, causing natriuresis and diuresis.",
    uses: ["Edema (CHF, liver cirrhosis, renal disease)", "Hypertension", "Hypercalcemia"],
    adrs: ["Hypokalemia", "Ototoxicity", "Hypovolemia"],
    cis: ["Anuria", "Sulfa allergy (use with caution)"],
    interactions: ["Aminoglycosides", "NSAIDs"]
  },
  {
    name: "Gabapentin",
    class: "Anticonvulsant / Neuropathic Pain Agent",
    moa: "Binds to alpha-2-delta subunit of voltage-gated calcium channels, reducing neurotransmitter release.",
    uses: ["Neuropathic pain", "Postherpetic neuralgia", "Partial seizures"],
    adrs: ["Dizziness", "Somnolence", "Ataxia"],
    cis: ["Hypersensitivity", "Myasthenia gravis", "Renal impairment (dose adjustment required)"],
    interactions: ["CNS depressants"]
  },
  {
    name: "Glibenclamide (Glyburide)",
    class: "Sulfonylurea (2nd Generation)",
    moa: "Stimulates insulin release from pancreatic beta-cells by inhibiting ATP-sensitive K+ channels.",
    uses: ["Type 2 Diabetes Mellitus"],
    adrs: ["Hypoglycemia", "Weight gain", "GI upset"],
    cis: ["Type 1 diabetes", "Sulfa allergy", "Pregnancy and lactation"],
    interactions: ["NSAIDs", "Beta-blockers"]
  },
  {
    name: "Haloperidol",
    class: "Typical Antipsychotic (Butyrophenone)",
    moa: "Potent D2 receptor antagonist in CNS.",
    uses: ["Schizophrenia", "Acute psychosis", "Tourette's syndrome"],
    adrs: ["Extrapyramidal symptoms", "QT prolongation", "Neuroleptic malignant syndrome"],
    cis: ["Parkinson's disease", "CNS depression"],
    interactions: ["Anticholinergics", "QT-prolonging drugs"]
  },
  {
    name: "Hydrochlorothiazide",
    class: "Thiazide Diuretic",
    moa: "Inhibits Na+/Cl- reabsorption in the distal convoluted tubule, increasing diuresis.",
    uses: ["Hypertension", "Edema"],
    adrs: ["Hypokalemia", "Hyperuricemia", "Hyperglycemia"],
    cis: ["Anuria", "Sulfa allergy"],
    interactions: ["NSAIDs", "Lithium"]
  },
  {
    name: "Ibuprofen",
    class: "NSAID (Non-Selective COX Inhibitor)",
    moa: "Inhibits COX-1 and COX-2, reducing prostaglandin synthesis.",
    uses: ["Pain", "Fever", "Inflammation"],
    adrs: ["GI irritation", "Renal impairment", "Increased CV risk"],
    cis: ["Active GI ulcer", "Severe renal impairment"],
    interactions: ["Warfarin", "Other NSAIDs"]
  },
  {
    name: "Insulin (Regular, NPH, Lispro, Glargine, etc.)",
    class: "Antidiabetic Hormone",
    moa: "Binds to insulin receptors, promoting glucose uptake and utilization.",
    uses: ["Type 1 diabetes", "Type 2 diabetes (when indicated)", "Diabetic ketoacidosis"],
    adrs: ["Hypoglycemia", "Lipodystrophy", "Weight gain"],
    cis: ["Hypersensitivity"],
    interactions: ["Beta-blockers", "Corticosteroids"]
  },
  {
    name: "Ipratropium",
    class: "Anticholinergic Bronchodilator",
    moa: "Inhibits muscarinic receptors in bronchial smooth muscle, reducing bronchoconstriction.",
    uses: ["COPD", "Asthma (adjunctive)"],
    adrs: ["Dry mouth", "Constipation", "Urinary retention"],
    cis: ["Hypersensitivity to ipratropium, atropine, or related compounds"],
    interactions: ["Other anticholinergics"]
  },
  {
    name: "Isosorbide Dinitrate",
    class: "Nitrate (Vasodilator)",
    moa: "Converted to nitric oxide, relaxing smooth muscles and dilating blood vessels, reducing myocardial oxygen demand.",
    uses: ["Angina pectoris", "Heart failure", "Prevention of angina attacks"],
    adrs: ["Headache", "Hypotension", "Dizziness", "Flushing", "Tachycardia"],
    cis: ["Hypersensitivity to nitrates", "Concurrent use with PDE5 inhibitors (e.g., sildenafil)", "Severe anemia", "Closed-angle glaucoma"],
    interactions: ["PDE5 inhibitors", "Alcohol"]
  },
  {
    name: "Ivermectin",
    class: "Antiparasitic",
    moa: "Binds to specific chloride channels in invertebrate nerve and muscle cells, causing paralysis and death of the parasite.",
    uses: ["Strongyloidiasis", "Onchocerciasis", "Scabies", "Head lice"],
    adrs: ["Dizziness", "Nausea", "Diarrhea"],
    cis: ["Hypersensitivity"],
    interactions: ["CYP3A4 inducers"]
  },
  {
    name: "Ketoconazole",
    class: "Antifungal (Azole)",
    moa: "Inhibits lanosterol 14-alpha-demethylase, preventing ergosterol synthesis in fungal cell membranes.",
    uses: ["Blastomycosis", "Histoplasmosis", "Candidiasis", "Dermatophyte infections"],
    adrs: ["Hepatotoxicity", "Gastrointestinal disturbances", "Rash", "Endocrine disturbances"],
    cis: ["Liver disease", "Concurrent use with certain drugs (e.g., astemizole, terfenadine)"],
    interactions: ["CYP3A4 substrates"]
  },
  {
    name: "Lansoprazole",
    class: "Proton Pump Inhibitor (PPI)",
    moa: "Inhibits the proton pump in the stomach lining, reducing gastric acid secretion.",
    uses: ["Gastroesophageal reflux disease (GERD)", "Peptic ulcers", "Zollinger-Ellison syndrome"],
    adrs: ["Headache", "Diarrhea", "Abdominal pain", "Nausea", "Increased risk of fractures"],
    cis: ["Hypersensitivity to lansoprazole or other PPIs", "Concurrent use with rilpivirine"],
    interactions: ["Warfarin", "Methotrexate"]
  },
  {
    name: "Levofloxacin",
    class: "Fluoroquinolone Antibiotic",
    moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication and repair.",
    uses: ["Respiratory infections (e.g., pneumonia)", "Urinary tract infections", "Skin infections"],
    adrs: ["Gastrointestinal disturbances", "Headache", "Dizziness", "Tendonitis", "QT interval prolongation"],
    cis: ["Hypersensitivity to levofloxacin or other quinolones", "Myasthenia gravis"],
    interactions: ["Antacids", "NSAIDs"]
  },
  {
    name: "Lisinopril",
    class: "ACE Inhibitor",
    moa: "Inhibits ACE, reducing angiotensin II and aldosterone secretion, resulting in vasodilation and reduced blood pressure.",
    uses: ["Hypertension", "Heart failure", "Post-myocardial infarction", "Chronic kidney disease"],
    adrs: ["Hyperkalemia", "Cough", "Dizziness", "Hypotension", "Renal dysfunction"],
    cis: ["Hypersensitivity to lisinopril", "History of angioedema", "Pregnancy"],
    interactions: ["Potassium-sparing diuretics", "NSAIDs"]
  },
  {
    name: "Lorazepam",
    class: "Benzodiazepine (Anxiolytic, Sedative)",
    moa: "Enhances the effect of GABA at the GABA-A receptor, promoting CNS depression and producing anxiolytic, sedative, and anticonvulsant effects.",
    uses: ["Anxiety disorders", "Insomnia", "Preoperative sedation", "Status epilepticus"],
    adrs: ["Drowsiness", "Dizziness", "Memory impairment", "Respiratory depression", "Dependence"],
    cis: ["Hypersensitivity to lorazepam", "Severe respiratory insufficiency", "Sleep apnea syndrome"],
    interactions: ["CNS depressants", "Alcohol"]
  },
  {
    name: "Metformin",
    class: "Antidiabetic (Biguanide)",
    moa: "Decreases hepatic glucose production and increases insulin sensitivity in muscle and fat cells.",
    uses: ["Type 2 diabetes mellitus", "Polycystic ovary syndrome (PCOS)"],
    adrs: ["Gastrointestinal upset", "Lactic acidosis", "Weight loss"],
    cis: ["Renal impairment", "Hypersensitivity"],
    interactions: ["Alcohol", "Iodinated contrast media"]
  },
  {
    name: "Methotrexate",
    class: "Antimetabolite (Folate Antagonist)",
    moa: "Inhibits dihydrofolate reductase, blocking the conversion of dihydrofolate to tetrahydrofolate, disrupting DNA synthesis.",
    uses: ["Rheumatoid arthritis", "Psoriasis", "Certain cancers (e.g., leukemia, lymphoma)"],
    adrs: ["Myelosuppression", "Hepatotoxicity", "Mucositis", "Nausea", "Skin rash"],
    cis: ["Pregnancy", "Liver disease", "Severe renal impairment"],
    interactions: ["NSAIDs", "Trimethoprim"]
  },
  {
    name: "Moxifloxacin",
    class: "Fluoroquinolone Antibiotic",
    moa: "Inhibits bacterial DNA gyrase and topoisomerase IV, preventing bacterial DNA replication.",
    uses: ["Respiratory infections", "Skin infections", "Intra-abdominal infections"],
    adrs: ["Tendon rupture", "QT prolongation", "GI disturbances"],
    cis: ["Hypersensitivity to fluoroquinolones", "Myasthenia gravis"],
    interactions: ["Antacids", "Warfarin"]
  },
  {
    name: "Morphine",
    class: "Opioid Analgesic",
    moa: "Binds to opioid receptors in the CNS and peripheral tissues, leading to analgesia, euphoria, and respiratory depression.",
    uses: ["Severe pain", "Acute pain management", "Palliative care"],
    adrs: ["Respiratory depression", "Constipation", "Nausea", "Vomiting"],
    cis: ["Respiratory depression", "Hypersensitivity"],
    interactions: ["CNS depressants", "MAO inhibitors"]
  },
  {
    name: "Naproxen",
    class: "NSAID",
    moa: "Inhibits cyclooxygenase (COX-1 and COX-2), reducing prostaglandin synthesis.",
    uses: ["Pain relief (mild to moderate)", "Inflammation (e.g., rheumatoid arthritis, osteoarthritis)", "Dysmenorrhea"],
    adrs: ["Gastrointestinal bleeding", "Ulcers", "Renal toxicity", "Headache", "Dizziness"],
    cis: ["Active gastrointestinal bleeding", "Severe renal impairment", "Hypersensitivity to naproxen or other NSAIDs"],
    interactions: ["Warfarin", "Other NSAIDs"]
  },
  {
    name: "Nitroglycerin",
    class: "Nitrate (Vasodilator)",
    moa: "Converted to nitric oxide, relaxing smooth muscles and dilating blood vessels, reducing myocardial oxygen demand.",
    uses: ["Acute angina", "Heart failure", "Acute myocardial infarction (MI)", "Hypertensive emergencies"],
    adrs: ["Headache", "Dizziness", "Hypotension", "Tachycardia", "Flushing"],
    cis: ["Hypersensitivity to nitroglycerin", "Severe anemia", "Concurrent use with PDE5 inhibitors (e.g., sildenafil)"],
    interactions: ["PDE5 inhibitors", "Alcohol"]
  },
  {
    name: "Omeprazole",
    class: "Proton Pump Inhibitor (PPI)",
    moa: "Inhibits the proton pump in gastric parietal cells, reducing stomach acid production.",
    uses: ["Gastroesophageal reflux disease (GERD)", "Peptic ulcers", "Zollinger-Ellison syndrome"],
    adrs: ["Headache", "Diarrhea", "Nausea", "Increased risk of C. difficile infection"],
    cis: ["Hypersensitivity to omeprazole or other PPIs", "Concurrent use with rilpivirine"],
    interactions: ["Warfarin", "Clopidogrel"]
  },
  {
    name: "Ondansetron",
    class: "Antiemetic (5-HT3 Receptor Antagonist)",
    moa: "Selectively blocks 5-HT3 receptors in the central nervous system, reducing nausea and vomiting.",
    uses: ["Prevention of nausea and vomiting associated with chemotherapy, radiation, surgery"],
    adrs: ["Headache", "Constipation", "Dizziness", "QT interval prolongation"],
    cis: ["Hypersensitivity to ondansetron", "Congenital long QT syndrome", "Concurrent use with apomorphine"],
    interactions: ["QT-prolonging drugs"]
  },
  {
    name: "Pantoprazole",
    class: "Proton Pump Inhibitor (PPI)",
    moa: "Inhibits the proton pump in gastric parietal cells, reducing gastric acid secretion.",
    uses: ["Gastroesophageal reflux disease (GERD)", "Peptic ulcers", "Zollinger-Ellison syndrome"],
    adrs: ["Headache", "Diarrhea", "Abdominal pain", "Flatulence"],
    cis: ["Hypersensitivity to pantoprazole or other PPIs"],
    interactions: ["Warfarin", "Methotrexate"]
  },
  {
    name: "Paracetamol (Acetaminophen)",
    class: "Analgesic (Non-opioid)",
    moa: "Inhibits cyclooxygenase (COX) enzymes in the central nervous system, leading to analgesia and antipyresis without significant anti-inflammatory effects.",
    uses: ["Mild to moderate pain relief", "Fever reduction"],
    adrs: ["Hepatotoxicity (overdose)", "Allergic reactions", "Rash"],
    cis: ["Hypersensitivity", "Severe hepatic impairment"],
    interactions: ["Alcohol", "Warfarin"]
  },
  {
    name: "Penicillin",
    class: "Antibiotic (Beta-lactam)",
    moa: "Inhibits bacterial cell wall synthesis by binding to and inactivating penicillin-binding proteins (PBPs), leading to bacterial lysis.",
    uses: ["Bacterial infections (e.g., streptococcal, pneumococcal infections)", "Syphilis", "Endocarditis"],
    adrs: ["Hypersensitivity reactions (e.g., rash, anaphylaxis)", "Gastrointestinal disturbances"],
    cis: ["Hypersensitivity to penicillin or other beta-lactams"],
    interactions: ["Probenecid"]
  },
  {
    name: "Prednisolone",
    class: "Corticosteroid",
    moa: "Suppresses inflammation and immune responses by inhibiting the release of pro-inflammatory cytokines and mediators.",
    uses: ["Inflammatory and autoimmune conditions (e.g., asthma, rheumatoid arthritis, lupus)", "Organ transplant rejection"],
    adrs: ["Weight gain", "Hyperglycemia", "Osteoporosis", "Fluid retention", "Hypertension"],
    cis: ["Systemic fungal infections", "Hypersensitivity to prednisolone"],
    interactions: ["NSAIDs", "Antidiabetic drugs"]
  },
  {
    name: "Propranolol",
    class: "Beta-blocker",
    moa: "Blocks beta-1 and beta-2 adrenergic receptors, reducing heart rate, cardiac output, and blood pressure.",
    uses: ["Hypertension", "Angina", "Arrhythmias", "Migraine prevention", "Essential tremor"],
    adrs: ["Bradycardia", "Hypotension", "Dizziness", "Fatigue", "Bronchospasm"],
    cis: ["Severe bradycardia", "Asthma", "Heart block", "Hypersensitivity to propranolol"],
    interactions: ["Calcium channel blockers", "Insulin"]
  },
  {
    name: "Quetiapine",
    class: "Atypical Antipsychotic",
    moa: "Antagonist at dopamine D2 and serotonin 5-HT2A receptors; also affects histamine and adrenergic receptors.",
    uses: ["Schizophrenia", "Bipolar disorder", "Major depressive disorder (adjunctive)"],
    adrs: ["Sedation", "Weight gain", "Orthostatic hypotension", "Hyperglycemia", "Extrapyramidal symptoms (rare)"],
    cis: ["Hypersensitivity", "Use with caution in elderly with dementia-related psychosis"],
    interactions: ["CYP3A4 inhibitors/inducers"]
  },
  {
    name: "Quinapril",
    class: "ACE Inhibitor",
    moa: "Inhibits ACE, reducing angiotensin II and aldosterone secretion, resulting in vasodilation and reduced blood pressure.",
    uses: ["Hypertension", "Heart failure", "Diabetic nephropathy"],
    adrs: ["Dry cough", "Hyperkalemia", "Hypotension", "Angioedema"],
    cis: ["Pregnancy", "Bilateral renal artery stenosis", "History of angioedema with ACE inhibitors"],
    interactions: ["Potassium-sparing diuretics", "NSAIDs"]
  },
  {
    name: "Quinidine",
    class: "Class IA Antiarrhythmic",
    moa: "Blocks sodium channels, prolonging action potential duration and refractory period in cardiac tissue.",
    uses: ["Atrial and ventricular arrhythmias", "Maintenance of sinus rhythm in atrial fibrillation"],
    adrs: ["QT prolongation", "Torsades de pointes", "Cinchonism (tinnitus, headache, nausea)", "Hypoglycemia", "Cardiac arrhythmia", "Visual disturbances"],
    cis: ["G6PD deficiency", "Optic neuritis", "History of QT prolongation", "Hypersensitivity to quinine or quinidine"],
    interactions: ["CYP2D6 inhibitors", "QT-prolonging drugs"]
  },
  {
    name: "Quinine",
    class: "Antimalarial",
    moa: "Interferes with parasite's ability to digest hemoglobin by inhibiting heme polymerase, leading to toxic buildup of free heme.",
    uses: ["Treatment of uncomplicated and severe malaria (especially Plasmodium falciparum)"],
    adrs: ["Cinchonism (tinnitus, headache, nausea)", "Hypoglycemia", "Cardiac arrhythmia", "Visual disturbances"],
    cis: ["G6PD deficiency", "Optic neuritis", "History of QT prolongation", "Hypersensitivity to quinine or quinidine"],
    interactions: ["CYP3A4 inhibitors", "Antacids"]
  },
  {
    name: "Quinupristin",
    class: "Streptogramin Antibiotic (used with dalfopristin)",
    moa: "Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit.",
    uses: ["Vancomycin-resistant Enterococcus faecium (VRE)", "Complicated skin and soft tissue infections"],
    adrs: ["Arthralgia", "Myalgia", "Infusion site reactions", "Hyperbilirubinemia"],
    cis: ["Hypersensitivity", "Severe hepatic impairment (use with caution)"],
    interactions: ["CYP3A4 substrates"]
  },
  {
    name: "Ranitidine",
    class: "H2 Receptor Antagonist",
    moa: "Blocks histamine H2 receptors on gastric parietal cells, reducing gastric acid secretion.",
    uses: ["Gastroesophageal reflux disease (GERD)", "Peptic ulcers", "Zollinger-Ellison syndrome"],
    adrs: ["Headache", "GI upset"],
    cis: ["Hypersensitivity"],
    interactions: ["None significant"]
  },
  {
    name: "Salbutamol (Albuterol)",
    class: "Beta-2 Agonist (Bronchodilator)",
    moa: "Stimulates beta-2 adrenergic receptors in bronchial smooth muscle, leading to bronchodilation.",
    uses: ["Asthma", "Chronic obstructive pulmonary disease (COPD)", "Acute bronchospasm"],
    adrs: ["Tremor", "Tachycardia", "Headache", "Nervousness"],
    cis: ["Hypersensitivity to salbutamol or other beta-2 agonists"],
    interactions: ["Beta-blockers"]
  },
  {
    name: "Simvastatin",
    class: "HMG-CoA Reductase Inhibitor (Statin)",
    moa: "Inhibits HMG-CoA reductase, reducing cholesterol biosynthesis and increasing LDL receptor expression.",
    uses: ["Hyperlipidemia", "Cardiovascular risk reduction"],
    adrs: ["Myopathy", "Liver enzyme abnormalities", "Gastrointestinal disturbances"],
    cis: ["Active liver disease", "Pregnancy"],
    interactions: ["CYP3A4 inhibitors (e.g., grapefruit juice)", "Fibrates"]
  },
  {
    name: "Sodium Chloride",
    class: "Electrolyte Solution",
    moa: "Replenishes sodium levels and maintains fluid balance.",
    uses: ["Fluid and electrolyte replacement in dehydration, hypovolemia, and shock"],
    adrs: ["Hypernatremia", "Fluid overload", "Peripheral edema"],
    cis: ["Hypernatremia", "Heart failure", "Renal impairment"],
    interactions: ["None significant"]
  },
  {
    name: "Spironolactone",
    class: "Potassium-Sparing Diuretic; Aldosterone Antagonist",
    moa: "Competitively inhibits aldosterone at the distal renal tubules, promoting sodium and water excretion while conserving potassium.",
    uses: ["Hypertension", "Heart failure", "Ascites in liver cirrhosis", "Primary hyperaldosteronism"],
    adrs: ["Hyperkalemia", "Gynecomastia", "Menstrual irregularities"],
    cis: ["Hyperkalemia", "Addison's disease", "Anuria", "Severe renal impairment"],
    interactions: ["ACE inhibitors", "Potassium supplements"]
  },
  {
    name: "Streptomycin",
    class: "Aminoglycoside Antibiotic",
    moa: "Binds to the 30S ribosomal subunit of bacteria, inhibiting protein synthesis and causing bacterial cell death.",
    uses: ["Tuberculosis (second-line)", "Plague", "Tularemia"],
    adrs: ["Ototoxicity", "Nephrotoxicity", "Vestibular dysfunction"],
    cis: ["Hypersensitivity to aminoglycosides", "Myasthenia gravis"],
    interactions: ["Nephrotoxic drugs", "Loop diuretics"]
  },
  {
    name: "Sulfasalazine",
    class: "Anti-inflammatory / Disease-Modifying Antirheumatic Drug (DMARD)",
    moa: "Metabolized in the colon to sulfapyridine and 5-aminosalicylic acid, reducing inflammation.",
    uses: ["Rheumatoid arthritis", "Ulcerative colitis"],
    adrs: ["GI upset", "Rash", "Hepatotoxicity"],
    cis: ["Hypersensitivity to sulfonamides or salicylates", "Intestinal or urinary obstruction"],
    interactions: ["Warfarin", "Methotrexate"]
  },
  {
    name: "Theophylline",
    class: "Methylxanthine Bronchodilator",
    moa: "Inhibits phosphodiesterase leading to increased cAMP levels, resulting in bronchial smooth muscle relaxation; also antagonizes adenosine receptors.",
    uses: ["Asthma", "COPD"],
    adrs: ["Tremors", "Palpitations", "Insomnia"],
    cis: ["Uncontrolled arrhythmias", "Peptic ulcer"],
    interactions: ["CYP1A2 inhibitors/inducers", "Beta-blockers"]
  },
  {
    name: "Tramadol",
    class: "Opioid Analgesic",
    moa: "Binds to mu-opioid receptors and inhibits serotonin and norepinephrine reuptake.",
    uses: ["Moderate to severe pain"],
    adrs: ["Drowsiness", "Dizziness", "Nausea", "Constipation", "Risk of serotonin syndrome", "Seizures"],
    cis: ["Acute intoxication with alcohol, hypnotics, opioids", "Severe respiratory depression"],
    interactions: ["SSRIs", "MAO inhibitors"]
  },
  {
    name: "Trastuzumab",
    class: "Monoclonal Antibody; HER2/neu Receptor Antagonist",
    moa: "Binds specifically to the extracellular domain of the HER2 receptor, inhibiting proliferation and promoting cytotoxicity.",
    uses: ["HER2-positive breast cancer", "HER2-positive metastatic gastric or gastroesophageal junction adenocarcinoma"],
    adrs: ["Cardiotoxicity (especially with anthracyclines)", "Infusion-related reactions (fever, chills)", "Diarrhea", "Myelosuppression"],
    cis: ["Hypersensitivity to trastuzumab", "Significant preexisting cardiac dysfunction (e.g., LVEF < 50%)"],
    interactions: ["Anthracyclines"]
  },
  {
    name: "Vancomycin",
    class: "Glycopeptide Antibiotic",
    moa: "Inhibits bacterial cell wall synthesis by binding to the D-alanyl-D-alanine precursor.",
    uses: ["Methicillin-resistant Staphylococcus aureus (MRSA) infections", "Clostridium difficile colitis"],
    adrs: ["Nephrotoxicity", "Ototoxicity", "Red man syndrome"],
    cis: ["Hypersensitivity", "Renal impairment without monitoring"],
    interactions: ["Nephrotoxic drugs"]
  },
  {
    name: "Pseudoephedrine",
    class: "Decongestant",
    moa: "Stimulates alpha-adrenergic receptors in nasal mucosa, causing vasoconstriction and reduced nasal congestion.",
    uses: ["Nasal congestion due to cold, sinusitis, allergic rhinitis"],
    adrs: ["Rebound congestion (with prolonged use)", "Dryness", "Irritation of nasal mucosa"],
    cis: ["Narrow-angle glaucoma", "Children under 6 years (in some formulations)", "Prolonged use (>5 days)"],
    interactions: ["MAO inhibitors", "Beta-blockers"]
  },
  {
    name: "Yohimbine",
    class: "Alpha-2 Adrenergic Antagonist",
    moa: "Blocks presynaptic alpha-2 receptors, increasing sympathetic outflow and norepinephrine release.",
    uses: ["Erectile dysfunction", "Orthostatic hypotension (investigational use)"],
    adrs: ["Hypertension", "Anxiety", "Tachycardia", "Irritability", "Dizziness"],
    cis: ["Severe cardiac disease", "Psychiatric disorders", "Renal impairment"],
    interactions: ["Antihypertensives", "CNS stimulants"]
  },
  {
    name: "Zidovudine (AZT)",
    class: "Antiretroviral (NRTI - Nucleoside Reverse Transcriptase Inhibitor)",
    moa: "Phosphorylated intracellularly and incorporated into viral DNA, leading to chain termination.",
    uses: ["HIV infection", "Prevention of maternal-fetal HIV transmission"],
    adrs: ["Bone marrow suppression (anemia, neutropenia)", "GI upset", "Myopathy"],
    cis: ["Hypersensitivity", "Severe anemia or neutropenia"],
    interactions: ["Bone marrow suppressants", "Ribavirin"]
  },
];