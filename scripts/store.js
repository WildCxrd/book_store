function renderBooks() {
    const bookCardsSection = document.getElementById("bookCardsSection");

    BOOKS.forEach(book =>
        bookCardsSection.innerHTML += getBookCardTemplate()
    );
}

function setLike(bookIndex, event) {
    const book = BOOKS[bookIndex];
    book.liked = !book.liked;

    const buttonImage = event.currentTarget.children[0];

    if (book.liked) {
        buttonImage.src = url("../assets/icons/heart_red.png");
    }
    else {
        buttonImage.src = url("../assets/icons/heart_black_outline.png");
    }
}