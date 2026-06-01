function addComment() {

    let commentInput = document.getElementById("commentInput");
    let commentList = document.getElementById("commentList");

    if(commentInput.value.trim() !== "") {

        let li = document.createElement("li");
        li.textContent = commentInput.value;

        commentList.appendChild(li);

        commentInput.value = "";
    }
}
