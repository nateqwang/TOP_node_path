function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.isRead = function () {
        if (this.read === true) {
            return ('already read');
        } else {
            return ('not read yet')
        }
    }
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages,` + `${this.isRead()}`)
    }
}

const hobbit = new Book ('The Hobbit', 'Tolkien', 295, false);