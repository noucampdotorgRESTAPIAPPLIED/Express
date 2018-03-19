$("document").ready(function(){
    
    $('#btn').click(function(){
        
        $.getJSON(`http://localhost:3000/result/year/${$('#year').val()}`, function(data){
            console.log(data);
            $.each(data, function(i, value){
                $("#myDiv").append(`${value.year}: ${value.HomeTeamID}: ${value.HomeTeamScore} ${value.AwayTeamID}: ${value.AwayTeamScore}<br>`);
            });
        });	
    })
	
	
});