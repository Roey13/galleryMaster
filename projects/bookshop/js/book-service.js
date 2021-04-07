'use strict'

const KEY = 'books';
var gPrice = 80;
var gBooks;
var gTitles = ['Harry Potter and the Sorcerer’s Stone',
    'Harry Potter and the Chamber of Secrets',
    'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Order of the Phoenix',
    'Harry Potter and the Half-Blood Prince',
    'Harry Potter and the Deathly Hallows',
]

_createBooks()

function _createBook(title, price) {
    if (!price) price = gPrice;
    return {
        id: makeId(),
        name: title,
        price: price,
    }
}

function addBook(title, price) {
    var book = _createBook(title, price)
    gBooks.unshift(book)
    _saveBookToStorage();
}

function _createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = []
        for (var i = 0; i < gTitles.length; i++) {
            var title = gTitles[i]
            books.push(_createBook(title))
        }
    }
    gBooks = books;
    _saveBookToStorage();
}

function _saveBookToStorage() {
    saveToStorage(KEY, gBooks)
}

function removeBook(bookId) {
    var conf = confirm('Are you sure you want to delete this book?')
    if (conf){
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBookToStorage();
    }
}

function updateBook(bookId, bookPrice){
    var bookObj = gBooks.find(function(book) {
        return book.id === bookId
    })
    bookObj.price = bookPrice
    _saveBookToStorage();
}

