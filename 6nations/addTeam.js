$("document").ready(function(){
	
	$("#add").click(function(){
		
		$.post("http://localhost:3000/teams/add",
		{
			id: $("#id").val(),
			name: $("#name").val(),
			shortname: $("#shortname").val(),
			lat: $("#lat").val(),
			lng: $("#lng").val()
		});

	});
});
