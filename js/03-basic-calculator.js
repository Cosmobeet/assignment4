// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";

//Declaring Variables
let firstInput;
let operationInput;
let secondInput;

//Collecting Inputs
do {
  // COLLECT FIRST NUMBER FROM USER
  firstInput = parseInt(prompt("Enter a number (1)"));
  // COLLECT SECOND NUMBER FROM USER
  secondInput = parseInt(prompt("Enter a number (2)"));
  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
  operationInput = prompt("Enter a calculator operation ( + , - , * , / )");
  if (operationInput !== "+" && "-" && "*" && "/") {
    alert("Invalid calculator operation");
  }
} while (operationInput !== "+" && "-" && "*" && "/");

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

switch (operationInput) {
  case "+":
    alert(calc.add(firstInput, secondInput));
    break;
  case "-":
    alert(calc.sub(firstInput, secondInput));
    break;
  case "*":
    alert(calc.mult(firstInput, secondInput));
    break;
  case "/":
    alert(calc.div(firstInput, secondInput));
    break;
}
