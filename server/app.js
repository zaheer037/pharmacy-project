const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const clinicalRoutes = require("./routes/clinicalRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Authentication routes
app.use("/api", authRoutes);
// Clinical form routes (protected)
app.use("/api/clinical", clinicalRoutes);

module.exports = app;
