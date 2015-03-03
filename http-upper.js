var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
  var toUpper = map(function(chunk) {
    return chunk.toString().toUpperCase();
  });

  req.pipe(toUpper).pipe(res);
});




server.listen(process.argv[2]);