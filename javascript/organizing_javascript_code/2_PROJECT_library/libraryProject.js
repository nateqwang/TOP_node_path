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





