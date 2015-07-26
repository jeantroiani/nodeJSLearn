var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200);
	response.write('Hello Everyone');
	setTimeout(function(){
		response.write('\nHello back');
		response.end();
	}, 5000);
}).listen(8080);