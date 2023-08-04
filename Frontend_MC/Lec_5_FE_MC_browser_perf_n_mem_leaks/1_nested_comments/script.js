const container = document.querySelector(".container");

// bubbling 
container.addEventListener("click", function (e) {
    const targetElem = e.target;
    const isreply = targetElem.classList.contains("reply");
    // -> create a input and a button
    if (isreply) {
        //  < !-- < div class="comment-reply-container" >
        //     <input type="text" placeholder="write your comment">
        //         <button class="btn-submit">submit</button>
        //     </> 
        // -->

        createReplyInput(e)
    } else {
        const isSubmit = targetElem.classList.contains("btn-submit");
        // create the reply 
        if (isSubmit == false)
            return;
        createComment(e);
    }
})


function createComment(e) {
    // 
    console.log(e.target);
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container")
    const input = e.target.parentNode.children[0];
    // console.log(input.value)
    commentContainer.innerHTML = ` <div class="comment-card">
            <h3 class="comment_text">${input.value} ? </h3><div class="reply">Reply</div>
        </div>`;
    const commentReplyBox = e.target.parentNode;
    const commentCard =commentReplyBox.parentNode;
    commentCard.replaceChild(commentContainer, commentReplyBox);
}







function createReplyInput(e) {
    const fragment = document.createDocumentFragment();
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    replyContainer.setAttribute("class", "comment-reply-container");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "write your comment");
    button.setAttribute("class", "btn-submit");
    button.textContent = "submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);
    console.log(e.target.parentNode)

    e.target.parentNode.appendChild(fragment);

}