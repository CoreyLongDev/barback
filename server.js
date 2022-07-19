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
    console.log(results.rows)
});
//no route yet
app.get("/api/v1/getBeers/:id", async (req, res) => {
    const results = await db.query('SELECT * FROM beers WHERE id = $1', [req.params.id])
    console.log(results.rows[0])
});

//EVENTS LIST
//frontend route - ./src/Pages/Events.js
app.get("/api/v1/getEvents", async (req, res) => {
    const results = await db.query("SELECT * FROM events")
    console,log(results)
});
app.get("/api/v1/getEvents/:id", async (req, res) => {
    const results = await db.query('SELECT * FROM events WHERE id = $1', [req.params.id])
    console.log(results.rows[0])
});

//ARCADE LIST
//frontend route - ./src/Pages/Play.js
app.get("/api/v1/getGames", async (req, res) => {
    const results = await db.query("SELECT * FROM games")
});
app.get("/api/v1/getGames/:id",async (req, res) => {
    const results = await db.query('SELECT * FROM games WHERE id = $1', [req.params.id])
    console.log(results.rows[0])
});

//LISTENER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});