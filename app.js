const express = require("express");
const app = express();
const port = 8081;

app.set("view engine", "pug");

// app.get("/", (req, res) => {
//   res.send("this works!");
// });

app.all("*", (req, res) => {
  let randomNumber = Math.floor(Math.random() * 10);
  res.render("template", { method: req.method, path: req.path, randomNumber });
});

app.listen(port, () => console.log(`Running on port ${port}`));
