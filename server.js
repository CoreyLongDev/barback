require("dotenv").config();
const cors = require('cors')
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors())



//BEER LIST
//frontend route - ./src/Pages/Reload.js
app.get("/api/v1/getBeers", async (req, res) => {
    const results = await db.query("SELECT * FROM beers")
    console.log(results.rows)
    res.json(results.rows)
});
//no route yet
app.get("/api/v1/getBeers/:id", async (req, res) => {
    const results = await db.query('SELECT * FROM beers WHERE id = $1', [req.params.id])
    console.log(results.rows[0])
    res.json(results.rows)
});

//EVENTS LIST
//frontend route - ./src/Pages/Events.js
app.get("/api/v1/getEvents", async (req, res) => {
    const results = await db.query("SELECT * FROM events")
    console,log(results)
    res.json(results.rows)
});
app.get("/api/v1/getEvents/:id", async (req, res) => {
    const results = await db.query('SELECT * FROM events WHERE id = $1', [req.params.id])
    console.log(results.rows[0])
    res.json(results.rows)
});

//ARCADE LIST
//frontend route - ./src/Pages/Play.js
app.get("/api/v1/getGames", async (req, res) => {
    const results = await db.query("SELECT * FROM games")
    res.json(results.rows)
});
app.get("/api/v1/getGames/:id", async (req, res) => {
    const results = await db.query('SELECT * FROM games WHERE id = $1', [req.params.id])
    console.log(results.rows[0])
    res.json(results.rows)
});

//LISTENER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});