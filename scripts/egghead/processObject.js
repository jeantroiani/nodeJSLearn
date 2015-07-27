/*	
	.global.process				shows process running onthat instance of node
	.global.process.version		shows the version of running on node
	.global.process.versions	shows the versions of dependecies running on node
	process.cwd()				shows the current directory.
	process.stdout.write('hi');	prints to the console like console.log.
*/

process.argv.forEach(function(val, index) {
	console.log(index + ": " + val);
});

// 1: Hello
// 2: World

//call it from the console //node processObject.js Hello World

console.log('Start');
process.nextTick(function () {
	console.log('nextTick callback');
});

console.log('finish');

//Start
//finish
//nextTick callback
