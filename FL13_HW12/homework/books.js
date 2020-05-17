let books = [
  {
    id: 1,
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/71-s4xaRwdL.jpg'
  },
  {
    id: 2,
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/commons/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg'
  },
  {
    id: 3,
    name: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/81%2B%2B6NdCdhL.jpg'
  }
];
localStorage.setItem('Books', JSON.stringify(books));
