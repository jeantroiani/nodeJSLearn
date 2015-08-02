var http = require('http');
var fs   = require('fs');
var path = require('path');
var host = '127.0.0.1';
var port = '8000';

var mimes = {
  '.html' : 'text/html'
};

var server = http.createServer(function (request, response) {
  var filePath = (request.url === '/') ? ('./index.html') : ('.' + request.url);
  var contentType = mimes[path.extname(filePath)];
  fs.exists(filePath, function (file_exist) {
    if (file_exist) {
      response.writeHead(200, {'Content-Type': contentType});
      var streamFile = fs.createReadStream(filePath).pipe(response);
    
      streamFile.on('error', function () {
        response.writeHead(500);
      });
    } else {
      response.writeHead(404);
      response.end('<h1>Sorry file not found.</h1>');
    }
  });
}).listen(port, host, function () {
  console.log('Server running on http://' + host + port);
});


