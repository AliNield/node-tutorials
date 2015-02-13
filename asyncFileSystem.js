var fs = require('fs');
var pathToFile = process.argv[2];
var fileBuffer = fs.readFile(pathToFile, function callback(err, data) {
	console.log(data.toString().split('\n').length - 1);
});