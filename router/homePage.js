const express = require("express");
const router = express.Router();
const { getCountryCode, countryNews,homeNews } = require("../controller/ControlPage.js");
router.get("/home",homeNews);
router.get("/", getCountryCode);
router.get("/country-news",countryNews);

module.exports = router;
