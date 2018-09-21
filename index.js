const express = require("express");
const app = express();
const port = process.env.PORT || 80;

app.use(express.static(__dirname + "/view"));
//Store all HTML files in view folder.

app.use(express.static(__dirname + "/img"));

app.get("/", function(req, res) {
  res.sendFile(index.html);
});

app.listen(port, function() {
  console.log("Server started");
});
