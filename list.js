var fs = require('fs');
var path = require('path');


var fileType = process.argv[3].toLowerCase();

fs.readdir(process.argv[2], function(err, files) {	

	if (err) {
		throw err;
	}

  var matchesExt = function(file) {
  	var ext = path.extname(file).slice(1).toLowerCase();
  	if (ext === fileType) {
  		return true;
  	}
  };

	var results = files.filter(matchesExt);
  
  // for (var i = 0; i < files.length; i++) {
  // 	var fileExt = path.extname(files[i]).slice(1);
  // 	if (path.extname(files[i]).toLowerCase() === fileType.toLowerCase()) {
  // 		console.log(files[i]);
  // 	}
  // } 

  // console.log(results);
  // for (var i = 0; i < results.length; i++) {
  // 	console.log(results[i]);
  // }

  results.forEach(function(item) {
  	console.log(item);
  })
});