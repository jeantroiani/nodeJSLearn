var url = require('url'),
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser');



//you can create your own middleware
function authUser(request, response, next) {
  var user = {
    name: 'jean',
    admin: true
  };
  request.user = user;
  next();
}
function toUppercase(request, response, next) {
  console.log(request.body);
  request.body.test = request.body.test.toUpperCase();
  next();
}

// .use is to parse incoming calls, is like a stack of functions/filters
app.use(bodyParser());
app.use(authUser);
app.use(toUppercase);

app.get('/', function (req, res) {
  // res.send({       //You can pass an obj and Express will asumme is a JSON file.
  //  Hello: 'World'
  // });
  res.send('Hello World');  //
});

//a middleware that only applies to this call.
app.post('/middleware',toUppercase , function (req, res) {
  var param = req.body;
  res.send(param);  //
});

app.post('/doStuff', function (req, res) {
  var param = req.body;
  res.status(201).send({
    name: 'Jean',
    data: param,
    isAdmin: req.user.admin
  });
});

app.listen(3000, function () {
  console.log('listening to port 3000');
});