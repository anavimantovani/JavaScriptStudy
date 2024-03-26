"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Ana Victoria Gomes Mantovani
      Date:   03/09/2023

      Filename: project06-01.js
*/

const submitButton = document.querySelector("#submitButton");
const pwd = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd2");

submitButton.addEventListener("click", function() {
  if (!pwd.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    alert("Your password must be at least 8 characters with at least one letter and one number");
  } else if (pwd.value !== pwd2.value) {
    alert("Your passwords must match");
  } else {
    alert();
  }
});
