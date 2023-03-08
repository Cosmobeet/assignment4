//STEP 1
function halfNumber() {
  let input = prompt("Enter a number");
  let half = input / 2;
  console.log("Half of " + input + " is " + half);
}

//STEP 2
function squareNumber() {
  let input = prompt("Enter a number");
  let square = input * input;
  console.log("The result of squaring the number " + input + " is " + square);
}

//STEP 3
function percentOf() {
  let inputFirst = prompt("Enter the first number");
  let inputSecond = prompt("Enter the second number");
  let inputPercent = (inputFirst / inputSecond) * 100;
  console.log(inputFirst + " is " + inputPercent + "% of " + inputSecond);
}

//STEP 4
function findModulus() {
  let inputFirst = prompt("Enter the first number");
  let inputSecond = prompt("Enter the second number");
  let inputModulus;

  if (inputFirst > inputSecond) {
    inputModulus = inputSecond % inputFirst;
  } else inputModulus = inputFirst % inputSecond;

  console.log(
    inputModulus + " is the modulus of " + inputFirst + " and " + inputSecond
  );
}

//STEP 5
