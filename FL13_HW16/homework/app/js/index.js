const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

// Your code goes here
function getUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/users', true);
  xhr.send();
  xhr.onload = () => {
    console.log(xhr.response);
  };
}
let form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.form_button').disabled = true;
  let xhr = new XMLHttpRequest();
  let name = document.getElementById('name_input').value;
  let username = document.getElementById('username_input').value;
  let data = `name=${name}&username=${username}`;
  xhr.open('POST', 'http://localhost:3000/users', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    document.querySelector('.form_button').disabled = false;
    getUsers();
  };
  xhr.send(data);
});
getUsers();
