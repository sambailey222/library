let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.printTitle = function() {
    console.log(this.title)
}
console.log(Book.prototype)

function Movie(title) {
    this.title = title;
}

Movie.prototype = Object.create(Book.prototype);
console.log(Movie.prototype)

const LOTR = new Book("LOTR", "JRR", 300, true);
LOTR.printTitle();

const fellowship = new Movie("fellowship");
fellowship.printTitle();

function addBookToLibrary() {
// take user's input as new book object
let title = prompt("Name of book:", "e.g. LOTR");
let author = prompt("Name of author:", "E.g. Tokenz");
let pages = prompt("Pages read:", "56");
let read = prompt("Finished the book?", "true or false");
// create object from responses:
let newBook = new Book(title, author, pages, read);
console.log(newBook);
// add new book object to array
myLibrary.push(newBook);
console.log(myLibrary);
}

// addBookToLibrary();

const library = document.getElementById("library");
function createCard() {
    const card = document.createElement('div');
    card.innerHTML = "pep";
    // card.style.display = "block";
    library.appendChild(card);
}

// createCard();

