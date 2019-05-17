//Looping Over Arrays

var sumNumbers = function (looper){
var addNumbers = 0;
  for(var i= 0;i < looper.length; i++){
    addNumbers = addNumbers + looper[i];
  }
  return addNumbers;
};
  

var indexToString = function(array) {
  var newArray = [];
  for (var i= 0; i < array.length; i++) {
    newArray.push(i + " is " + array[i]);
  }
  return newArray;
};

// Type Coercion

var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " " + age + " year old" + " " + job + "." + " Is he married?" + " " + isMarried);
 
// Variable Mutuation

age = "twenty eight";

console.log("The var age is a" + " " + typeof age + " type " + "= " + age);

var lastName = prompt("What is your last Name?");

console.log(firstName )