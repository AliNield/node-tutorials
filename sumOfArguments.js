var sumOfArguments = 0;
for (var i = 2; i < process.argv.length; i++) {
	sumOfArguments += +process.argv[i];
};

console.log(sumOfArguments);