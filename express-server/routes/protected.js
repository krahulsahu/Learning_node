const express = require("express");
const authMiddleware = require("../middleware/middleware");
const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the protected dashboard!", user: req.user });
});

module.exports = router;
