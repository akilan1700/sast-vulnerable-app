const express = require('express');
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
  console.log("Password:", req.body.password); // Vulnerable
  res.send("User created");
});

app.listen(3003, () => console.log("Sensitive data running on 3003"));