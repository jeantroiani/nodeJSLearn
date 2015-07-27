var welcomeMsg = function () {
  console.log('Hello world');
};

welcomeMsg();

var start = function (callback) {   //this code returns and moves on no matter the
  callback();                       //state of this callback.
};

start(welcomeMsg);

//__________Synchronous Code_______________

var rollDice = function () {
  return Math.floor(Math.random() * 10);
};

var firstFunction = function (callback) {
  while (callback() !== 1) {
    console.log('keep rolling');
  }
  return;
};

firstFunction(rollDice);
console.log('the end');

//__________Asynchronous Code_______________

var rollDice = function () {
  return Math.floor(Math.random() * 10);
};

var secondFunction =  function (number) {
  console.log('this is my lucky number' + number);
}

var firstFunction = function (callback) {
  var timer = setInterval(function () {
    var luckyNumber = rollDice();
    if (luckyNumber !== 1) {
      secondFunction(luckyNumber);
    } else {
      console.log('job done');
      clearInterval(timer);
    }
  }, 100);
  console.log('start rolling');
};

firstFunction(secondFunction);
console.log('out of function');



