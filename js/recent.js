$(document).ready(function(){
	var url = "http://ec2-54-202-153-82.us-west-2.compute.amazonaws.com:3000/darwin/queries";
	$.ajax({
		type:'GET',
		url:url,
		success: function(data){
			populateList(data);
		},
		error: function(err){
			alert("Something went wrong");
		}
	});

	function populateList(data){
		for(var i in data){
			var count = parseInt(i)+1;
			var html = $("#list").html();
			var link = "images.html?query="+data[i].query+"&identifier="+data[i].identifier+"&count="+data[i].count;
			$("#list").html(html + "<a href='"+link+"'>" + count + ") " + data[i].query + "</a><br>");
		}
	}
});