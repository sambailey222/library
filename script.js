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
    card.classList.add("card");

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("trash");
    deleteBtn.src = "delete-icon.png";
    card.appendChild(deleteBtn);

    const cover = document.createElement("img");
    cover.classList.add("cover");
    // sort out the logic for book cover default etc later
    cover.src = "https://images-na.ssl-images-amazon.com/images/I/51uYlDqoIyL._SX326_BO1,204,203,200_.jpg";
    card.appendChild(cover);

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("bookTitle");
    bookTitle.innerHTML = "Title";
    card.appendChild(bookTitle);

    const author = document.createElement("h4");
    author.innerHTML = "Author";
    card.appendChild(author);

    const pages = document.createElement("h4");
    pages.innerHTML = "Pages";
    card.appendChild(pages);

    const readOrNot = document.createElement("h4");
    readOrNot.classList.add("readText");
    readOrNot.innerHTML = "Read";
    card.appendChild(readOrNot);

    const readIcon = document.createElement("img");
    readIcon.classList.add("readCheck");
    readIcon.src = "tick-icon.png";
    card.appendChild(readIcon);
    
    // add all of the above to library div
    library.appendChild(card);
}

createCard();

