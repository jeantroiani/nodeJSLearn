var express = require('express'),
  app = express();

//sets a route and passes a callback, next ensures that looks for more routes.
app.route('/').get(function (request, response, next) {
  response.send('<h1>Hello World</h1>');
});

//sets the litening port.
app.listen(3000, function () {
  console.log('chat running on port 3000');
});
