/*
Debugging
	-supervisor(install this utility to help you debug, it opens and node command, avoid shuting the ser ver and running it again for changes).
	-nodemon (same);  npm install -g nodemon
		to run it:    nodemon filename.js
	-node inspector (step process, like debugger)  npm install node-inspector
		node-debug filename.js  
	
	-commonJS
		to export single function, you can attach them in your file with export object, then you can include the file in oyur current file with require(filename);
		e.g
		_file1_
			exports.run = function(currentPos){
			return (currentPos + 10);
			}
			exports.walk = function(currentPos){
			return (currentPos + 2);
			}

		_file2_
		var helpers = require(./_file1_);
		helpers.run(10); //20

		To export a whole module, like a jQuery
			e.g
		_file1_
			function Human(name, age){
				this.name = name;
				this.age = age;
			}

			Human.prototype.talk = function(){
			return ('hello, how are you?');
			}

			module.exports = Human;

		_file2_
		var helpers = require(./_file1_);
		var jean = new Human();
		jean.talk();
*/