require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("middleware is gooood");
  next();
});
//LISTENER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//BEER LIST
//frontend route - ./src/Pages/Reload.js
app.get("/api/v1/getBeers", (req, res) => {
  console.log("get list of current beers items");
  res.send("Beer List Here");
});
//no route yet
app.get("/api/v1/getBeers/:id", (req, res) => {
  console.log(req.params);
});

//EVENTS LIST
//frontend route - ./src/Pages/Events.js
app.get("/api/v1/getEvents", (req, res) => {
  console.log("get list of current events items");
  res.send("Calender Here");
});
app.get("/api/v1/getEvents/:id", (req, res) => {
  console.log(req);
});

//ARCADE LIST
//frontend route - ./src/Pages/Play.js
app.get("/api/v1/getGames", (req, res) => {
  console.log("get list of current arcade floor items");
  res.send("Games List Here");
});
app.get("/api/v1/getGames/:id", (req, res) => {
  console.log(req);
});
