var controller = require('../controller/controller.js');

exports.routes = function(app){

    // route handler for the route path '/team' for GET & POST 
    app.route('/team')
      .get(function (req, res) {
        controller.getTeams(req,res);        
      })
      .post(function (req, res) {
        // JSON version
        controller.postTeam(req,res);        
        // OR 
        // MySQL alternative
        // controller.postTeam2(req,res);  // MySQL used
      });


    // specific route handler for path '/team/id' for GET, PUT & DELETE
    app.route('/team/:id')
      .get(function (req, res) {
        controller.getTeam(req,res);
      })
      .put(function (req, res) {
        controller.putTeam(req,res);
      })
      .delete(function (req, res) {
        controller.deleteTeam(req,res);
      });


    // route handler for the route path '/result' for GET & POST 
    app.route('/result')
    .get(function (req, res) {
      controller.getResults(req,res);  // MySQL used
    });

    app.route('/result/year/:year')
    .get(function (req, res) {
      controller.getResultsByYear(req,res);  // MySQL used 
    });
    
}
