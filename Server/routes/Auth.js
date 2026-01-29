const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

//! Register Routes
router.post("/register", async (req, res) => {
  try {
    // ? Get data from request body
    const { name, email, password, role } = req.body;

    //     ? Cheak if all require fileds are provided
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ massage: "Please Provide name, email, and password" });
    }

    //     ? Cheak if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ massage: "User alredy Exists" });
    }

    const hashedPassword = await bcrypt.hash(password,10)
    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      role: role || "student",
    });
  } catch {}
});
