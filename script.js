let myLibrary = [
    {title: "Laird of the Rungs", author: "Token", pages: "111", read: "true"}
];

function Book(title, author, cover, pages, read) {
    this.title = title;
    this.author = author;
    this.cover = cover;
    this.pages = pages;
    this.read = read;
}

// Book.prototype.printTitle = function() {
//     console.log(this.title)
// }
// console.log(Book.prototype)

// function Movie(title) {
//     this.title = title;
// }

// Movie.prototype = Object.create(Book.prototype);
// console.log(Movie.prototype)

// const LOTR = new Book("LOTR", "JRR", 300, true);
// LOTR.printTitle();

// const fellowship = new Movie("fellowship");
// fellowship.printTitle();



function addBookToLibrary() {
// take user's input as new book object
console.log("sweet child");
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let cover = document.getElementById("cover").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").value;
// create object from responses:
let newBook = new Book(title, author, cover, pages, read);
console.log(newBook);
// add new book object to array
myLibrary.push(newBook);
console.log(myLibrary);
createCard(newBook);
modal.style.display = "none";
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => addBookToLibrary);

// function addBookToLibrary() {
//     // take user's input as new book object
//     let title = prompt("Name of book:", "e.g. LOTR");
//     let author = prompt("Name of author:", "E.g. Tokenz");
//     let cover = prompt("Add cover art link")
//     let pages = prompt("Pages read:", "56");
//     let read = prompt("Finished the book?", "true or false");
//     // create object from responses:
//     let newBook = new Book(title, author, cover, pages, read);
//     console.log(newBook);
//     // add new book object to array
//     myLibrary.push(newBook);
//     console.log(myLibrary);
//     }

// addBookToLibrary();

const library = document.getElementById("library");
function createCard(book) {
    const card = document.createElement('div');
    card.classList.add("card");

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("trash");
    deleteBtn.src = "delete-icon.png";
    card.appendChild(deleteBtn);

    const cover = document.createElement("img");
    cover.classList.add("cover");
    // sort out the logic for book cover default etc later
    if (!(book.cover)) {
    cover.src = "https://images-na.ssl-images-amazon.com/images/I/51uYlDqoIyL._SX326_BO1,204,203,200_.jpg";
    } else {
        cover.src = book.cover;
    }
    card.appendChild(cover);

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("bookTitle");
    bookTitle.innerHTML = book.title;
    card.appendChild(bookTitle);

    const author = document.createElement("h4");
    author.innerHTML = book.author;
    card.appendChild(author);

    const pages = document.createElement("h4");
    pages.innerHTML = book.pages;
    card.appendChild(pages);

    const readOrNot = document.createElement("h4");
    readOrNot.classList.add("readText");
    readOrNot.innerHTML = book.read;
    card.appendChild(readOrNot);

    const readIcon = document.createElement("img");
    readIcon.classList.add("readCheck");
    readIcon.src = "tick-icon.png";
    card.appendChild(readIcon);
    
    // add all of the above to library div
    library.appendChild(card);
}

// createCard();

function displayBooks(arr) {
    for (var i = 0; i < arr.length; i++) {
        createCard(arr[i]);
    }
}
displayBooks(myLibrary);

// Get the modal
var modal = document.getElementById("bookForm");

// Get the button that opens the modal
var btn = document.getElementById("newBook");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
