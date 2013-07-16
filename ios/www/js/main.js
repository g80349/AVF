//David Whimple
//AVF 1307
//Project 1
//Javascript


$('document').ready(function(){

	$('#instagramLink').on('click', function(){
		$('#output').empty();
		var tag = prompt("What would you like to search for? Please use one word tags.", "Resturant");

		if(tag !== null){
			var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=7c2149de6f6a4ee0a7c76cacf1d87e0b";
			$.getJSON(url, screenOutput);
			console.log(url);
		}else{
			window.location.reload('#home');
		}
	});

	var screenOutput = function(info){
		alert("It's working");
		console.log(info);

		$('#message').html("<h2>Instagram results:</h2>");

		$.each(info.data, function(index, photo){
			var pic = "<li class='images'><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id + "'/><h4>" + photo.user.full_name + ", <em>(" + photo.user.username + ")</h4></li>";
			$('#output').append(pic);
		});
	};
});

$('document').ready(function(){

	$('#nfl').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/football/nfl/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#ncaaFootball').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/football/college-football/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#mlb').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/baseball/mlb/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#nba').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/nba/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#ncaaBasketball').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/mens-college-basketball/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#wnba').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/wnba/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#wNcaaBasketball').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/womens-college-basketball/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#boxing').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/boxing/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#nhl').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/hockey/nhl/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#golf').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/golf/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#tennis').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/tennis/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#soccer').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/soccer/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#mma').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/mma/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	$('#nascar').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/racing/nascar/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm&callback=?";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	var screenOutput = function(info){
		alert("It's working");
		console.log(info);

		$('#espnMessage').html("<h2>ESPN results:</h2>");

		$.each(info.headlines, function(index, story){
			var sportsStory = "<li><a href='" + story.links.web.href +"'><h2>" + story.headline + "</h2></a><h3>" + story.description + "</h3></li>";
			console.log(sportsStory);
			$('#espnOutput').append(sportsStory);
		});
	};
});

$('document').ready(function(){

	$('#weatherLink').on('click', function(){
		$('#weatherOutput').empty();
		var tag = prompt("Search City or Zip Code", "89044");

		if(tag !== null){
			var url = "http://api.wunderground.com/api/0daa58d9b0337d04/geolookup/conditions/forecast/q/" + tag + ".json";
			$.getJSON(url, screenOutput);
			console.log(url);
		}else{
			window.location.reload('#home');
		}
	});

	var screenOutput = function(info){
		alert("It's working");
		console.log(info);

	var weather = info.current_observation;
			console.log(weather);
			var weatherReport = "<h2>" + weather.display_location.full + "</h2><h2>" + weather.display_location.zip + "</h2><img src='" + weather.image.url + "'><h3></h3></li>";
			console.log(weatherReport);
			$('#weatherOutput').append(weatherReport);
		$('#weatherMessage').html("<h2>Weather Results:</h2>");
	};
});















