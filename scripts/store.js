let onlyShowLikedBooks = false;

function initialize() {
    moveBooksFromScriptToLocalStorage();
    renderBooks();
    setFilterButtonLabelText();
}

function moveBooksFromScriptToLocalStorage() {
    BOOKS.forEach(bookInScript => {
        const bookInLocalStorage = getBookFromLocalStorage(bookInScript.id);

        if (bookInLocalStorage == null) {
            saveBookInLocalStorage(bookInScript);
        }
    });
}

function renderBooks() {
    const bookCardsSection = document.getElementById("bookCardsSection");
    bookCardsSection.innerHTML = "";

    const books = getAllBooksFromLocalStorage();

    books.forEach(book => {
        if (onlyShowLikedBooks && book.liked || !onlyShowLikedBooks) {
            const price = book.price.toFixed(2).replace(".", ",");
            const likeImgSrcAndAlt = getLikeButtonImgSrcAndAlt(book.liked);
            const commentsTableContent = getCommentsTableContent(book.comments);

            bookCardsSection.innerHTML += getBookCardTemplate(book, price, likeImgSrcAndAlt, commentsTableContent)
        }
    });
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

function sendComment(bookId) {
    const commentInput = document.getElementById(`commentInput_${bookId}`);
    const trimmedComment = commentInput.value.trim();

    if (trimmedComment != "") {
        const book = getBookFromLocalStorage(bookId);
        const newComment = { name: "WildCard", comment: trimmedComment };
        book.comments.push(newComment);
        saveBookInLocalStorage(book);

        renderBooks();

        const commentsTableWrapper = document.getElementById(`commentsTableWrapper_${bookId}`);
        commentsTableWrapper.scrollTop = commentsTableWrapper.scrollHeight;
    }
}

function getAllBooksFromLocalStorage() {
    const allBooks = [];
    const keysInLocalStorage = Object.keys(localStorage);

    keysInLocalStorage.forEach(element => {
        if (element.startsWith("book_")) {
            const book = JSON.parse(localStorage.getItem(element));
            allBooks.push(book);
        }
    });

    return allBooks.toSorted((bookOne, bookTwo) => bookOne.publishedYear - bookTwo.publishedYear);
}

function getBookFromLocalStorage(bookId) {
    const bookKey = getBookKey(bookId);
    return JSON.parse(localStorage.getItem(bookKey));
}

function getBookKey(bookId) {
    return `book_${bookId}`;
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

function setLike(bookId) {
    const book = getBookFromLocalStorage(bookId);

    book.liked = !book.liked;
    if (book.liked) {
        book.likes++;
    }
    else {
        book.likes--;
    }

    saveBookInLocalStorage(book);

    renderBooks();
}

function setBookLikesCounter(bookId) {
    const book = getBookFromLocalStorage(bookId);
    const bookLikesCounter = document.getElementById(`likesCounter_${bookId}`);

    bookLikesCounter.innerHTML = book.likes;
}

function setBookHeartButtonImage(bookId) {
    const book = getBookFromLocalStorage(bookId);
    const buttonImage = document.getElementById(`heartButtonImage_${bookId}`);
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

function saveBookInLocalStorage(book) {
    const bookKey = getBookKey(book.id);
    localStorage.setItem(bookKey, JSON.stringify(book));
}