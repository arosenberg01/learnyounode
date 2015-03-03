var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var array = [url1, url2, url3];

var getData = function() {
  http.get(array.shift(), function(res) {
	  var data = '';
		res.setEncoding('utf8');

		res.on('data', function(chunk) {
	    data += chunk;
	  });
	  res.on('end', function() {
	    console.log(data);
      getData();
	  });
  });
}

getData();

