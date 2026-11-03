function renderBooks() {
    const bookCardsSection = document.getElementById("bookCardsSection");
    bookCardsSection.innerHTML = "";

    for (let bookIndex = 0; bookIndex < BOOKS.length; bookIndex++) {
        const book = BOOKS[bookIndex];
        bookCardsSection.innerHTML += getBookCardTemplate(book, bookIndex)
    }
}

function setLike(bookIndex, event) {
    const book = BOOKS[bookIndex];
    const bookFavCounter = document.getElementById(`favCounter_${bookIndex}`);

    book.liked = !book.liked;

    if (book.liked) {
        book.likes++;
    }
    else {
        book.likes--;
    }

    bookFavCounter.innerHTML = book.likes;

    const buttonImage = event.currentTarget.children[0];
    buttonImage.src = getLikeButtonImgSrc(book.liked);

    renderBooks();
}

function getLikeButtonImgSrc(liked) {
    if (liked) {
        return "./assets/icons/heart_red.png";
    }
    else {
        return "./assets/icons/heart_black_outline.png";
    }
}