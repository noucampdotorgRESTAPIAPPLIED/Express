$("document").ready(function(){
    
    $('#btn').click(function(){
        
        $.getJSON(`http://localhost:3000/team/${$('#id').val()}`, function(data){
            console.log(data);
            $("#myDiv").append(data.name+"<br>");
        		
    
        });	
    })
	
	
});