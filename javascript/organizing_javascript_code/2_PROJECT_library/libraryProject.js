function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = this.isRead();
}

Book.prototype.isRead = function () {
    if (this.read === true) {
        return ('already read');
    } else {
        return ('not read yet');
    }
}

Book.prototype.info = function() {
    return (`${this.title} by ${this.author}, ${this.pages} pages,` + ` ${this.isRead()}`)
}

Book.prototype.numOfKeys = 4;

const hobbit = new Book ('The Hobbit', 'Tolkien', 295, false);

const myLibrary = [];

const libraryDisplay = document.querySelector(".book_container");

function displayBooks () {
    const allBooks = Array.from(document.querySelectorAll('.book_card'));
    for (bookNode of allBooks) {
        bookNode.remove();
    }
    for (currentBook of myLibrary) {
        const bookCard = document.createElement('div')
        bookCard.setAttribute ('class', 'book_card')
        for (let i = 0; i < currentBook.numOfKeys; i++) {
            const bookInfo = document.createElement('p');
            let currentKey = Object.keys(currentBook)[i]
            bookInfo.setAttribute('class', `${currentKey}`)
            bookInfo.textContent = `${currentBook[currentKey]}`;
            bookCard.appendChild(bookInfo);
        }
        libraryDisplay.appendChild(bookCard);
    }

}

myLibrary.push(hobbit);

displayBooks();

const dialogForm = document.querySelector("dialog");
const showDialog = document.querySelector('.add_book');
const submitForm = document.querySelector('form button');
const bookForm = document.querySelector('form');

submitForm.addEventListener('click', () => {
    dialogForm.close();
})


showDialog.addEventListener('click', () => {
    dialogForm.showModal();
});

function processForm () {
    let bookTitle = document.querySelector('#new_title').value;
    let author = document.querySelector('#new_author').value;
    let pages = Number(document.querySelector('#new_pages').value);
    let readStatus = Boolean(document.querySelector('#read_status').value);
    const newBook = new Book (bookTitle, author, pages, readStatus);
    myLibrary.push(newBook);
    displayBooks();
    return false;
}





