$(document).ready(function(){
	$("#search-button").click(function(){
		$("#msg").html("");
		var searchText = $("#search-text").val();
		if(searchText){
			var url = "http://ec2-54-202-153-82.us-west-2.compute.amazonaws.com:3000/darwin/";
			var data = {query: searchText};
			$.ajax({
				type:'POST',
				url:url,
				data:data,
				success: function(data){
					$("#msg").addClass("alert alert-success");
					$("#msg").html(searchText + " added successfully");
				},
				error: function(err){
					$("#msg").addClass("alert alert-danger");
					$("#msg").html("Something went wrong");
				}
			});
		}
	});
});