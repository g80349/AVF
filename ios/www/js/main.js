//David Whimple
//AVF 1307
//Project 1
//Javascript


$('document').ready(function(){

	$('#instagramLink').on('click', function(){
		$('#output').empty();
		var tag = prompt("What would you like to search for? Please use one word tags.", "Resturant");

		if(tag !== null){
			var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=7c2149de6f6a4ee0a7c76cacf1d87e0b&callback=?";
			$.getJSON(url, screenOutput);
			console.log(url);
		}else{
			window.location.reload('#home');
		}
	});

	var screenOutput = function(info){
		alert("It's working");
		console.log(info);

		$('#instagramMessage').html("<h2>Instagram results:</h2>");

		$.each(info.data, function(index, photo){
			var pic = "<div class='images'><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id + "'/><h4>" + photo.user.full_name + ", <em>(" + photo.user.username + ")</h4></div>";
			$('#instagramOutput').append(pic);
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
			var url = "http://api.espn.com/v1/sports/racing/nascar/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, screenOutput);
			console.log(url);
	});

	var screenOutput = function(info){
		alert("It's working");
		console.log(info);

		$('#espnMessage').html("<h2>ESPN results:</h2>");

		$.each(info.headlines, function(index, story){
			var sportsStory = "<a href='" + story.links.web.href +"'><h2 class='h2'>" + story.headline + "</h2></a><p>" + story.description + "</p>";
			console.log(sportsStory);
			$('#espnOutput').append(sportsStory);
		});
	};
});
















