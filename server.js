require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());



//BEER LIST
//frontend route - ./src/Pages/Reload.js
app.get("/api/v1/getBeers", async (req, res) => {
    const results = await db.query("SELECT * FROM beers")
    console.log(results)
});
//no route yet
app.get("/api/v1/getBeers/:id", (req, res) => {
    console.log(req.params);
});

//EVENTS LIST
//frontend route - ./src/Pages/Events.js
app.get("/api/v1/getEvents", async (req, res) => {
    const results = await db.query("SELECT * FROM events")
    console,log(results)
});
app.get("/api/v1/getEvents/:id", (req, res) => {
    console.log(req);
});

//ARCADE LIST
//frontend route - ./src/Pages/Play.js
app.get("/api/v1/getGames", async (req, res) => {
    const results = await db.query("SELECT * FROM games")
});
app.get("/api/v1/getGames/:id", (req, res) => {
    console.log(req);
});

//LISTENER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});