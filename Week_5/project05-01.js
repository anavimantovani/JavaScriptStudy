"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Ana Victoria Gomes Mantovani
      Date:   03/03/2023  

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// Declare the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// Function to check the student answers
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }
  return correctCount;
}

// Add an onclick event handler to the startQuiz object
startQuiz.onclick = function () {
  // Display the quiz and start the countdown
  overlay.className = "showquiz";
  timeID = setInterval(countdown, 1000);
};

// Create the countdown function
function countdown() {
  // Decrement the time left
  timeLeft--;

  // Update the quiz clock
  quizClock.value = timeLeft;

  // Check if the time is up
  if (timeLeft === 0) {
    // Stop the countdown
    clearInterval(timeID);

    // Check the student's answers and display results
    let totalCorrect = checkAnswers();
    if (totalCorrect === correctAnswers.length) {
      // All answers correct
      alert("Congratulations! You got 100%!");
    } else {
      // Some answers incorrect
      let incorrectCount = correctAnswers.length - totalCorrect;
      alert(
        "You got " +
          incorrectCount +
          " incorrect answer(s) out of " +
          correctAnswers.length +
          " questions."
      );

      // Reset the quiz
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
    }
  }
}