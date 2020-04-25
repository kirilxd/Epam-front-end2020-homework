// Your code goes here
let checkNumber = Number(prompt('Enter check number'));
let tipPercentage = Number(prompt('Enter tip percentage'));
let percentage = 100;
if (
  isNaN(checkNumber) ||
  isNaN(tipPercentage) ||
  checkNumber < 0 ||
  tipPercentage < 0 ||
  tipPercentage > percentage
) {
  alert('Invalid input data');
} else {
  let afterComma = 2;
  let tipAmount = checkNumber * (tipPercentage / percentage);
  alert(
    `Check number: ${checkNumber.toFixed(
      afterComma
    )}\nTip: ${tipPercentage}\nTip amount: ${tipAmount.toFixed(
      afterComma
    )}\nTotal sum to pay: ${(checkNumber + tipAmount).toFixed(afterComma)}`
  );
}
