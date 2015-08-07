var url = require('url')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// app.use(express.urlencoded());
app.use(bodyParser());

app.get('/', function (req, res) {
	// res.send({				//You can pass an obj and Express will asumme is a JSON file.
	// 	Hello: 'World'
	// });
	res.send('Hello World');  //
})

app.post('/doStuff', function (req, res) {
	var param = req.body;
	console.log(req.body);
	res.status(201).send({ 
		name: 'Jean',
		data: param
	});
});

app.listen(3000, function () {
	console.log('listening to port 3000');
});