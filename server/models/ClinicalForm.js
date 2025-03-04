const mongoose = require("mongoose");

const ClinicalFormSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  // Basic Information
  age: Number,
  sex: String,
  height: Number,
  weight: Number,
  complaints: String,
  familyHistory: String,
  surgicalHistory: String,
  diseaseDiagnosed: String,
  placeOfLiving: String,
  // Personal History
  personalHistory: {
    occupation: String,
    alcohol: String,       // if "no" then store "no", if "yes" then description
    smoking: String,
    substanceAbuse: String,
    allergies: String,
    appetite: String,
    sleep: String,
    bowelHabits: String,
  },
  // Past Medical History: Array of objects with drug and dose
  pastMedicalHistory: [{
    drug: String,
    dose: String,
  }],
  // Lab Profile: Array of objects with parameter and value
  labProfile: [{
    parameter: String,
    value: String,
  }],
}, { timestamps: true });

module.exports = mongoose.model("ClinicalForm", ClinicalFormSchema);
