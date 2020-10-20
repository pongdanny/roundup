const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) => {
  res.send("this works!");
});

app.listen(port, () => console.log(`Running on port ${port}`));
