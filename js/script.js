//Add function

function my_add(num1, num2) {
  return num1 + num2;
}

my_add(2, 5);

//Multiply function

function my_multiply(num1, num2) {
  return num1 * num2;
}

my_multiply(9, 9);

//Divide function

function my_divide(num1, num2) {
  return num1/num2;
}

my_divide(10, 2);

//Subtract function

function my_subtract(num1, num2) {
  return num1 - num2;
}

my_subtract(9, 3);

//Buttons for Numbers

firstnumber = "0";
secondnumber = "0";
operation = "0";

var keys = document.querySelectorAll(".num");
var operators = ['+','-','x','/'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.querySelector('#display');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
  }
}

function zeroFunction() {
  console.log("0");
}
function oneFunction() {
  console.log("1");
}

function twoFunction() {
  console.log("2");
}

function threeFunction() {
  console.log("3");
}

function fourFunction() {
  console.log("4");
}

function fiveFunction() {
  console.log("5");
}

function sixFunction() {
  console.log("6");
}

function sevenFunction() {
  console.log("7");
}

function eightFunction() {
  console.log("8");
}

function nineFunction() {
  console.log("9");
}
