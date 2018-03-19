$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/result/", function(data){
		$.each(data, function(i, value){
			$("#myDiv").append(`${value.year}: ${value.HomeTeamID}: ${value.HomeTeamScore} ${value.AwayTeamID}: ${value.AwayTeamScore}<br>`);
		});		

	});	
	
});