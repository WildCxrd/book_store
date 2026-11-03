function getBookCardTemplate(book, bookIndex) {
    const price = book.price.toFixed(2).replace(".", ",");
    const likeImgSrc = getLikeButtonImgSrc(book.liked);
    const commentTemplate = getCommentsTableContentTemplate(book.comments);

    return `
    <article class="book-card">
                <header>
                    <h2 class="book-title-heading book-card-section">${book.name}</h2>
                </header>

                <img src="./assets/icons/book_store_logo.svg" alt=""
                    class="book-card-section turqoise-top-border turqoise-bottom-border">

                <div class="book-card-meta-info book-card-section turqoise-bottom-border">
                    <div class="price-fav-row">
                        <div class="price">
                            <p id="price-tag">${price}</p>
                            <p>€</p>
                        </div>
                        <div class="fav">
                            <p id="favCounter_${bookIndex}">${book.likes}</p>
                            <button class="heart-button" onclick="setLike(${bookIndex}, event)">
                                <img id="heartButtonImage" src="${likeImgSrc}" class="heart-button-img">
                            </button>
                        </div>
                    </div>
                    <table class="book-meta-infos-table">
                        <tr>
                            <th>Autor</th>
                            <td>${book.author}</td>
                        </tr>
                        <tr>
                            <th>Erscheinungsjahr</th>
                            <td>${book.publishedYear}</td>
                        </tr>
                        <tr>
                            <th>Genre</th>
                            <td>${book.genre}</td>
                        </tr>
                    </table>
                </div>

                <div class="book-card-comments book-card-section">
                    <h3>Kommentare</h3>

                    <div class="comments-table-wrapper">
                        <table id="commentsTable">
                        ${commentTemplate}
                        </table>
                    </div>

                    <div class="comment-input-wrapper">
                        <input type="text" id="commentInput_${bookIndex}" placeholder="Schreibe deinen Kommentar..." class="comment-input">
                        <button id="sendCommentButton" onclick="sendComment(${bookIndex})">
                            <img src="./assets/icons/paper_plane.png" alt="">
                        </button>
                    </div>
                </div>
            </article>
    `;
}

function getCommentsTableContentTemplate(comments) {
    let commentsTableContent = "";

    comments.forEach(comment => {
        commentsTableContent += `
        <tr>
            <th>[${comment.name}]</th>
            <td>${comment.comment}</td>
        </tr>
        `
    });

    return commentsTableContent;
}