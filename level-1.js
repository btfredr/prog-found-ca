// Programming Foundations Course Assignment

// Level 1.1
var string = "Hello";

// Level 1.2
var person = {
  nationality: "Norwegian",
  age: 19
};

// Level 1.3
var outOfStock = true;

if(outOfStock === true) {
  console.log("Out of stock")
}
else {
  console.log("In stock")
};

// Level 1.4
var numbers =["1", "2", "3", "4", "5"];

for(var index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
};

// level 1.5
function log15to25() {
  for(var counter = 15; counter <= 25; counter++) {
    console.log(counter);
  }
};

log15to25();

// level 1.6
function onlyLogIfEqualTo20() {
  for(var counter2 = 15; counter2 <= 25; counter2++)
  if(counter2 === 20) {
    console.log(counter2);
  }
};
onlyLogIfEqualTo20();

// Level 1.7
var car = {
  brand: "Opel",
  price: 35000,
  inOrder: true
};
var house = {
  location: "Bergen",
  price: 5000000,
  forSale: true
};

var arrays = [car, house];
for (index = 0; index < arrays.length; index++) {
  var loopArrays = arrays[index];
  var loopArraysValues = [loopArrays.price] + " " + [loopArrays.inOrder] + " " + [loopArrays.forSale];

  console.log(loopArraysValues);
};

// level 1.8
function whatIDontLike (word2) {
  var iDontLike = "I don't like "+ word2;
  console.log(iDontLike);
}
var string1 = "giraffes."

whatIDontLike(string1);

// Level 1.9
var timeTravelled = 100;
var timeRemaining = 45;

function travel(time, remaining) {
  // (playerHealth - enemyDamage);
  (timeTravelled - timeRemaining)
  return time - remaining;
}

console.log(timeTravelled - timeRemaining);
timeTravelled = travel(timeTravelled, timeRemaining);

// Level 1.10
var emptyArray = {

}

function arrayFunction (word2) {
  var hello = "Hello "+ word2;
  console.log(hello);
  emptyArray.push
}
var string1 = "world."

arrayFunction(string1);
