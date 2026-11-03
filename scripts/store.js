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
    const imgSrcAndAlt = getLikeButtonImgSrcAndAlt(book.liked);
    buttonImage.src = imgSrcAndAlt[0];
    buttonImage.alt = imgSrcAndAlt[1];

    renderBooks();
}

function sendComment(bookIndex) {
    const book = BOOKS[bookIndex];
    const commentInput = document.getElementById(`commentInput_${bookIndex}`);
    const trimmedComment = commentInput.value.trim();

    book.comments.push({name: "WildCard", comment: trimmedComment});

    renderBooks();
}

function getLikeButtonImgSrcAndAlt(liked) {
    if (liked) {
        return ["./assets/icons/heart_red.png", "Ein rotes Herz."];
    }
    else {
        return ["./assets/icons/heart_black_outline.png", "Ein transparentes Herz mit schwarzer Außenlinie."];
    }
}