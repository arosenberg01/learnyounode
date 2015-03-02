var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extType, callback) {

 fs.readdir(dirName, function(err, files) { 
    if (err) {
      return callback(err);
    }
    var matchesExt = function(file) {
      var ext = path.extname(file).slice(1).toLowerCase();
      if (ext === extType) {
        return true;
      }
    };

    return callback(null, files.filter(matchesExt));
  });
};


