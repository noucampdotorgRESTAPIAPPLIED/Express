$("document").ready(function(){
    
    $('#btn').click(function(){        
        $.post("http://localhost:3000/team/", {'id': $('#id').val(), 'name': $('#name').val(), 'shortname': $('#shortname').val(), 'lat': $('#lat').val(), 'lng': $('#lng').val() }, function(data){

          });
    });	
});