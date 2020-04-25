// Your code goes here
let userInput = prompt('Enter word');
if (userInput === '' || /\S/g.exec(userInput) === null) {
  alert('Invalid value');
} else {
  let divider = 2;
  let index = userInput.length / divider;
  if (userInput.length % divider === 0) {
    alert(userInput.substring(index - 1, index + 1));
  } else {
    alert(userInput.substring(index, index + 1));
  }
}
