const mongoose = require("mongoose");
require("dotenv").config();
const conn = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/newProjectData`);
    console.log("Database Connection Success");
  } catch (error) {
    console.log("DB Connection Error");
  }
};

module.exports = conn;
