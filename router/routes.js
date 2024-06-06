const express = require("express");
const router = express.Router();
const { homePage, userData, query,login,checkLogin } = require("../controller/ControlPage.js");

//all get methods
router.get("/", homePage);
router.get("/news", homePage);
router.get("/query", query);

//all post methods
router.post("/userData", userData);
router.post("/login",login);

module.exports = router;
