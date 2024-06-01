const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index");
});
// app.get("/country", (req, res) => {
//   const { query } = req.query;
  
// });
app.get("/query",(req,res)=>{
  const {country}=req.query;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY_AR200}`;
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

  // console.log(country)
  // res.send("Fine")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
