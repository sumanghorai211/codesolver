const express = require("express");
const app = express();
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use("/api", apiRouter);
app.get("/ping", (req, res) => {
  console.log(req.query.s);
  return res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
