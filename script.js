var rootElement = document.getElementById('root');

function Book(title, author, pageCount) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;

  this.createBook = function(parentElement) {
    var bookElement = document.createElement('div');
    bookElement.classList.add('book');

    var titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = this.title;

    var authorElement = document.createElement('div');
    authorElement.classList.add('author');
    authorElement.textContent = this.author;

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);

    parentElement.appendChild(bookElement);
  };
};

var book1 = new Book('first book', 'Noah', 1000);
console.log(book1);

var book2 = {
  title: 'second book',
  author: 'Ben',
  pageCount: 500,
};

function createBook(book, parentElement) {
  var bookElement = document.createElement('div');
  bookElement.classList.add('book');

  var titleElement = document.createElement('div');
  titleElement.classList.add('title');
  titleElement.textContent = book.title;

  var authorElement = document.createElement('div');
  authorElement.classList.add('author');
  authorElement.textContent = book.author;

  bookElement.appendChild(titleElement);
  bookElement.appendChild(authorElement);

  parentElement.appendChild(bookElement);
};

book1.createBook(rootElement);
createBook(book2, rootElement);