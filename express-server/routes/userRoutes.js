const express = require("express");
const router = express.Router();

// Welcome Route
router.get("/", (req, res) => {
  res.json({ message: "Hello, Welcome to Users API" });
});

// Get User by ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;

  // Check if ID is a valid number
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid User ID" });
  }

  res.json({ userId, message: "User found successfully!" });
});

module.exports = router;
