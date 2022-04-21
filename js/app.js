// Read elements from document
const bookInput = document.getElementById('bookInput');
const authorInput = document.getElementById('authorInput');
const addButton = document.getElementById('addButton');
const booksContainer = document.getElementById('booksContainer');
const div = document.getElementById('div');
const date = document.getElementById('date');
const addContainer = document.getElementById('form');
const contactContainer = document.getElementById('contactContainer');
const firstItem = document.getElementById('firstItem');
const secondItem = document.getElementById('secondItem');
const thirdItem = document.getElementById('thirdItem');
const mainContainer = document.getElementById('mainContainer');

// Create array to get input books (from input fields)
let bookCollection = [];
let index = 0;

// If there is something in local storage, it is taken by the main array
if (JSON.parse(localStorage.getItem('bookArray')) !== null) {
  bookCollection = JSON.parse(localStorage.getItem('bookArray'));
  index = bookCollection.length;
}

// Update index including local storage

// Class that creates each entry (book object)
class Entry {
  constructor(incomingAuthor, incomingBook) {
    this.book = incomingBook;
    this.author = incomingAuthor;
  }
}

// Creates one new object and add it to the main array
function newBook() {
  bookCollection[index] = new Entry(authorInput.value, bookInput.value);
  localStorage.setItem('bookArray', JSON.stringify(bookCollection));
  index += 1;
}

// Refreshes the page with all the data in the array
function renderCollection() {
  booksContainer.innerHTML = '';
  for (let i = 0; i < index; i += 1) {
    const currentElement = document.createElement('div');
    let background = '';
    if (i % 2 === 0) {
      background = 'dark';
    } else {
      background = '';
    }
    currentElement.innerHTML = `
      <div class="book ${background}">
      <p>"${bookCollection[i].book}" by ${bookCollection[i].author}</p>
      <button id="${i}" onclick="removeBook(${i})">Remove</button>
      </div>
    `;
    booksContainer.appendChild(currentElement);
  }
}

function removeBook(position) {
  bookCollection = bookCollection.filter(
    (item) => bookCollection.indexOf(item) !== position,
  );
  index -= 1;
  localStorage.setItem('bookArray', JSON.stringify(bookCollection));
  renderCollection();
}

function clearInputs() {
  bookInput.value = '';
  authorInput.value = '';
}

// Updates the interface with storeged books
renderCollection();

// Main add function
addButton.addEventListener('click', () => {
  if (bookInput.value !== '' && authorInput.value !== '') {
    newBook();
    renderCollection();
    clearInputs();
  }
});

div.addEventListener('click', () => {
  removeBook(0);
});

setInterval(() => {
  date.innerHTML = Date();
}, 1000);

firstItem.addEventListener('click', () => {
  mainContainer.classList.add('books');
  mainContainer.classList.remove('noVisible');
  addContainer.classList.add('noVisible');
  contactContainer.classList.add('noVisible');
  firstItem.classList.add('selected');
  secondItem.classList.remove('selected');
  thirdItem.classList.remove('selected');
});

secondItem.addEventListener('click', () => {
  addContainer.classList.add('flexColumn');
  addContainer.classList.remove('noVisible');
  mainContainer.classList.add('noVisible');
  contactContainer.classList.add('noVisible');
  firstItem.classList.remove('selected');
  secondItem.classList.add('selected');
  thirdItem.classList.remove('selected');
});

thirdItem.addEventListener('click', () => {
  contactContainer.classList.add('flexColumn');
  contactContainer.classList.remove('noVisible');
  addContainer.classList.add('noVisible');
  mainContainer.classList.add('noVisible');
  firstItem.classList.remove('selected');
  secondItem.classList.remove('selected');
  thirdItem.classList.add('selected');
});
