var http = require('http');
var host = '127.0.0.1';
var port = '8000';


var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello World!</h1>');
}).listen(port, host, function () {
  console.log('Server running on http://' + host + port);
});


