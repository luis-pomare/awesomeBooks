import domObject from "./modules/user-interface.js";
// Create array to get input books (from input fields)
let bookCollection = [];
let index = 0;

// If there is something in local storage, it is taken by the main array
if (JSON.parse(localStorage.getItem("bookArray")) !== null) {
  bookCollection = JSON.parse(localStorage.getItem("bookArray"));
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
    domObject.bookInput.value
  );
  localStorage.setItem("bookArray", JSON.stringify(bookCollection));
  index += 1;
}

// Refreshes the page with all the data in the array
function renderCollection() {
  domObject.booksContainer.innerHTML = "";
  for (let i = 0; i < index; i += 1) {
    const currentElement = document.createElement("div");
    let background = "";
    if (i % 2 === 0) {
      background = "dark";
    } else {
      background = "";
    }
    currentElement.innerHTML = `
      <div class="book ${background}">
      <p>"${bookCollection[i].book}" by ${bookCollection[i].author}</p>
      <button id="${i}" onclick="removeBook(${i})">Remove</button>
      </div>
    `;
    domObject.booksContainer.appendChild(currentElement);
  }
}

function removeBook(position) {
  bookCollection = bookCollection.filter(
    (item) => bookCollection.indexOf(item) !== position
  );
  index -= 1;
  localStorage.setItem("bookArray", JSON.stringify(bookCollection));
  renderCollection();
}

function clearInputs() {
  domObject.bookInput.value = "";
  domObject.authorInput.value = "";
}

// Updates the interface with storeged books
renderCollection();

// Main add function
domObject.addButton.addEventListener("click", () => {
  if (domObject.bookInput.value !== "" && authorInput.value !== "") {
    newBook();
    renderCollection();
    clearInputs();
  }
});

div.addEventListener("click", () => {
  removeBook(0);
});

setInterval(() => {
  domObject.date.innerHTML = Date();
}, 1000);

domObject.firstItem.addEventListener("click", () => {
  domObject.mainContainer.classList.add("books");
  domObject.mainContainer.classList.remove("noVisible");
  domObject.addContainer.classList.add("noVisible");
  domObject.contactContainer.classList.add("noVisible");
  domObject.firstItem.classList.add("selected");
  domObject.secondItem.classList.remove("selected");
  domObject.thirdItem.classList.remove("selected");
});

domObject.secondItem.addEventListener("click", () => {
  domObject.addContainer.classList.add("flexColumn");
  domObject.addContainer.classList.remove("noVisible");
  domObject.mainContainer.classList.add("noVisible");
  domObject.contactContainer.classList.add("noVisible");
  domObject.firstItem.classList.remove("selected");
  domObject.secondItem.classList.add("selected");
  domObject.thirdItem.classList.remove("selected");
});

domObject.thirdItem.addEventListener("click", () => {
  domObject.contactContainer.classList.add("flexColumn");
  domObject.contactContainer.classList.remove("noVisible");
  domObject.addContainer.classList.add("noVisible");
  domObject.mainContainer.classList.add("noVisible");
  domObject.firstItem.classList.remove("selected");
  domObject.secondItem.classList.remove("selected");
  domObject.thirdItem.classList.add("selected");
});
