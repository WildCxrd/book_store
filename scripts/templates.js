function getBookCardTemplate(book, bookIndex, price, likeImgSrcAndAltArray, commentsTableContent) {
    return `
        <article class="book-card">
            <header>
                <h2 class="book-title-heading book-card-section">${book.name}</h2>
            </header>

            <img src="./assets/img/${book.img}" alt="${book.imgAlt}"
                class="book-card-section turqoise-top-border turqoise-bottom-border">

            <div class="book-card-meta-info book-card-section turqoise-bottom-border">
                <div class="price-fav-row">
                    <div class="price">
                        <p id="price-tag">${price}</p>
                        <p>€</p>
                    </div>
                    <div class="fav">
                        <p id="likesCounter_${bookIndex}">${book.likes}</p>
                        <button class="heart-button" onclick="setLike(${bookIndex})">
                            <img id="heartButtonImage_${bookIndex}" src="${likeImgSrcAndAltArray[0]}" class="heart-button-img" alt="${likeImgSrcAndAltArray[1]}">
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

                <div id="commentsTableWrapper_${bookIndex}" class="comments-table-wrapper">
                    <table id="commentsTable">
                    ${commentsTableContent}
                    </table>
                </div>

                <div class="comment-input-wrapper">
                    <input type="text" id="commentInput_${bookIndex}" placeholder="Schreibe deinen Kommentar..." class="comment-input">
                    <button id="sendCommentButton" onclick="sendComment(${bookIndex})">
                        <img src="./assets/icons/paper_plane.png" alt="Ein Papierflugzeug.">
                    </button>
                </div>
            </div>
        </article>
        `;
}

function getCommentTemplate(comment) {
    return `
        <tr>
            <th>[${comment.name}]</th>
            <td>${comment.comment}</td>
        </tr>
        `;
}