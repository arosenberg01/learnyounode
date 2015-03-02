var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', function(err, data) {
  var arr = data.split('\n');	
	console.log(arr.length-1);
});

