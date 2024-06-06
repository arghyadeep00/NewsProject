const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const mySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter username"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Enter valid email"],
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Enter your password"],
    trim: true,
  },
});

const myschema = new mongoose.model("myschema", mySchema);
module.exports = myschema;
