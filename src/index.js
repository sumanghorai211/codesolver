const express = require("express");
const app = require("./app");
const { PORT } = require("./config/server.config");
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
