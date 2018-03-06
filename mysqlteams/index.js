var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '6nationsdb'
});


connection.connect(function(err){
	if(err) throw err;
	
	console.log(`Sucessfully connected to MySQL database 6nationsdb`);
});


connection.query("SELECT * FROM teams", function(err, rows, fields) {
  if (err) throw err;

  console.log(JSON.stringify(rows));
});


connection.end();