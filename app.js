const express = require("express");
const app = express();
const routes = require("./routes");
const port = 8081;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get(/xyz$/, (req, res) => {
  res.send("That's all I wrote.");
});

app.get("/capital-letters/:upper", (req, res) => {
  res.send(req.params.upper.toUpperCase());
});

app.use("/margot", routes);

app.use("/margeaux", routes);

app.all(/^\/[^\/]+$/, (req, res) => {
  let randomNumber = Math.floor(Math.random() * 10);
  res.render("template", { method: req.method, path: req.path, randomNumber });
});

app.listen(port, () => console.log(`Running on port ${port}`));
