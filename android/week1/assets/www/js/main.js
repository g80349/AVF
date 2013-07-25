//David Whimple
//AVF 1307
//Project 3
//Javascript


$('document').ready(function(){

	$('#instagramLink').on('click', function(){
		$('#output').empty();

		document.addEventListener("deviceready", onDeviceReady, false);

		    function onDeviceReady() {
		        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError,{ enableHighAccuracy:true});
		    }

		    function onGeoSuccess(position) {
				var latitude  = position.coords.latitude;
				var longitude = position.coords.longitude;

				var url = "https://api.instagram.com/v1/media/search?lat=" + latitude + "&lng=" + longitude + "&client_id=7c2149de6f6a4ee0a7c76cacf1d87e0b&callback=?";
				$.getJSON(url, geoOutput);
		    }

		    function onGeoError(error) {
		    	if (error.code == 3){
			        alert('code: '    + error.code    + '\n' +
			              'message: ' + error.message + '\n' +
			              'Please turn on your GPS.');
			              parent.history.back();
			    }
		    }
	});

	var geoOutput = function(info){
		$('#instagramMessage').html("<h2>Instagram results:</h2>");

		$.each(info.data, function(index, photo){
			var pic = "<div class='images'><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id + "'/><h4 class='subtext'>" + photo.user.full_name + ",<em>(" + photo.user.username + ")</h4></div>";
			$('#instagramOutput').append(pic);
		});
	};
});

$('document').ready(function(){

	$('#nfl').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/football/nfl/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#ncaaFootball').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/football/college-football/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#mlb').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/baseball/mlb/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#nba').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/nba/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#ncaaBasketball').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/mens-college-basketball/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#wnba').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/wnba/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#wNcaaBasketball').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/basketball/womens-college-basketball/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#boxing').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/boxing/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#nhl').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/hockey/nhl/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#golf').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/golf/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#tennis').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/tennis/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#soccer').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/soccer/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#mma').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/mma/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	$('#nascar').on('click', function(){
		$('#espnOutput').empty();
			var url = "http://api.espn.com/v1/sports/racing/nascar/news/headlines?apikey=sf3c427x778ndub5e8v5tgnm";
			$.getJSON(url, espnOutput);
			console.log(url);
	});

	var espnOutput = function(info){

		$('#espnMessage').html("<h2>ESPN results:</h2>");

		$.each(info.headlines, function(index, story){
			var sportsStory = "<div class='article'><a href='' id='sport" + index + "'><h2 class='h2'>" + story.headline + "</h2></a><p>" + story.description + "</p></div>";

			$('#espnOutput').append(sportsStory);

			var browser = $('#sport'+ index).on('click', function(){
		         var ref = window.open(story.links.web.href, '_blank', 'location=yes');
		         ref.addEventListener('loadstart');
		         ref.addEventListener('loadstop');
		         ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		         ref.addEventListener('exit');
			});

		});
	};
});

$('#compassLink').on('click', function(){

var watchID = null;

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
    }
    $('#start').on('click', function(){
	        var options = { frequency: 3000 };
	        watchID = navigator.compass.watchHeading(onCompSuccess, onCompError, options);
	    });
    $('#stop').on('click', function(){
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    });

    function onCompSuccess(heading) {
        $('#direction').html('Heading: ' + heading.magneticHeading);
    }
    function onCompError() {
        alert('compError!');
    }
});
$('#connection').on('click', function checkConnection() {
        var checkConnections = navigator.network.connection.type;

        var connType = {};
	        connType[Connection.UNKNOWN]  = 'Unknown connection';
	        connType[Connection.ETHERNET] = 'Ethernet connection';
	        connType[Connection.WIFI]     = 'WiFi connection';
	        connType[Connection.CELL_2G]  = 'Cell 2G connection';
	        connType[Connection.CELL_3G]  = 'Cell 3G connection';
	        connType[Connection.CELL_4G]  = 'Cell 4G connection';
	        connType[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + connType[checkConnections]);
});
$('#accelerometer').on('click', function(){

	document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
	        navigator.accelerometer.getCurrentAcceleration(onAccelSuccess, onAccelError);
	    }

	    function onAccelSuccess(accel) {
	        alert('Acceleration X: ' + accel.x + '\n' +
	              'Acceleration Y: ' + accel.y + '\n' +
	              'Acceleration Z: ' + accel.z + '\n' +
	              'Timestamp: '      + accel.timestamp + '\n');
	    }

	    function onAccelError() {
	        alert('accelError!');
	    }
});

$('#camera').on('click', function(){
	navigator.camera.getPicture(onCameraSuccess, onCameraFail, { quality: 50,
	    destinationType: Camera.DestinationType.DATA_URL, saveToPhotoAlbum: true
	});

	function onCameraSuccess(imageInfo) {
	    var pic = document.getElementById('myImage');
	    pic.src = "data:image/jpeg;base64," + imageInfo;
	}

	function onCameraFail(msg) {
	    alert('Failed because: ' + msg);
	}
});







