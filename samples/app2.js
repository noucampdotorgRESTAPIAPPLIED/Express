var express = require("express");

var app = express();

app.get("/", function(req,res){
  res.send('<h1>Hello Express</h1>');
});

// another route
app.get("/noucamp", function(req,res){
  res.send('<h1>Hello noucamp</h1>');
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});