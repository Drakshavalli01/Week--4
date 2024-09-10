const books = [];

// Add Book Functionality
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const genre = document.getElementById('genre').value.trim();

    if (title && author && pages && genre) {
        books.push({ title, author, pages: parseInt(pages), genre });
        displayBooks();
        this.reset();
        document.getElementById('message').classList.add('hidden');
    } else {
        document.getElementById('message').textContent = 'Please fill in all fields.';
        document.getElementById('message').classList.remove('hidden');
    }
});

// Search Books Functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('search').value.trim().toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
});

// Display Books Functionality
function displayBooks(bookList = books) {
    const bookDisplay = document.getElementById('bookList');
    if (bookList.length === 0) {
        bookDisplay.innerHTML = '<p>No books found.</p>';
    } else {
        bookDisplay.innerHTML = bookList.map(book => `
            <div>
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Genre: ${book.genre}</p>
            </div>
        `).join('');
    }
}
