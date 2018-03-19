$("document").ready(function(){
    
    $('#btn').click(function(){

        $.ajax({
            url : `http://localhost:3000/team/${$('#id').val()}`, 
            type: 'DELETE'
        });	
    });
});