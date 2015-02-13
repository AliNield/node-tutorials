var bl = require('bl');
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var Map = {};


function getData(url) {
	http.get(url, function (response) {
		response.pipe(bl(function(err, data) {
		Map[url] = data.toString();

		if(Object.keys(Map).length === 3 ) {
			console.log(Map.get(url1));
			console.log(Map.get(url2));
			console.log(Map.get(url3));
		}
	}))})};

getData(url1);
getData(url2);
getData(url3);

