// Dom elements object
class DomObject {
  // Read elements from document
  bookInput = document.getElementById('bookInput');

  authorInput = document.getElementById('authorInput');

  addButton = document.getElementById('addButton');

  booksContainer = document.getElementById('booksContainer');

  date = document.getElementById('date');

  addContainer = document.getElementById('form');

  contactContainer = document.getElementById('contactContainer');

  firstItem = document.getElementById('firstItem');

  secondItem = document.getElementById('secondItem');

  thirdItem = document.getElementById('thirdItem');

  mainContainer = document.getElementById('mainContainer');
}
const domObject = new DomObject();
export default domObject;
