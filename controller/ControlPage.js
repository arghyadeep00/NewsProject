const jwt = require("jsonwebtoken");
const myschema = require("../models/mySchema.js");
const bcrypt = require("bcrypt");

require("dotenv").config();
const homePage = (req, res) => {
  res.render("index");
};

const userData = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      success: "false",
      message: "Enter all the fields",
    });
  }
  try {
    const hasPass = await bcrypt.hash(password, 8);
    await new myschema({
      name,
      email,
      password: hasPass,
    }).save();
    res.redirect("/");
  } catch (error) {
    res.json({
      success: "false",
      message: "Data inserting faild",
    });
  }
};

const query = (req, res) => {
  const { country } = req.query;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY_AR00}`;
  fetch(url)
    .then((data) => data.json())
    .then((result) => {
      if (result.status === "error") {
        return res.status(400).json({
          success: "False",
          message:
            "Api data fetching Problem Please sometime after you can try",
        });
      }
      res.render("country", { result });
    })
    .catch((err) => console.log("Error Occure"));
};
const login = async (req, res) => {
  const { login_email, login_password } = req.body;
  const email = login_email;
  if (!login_email || !login_password) {
    return res.status(400).json({
      success: "false",
      message: "Enter all fields",
    });
  }
  try {
    const result = await myschema.findOne({ email });
    if (!result) {
      res.status(400).json({
        success: "false",
        message: "Invalid email or password",
      });
    }
    const comPass = await bcrypt.compare(login_password, result.password);
    const payload = {
      id: result.id,
      name: result.name,
      email: result.email,
    };
    if (comPass) {
      const token = jwt.sign(payload, process.env.JWT_KEY);
      res.cookie("myCookie", token);
      res.render("index");
    }
  } catch (error) {
    res.status(400).json({
      success: "false",
      message: "Finding user details faild",
    });
    console.log(error);
  }
};

const checkLogin=(req,res)=>{
  

}

module.exports = { homePage, userData, query, login,checkLogin };
