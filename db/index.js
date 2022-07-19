const { Pool } = require('pg')
const pool = new Pool({
    user: 'coco',
    host: 'localhost',
    database: 'barcadia',
    password: 'password',
    port: 5400,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}