const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Data, SignUp } = require("../models/User");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await SignUp.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new SignUp({ name, email, password: hashedPassword });
    await user.save();

    res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await SignUp.findOne({ email });
    if (!user) return res.json({ message: "User not found" });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });

});

module.exports = router;
