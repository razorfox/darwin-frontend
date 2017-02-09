$(document).ready(function(){
	var QueryString = function () {
		var query_string = {};
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if (typeof query_string[pair[0]] === "undefined") {
				query_string[pair[0]] = decodeURIComponent(pair[1]);
			} else if (typeof query_string[pair[0]] === "string") {
				var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
				query_string[pair[0]] = arr;
			} else {
				query_string[pair[0]].push(decodeURIComponent(pair[1]));
			}
		} 
		return query_string;
	}();

	for(var i=0;i<QueryString.count;i++){
		var html = $("#images").html();
		var url = "http://darwinbucket.s3-website.ap-south-1.amazonaws.com/"
		var src = url + QueryString.identifier + i + ".png";
		$("#images").html(html + "<img style='width:100px;height:100px;float:left;margin:2px' src='" + src + "'>")
	}
});