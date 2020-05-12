const data = [
  {
    folder: true,
    title: 'Pictures',
    children: [
      {
        title: 'logo.png'
      },
      {
        folder: true,
        title: 'Vacations',
        children: [
          {
            title: 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Desktop',
    children: [
      {
        folder: true,
        title: 'screenshots',
        children: null
      }
    ]
  },
  {
    folder: true,
    title: 'Downloads',
    children: [
      {
        folder: true,
        title: 'JS',
        children: null
      },
      {
        title: 'nvm-setup.exe'
      },
      {
        title: 'node.exe'
      }
    ]
  },
  {
    title: 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

// TODO: your code goes here
function createTree(container, data) {
  container.append(createTreeDom(data));
}
function createTreeDom(data) {
  if (!data) {
    return;
  }
  let ul = document.createElement('ul');
  data.forEach((el) => {
    let li = document.createElement('li');
    li.innerHTML = el.title;
    if (el.folder) {
      li.classList.add('folder');
    }
    let childrenUl = createTreeDom(el.children);
    if (childrenUl) {
      li.append(childrenUl);
    }
    ul.append(li);
  });
  return ul;
}
createTree(rootNode, data);
let folders = document.querySelectorAll('.folder');
for (let i = 0; i < folders.length; i++) {
  console.log(i);
  if (folders[i].children[0] === undefined) {
    continue;
  }
  folders[i].children[0].style.display = 'none';
  folders[i].addEventListener('click', () => {
    folders[i].children[0].style.display === 'none'
      ? folders[i].children[0].style.display = ''
      : folders[i].children[0].style.display = 'none';
  });
}
