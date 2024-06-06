const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const router=require('./router/routes.js')
const conn = require("./connection/conn.js");
const cookieParser=require("cookieparser");
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

conn(); //database connection function call
app.use(router);
app.use(cookieParser);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
