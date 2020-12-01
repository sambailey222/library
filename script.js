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


Book.prototype.toggleReadStatus = function() {
    if (this.read == "Read") {
        this.read = "Unfinished";
    } else {
        this.read = "Read";
    }
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
let title = document.getElementById("title");
let author = document.getElementById("author");
let cover = document.getElementById("cover");
let pages = document.getElementById("pages");
let read = document.querySelector("input[name=read]:checked");

let form = document.getElementById("form")
// let allFieldsValid = true;

// if cover art is not a valid URL
// if pages read is not a number
// if any field except cover art is empty
    // display error messages in placeholder text


// if (title.value == "") 
// {
//     title.placeholder = "Please enter a title";
//     title.classList.add("placeholdRed");
//     allFieldsValid = false;
// }
// if (author.value == "") 
// {
//     author.placeholder = "Please enter an author";
//     author.classList.add("placeholdRed");
//     allFieldsValid = false;
// }
// if (pages.value == "") 
// {
//     pages.placeholder = "Please enter a number";
//     pages.classList.add("placeholdRed");
//     allFieldsValid = false;
// }
// if (allFieldsValid == true) {

// else, update library
// create object from responses:
let newBook = new Book(title.value, author.value, cover.value, pages.value, read.value);
console.log(newBook);
// add new book object to array
myLibrary.push(newBook);
console.log(myLibrary);
createCard(newBook, myLibrary.length - 1);
modal.style.display = "none";
form.reset();
// can add a function here to reset placeholders

}

// const submitBtn = document.getElementById("submit");
// submitBtn.addEventListener("click", () => addBookToLibrary);
function deleteFromLibrary(index) {
    // remove index item from array
    myLibrary.splice(index, 1);
    // remove card from page (re-populate cards)
    // const cardToDelete = document.getElementById(index);
    // cardToDelete.remove();

    const deleteAllCards = document.querySelectorAll(".card")
    console.log(deleteAllCards);
    deleteAllCards.forEach(card => card.remove());
    displayBooks(myLibrary);
}

function changeReadStatus(index) {
    myLibrary[index].toggleReadStatus();
}


const library = document.getElementById("library");

function createCard(book, index) {
    const card = document.createElement('div');
    card.id = index;
    card.classList.add("card");

    const deleteBtn = document.createElement("img");
    deleteBtn.classList.add("trash");
    deleteBtn.src = "delete-icon.png";
    // WRITE THIS FUNCTION NEXT
    deleteBtn.addEventListener("click", () => deleteFromLibrary(index))
    card.appendChild(deleteBtn);
    

    const cover = document.createElement("img");
    cover.classList.add("cover");
    // sort out the logic for book cover default etc later
    if (!(book.cover)) {
    cover.src = "default_book_cover.jpg";
    } else {
        cover.src = book.cover;
    }
    // if cover image throws an error when loading, replace with stock
    cover.onerror = function() {
        cover.src = "default_book_cover.jpg";
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
        createCard(arr[i], i);
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
