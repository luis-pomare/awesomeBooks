export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  toString() {
    return `"${this.title}" by ${this.author}`;
  }
}
