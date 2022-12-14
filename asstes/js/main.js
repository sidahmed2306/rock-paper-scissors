"use stric";

const redio5 = document.querySelector("#fünf");
const redio10 = document.querySelector("#zehn");
const redio15 = document.querySelector("#fünfzehn");
const redio20 = document.querySelector("#zwanzig");
const radios = document.querySelectorAll(".radios");
const count = document.querySelector(".rounds");
const btn = document.querySelectorAll(".choiceBttn");
const userOutput = document.querySelector("#user-output");
const compOutput = document.querySelector("#comp-output");
const rockPaperScissor = document.querySelector("#lets-play");
const userImgOutput = document.querySelector(".user-choice-img");
const compImgOutput = document.querySelector(".comp-choice-img");
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
    if (
      redio5.checked ||
      redio10.checked ||
      redio15.checked ||
      redio20.checked
    ) {
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
          gamOver.innerHTML = `<iframe src="https://giphy.com/embed/VL48WGMDjD64umCEkv" width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="#"></a></p>`;
        } else if (punktStandUser > punktStandComputer) {
          rockPaperScissor.innerHTML = ` 
        <div style="width:180"><iframe allow="fullscreen" frameBorder="0" height="180" src="https://giphy.com/embed/ymU3y5iWBjwpUDNXyz/video" width="180"></iframe></div>`;
          gamOver.innerHTML = `Game Over`;
        } else if (punktStandUser < punktStandComputer) {
          rockPaperScissor.innerHTML = `<div style="width:180"><iframe allow="fullscreen" frameBorder="0" height="180" src="https://giphy.com/embed/7f4BbDPxyU4XwBKNnb/video" width="180"></iframe></div>`;
          gamOver.innerHTML = `Game Over`;
        }
      }
    } else {
      count.style.outline = `2px solid red`;
      howManyRounds.innerHTML = `Please choose how many rounds`;
      howManyRounds.style.color = `red`;
    }
  });
});
// ===================================================================
// --------------------------the computerTurn Function----------------
// ===================================================================
function computerTurn() {
  computer = Math.floor(Math.random() * 3) + 1;
}
// ================================================================
// -------------------------- ClickRock Function-------------------
// ================================================================
function removRed() {
  rock.classList.remove("btnred");
  hand.classList.remove("btnred");
  scissor.classList.remove("btnred");
}
function removGreen() {
  rock.classList.remove("btngreen");
  hand.classList.remove("btngreen");
  scissor.classList.remove("btngreen");
}
function clikRock(event) {
  event.preventDefault;
  if (redio5.checked || redio10.checked || redio15.checked || redio20.checked) {
    computerTurn();
    player = 1;
    userImgOutput.innerHTML = `<i class="fas fa-hand-rock"></i>`;
    if (computer == 1) {
      compImgOutput.innerHTML = `<i class="fas fa-hand-rock"></i>`;
    } else if (computer == 2) {
      // rock.style.animation = "highlightRed 1s";
      rock.classList.add("btnred");
      setTimeout(removRed, 1000);
      compImgOutput.innerHTML = `<i class="fas fa-hand-paper"></i>`;
      punktStandComputer++;
      compOutput.innerHTML = punktStandComputer;
    } else if (computer == 3) {
      rock.classList.add("btngreen");
      setTimeout(removGreen, 1000);
      // rock.style.animation = "highlightGreen 1s";
      punktStandUser++;
      userOutput.innerHTML = punktStandUser;
      compImgOutput.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
    }
  }
}
// ===================================================================
// --------------------------the clikPaper Function-------------------
// ===================================================================
function clikPaper(event) {
  event.preventDefault;
  if (redio5.checked || redio10.checked || redio15.checked || redio20.checked) {
    computerTurn();
    player = 2;
    userImgOutput.innerHTML = `<i class="fas fa-hand-paper"></i>`;
    if (computer == 1) {
      // hand.style.animation = "highlightGreen 1s";
      setTimeout(removGreen, 1000);
      hand.classList.add("btngreen");

      compImgOutput.innerHTML = `<i class="fas fa-hand-rock"></i>`;
      punktStandUser++;
      userOutput.innerHTML = punktStandUser;
    } else if (computer == 2) {
      compImgOutput.innerHTML = `<i class="fas fa-hand-paper"></i>`;
    } else if (computer == 3) {
      // hand.style.animation = "highlightRed 1s";
      setTimeout(removRed, 1000);
      hand.classList.add("btnred");
      compImgOutput.innerHTML = `<i class="fas fa-hand-scissors"></i>`;

      punktStandComputer++;
      compOutput.innerHTML = punktStandComputer;
    }
  }
}
// ===================================================================
// --------------------------the clikScissor Function-----------------
// ===================================================================
function clikScissor(event) {
  event.preventDefault;
  if (redio5.checked || redio10.checked || redio15.checked || redio20.checked) {
    computerTurn();
    player = 3;
    userImgOutput.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
    if (computer == 1) {
      // scissor.style.animation = "highlightRed 1s";
      setTimeout(removRed, 1000);
      scissor.classList.add("btnred");
      compImgOutput.innerHTML = `<i class="fas fa-hand-rock"></i>`;
      punktStandComputer++;
      compOutput.innerHTML = punktStandComputer;
    } else if (computer == 2) {
      // scissor.style.animation = "highlightGreen 1s";
      scissor.classList.add("btngreen");
      setTimeout(removGreen, 1000);
      compImgOutput.innerHTML = `<i class="fas fa-hand-paper"></i>`;
      punktStandUser++;
      userOutput.innerHTML = punktStandUser;
    } else if (computer == 3) {
      compImgOutput.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
    }
  }
}
