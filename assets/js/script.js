document.addEventListener("DOMContentLoaded", function() {
  let buttons = this.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked $(gameType)`);
      }
    })
  }
})

function runGame() {
  let num1 = math.floor(math.random() * 25) + 1;
  let num2 = math.floor(math.random() * 25) + 1;
}

function getAnswer() {

}

function calculateAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionalQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultipleQuestion() {

}