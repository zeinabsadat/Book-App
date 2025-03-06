class BookList {
    constructor(title, author, yearPublication, hasWon, picture, alt) {
        this.title = title;
        this.author = author;
        this.yearPublication = yearPublication;
        this.hasWon = hasWon;
        this.picture = picture;
        this.alt = alt;
    }
}

// Storing all books
const allBooks = [];

// Add a book to the list
function addBook(title, author, yearPublication, hasWon, picture, alt) {
    const newBook = new BookList(title, author, yearPublication, hasWon, picture, alt);
    allBooks.push(newBook);
    displayBooks();
    displayWinningBooks();  // This was missing — make sure winners are shown too.
}

// Display all books in the Trending Books section
function displayBooks() {
    const bookListContainer = document.getElementById('book-list-container');
    const bookContainerTemplate = document.querySelector('.bookContainer');

    // Clear the container (but keep the template itself untouched if needed elsewhere)
    bookListContainer.innerHTML = ''; 

    allBooks.forEach(book => {
        const bookClone = bookContainerTemplate.cloneNode(true);

        const bookImage = bookClone.querySelector("img");
        bookImage.src = book.picture;
        bookImage.alt = book.alt;

        const bookTitle = bookClone.querySelector("#bookTitle");
        bookTitle.textContent = book.title;

        const bookAuthor = bookClone.querySelector("#bookAuthor");
        bookAuthor.textContent = `by ${book.author}`;

        bookListContainer.appendChild(bookClone);
    });
}

// Display only winning books in the Winner Authors section
function displayWinningBooks() {
    const topBookListContainer = document.getElementById('top-book-list-container');
    const bookContainerTemplate = document.querySelector('.bookContainer');

    // Clear the container
    topBookListContainer.innerHTML = '';

    allBooks.filter(book => book.hasWon).forEach(book => {
        const bookClone = bookContainerTemplate.cloneNode(true);

        const bookImage = bookClone.querySelector("img");
        bookImage.src = book.picture;
        bookImage.alt = book.alt;

        const bookTitle = bookClone.querySelector("#bookTitle");
        bookTitle.textContent = book.title;

        const bookAuthor = bookClone.querySelector("#bookAuthor");
        bookAuthor.textContent = `by ${book.author}`;

        topBookListContainer.appendChild(bookClone);
    });
}

// list of books
addBook("A Clash of Kings", "George R.R. Martin", 1998, false, "images/A Clash of Kings.jpg", "the picture of a clash of kings book");
addBook("To Kill a Mockingbird", "Harper Lee", 1960, true, "images/To Kill a Mockingbird.jpg", "the picture of To Kill a Mockingbird book");
addBook("1984", "George Orwell", 1949, false, "images/1984.jpg", "the picture of 1984 book");
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, false, "images/The Great Gatsby.jpg", "the picture of The Great Gatsby book");
addBook("Pride and Prejudice", "Jane Austen", 1813, false, "images/Pride and Prejudice.jpg", "the picture of Pride and Prejudice book");
addBook("The Hobbit", "J.R.R. Tolkien", 1937, false, "images/The Hobbit.jpg", "the picture of The Hobbit book");
addBook("The Catcher in the Rye", "J.D. Salinger", 1951, false, "images/The Catcher in the Rye.jpg", "the picture of The Catcher in the Rye book");
addBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, true, "images/The Lord of the Rings.jpg", "the picture of The Lord of the Rings book");
addBook("Brave New World", "Aldous Huxley", 1932, false, "images/Brave New World.jpg", "the picture of Brave New World book");
addBook("The Odyssey", "Homer", -800, false, "images/The Odyssey.jpg", "the picture of The Odyssey book");
addBook("The Shining", "Stephen King", 1977, false, "images/The Shining.jpg", "the picture of The Shining book");
addBook("Moby-Dick", "Herman Melville", 1851, false, "images/Moby-Dick.jpg", "the picture of Moby-Dick book");
addBook("War and Peace", "Leo Tolstoy", 1869, false, "images/War and Peace.jpg", "the picture of War and Peace book");
addBook("The Picture of Dorian Gray", "Oscar Wilde", 1890, false, "images/The Picture of Dorian Gray.jpg", "the picture of The Picture of Dorian Gray book");
addBook("The Handmaid's Tale", "Margaret Atwood", 1985, true, "images/The Handmaid's Tale.jpg", "the picture of The Handmaid's Tale book");
addBook("Crime and Punishment", "Fyodor Dostoevsky", 1866, false, "images/Crime and Punishment.jpg", "the picture of Crime and Punishment book");
addBook("Frankenstein", "Mary Shelley", 1818, false, "images/Frankenstein.jpg", "the picture of Frankenstein book");
addBook("The Brothers Karamazov", "Fyodor Dostoevsky", 1880, false, "images/The Brothers Karamazov.jpg", "the picture of The Brothers Karamazov book");
addBook("The Chronicles of Narnia", "C.S. Lewis", 1950, true, "images/The Chronicles of Narnia.jpg", "the picture of The Chronicles of Narnia book");
addBook("Fahrenheit 451", "Ray Bradbury", 1953, false, "images/Fahrenheit 451.jpg", "the picture of Fahrenheit 451 book");
addBook("The Alchemist", "Paulo Coelho", 1988, false, "images/The Alchemist.jpg", "the picture of The Alchemist book");