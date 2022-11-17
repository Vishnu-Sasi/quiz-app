let form = document.getElementById("quiz-form");
let answers = Array.from(document.querySelectorAll(".answer"));
let questionItems = document.querySelectorAll(".question-item");
let alert = document.getElementById("alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  questionItems.forEach((questionItem) => {
    questionItem.classList.add("incorrect");
    questionItem.classList.remove("correct");
  });

  const checkedAnswers = answers.filter((answer) => answer.checked);

  checkedAnswers.forEach((answer) => {
    let isCorrect = answer.value === "true";

    let questionItem = answer.closest(".question-item");
    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
  });

  let allTrue = checkedAnswers.every((answer) => answer.value === "true");
  let allAnswered = checkedAnswers.length === questionItems.length;

  if (allTrue && allAnswered) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
    }, 1000);
  }
});
