// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    // Creat te element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function (message, className) {

    // Create div
    const div = document.createElement('div');
    // Add class
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parrent
    const container = document.querySelector('.container');
    // Get form
    const form = document.getElementById('book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Clear fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}



// Add to local storage
UI.prototype.addToLocalStarage = function (element) {
    let bookLs;
    if (localStorage.getItem('book') === null) {
        bookLs = []
    } else {
        bookLs = JSON.parse(localStorage.getItem('book'));
    }
    bookLs.push(element);
    localStorage.setItem('book', JSON.stringify(bookLs));
}

// Delete from Local starage
UI.prototype.deleteFromLocalStorage = function (book) {
    book.lastElementChild.remove();
    if (localStorage.getItem('book') != null) {
        let arr = JSON.parse(localStorage.getItem('book'));

        arr.forEach(function (element, index) {
            if (element.isbn === book.lastElementChild.textContent) {
                arr.splice(index, 1);
            }
        });
        localStorage.setItem('book', JSON.stringify(arr));
    }
}

// Get from Local Storage
UI.prototype.getFromLocalStorage = function () {
    if (localStorage.getItem('book') != null) {
        let arr = JSON.parse(localStorage.getItem('book'));
        arr.forEach(function (element) {
            const list = document.getElementById('book-list');
            // Creat te element
            const row = document.createElement('tr');
            // Insert cols
            row.innerHTML = `
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
            `;
            list.appendChild(row);
        });
    }
}

// Event listener from Dom Content Loaded
document.addEventListener('DOMContentLoaded', function(){
    const ui = new UI();
    ui.getFromLocalStorage();
});

// Event listeners for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    // Instantiat book
    const book = new Book(title, author, isbn);

    // Instantiat UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);

        // Clear fields
        ui.clearFields();
        // Show success
        ui.showAlert('Book added!', 'success');

        ui.addToLocalStarage(book);
    }


    e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();

    ui.deleteBook(e.target);

    // Show allert
    ui.showAlert('Book removed!', 'success');

    // Delete from Local storage
    ui.deleteFromLocalStorage(e.target.parentElement.parentElement);

    e.preventDefault();
});