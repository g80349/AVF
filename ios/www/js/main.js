//David Whimple
//AVF 1307
//Project 1
//Javascript


$('#instagram').on('pageinit', function(){
	$(function(){

	var screenOutput = function(info){
		alert("It's working");
		console.log(info);

		$('#message').html("<h2>Instagram results:</h2>");

		$.each(info.data, function(index, photo){
			var pic = "<li><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id + "'/><h4>" + photo.user.full_name + ", <em>(" + photo.user.username + ")</h4></li>";
			$('#output').append(pic);
		});
	};

		var tag = prompt("What would you like to search for?", "People");
		var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=7c2149de6f6a4ee0a7c76cacf1d87e0b";
		$.getJSON(url, screenOutput);
		console.log(url);
	});

});



















