var express = require("express");
var bodyParser = require("body-parser");
var routes = require('./routes/routes.js');

var app = express();

app.use(express.static('public'));

// needed to send JSON object(s) for POST & PUT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// setup routes  
routes.routes(app);

var myServer = app.listen(3000, function() {
  console.log("6 Nations REST API server listening on port 3000");
});
