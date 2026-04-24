const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/ping', (req, res) => {
  exec(`ping ${req.query.host}`, (err, stdout) => { // Vulnerable
    res.send(stdout);
  });
});

app.listen(3004, () => console.log("Command injection running on 3004"));