//WRITING YOUR OWN MODULES

//Save this file as mathModule.js
module.exports = {
	addFn: function (x, y) {
		return x + y;
	},
	subsFn: function (x, y ) {
		return x - y;
	}
}



//require the file in a different project with:

var mathModule = require('./mathModule');  //to load it

var result = mathModule.addFn(1,4)				 //to use it

//Common modules already included on Node
//http, fs, path, os, cluster;
/*
//You can use NPM as a repository to see other modules create by other users.
//Gets installed inmediately with node
*/
	//First thing you do with NPM is initialize it with
	npm init //package.json
