//REPL

/*
	global 														shows all available in that module.
	exports.fileName = function() {console.log('hello')};		makes the object/function available on every program that requires this file. 
	var moduleFoo = require('./fileName')						requires the object available.

*/

//file 1  saved as globalFoo.js
	var globalFoo;

	exports.setFoo = function (val) {
		globalFoo = val;
	};

	exports.returnFoo = function (val) {
		return globalFoo;
	}



//file 2

var modfoo = require('./globalFoo');

modFoo.setFoo(22);
modFoo.returnFoo();
foo.setFoo(42);