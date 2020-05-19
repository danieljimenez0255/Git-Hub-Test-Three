let resultDisplay = document.getElementById("displayResult");
let numberOne = prompt("Enter your first Number: ");
let numberTwo = prompt("EnterSecondNumber: ");
function subNums(a, b){
   let subNums = a - b;
   return subNums;
}

resultDisplay.innerHTML = "The value of the numbers subtracted is: " + subNums(parseInt(numberOne),parseInt(numberTwo));
