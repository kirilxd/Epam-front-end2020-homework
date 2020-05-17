const root = document.getElementById('root');
let booksUl = document.createElement('ul');
let booksArr = JSON.parse(localStorage.getItem('Books'));
console.log(booksArr);
booksArr.map((element) => {
  let li = document.createElement('li');
  li.innerHTML = element.name;
  booksUl.append(li);
  return li;
});
root.append(booksUl);
