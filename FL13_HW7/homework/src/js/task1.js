// Your code goes here
let login = prompt('Enter login');
let minLength = 4;
if (login === null || login === '') {
  alert('Canceled');
} else if (login.length < minLength) {
  alert('I don’t know any users having name length less than 4 symbols');
} else if (login !== 'Admin' && login !== 'User') {
  alert('I don’t know you');
} else {
  let password = prompt('Enter password');
  let timeNum = 20;
  if (password === null || password === '') {
    alert('Canceled');
  }
  if (
    login === 'User' && password === 'UserPass' ||
    login === 'Admin' && password === 'RootPass'
  ) {
    if (new Date().getHours() < timeNum) {
      alert(`Good day, dear ${login}!`);
    }
    if (new Date().getHours() >= timeNum) {
      alert(`Good evening, dear ${login}!`);
    }
  } else {
    alert('Wrong password');
  }
}
