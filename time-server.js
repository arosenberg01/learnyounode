var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket) {
  
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  month = "0" + (parseInt(month) + 1);
  var day = "0" + date.getDate();
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var data = "" + year + "-" + month + "-" + day + " " + hours + ":" + minutes;
  socket.end(data);
});

server.listen(port);

