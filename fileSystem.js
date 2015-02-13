var mymodule = require('./filteredLS.js');

var pathToFile = process.argv[2];
var filter = process.argv[3];

function callback(err, data) {
	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
};

mymodule(pathToFile, filter, callback);