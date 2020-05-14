import axios from "axios";

const deleteBtns = document.querySelectorAll(".delete__comment");
const commentNumber = document.getElementById("jsCommentNumber");


const sendComment = async commentId => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/deleteComment`,
    method: "POST",
    data: {
      commentId
    }
  });
  
  if(response.status === 200) {
    console.log(response);
  }
};

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
}

const deleteComment = event => {
  event.stopPropagation();
  event.target.parentElement.parentElement.remove();
  const deleteCommentId = event.target.parentElement.nextSibling.value;
  decreaseNumber();
  sendComment(deleteCommentId);

};

function init() {
  deleteBtns.forEach(function(deleteBtn) {
    deleteBtn.children[0].addEventListener("click", deleteComment);
  });
}

if(deleteBtns) {
  init();
}