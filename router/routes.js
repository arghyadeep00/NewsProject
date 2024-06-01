const express = require("express");
const router = express.Router();
const homePage  = require("../controller/ControlPage.js");

router.get("/home", homePage);

module.exports = router;
