// Programming Foundations Course Assignment

// Level 2.1
for (i = 15; i < 25; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Level 2.2

function iAmAFunction() {
  var explanation = "I am a function"
  console.log(explanation);
}
var innerFunction = iAmAFunction;

function iAmAFunction2(word2) {
  var explanation2 = "I am a " + word2;
  explanation2();
}
var string1 = "function";
var outerFunction = iAmAFunction;

iAmAFunction2(explanation);

// I wasn't sure how to do this question ^
