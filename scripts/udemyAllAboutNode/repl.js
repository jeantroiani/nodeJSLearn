/*
 node
  .save 																				//to save a file form the session.
	fs.readFile('name', function(error, data){		//reads files
		console.log(data);
	});
.load      																			//load files
*/

var multiplier = function(num){console.log(num *num)}; //undefined
.save 'testFile.js'	//Session saved to:'testFile.js'
.load 'testFile.js'
multiplier(2); 			//4