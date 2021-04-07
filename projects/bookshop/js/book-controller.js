'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {
    var strHtmls = gBooks.map(function (book) {
        return `
        <tr>
            <td class="cover"><img class="cover-thumb" src="imgs/${book.name}.jpg"></td>
            <td class="id-col">${book.id}</td>
            <td class="name-col">${book.name}</td>
            <td class="price-col">${book.price} NIS</td>
            <td>
            <button class="read" onclick="renderBookDetails('${book.name}')">Read</button>
            <button class="update" onclick="onUpdateBook('${book.id}')">Update</button>
            <button class="delete" onclick="onRemoveBook('${book.id}')">Delete</button>
            </td>
        </tr>
        `
    })
    document.querySelector('.table-body').innerHTML = strHtmls.join('')
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}

function onAddBook(){
    var name = prompt('What\'s the book\'s name?')
    var price = prompt('What\'s the book\'s price?')
    addBook(name, price)
    renderBooks()
}

function onUpdateBook(bookId){
    var price = prompt('What\'s the book\'s price?')
    updateBook(bookId, price);
    renderBooks()
}

function renderBookDetails(bookName){
    var popup = document.querySelector('.popup')
    var strHtml =`
    <div class="popup-title">${bookName}</div>
    <img class="cover-img" src="imgs/${bookName}.jpg">
    <p class="syn">${makeLorem()}</p>
    <button class="close-popup" onclick="hidePopup()">X</button>
    `
    popup.innerHTML = strHtml
    popup.style.display = 'block'

}

function hidePopup() {
    var popup = document.querySelector('.popup')
    popup.style.display = 'none'
}