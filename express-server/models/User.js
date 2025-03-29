const { request } = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true, unique: true },
});


const dataSchema = new mongoose.Schema({
   name: { type: String, required: true },
  price: { type: Number, required: true }, 
  category: { type: String, default: "General" },
  age: { type: Number },  
  email: { type: String }
});

const signUp = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Data = mongoose.model("Data", dataSchema);
const User = mongoose.model("User", userSchema);
const SignUp = mongoose.model("SignUp", signUp);


module.exports = {User, Data, SignUp};