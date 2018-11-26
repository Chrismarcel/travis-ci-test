const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("ci with travis");
});

module.exports = server;
