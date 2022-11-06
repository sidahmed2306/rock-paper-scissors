"use stric";

const redio5 = document.querySelector("#fünf");
const redio10 = document.querySelector("#zehn");
const redio15 = document.querySelector("#fünfzehn");
const redio20 = document.querySelector("#zwanzig");
const radios = document.querySelectorAll(".radios");
const count = document.querySelector(".rounds");
const btn = document.querySelectorAll(".choiceBttn");
const userOutput = document.querySelector("#user-output");
const compOutput = document.querySelector("#copm-output");
const rockPaperScissor = document.querySelector("#lets-play");
const gamOver = document.querySelector(".i-tags");
const rock = document.querySelector("#fist");
const hand = document.querySelector("#hand");
const scissor = document.querySelector("#scissor");
const restart = document.querySelector("#restart");
const mak = document.querySelector(".make");
let howManyRounds = document.querySelector("#how-many-rounds");
let roundCount = 0;
let computer;
let player;
let punktStandComputer = 0;
let punktStandUser = 0;
let radioss;

// ===================================================================
// --------------------------the play Function------------------------
// ===================================================================

btn.forEach((el) => {
  el.addEventListener("click", () => {
    mak.style.display = "none";

    if (redio5.checked && roundCount < redio5.value) {
      roundCount++;
      count.innerHTML = `<h2>how many rounds?</h2> <h2> ${roundCount}/5</h2> `;
      clikRock;
      clikPaper;
      clikScissor;
    } else if (redio10.checked && roundCount < redio10.value) {
      roundCount++;
      count.innerHTML = `<h2>how many rounds?</h2> <h2> ${roundCount}/10</h2> `;
      clikRock;
      clikPaper;
      clikScissor;
    } else if (redio15.checked && roundCount < redio15.value) {
      roundCount++;
      count.innerHTML = `<h2>how many rounds?</h2> <h2> ${roundCount}/15</h2> `;
      clikRock;
      clikPaper;
      clikScissor;
    } else if (redio20.checked && roundCount < redio20.value) {
      roundCount++;
      count.innerHTML = `<h2>how many rounds?</h2> <h2> ${roundCount}/20</h2> `;
      clikRock;
      clikPaper;
      clikScissor;
    }
    // check the winner
    else {
      if (punktStandUser == punktStandComputer && roundCount) {
        rockPaperScissor.innerHTML = "draw";
        gamOver.innerHTML = `Game Over`;
      } else if (punktStandUser > punktStandComputer) {
        rockPaperScissor.innerHTML = "you are the winner";
        gamOver.innerHTML = `Game Over`;
      } else if (punktStandUser < punktStandComputer) {
        rockPaperScissor.innerHTML = "you need to train hard";
        gamOver.innerHTML = `Game Over`;
      }
    }
  });
});
// ===================================================================
// --------------------------the computerTurn Function----------------
// ===================================================================
function computerTurn() {
  const compChoice = Math.floor(Math.random() * 3) + 1;
  switch (compChoice) {
    case 1:
      computer = 1;
      break;
    case 2:
      computer = 2;
      break;
    case 3:
      computer = 3;
      break;
  }
}

// ================================================================
// -------------------------- ClickRock Function-------------------
// ================================================================
function clikRock(event) {
  event.preventDefault;
  computerTurn();
  player = 1;
  if (computer == 1) {
    rockPaperScissor.innerHTML = `<h2> player : 👊  Computer :  👊 </h2>`;
  } else if (computer == 2) {
    rockPaperScissor.innerHTML = `<h2> player : 👊  Computer :  🖐 </h2>`;
    punktStandComputer++;
    rock.style.animation = "highlightRed 1s";
    compOutput.innerHTML = punktStandComputer;
  } else if (computer == 3) {
    rockPaperScissor.innerHTML = `<h2> player : 👊  Computer :  ✌️  </h2>`;
    punktStandUser++;
    userOutput.innerHTML = punktStandUser;
    rock.style.animation = "highlightGreen 1s";
  }
}
// ===================================================================
// --------------------------the clikPaper Function-------------------
// ===================================================================
function clikPaper(event) {
  event.preventDefault;
  computerTurn();
  player = 2;
  if (computer == 1) {
    rockPaperScissor.innerHTML = `<h2>player : 🖐  Computer : 👊 </h2>`;
    punktStandUser++;
    userOutput.innerHTML = punktStandUser;
    hand.style.animation = "highlightGreen 1s";
  } else if (computer == 2) {
    rockPaperScissor.innerHTML = `<h2>player : 🖐  Computer : 🖐 </h2>`;
  } else if (computer == 3) {
    rockPaperScissor.innerHTML = `<h2>player : 🖐  Computer : ✌️ </h2>`;
    punktStandComputer++;
    compOutput.innerHTML = punktStandComputer;
    hand.style.animation = "highlightRed 1s";
  }
}
// ===================================================================
// --------------------------the clikScissor Function-----------------
// ===================================================================
function clikScissor(event) {
  event.preventDefault;
  computerTurn();
  player = 3;
  if (computer == 1) {
    rockPaperScissor.innerHTML = `<h2>player : ✌️ Computer : 👊 </h2>`;
    punktStandComputer++;
    compOutput.innerHTML = punktStandComputer;
    scissor.style.animation = "highlightRed 1s";
  } else if (computer == 2) {
    rockPaperScissor.innerHTML = `<h2>player : ✌️  Computer : 🖐 </h2>`;
    punktStandUser++;
    userOutput.innerHTML = punktStandUser;
    scissor.style.animation = "highlightGreen 1s";
  } else if (computer == 3) {
    rockPaperScissor.innerHTML = `<h2>player : ✌️  Computer : ✌️ </h2>`;
  }
}
