import domObject from './modules/domReading.js';
import createListeners from './modules/switchPages.js';
import dateDisplay from './modules/currentDate.js';

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
  bookCollection[index] = new Entry(
    domObject.authorInput.value,
    domObject.bookInput.value,
  );
  localStorage.setItem('bookArray', JSON.stringify(bookCollection));
  index += 1;
}

const removeBook = function (position) {
  bookCollection = bookCollection.filter(
    (item) => bookCollection.indexOf(item) !== position,
  );
  index -= 1;
  localStorage.setItem('bookArray', JSON.stringify(bookCollection));
};

function removeBookCall(i) {
  removeBook(i);
}

// Refreshes the page with all the data in the array
function renderCollection() {
  domObject.booksContainer.innerHTML = '';
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
      <button id="${i}">Remove</button>
      </div>
    `;
    domObject.booksContainer.appendChild(currentElement);
    document.getElementById(i).addEventListener('click', () => {
      removeBookCall(i);
    });
  }
}

setInterval(() => {
  renderCollection();
}, 700);

function clearInputs() {
  domObject.bookInput.value = '';
  domObject.authorInput.value = '';
}

// Updates the interface with storeged books
renderCollection();

// Main add function
domObject.addButton.addEventListener('click', () => {
  if (domObject.bookInput.value !== '' && domObject.authorInput.value !== '') {
    newBook();
    renderCollection();
    clearInputs();
  }
});

dateDisplay();
createListeners();
