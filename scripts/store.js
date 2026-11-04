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
            const price = book.price.toFixed(2).replace(".", ",");
            const likeImgSrcAndAlt = getLikeButtonImgSrcAndAlt(book.liked);
            const commentsTableContent = getCommentsTableContent(book.comments);

            bookCardsSection.innerHTML += getBookCardTemplate(book, bookIndex, price, likeImgSrcAndAlt, commentsTableContent)
        }
    }
}

function sendComment(bookIndex) {
    const commentInput = document.getElementById(`commentInput_${bookIndex}`);
    const trimmedComment = commentInput.value.trim();

    if (trimmedComment != "") {
        const book = BOOKS[bookIndex];
        book.comments.push({ name: "WildCard", comment: trimmedComment });

        renderBooks();

        const commentsTableWrapper = document.getElementById(`commentsTableWrapper_${bookIndex}`);
        commentsTableWrapper.scrollTop = commentsTableWrapper.scrollHeight;
    }
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

function getCommentsTableContent(comments) {
    let commentsTableContent = "";

    comments.forEach(comment => {
        commentsTableContent += getCommentTemplate(comment);
    });

    return commentsTableContent;
}

function setLike(bookIndex) {
    const book = BOOKS[bookIndex];

    book.liked = !book.liked;
    if (book.liked) {
        book.likes++;
    }
    else {
        book.likes--;
    }

    setBookLikesCounter(bookIndex);
    setBookButtonImage(bookIndex);

    renderBooks();
}

function setBookLikesCounter(bookIndex) {
    const book = BOOKS[bookIndex];
    const bookLikesCounter = document.getElementById(`likesCounter_${bookIndex}`);

    bookLikesCounter.innerHTML = book.likes;
}

function setBookButtonImage(bookIndex) {
    const book = BOOKS[bookIndex];
    const buttonImage = document.getElementById(`heartButtonImage_${bookIndex}`);

    const imgSrcAndAlt = getLikeButtonImgSrcAndAlt(book.liked);
    buttonImage.src = imgSrcAndAlt[0];
    buttonImage.alt = imgSrcAndAlt[1];
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