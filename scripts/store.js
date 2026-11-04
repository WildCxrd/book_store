let onlyShowLikedBooks = false;

function initialize() {
    renderBooks();
    setFilterButtonLabelText();
}

function renderBooks() {
    const bookCardsSection = document.getElementById("bookCardsSection");
    bookCardsSection.innerHTML = "";

    for (let bookIndex = 0; bookIndex < BOOKS.length; bookIndex++) {
        const book = BOOKS[bookIndex];

        if (onlyShowLikedBooks && book.liked || !onlyShowLikedBooks) {
            bookCardsSection.innerHTML += getBookCardTemplate(book, bookIndex)
        }
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

    book.comments.push({ name: "WildCard", comment: trimmedComment });

    renderBooks();

    const commentsTableWrapper = document.getElementById(`commentsTableWrapper_${bookIndex}`);
    commentsTableWrapper.scrollTop = commentsTableWrapper.scrollHeight;
}

function toggleLikedFilter() {
    const filterButton = document.getElementById("filterButton");


    onlyShowLikedBooks = !onlyShowLikedBooks;
    renderBooks();

    const filterButtonImage = filterButton.children[0];
    const imgSrcAndAlt = getLikeButtonImgSrcAndAlt(onlyShowLikedBooks);
    filterButtonImage.src = imgSrcAndAlt[0];
    filterButtonImage.alt = imgSrcAndAlt[1];

    setFilterButtonLabelText();
}

function getLikeButtonImgSrcAndAlt(liked) {
    if (liked) {
        return ["./assets/icons/heart_red.png", "Ein rotes Herz."];
    }
    else {
        return ["./assets/icons/heart_black_outline.png", "Ein transparentes Herz mit schwarzer Außenlinie."];
    }
}

function setFilterButtonLabelText() {
    const filterButtonLabel = document.getElementById("filterButtonLabel");

    if (onlyShowLikedBooks) {
        filterButtonLabel.innerHTML = "Es werden nur Favoriten angezeigt";
    }
    else {
        filterButtonLabel.innerHTML = "Es werden alle Bücher angezeigt";
    }
}