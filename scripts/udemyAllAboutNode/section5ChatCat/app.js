var express = require('express'),
  path = require('path'),
  app = express();

//__________
//Tells Express where to find View files, sets a key/value pair, 'views' is the key, and the path is the value where to look, __dirname (current directory) + views (folder of html5);
app.set('views', path.join(__dirname, 'views'));

//loads Hogan temnplate engine. Tells Express engine to render HTML using that module.
app.engine('html', require('hogan-express'));
//sets views to render in HTML
app.set('view engine', 'html');
//telss Express where to look for static files. Make sure all your folders inside Public are not referenced again to public.
app.use(express.static(path.join(__dirname, 'public')));

//_______

/* THIS WAS MOVED TO A FOLDER FOR ROUTES
//sets a route and passes a callback, next ensures that looks for more routes.
app.route('/').get(function (request, response, next) {
  //tells Express what to render, the object passes variable to the template engine.
  response.render('index', {
    title: 'Welcome to chat'
  });
});
*/
require('./routes/routes.js')(express, app);

//sets the litening port.
app.listen(3000, function () {
  console.log('chat running on port 3000');
});
