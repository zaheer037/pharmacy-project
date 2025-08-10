const express = require("express");
const router = express.Router();
const ClinicalForm = require("../models/ClinicalForm");
const { protect } = require("../middleware/authMiddleware");

// Route to submit clinical data
router.post("/submit", protect, async (req, res) => {
  try {
    // Create a new ClinicalForm entry and associate with logged-in user
    const formData = new ClinicalForm({
      ...req.body,
      userId: req.user._id,
    });
    await formData.save();
    res.status(201).json({ message: "Clinical data saved successfully", formData });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error: error.message });
  }
});

// Optional: Route to retrieve clinical data for a user
router.get("/user/:id", protect, async (req, res) => {
  try {
    const data = await ClinicalForm.find({ userId: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error: error.message });
  }
});

// Route to retrieve ALL clinical data for educational sharing
router.get("/all", protect, async (req, res) => {
  try {
    // Get all clinical forms from all users for educational purposes
    const data = await ClinicalForm.find({})
      .populate('userId', 'name occupation') // Include submitter info for context
      .sort({ createdAt: -1 }) // Most recent first
      .limit(100); // Limit for performance
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error: error.message });
  }
});

module.exports = router;
