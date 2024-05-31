require("dotenv").config();
const getCountryCode = (req, res) => {
  const { country } = req.query;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`;

  res.json({
    success: "true",
  });
};

const countryNews = (req, res) => {
  res.render("country.ejs");
};

const homeNews = (req, res) => {
  res.render("index.ejs");
};

module.exports = { getCountryCode, countryNews, homeNews };

// "https://newsapi.org/v2/top-headlines?country=in&apiKey=85da27e447d24f378487000dd24416ea"
