const express = require('express');
const app = express();

app.use(express.json());

const ADMIN_PASSWORD = "admin123"; // Hardcoded

app.post('/login', (req, res) => {
  if (req.body.password === ADMIN_PASSWORD) {
    res.send("Logged in");
  } else {
    res.send("Invalid");
  }
});

app.listen(3002, () => console.log("Auth issue running on 3002"));