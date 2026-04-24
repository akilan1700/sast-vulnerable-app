const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

const db = new sqlite3.Database(':memory:');

app.get('/user', (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${id}`; // Vulnerable
  db.all(query, [], (err, rows) => {
    res.json(rows);
  });
});

app.listen(3000, () => console.log("SQL Injection running on 3000"));