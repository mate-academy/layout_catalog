
setTimeout(function(){
  document.getElementById('feedback-block').classList.remove('hide');
 }, 2000);

 let feedbackBlock = document.getElementById("feedback-block");
 let feedbackGrade = document.getElementById("feedback-grade");
 let feedbackThanks = document.getElementById("feedback-thanks");
 let feedbackForm = document.getElementById("feedback-form__container");

function closeBlock() {
  feedbackBlock.className = "hide";
}

function showRating() {
  feedbackGrade.className = "show-grade";
  feedbackBlock.className = "hide";
}

function closeGrade() {
  feedbackGrade.className = "hide-grade";
}

function openThanks() {
  feedbackThanks.className = "show-thanks";

  setTimeout(function(){
      feedbackThanks.style.display = "none";
     }, 2000);

  feedbackGrade.className = "hide-grade";
  feedbackForm.className = "hide-form";
}

function showForm() {
  feedbackForm.className = "show-form";
  feedbackBlock.className = "hide";
}

function closeForm() {
  feedbackForm.className = "hide-form";
}

let header = document.getElementById("feedback-rating__choise");
let btns = header.getElementsByClassName("icon-rating");
for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("isActive");
current[0].className = current[0].className.replace(" isActive", "");
this.className += " isActive";
});
}
