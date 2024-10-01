
// EXERCICE 4 FAIT AVEC L'AIDE DU PROGRAMME A NE PAS TOUCHER, PLUS LONG QUE LA SOLUTION FROM SCRATCH

var a = 2;
var b = 3;
var action = "sub";

function addition() { return a + b; }
function subtraction() { return a - b; }

function calculator() {
  if (action === "add") {
    return addition();
  } else if (action === "sub") {
    return subtraction();
  } else {
    return "opération incorrecte.";
  }
}

// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
    typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action); 
} else {
	console.error("Missing/bad variables or calculator function");
}

