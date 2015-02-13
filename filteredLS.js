var fs = require('fs');
var path = require('path');

module.exports = function filter (pathToFile, extensionFilter, callback) {
	fs.readdir(pathToFile, function read(error, fileNames) {
		if(error) {
			return callback(error);
		}

		var answer = [];
		for (var i = 0; i < fileNames.length; i++) {
			if(path.extname(fileNames[i]) === "." + extensionFilter) {
				answer.push(fileNames[i]);
			}
		}

		callback(null, answer);
	}
	)

};

