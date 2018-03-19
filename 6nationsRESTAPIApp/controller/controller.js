var _ = require('underscore');
var mysql = require('mysql');

///////////////////////////////////////////////////////////////////////////////////////////

// GET model data
var teamData = require("../model/teams.json");

// Setup MySQL connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : '6nationsdb'
});
connection.connect(function(err){
    if(err) throw err;    
    console.log(`Connected to MySQL database 6nationsdb`);
});


  
////////////////////////// JSON ////////////////////////////////////////////////////////////

// GET /team
exports.getTeams = function(req,res){
    res.status(200);  // OK
    res.send(teamData.teams);
}

// POST /team
exports.postTeam = function(req,res){
    teamData.teams.push(req.body);
    res.status(201);  // OK
    res.send(`POST!`);
}

// GET /team/id
exports.getTeam = function(req,res){
    var team = _.find(teamData.teams,{id: req.params.id});
    if(team!=undefined)
    {
        res.status(200);  // OK
        res.send(team);
    }
    else
    {
        res.status(404);  // NOT FOUND
        res.send(`GET /team/${req.params.id}: ${req.params.id} NOT FOUND`);   
    }
}

// PUT /team/id
exports.putTeam = function(req,res){
    var team = _.find(teamData.teams,{id: req.params.id});
    if(team!=undefined)
    {
        // remove team from teamData teams array
        teamData.teams = _.without(teamData.teams,team);

        // update team values
        team=_.omit(team,_.keys(req.body));  // remove keys to be updated
        _.extend(team,req.body);             // add new keys/values

        // add team again to teamData teams array
        teamData.teams.push(team);
        res.status(200);  // OK
        res.send(team);
    }
    else
    {        
        res.status(404);  // NOT FOUND
        res.send(`PUT /team/${req.params.id}: ${req.params.id} NOT FOUND`);   
    }
}

// DELETE /team/id
exports.deleteTeam = function(req,res){
    var team = _.find(teamData.teams,{id: req.params.id});
    if(team!=undefined)
    {
        // remove team found
        teamData.teams = _.without(teamData.teams,team);
        res.status(200);  // OK
        res.send(`DELETE /team/${req.params.id}: ${req.params.id} DELETED!`);
    }
    else
    {
        res.status(404);  // NOT FOUND
        res.send(`DELETE /team/${req.params.id}: ${req.params.id} NOT FOUND`);   
    }
}





///////////////////////// MySQL /////////////////////////////////////////////////////////////

// GET /result
exports.getResults = function(req,res){
    connection.query("SELECT * FROM results", function(err, rows, fields) {
        if (err) throw err;

        //console.log(JSON.stringify(rows));
        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });    
}

// GET /result/team/id
exports.getResultsByYear = function(req,res){
    connection.query(`SELECT * FROM results WHERE year=${req.params.year}`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));
    });    
}

// POST /team
exports.postTeam2 = function(req,res){
    connection.query(`INSERT INTO teams VALUES(${req.body.id},'${req.body.name}','${req.body.shortname}','${req.body.lat}','${req.body.lng}')`, function(err, rows, fields) {
        if (err) throw err;

        res.status(201);  // OK
        res.send(`POST!`);
    }); 

}