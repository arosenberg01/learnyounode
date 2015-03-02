var fs = require('fs');
var path = require('path');
var mymodule = require('./module.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
	if (err) {
		throw err;
	} else {
      for (var i = 0; i < list.length; i++) {
      	console.log(list[i]);
      }
	}
	
});

