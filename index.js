const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/get", (req, res) => {
  res.sendFile(__dirname + "/get.html");
});

app.post("/post", urlencodedParser, (req, res) => {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  res.end(JSON.stringify(response));
});

app.listen(3000);
